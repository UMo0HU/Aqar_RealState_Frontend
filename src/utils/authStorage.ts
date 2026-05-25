const AUTH_KEY = "aqar_auth";

type StoredAuth = {
  token: string;
  user: {
    id: string;
    firstName: string;
    secondName: string;
    email: string;
  };
  expiresAt: number; // timestamp
}

const THREE_HOURS = 3 * 60 * 60 * 1000;

export const saveAuth = (token: string, user: StoredAuth["user"]): void => {
  const payload: StoredAuth = {
    token,
    user,
    expiresAt: Date.now() + THREE_HOURS,
  };
  localStorage.setItem(AUTH_KEY, JSON.stringify(payload));
};

export const loadAuth = (): StoredAuth | null => {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;

    const parsed: StoredAuth = JSON.parse(raw);

    // ✅ تتحقق من الصلاحية هنا برضو
    if (Date.now() > parsed.expiresAt) {
      clearAuth();
      return null;
    }

    return parsed;
  } catch {
    clearAuth();
    return null;
  }
};

export const clearAuth = (): void => {
  localStorage.removeItem(AUTH_KEY);
};

export const isAuthExpired = (): boolean => {
  const auth = loadAuth();
  if (!auth) return true;
  return Date.now() > auth.expiresAt;
};