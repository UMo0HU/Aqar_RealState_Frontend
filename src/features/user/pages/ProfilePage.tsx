import { useEffect, useState }  from "react";
import { useNavigate, Link }    from "react-router-dom";
import axios                    from "axios";

import NavBar            from "@/features/properties/components/NavBar";
import { getProfile, updateProfile } from "@/services/authService";
import { useAuth }       from "@/context/AuthContext";
import { useToast }      from "@/context/ToastContext";
import type { UserProfile } from "@/types";

export default function ProfilePage() {
  const { userInfo, login, token } = useAuth();
  const navigate = useNavigate();
  const toast    = useToast();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);

  const [form, setForm] = useState({
    firstName: "", secondName: "", email: "",
    password: "", confirmPassword: "",
  });

  useEffect(() => {
    getProfile()
      .then((res) => {
        const u = res.data.user as UserProfile;
        setProfile(u);
        setForm((f) => ({ ...f, firstName: u.first_name, secondName: u.second_name, email: u.email }));
      })
      .catch(() => toast.error("Failed to load profile."))
      .finally(() => setLoading(false));
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password && form.password !== form.confirmPassword) {
      toast.error("Passwords do not match."); return;
    }
    if (form.password && form.password.length < 8) {
      toast.error("Password must be at least 8 characters."); return;
    }

    const payload: Record<string, string> = {};
    if (form.firstName  !== profile?.first_name)  payload.firstName  = form.firstName;
    if (form.secondName !== profile?.second_name) payload.secondName = form.secondName;
    if (form.email      !== profile?.email)       payload.email      = form.email;
    if (form.password)                            payload.password   = form.password;

    if (!Object.keys(payload).length) { toast.info("No changes to save."); return; }

    try {
      setSaving(true);
      await updateProfile(payload);
      toast.success("Profile updated successfully!");
      setForm((f) => ({ ...f, password: "", confirmPassword: "" }));

      // Sync AuthContext so NavBar shows updated name instantly
      if (token && userInfo) {
        login({
          ...userInfo,
          firstName:  payload.firstName  ?? userInfo.firstName,
          secondName: payload.secondName ?? userInfo.secondName,
          email:      payload.email      ?? userInfo.email,
        }, token);
      }
    } catch (err) {
      toast.error(axios.isAxiosError(err) ? (err.response?.data?.msg ?? "Update failed.") : "Unexpected error.");
    } finally {
      setSaving(false);
    }
  };

  const initials = userInfo
    ? `${userInfo.firstName[0]}${userInfo.secondName[0]}`.toUpperCase()
    : "?";

  const quickLinks = [
    { label: "My Properties", path: "/my-properties", emoji: "🏠" },
    { label: "Rent Requests", path: "/rent-requests",  emoji: "📨" },
    { label: "My Leases",     path: "/leases",          emoji: "📋" },
    { label: "Saved",         path: "/favorites",       emoji: "❤️" },
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-xl mx-auto space-y-6">

          {/* Header */}
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-amber-300 text-dark-knight flex items-center justify-center font-bold text-3xl shrink-0 shadow-md">
              {initials}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
              <p className="text-sm text-gray-500 mt-0.5">{userInfo?.email}</p>
              {profile?.is_verified && (
                <span className="mt-1 inline-block text-xs font-bold text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full">
                  ✓ Verified
                </span>
              )}
            </div>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            {loading ? (
              <div className="flex justify-center py-10">
                <div className="w-8 h-8 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "firstName",  label: "First Name" },
                    { name: "secondName", label: "Last Name"  },
                  ].map(({ name, label }) => (
                    <div key={name}>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{label}</label>
                      <input
                        name={name}
                        value={(form as any)[name]}
                        onChange={onChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email</label>
                  <input
                    name="email" type="email"
                    value={form.email} onChange={onChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
                  />
                </div>

                <hr className="border-gray-100" />
                <p className="text-xs text-gray-400">Leave password blank to keep your current one.</p>

                {[
                  { name: "password",        label: "New Password",     placeholder: "Min. 8 characters" },
                  { name: "confirmPassword", label: "Confirm Password", placeholder: ""                  },
                ].map(({ name, label, placeholder }) => (
                  <div key={name}>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{label}</label>
                    <input
                      name={name} type="password"
                      value={(form as any)[name]} onChange={onChange}
                      placeholder={placeholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
                    />
                  </div>
                ))}

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit" disabled={saving}
                    className="flex-1 bg-dark-knight text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50"
                  >
                    {saving ? "Saving…" : "Save Changes"}
                  </button>
                  <button
                    type="button" onClick={() => navigate(-1)}
                    className="px-6 py-3 border border-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map(({ label, path, emoji }) => (
              <Link
                key={path} to={path}
                className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition"
              >
                <span className="text-2xl">{emoji}</span>
                <span className="font-semibold text-sm text-gray-800">{label}</span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}