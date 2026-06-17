import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "@/context/AuthContext";
import { ChatSyncProvider }     from "@/context/ChatSyncProvider";
import { NotificationsProvider } from "@/context/NotificationsContext";
import { useAuthGuard }        from "@/hooks/useAuthGuard";
import ProtectedRoute          from "@/routes/ProtectedRoute";


// ─── Property ─────────────────────────────────────────────────────────────────
import Home                 from "@/features/properties/pages/HomePage";
import PropertyPage         from "@/features/properties/pages/PropertyPage";
import AddPropertyPage      from "@/features/properties/pages/AddPropertyPage";
import SearchPropertiesPage from "@/features/properties/pages/SearchPropertiesPage";
import PropertiesPage       from "@/features/properties/pages/PropertiesPage";
import ReviewPage           from "@/features/properties/pages/ReviewPage";
import AIChatPage           from "@/features/ai/pages/AIChatPage";

// ─── Auth ─────────────────────────────────────────────────────────────────────
import AuthLayout            from "@/features/auth/AuthLayout";
import SignupPage            from "@/features/auth/pages/SignupPage";
import LoginPage             from "@/features/auth/pages/LoginPage";
import EmailVerificationPage from "@/features/auth/pages/EmailVerificationPage";
import ForgetPasswordPage    from "@/features/auth/pages/ForgetPasswordPage";
import ResetPasswordPage     from "@/features/auth/pages/ResetPasswordPage";

// ─── User ─────────────────────────────────────────────────────────────────────
import ProfilePage       from "@/features/user/pages/ProfilePage";
import MyPropertiesPage  from "@/features/user/pages/MyPropertiesPage";
import EditPropertyPage  from "@/features/user/pages/EditPropertyPage";
import FavoritesPage     from "@/features/user/pages/FavoritesPage";
import NotificationsPage from "@/features/user/pages/NotificationsPage";

// ─── Rent Request ─────────────────────────────────────────────────────────────
import RentRequestsListPage from "@/features/rentRequest/pages/RentRequestsListPage";

// ─── Purchase Request ─────────────────────────────────────────────────────────
import PurchaseRequestsListPage from "@/features/purchaseRequest/pages/PurchaseRequestsListPage";

// ─── Lease ────────────────────────────────────────────────────────────────────
import LeasesPage from "@/features/lease/pages/LeasesPage";
import LeaseDetailPage from "@/features/lease/pages/LeaseDetailPage";

// ─── Payment ──────────────────────────────────────────────────────────────────
import PaymentPage        from "@/features/payment/pages/PaymentPage";
import PaymentSuccessPage from "@/features/payment/pages/PaymentSuccessPage";
import InvoicePaymentStatusPage from "@/features/payment/pages/InvoicePaymentStatusPage";
import RentDueBanner from "@/features/payment/components/RentDueBanner";
import PropertySubscriptionPage from "@/features/subscription/pages/PropertySubscriptionPage";
import SubscriptionPaymentStatusPage from "@/features/subscription/pages/SubscriptionPaymentStatusPage";
import SponsorshipPaymentStatusPage from "@/features/subscription/pages/SponsorshipPaymentStatusPage";
import WalletPage from "@/features/wallet/pages/WalletPage";
import InvoicesPage from "@/features/invoices/pages/InvoicesPage";

// ─── Chat ──────────────────────────────────────────────────────────────────
import ChatInboxPage  from "@/features/chat/pages/ChatInboxPage";
import ChatWindowPage from "@/features/chat/pages/ChatWindowPage";
import NewChatPage    from "@/features/chat/pages/NewChatPage";

function AppContent() {
  useAuthGuard();

  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/"                  element={<Home />} />
        <Route path="/properties"        element={<PropertiesPage />} />
        <Route path="/search"            element={<SearchPropertiesPage />} />
        <Route path="/buy/property/:id"  element={<PropertyPage />} />
        <Route path="/rent/property/:id" element={<PropertyPage />} />
        <Route path="/review/:propertyId" element={<ProtectedRoute><ReviewPage /></ProtectedRoute>} />
        <Route 
          path="/ai-assistant" 
          element={<AIChatPage />} 
        />

        {/* Auth */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signup"                element={<SignupPage />} />
          <Route path="login"                 element={<LoginPage />} />
          <Route path="reset-password/:token" element={<ResetPasswordPage />} />
          <Route path="forget-password"       element={<ForgetPasswordPage />} />
          <Route path="verify-email"          element={<EmailVerificationPage />} />
        </Route>


        {/* Protected */}
        <Route path="/property/add-property" element={<ProtectedRoute><AddPropertyPage /></ProtectedRoute>} />
        <Route path="/profile"               element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/my-properties"         element={<ProtectedRoute><MyPropertiesPage /></ProtectedRoute>} />
        <Route path="/property/:id/edit"     element={<ProtectedRoute><EditPropertyPage /></ProtectedRoute>} />
        <Route path="/favorites"             element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
        <Route path="/wallet"                element={<ProtectedRoute><WalletPage /></ProtectedRoute>} />
        <Route path="/invoices"             element={<ProtectedRoute><InvoicesPage /></ProtectedRoute>} />
        <Route path="/notifications"         element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
        <Route path="/rent-requests"         element={<ProtectedRoute><RentRequestsListPage /></ProtectedRoute>} />
        <Route path="/purchase-requests"    element={<ProtectedRoute><PurchaseRequestsListPage /></ProtectedRoute>} />
        <Route path="/leases"                element={<ProtectedRoute><LeasesPage /></ProtectedRoute>} />
        <Route path="/leases/:leaseId"      element={<ProtectedRoute><LeaseDetailPage /></ProtectedRoute>} />
        
        {/* Chat — protected */}
        <Route path="/chat"           element={<ProtectedRoute><ChatInboxPage  /></ProtectedRoute>} />
        <Route path="/chat/start"     element={<ProtectedRoute><NewChatPage    /></ProtectedRoute>} />
        <Route path="/chat/:chat_id"  element={<ProtectedRoute><ChatWindowPage /></ProtectedRoute>} />

        {/* Payment — success is public (Kashier redirects here after payment) */}
        <Route path="/payment/success" element={<PaymentSuccessPage />} />
        <Route path="/payment/invoice/success" element={<InvoicePaymentStatusPage />} />
        <Route path="/payment/subscription/success" element={<SubscriptionPaymentStatusPage />} />
        <Route path="/payment/sponsor/success" element={<SponsorshipPaymentStatusPage />} />
        <Route path="/payment/:id"     element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
        <Route path="/property/:id/subscription" element={<ProtectedRoute><PropertySubscriptionPage /></ProtectedRoute>} />
      </Routes>
      <RentDueBanner />
    </>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <ChatSyncProvider>
        <NotificationsProvider>
          <AppContent />
        </NotificationsProvider>
      </ChatSyncProvider>
    </AuthContextProvider>
  );
}
