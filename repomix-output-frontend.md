This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.dockerignore
.gitignore
Dockerfile
eslint.config.js
index.html
package.json
public/vite.svg
README.md
src/api/axiosInstance.ts
src/api/socket.ts
src/api/tokenStore.ts
src/App.css
src/App.tsx
src/assets/bathroom.svg
src/assets/bed.svg
src/assets/bedroom.png
src/assets/bg.jpg
src/assets/calendar.png
src/assets/cautionIcon.svg
src/assets/Fulltime.png
src/assets/hide.png
src/assets/images/prop_2_5.jpg
src/assets/images/prop_2_6.jpg
src/assets/images/prop_2_7.jpg
src/assets/images/prop_2_8.jpg
src/assets/mapPointer.svg
src/assets/Money.png
src/assets/Protection.png
src/assets/react.svg
src/assets/RedHeart.png
src/assets/rentingIcon.svg
src/assets/rentingIconActive.svg
src/assets/RightArrow.svg
src/assets/Robot.png
src/assets/ruler.svg
src/assets/Search.svg
src/assets/sellingIcon.svg
src/assets/sellingIconActive.svg
src/assets/verify.png
src/assets/view.png
src/assets/WhiteHeart.png
src/context/AuthContext.tsx
src/context/ChatSyncProvider.tsx
src/context/FormContext.tsx
src/context/NotificationsContext.tsx
src/context/ToastContext.tsx
src/features/ai/pages/AIChatPage.tsx
src/features/auth/AuthLayout.tsx
src/features/auth/components/Card.tsx
src/features/auth/components/CreateAccount.tsx
src/features/auth/components/Form.tsx
src/features/auth/components/FormContainer.tsx
src/features/auth/components/FormDivider.tsx
src/features/auth/components/Header.tsx
src/features/auth/components/Input.tsx
src/features/auth/components/OtpInput.tsx
src/features/auth/components/SubmitButton.tsx
src/features/auth/pages/EmailVerificationPage.tsx
src/features/auth/pages/ForgetPasswordPage.tsx
src/features/auth/pages/LoginPage.tsx
src/features/auth/pages/ResetPasswordPage.tsx
src/features/auth/pages/SignupPage.tsx
src/features/auth/pages/SuccessMessagePage.tsx
src/features/chat/pages/ChatInboxPage.tsx
src/features/chat/pages/ChatWindowPage.tsx
src/features/chat/pages/NewChatPage.tsx
src/features/invoices/components/InvoiceCard.tsx
src/features/invoices/components/InvoiceSummaryCards.tsx
src/features/invoices/pages/InvoicesPage.tsx
src/features/lease/pages/LeaseDetailPage.tsx
src/features/lease/pages/LeasesPage.tsx
src/features/payment/components/RentDueBanner.tsx
src/features/payment/pages/InvoicePaymentStatusPage.tsx
src/features/payment/pages/PaymentPage.tsx
src/features/payment/pages/PaymentSuccessPage.tsx
src/features/properties/components/AddPropertyComponents/BasicInfoStep.tsx
src/features/properties/components/AddPropertyComponents/LocationPickerField.tsx
src/features/properties/components/AddPropertyComponents/LocationStep.tsx
src/features/properties/components/AddPropertyComponents/MapPicker.tsx
src/features/properties/components/AddPropertyComponents/MediaStep.tsx
src/features/properties/components/AddPropertyComponents/NumberInput.tsx
src/features/properties/components/AddPropertyComponents/OwnershipStep.tsx
src/features/properties/components/AddPropertyComponents/PriceInput.tsx
src/features/properties/components/AddPropertyComponents/PropertyTypeToggle.tsx
src/features/properties/components/AddPropertyComponents/SellingPlanSelector.tsx
src/features/properties/components/AddPropertyComponents/StepIndicator.tsx
src/features/properties/components/HomeCard.tsx
src/features/properties/components/LoadingSkeleton.tsx
src/features/properties/components/NavBar.tsx
src/features/properties/components/PropertiesSection.tsx
src/features/properties/components/PropertyCard.tsx
src/features/properties/components/PropertyComponents/BookingSidebar.tsx
src/features/properties/components/PropertyComponents/DataPicker.tsx
src/features/properties/components/PropertyComponents/MortgageCalculator.tsx
src/features/properties/components/PropertyComponents/OwnerPanel.tsx
src/features/properties/components/PropertyComponents/PropertyDescription.tsx
src/features/properties/components/PropertyComponents/PropertyFeatures.tsx
src/features/properties/components/PropertyComponents/PropertyGallery.tsx
src/features/properties/components/PropertyComponents/PropertyLocationMap.tsx
src/features/properties/components/PropertyComponents/ReviewSection.tsx
src/features/properties/components/PropertyComponents/StarRating.tsx
src/features/properties/components/PropertyComponents/Swiper.tsx
src/features/properties/components/PropertyComponents/usePropertyRentalContext.ts
src/features/properties/components/RecommendedPropertiesRow.tsx
src/features/properties/components/SearchBar.tsx
src/features/properties/components/SearchFilterPanel.tsx
src/features/properties/data.ts
src/features/properties/pages/AddPropertyPage.tsx
src/features/properties/pages/HomePage.tsx
src/features/properties/pages/PropertiesPage.tsx
src/features/properties/pages/PropertyPage.tsx
src/features/properties/pages/ReviewPage.tsx
src/features/properties/pages/SearchPropertiesPage.tsx
src/features/rentRequest/pages/RentRequestsListPage.tsx
src/features/subscription/components/SponsorshipModal.tsx
src/features/subscription/pages/PropertySubscriptionPage.tsx
src/features/subscription/pages/SponsorshipPaymentStatusPage.tsx
src/features/subscription/pages/SubscriptionPaymentStatusPage.tsx
src/features/user/components/EditInfoForm.tsx
src/features/user/components/ImageGalleryEditor.tsx
src/features/user/pages/EditPropertyPage.tsx
src/features/user/pages/FavoritesPage.tsx
src/features/user/pages/MyPropertiesPage.tsx
src/features/user/pages/NotificationsPage.tsx
src/features/user/pages/ProfilePage.tsx
src/features/wallet/pages/WalletPage.tsx
src/hooks/useAuthGuard.ts
src/hooks/useFavIds.ts
src/index.css
src/main.tsx
src/routes/ProtectedRoute.tsx
src/services/aiService.ts
src/services/authService.ts
src/services/chatService.ts
src/services/favoriteService.ts
src/services/invoiceService.ts
src/services/leaseService.ts
src/services/listingSubscriptionService.ts
src/services/notificationService.ts
src/services/paymentService.ts
src/services/propertyService.ts
src/services/rentRequestService.ts
src/services/reviewService.ts
src/services/saleService.ts
src/services/sponsorshipService.ts
src/types/ai.ts
src/types/index.ts
src/utils/apiError.ts
src/utils/authStorage.ts
src/utils/authValidator.ts
src/utils/fixLeafletIcon.ts
src/utils/Icons.tsx
src/utils/map.ts
src/utils/mapProperty.ts
src/utils/notifications.ts
src/utils/propertyListing.ts
src/utils/propertyValidator.ts
src/utils/saleSubscriptionState.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vercel.json
vite.config.ts
```

# Files

## File: .dockerignore
````
node_modules
dist
.git
.gitignore
npm-debug.log
````

## File: .gitignore
````
.env
node_modules
repomix-output.xml
````

## File: Dockerfile
````dockerfile
# --- Stage 1: Build Stage ---
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# --- Stage 2: Production Stage ---
FROM nginx:1.25-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
````

## File: eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>realstate-project</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "realstate-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@mapbox/mapbox-gl-geocoder": "^5.1.2",
    "@tailwindcss/vite": "^4.1.16",
    "axios": "^1.13.2",
    "date-fns": "^4.1.0",
    "leaflet": "^1.9.4",
    "mapbox-gl": "^3.21.0",
    "react": "^19.1.1",
    "react-day-picker": "^9.13.2",
    "react-dom": "^19.1.1",
    "react-leaflet": "^5.0.0",
    "react-markdown": "^10.1.0",
    "react-router": "^7.9.6",
    "react-router-dom": "^7.9.6",
    "remark-gfm": "^4.0.1",
    "socket.io-client": "^4.8.3",
    "tailwindcss": "^4.1.16"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/leaflet": "^1.9.21",
    "@types/node": "^24.6.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "babel-plugin-react-compiler": "^19.1.0-rc.3",
    "baseline-browser-mapping": "^2.9.19",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.45.0",
    "vite": "^7.1.7"
  }
}
````

## File: public/vite.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
````

## File: README.md
````markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
````

## File: src/api/axiosInstance.ts
````typescript
import axios from "axios";
import { getAuthToken } from "@/api/tokenStore";
import { loadAuth } from "@/utils/authStorage";

// Use VITE_API_URL in your .env for production; falls back to localhost in dev
const rawUrl = import.meta.env.VITE_API_URL ?? "http://localhost:8000";
export const BASE_URL = rawUrl.replace(/\/+$/, "");

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Attach JWT on every request
axiosInstance.interceptors.request.use((config) => {
  const token = getAuthToken() ?? loadAuth()?.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auto-logout on expired / invalid token
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("aqar_auth");
      window.location.href = "/auth/login";
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
````

## File: src/api/socket.ts
````typescript
import { io, type Socket } from "socket.io-client";
import { BASE_URL } from "@/api/axiosInstance";

let socket: Socket | null = null;

export const connectSocket = (token: string): Socket => {
  if (socket?.connected) return socket;

  if (socket) {
    socket.disconnect();
    socket = null;
  }

  socket = io(BASE_URL, {
    auth: { token },
    transports: ["websocket", "polling"],
    reconnectionAttempts: 6,
    reconnectionDelay: 1500,
  });

  socket.on("connect", () =>
    console.log("✅ Socket connected:", socket?.id)
  );

  socket.on("disconnect", (reason) =>
    console.log("❌ Socket disconnected:", reason)
  );

  socket.on("connect_error", (err) =>
    console.error("⚠️ Socket error:", err.message)
  );

  return socket;
};

export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
    console.log("🔌 Socket disconnected manually");
  }
};

export const getSocket = (): Socket | null => socket;
````

## File: src/api/tokenStore.ts
````typescript
let token: string | null;

export const setAuthToken = (t: string | null) => {
    token = t;
}

export const getAuthToken = () => token;
````

## File: src/App.css
````css

````

## File: src/App.tsx
````typescript
import { useEffect } from "react";
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
import { pingAiService }    from "@/services/aiService";

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

  useEffect(() => {
    pingAiService();
  }, []);

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
````

## File: src/assets/bathroom.svg
````xml
<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7558 12.23V15.0523C19.7558 16.0503 19.3593 17.0074 18.6536 17.7132C17.9479 18.4189 16.9907 18.8153 15.9927 18.8153H6.58508C5.58705 18.8153 4.6299 18.4189 3.92419 17.7132C3.21849 17.0074 2.82202 16.0503 2.82202 15.0523V12.7944C2.82202 12.6447 2.88149 12.5012 2.98735 12.3953C3.0932 12.2894 3.23678 12.23 3.38648 12.23H19.7558Z" fill="black" stroke="black" stroke-width="1.41115" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0523 18.8153L15.9931 20.6968M7.52621 18.8153L6.58545 20.6968M19.7561 12.2299V6.58532C19.7561 5.5873 19.3597 4.63015 18.654 3.92444C17.9483 3.21873 16.9911 2.82227 15.9931 2.82227H11.2893" stroke="black" stroke-width="1.41115" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4894 7.52609H8.09217C7.78078 7.52609 7.53148 7.27396 7.56534 6.96351C7.70269 5.71512 8.33959 2.82227 11.2908 2.82227C14.2419 2.82227 14.8788 5.71512 15.0162 6.96351C15.0501 7.27396 14.8008 7.52609 14.4894 7.52609Z" fill="black" stroke="black" stroke-width="1.41115" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
````

## File: src/assets/bed.svg
````xml
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.67261 15.8889V10.8715C1.67261 10.4952 1.74926 10.1537 1.90257 9.84713C2.05588 9.54051 2.25797 9.26873 2.50884 9.0318V6.69034C2.50884 5.99348 2.75274 5.40115 3.24055 4.91335C3.72835 4.42554 4.32068 4.18164 5.01755 4.18164H8.36248C8.68304 4.18164 8.98269 4.24101 9.26144 4.35976C9.54018 4.4785 9.79802 4.64213 10.035 4.85063C10.2719 4.64157 10.5297 4.47795 10.8085 4.35976C11.0872 4.24157 11.3869 4.1822 11.7074 4.18164H15.0524C15.7492 4.18164 16.3416 4.42554 16.8294 4.91335C17.3172 5.40115 17.5611 5.99348 17.5611 6.69034V9.0318C17.8119 9.26873 18.014 9.54051 18.1673 9.84713C18.3206 10.1537 18.3973 10.4952 18.3973 10.8715V15.8889H16.7248V14.2165H3.34508V15.8889H1.67261ZM10.8712 8.36281H15.8886V6.69034C15.8886 6.45341 15.8083 6.25495 15.6478 6.09495C15.4872 5.93495 15.2887 5.85467 15.0524 5.85411H11.7074C11.4705 5.85411 11.272 5.93439 11.112 6.09495C10.952 6.2555 10.8717 6.45397 10.8712 6.69034V8.36281ZM4.18131 8.36281H9.19872V6.69034C9.19872 6.45341 9.11844 6.25495 8.95788 6.09495C8.79733 5.93495 8.59886 5.85467 8.36248 5.85411H5.01755C4.78061 5.85411 4.58215 5.93439 4.42215 6.09495C4.26215 6.2555 4.18187 6.45397 4.18131 6.69034V8.36281Z" fill="black"/>
</svg>
````

## File: src/assets/cautionIcon.svg
````xml
<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 19L11 0L22 19H0ZM3.45 17H18.55L11 4L3.45 17ZM11 16C11.2833 16 11.5208 15.9042 11.7125 15.7125C11.9042 15.5208 12 15.2833 12 15C12 14.7167 11.9042 14.4792 11.7125 14.2875C11.5208 14.0958 11.2833 14 11 14C10.7167 14 10.4792 14.0958 10.2875 14.2875C10.0958 14.4792 10 14.7167 10 15C10 15.2833 10.0958 15.5208 10.2875 15.7125C10.4792 15.9042 10.7167 16 11 16ZM10 13H12V8H10V13Z" fill="#D4AF37"/>
</svg>
````

## File: src/assets/mapPointer.svg
````xml
<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5559 7.28881C5.02964 7.28881 4.52494 7.08673 4.15282 6.72701C3.7807 6.3673 3.57165 5.87942 3.57165 5.3707C3.57165 4.86199 3.7807 4.37411 4.15282 4.0144C4.52494 3.65468 5.02964 3.4526 5.5559 3.4526C6.08216 3.4526 6.58686 3.65468 6.95898 4.0144C7.33109 4.37411 7.54015 4.86199 7.54015 5.3707C7.54015 5.62259 7.48883 5.87202 7.38911 6.10473C7.28939 6.33745 7.14323 6.5489 6.95898 6.72701C6.77472 6.90512 6.55598 7.04641 6.31524 7.14281C6.0745 7.2392 5.81647 7.28881 5.5559 7.28881ZM5.5559 0C4.08238 0 2.66922 0.56584 1.62729 1.57304C0.585352 2.58025 0 3.9463 0 5.3707C0 9.39873 5.5559 15.3449 5.5559 15.3449C5.5559 15.3449 11.1118 9.39873 11.1118 5.3707C11.1118 3.9463 10.5264 2.58025 9.48451 1.57304C8.44258 0.56584 7.02942 0 5.5559 0Z" fill="black"/>
</svg>
````

## File: src/assets/react.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: src/assets/rentingIcon.svg
````xml
<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM2 6V4V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="#94A3B8"/>
</svg>
````

## File: src/assets/rentingIconActive.svg
````xml
<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM2 6V4V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="white"/>
</svg>
````

## File: src/assets/RightArrow.svg
````xml
<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3802 0.38999C10.63 0.140279 10.9688 0 11.322 0C11.6752 0 12.0139 0.140279 12.2637 0.38999L18.2577 6.38397C18.5074 6.63375 18.6476 6.97249 18.6476 7.32569C18.6476 7.67888 18.5074 8.01762 18.2577 8.26741L12.2637 14.2614C12.0125 14.504 11.676 14.6383 11.3267 14.6352C10.9775 14.6322 10.6434 14.4921 10.3965 14.2452C10.1495 13.9982 10.0094 13.6641 10.0064 13.3149C10.0033 12.9656 10.1376 12.6292 10.3802 12.3779L13.9859 8.65768H1.33199C0.978728 8.65768 0.63993 8.51735 0.390132 8.26755C0.140335 8.01775 0 7.67895 0 7.32569C0 6.97242 0.140335 6.63362 0.390132 6.38382C0.63993 6.13403 0.978728 5.99369 1.33199 5.99369H13.9859L10.3802 2.27343C10.1305 2.02364 9.99024 1.68491 9.99024 1.33171C9.99024 0.978513 10.1305 0.639776 10.3802 0.38999Z" fill="black"/>
</svg>
````

## File: src/assets/ruler.svg
````xml
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.30648 10.322V13.189M8.60015 10.322V13.189M10.8938 10.322V14.3359M13.1875 10.322V13.189M15.4812 10.322V13.189M17.7748 10.322V14.3359M4.0128 9.74854H20.0685C20.3727 9.74854 20.6644 9.86936 20.8794 10.0844C21.0945 10.2995 21.2153 10.5912 21.2153 10.8954V15.4827C21.2153 15.7869 21.0945 16.0786 20.8794 16.2937C20.6644 16.5087 20.3727 16.6296 20.0685 16.6296H4.0128C3.70864 16.6296 3.41694 16.5087 3.20187 16.2937C2.98679 16.0786 2.86597 15.7869 2.86597 15.4827V10.8954C2.86597 10.5912 2.98679 10.2995 3.20187 10.0844C3.41694 9.86936 3.70864 9.74854 4.0128 9.74854Z" stroke="black" stroke-width="1.14684" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
````

## File: src/assets/Search.svg
````xml
<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9593 26.4223L21.1597 19.624C25.2538 14.7087 24.7577 7.4425 20.0335 3.12926C15.3093 -1.18397 8.02807 -1.01849 3.50467 3.50491C-1.01874 8.02831 -1.18421 15.3095 3.12902 20.0337C7.44225 24.758 14.7084 25.2541 19.6237 21.1599L26.422 27.9596C26.8465 28.3841 27.5348 28.3841 27.9593 27.9596C28.3838 27.5351 28.3838 26.8468 27.9593 26.4223ZM2.20288 11.981C2.20288 6.58081 6.58057 2.20312 11.9807 2.20312C17.3809 2.20312 21.7585 6.58081 21.7585 11.981C21.7585 17.3811 17.3809 21.7588 11.9807 21.7588C6.58305 21.7528 2.20887 17.3786 2.20288 11.981Z" fill="#334155"/>
</svg>
````

## File: src/assets/sellingIcon.svg
````xml
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4 12.25L12.25 19.4C12.05 19.6 11.825 19.75 11.575 19.85C11.325 19.95 11.075 20 10.825 20C10.575 20 10.325 19.95 10.075 19.85C9.825 19.75 9.6 19.6 9.4 19.4L0.575 10.575C0.391667 10.3917 0.25 10.1792 0.15 9.9375C0.05 9.69583 0 9.44167 0 9.175V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.175C9.44167 0 9.7 0.0541667 9.95 0.1625C10.2 0.270833 10.4167 0.416667 10.6 0.6L19.4 9.425C19.6 9.625 19.7458 9.85 19.8375 10.1C19.9292 10.35 19.975 10.6 19.975 10.85C19.975 11.1 19.9292 11.3458 19.8375 11.5875C19.7458 11.8292 19.6 12.05 19.4 12.25ZM10.825 18L17.975 10.85L9.15 2H2V9.15L10.825 18ZM4.5 6C4.91667 6 5.27083 5.85417 5.5625 5.5625C5.85417 5.27083 6 4.91667 6 4.5C6 4.08333 5.85417 3.72917 5.5625 3.4375C5.27083 3.14583 4.91667 3 4.5 3C4.08333 3 3.72917 3.14583 3.4375 3.4375C3.14583 3.72917 3 4.08333 3 4.5C3 4.91667 3.14583 5.27083 3.4375 5.5625C3.72917 5.85417 4.08333 6 4.5 6Z" fill="#94A3B8"/>
</svg>
````

## File: src/assets/sellingIconActive.svg
````xml
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4 12.25L12.25 19.4C12.05 19.6 11.825 19.75 11.575 19.85C11.325 19.95 11.075 20 10.825 20C10.575 20 10.325 19.95 10.075 19.85C9.825 19.75 9.6 19.6 9.4 19.4L0.575 10.575C0.391667 10.3917 0.25 10.1792 0.15 9.9375C0.05 9.69583 0 9.44167 0 9.175V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.175C9.44167 0 9.7 0.0541667 9.95 0.1625C10.2 0.270833 10.4167 0.416667 10.6 0.6L19.4 9.425C19.6 9.625 19.7458 9.85 19.8375 10.1C19.9292 10.35 19.975 10.6 19.975 10.85C19.975 11.1 19.9292 11.3458 19.8375 11.5875C19.7458 11.8292 19.6 12.05 19.4 12.25ZM10.825 18L17.975 10.85L9.15 2H2V9.15L10.825 18ZM4.5 6C4.91667 6 5.27083 5.85417 5.5625 5.5625C5.85417 5.27083 6 4.91667 6 4.5C6 4.08333 5.85417 3.72917 5.5625 3.4375C5.27083 3.14583 4.91667 3 4.5 3C4.08333 3 3.72917 3.14583 3.4375 3.4375C3.14583 3.72917 3 4.08333 3 4.5C3 4.91667 3.14583 5.27083 3.4375 5.5625C3.72917 5.85417 4.08333 6 4.5 6Z" fill="white"/>
</svg>
````

## File: src/context/AuthContext.tsx
````typescript
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { setAuthToken }                    from "@/api/tokenStore";
import { connectSocket, disconnectSocket } from "@/api/socket";
import { saveAuth, loadAuth, clearAuth }   from "@/utils/authStorage";
import { logout as apiLogout }             from "@/services/authService";

type AuthUserType = {
  id: string;
  firstName: string;
  secondName: string;
  email: string;
};

interface AuthContextInterface {
  userInfo: AuthUserType | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: AuthUserType, token: string) => void;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextInterface>(null!);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const stored = loadAuth();
  const [token,    setToken]    = useState<string | null>(stored?.token ?? null);
  const [userInfo, setUserInfo] = useState<AuthUserType | null>(stored?.user ?? null);

  // On page refresh — restore axios token and reconnect socket if session exists
  useEffect(() => {
    if (stored?.token) {
      setAuthToken(stored.token);
      connectSocket(stored.token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function login(user: AuthUserType, token: string) {
    setUserInfo(user);
    setToken(token);
    setAuthToken(token);
    saveAuth(token, user);
    connectSocket(token);
  }

  async function logout() {
    try {
      await apiLogout();
    } catch {
      // still clear client state even if API call fails
    } finally {
      setUserInfo(null);
      setToken(null);
      setAuthToken(null);
      clearAuth();
      disconnectSocket();
      navigate("/");
    }
  }

  return (
    <AuthContext.Provider
      value={{ userInfo, token, isAuthenticated: !!token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
````

## File: src/context/ChatSyncProvider.tsx
````typescript
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

import { connectSocket, getSocket } from "@/api/socket";
import { useAuth } from "@/context/AuthContext";
import {
  getInbox,
  rememberChatContext,
  type SocketChatMessage,
} from "@/services/chatService";

interface ChatSyncValue {
  unreadChatCount: number;
  refreshInboxCount: () => Promise<void>;
}

const ChatSyncContext = createContext<ChatSyncValue>({
  unreadChatCount: 0,
  refreshInboxCount: async () => {},
});

export const useChatSync = () => useContext(ChatSyncContext);

export function ChatSyncProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, userInfo, token } = useAuth();
  const [unreadChatCount, setUnreadChatCount] = useState(0);

  const refreshInboxCount = useCallback(async () => {
    try {
      const res = await getInbox();
      const chats = res.data.data ?? [];
      const total = chats.reduce((sum, chat) => sum + (chat.unread_count ?? 0), 0);
      setUnreadChatCount(total);
    } catch {
      // silently fail
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated || !userInfo?.id) return;

    refreshInboxCount();
  }, [isAuthenticated, userInfo?.id, refreshInboxCount]);

  useEffect(() => {
    if (!isAuthenticated || !userInfo?.id) return;

    const socket = getSocket() ?? (token ? connectSocket(token) : null);
    if (!socket) return;

    const handleIncomingMessage = (message: SocketChatMessage) => {
      if (!message?.chat_id) return;

      rememberChatContext(message.chat_id, {
        property_id: message.property_id,
        partner_id: message.sender_id === userInfo.id ? undefined : message.sender_id,
      });

      if (message.sender_id !== userInfo.id) {
        refreshInboxCount();
      }
    };

    socket.on("new_chat_message", handleIncomingMessage);

    return () => {
      socket.off("new_chat_message", handleIncomingMessage);
    };
  }, [isAuthenticated, userInfo?.id, refreshInboxCount]);

  return (
    <ChatSyncContext.Provider value={{ unreadChatCount, refreshInboxCount }}>
      {children}
    </ChatSyncContext.Provider>
  );
}
````

## File: src/context/FormContext.tsx
````typescript
import type { ReactNode, SetStateAction, Dispatch } from "react"
import { createContext, useState } from 'react'

type UserType = {
    firstName : string,
    secondName : string,
    email : string,
    password : string,
    confirmPassword : string,
}

type InputErrorsType = {
    firstname_msg : string,
    secondname_msg : string,
    email_msg : string,
    password_msg : string,
    confirm_password_msg : string,
}

interface FormContextInterface {
    user: UserType;
    inputErrors: InputErrorsType;
    setUser: Dispatch<SetStateAction<UserType>>;
    setInputErrors: Dispatch<SetStateAction<InputErrorsType>>;
}

const defaultState = {
    user : {
        firstName : '',
        secondName : '',
        email : '',
        password : '',
        confirmPassword : '',
    },
    inputErrors : {
        firstname_msg: "",
        secondname_msg: "",
        email_msg: "",
        password_msg: "",
        confirm_password_msg: ""
    },
    setUser : (user : UserType) => {user},
    setInputErrors : (inputErrors : InputErrorsType) => {inputErrors} 
} as FormContextInterface;

export const FormContext = createContext<FormContextInterface>(defaultState);

export const FormContextProvider = ({ children } : {children: ReactNode}) => {
    const [user, setUser] = useState<UserType>(defaultState["user"]);
    const [inputErrors, setInputErrors] = useState<InputErrorsType>(defaultState["inputErrors"]);
    
    return (
        <FormContext.Provider 
        value={{ 
            user, 
            inputErrors, 
            setUser, 
            setInputErrors,
        }}>
            {children}
        </FormContext.Provider>
    );
}
````

## File: src/context/NotificationsContext.tsx
````typescript
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { connectSocket, getSocket } from "@/api/socket";
import { useAuth } from "@/context/AuthContext";
import {
  getAllNotifications,
  markNotificationRead,
} from "@/services/notificationService";
import type { Notification } from "@/types";
import {
  mergeNotifications,
  normalizeNotification,
} from "@/utils/notifications";

interface NotificationsContextValue {
  notifications: Notification[];
  unreadCount: number;
  loading: boolean;
  error: string | null;
  refreshNotifications: (options?: { silent?: boolean }) => Promise<void>;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
}

const NotificationsContext = createContext<NotificationsContextValue | null>(null);

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, token } = useAuth();

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const notificationsRef = useRef<Notification[]>([]);

  useEffect(() => {
    notificationsRef.current = notifications;
  }, [notifications]);

  const resetState = useCallback(() => {
    setNotifications([]);
    setUnreadCount(0);
    setLoading(false);
    setError(null);
  }, []);

  const refreshNotifications = useCallback(
    async (options?: { silent?: boolean }) => {
      if (!isAuthenticated) {
        resetState();
        return;
      }

      if (!options?.silent) setLoading(true);
      setError(null);

      try {
        const res = await getAllNotifications();
        const fetched = (res.data.data.notifications ?? []).map(normalizeNotification);

        setNotifications((current) => mergeNotifications(fetched, current));
        setUnreadCount(
          Number(
            res.data.data.unreadCount
              ?? fetched.filter((notification) => !notification.viewed).length,
          ),
        );
      } catch {
        setError("Failed to load notifications.");
        throw new Error("Failed to load notifications.");
      } finally {
        if (!options?.silent) setLoading(false);
      }
    },
    [isAuthenticated, resetState],
  );

  useEffect(() => {
    if (!isAuthenticated) {
      resetState();
      return;
    }

    refreshNotifications().catch(() => {});
  }, [isAuthenticated, refreshNotifications, resetState]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const socket = getSocket() ?? (token ? connectSocket(token) : null);
    if (!socket) return;

    const handleNewNotification = (incoming: Record<string, unknown>) => {
      const nextNotification = normalizeNotification(incoming);
      const alreadyExists = notificationsRef.current.some(
        (notification) =>
          notification.notification_id === nextNotification.notification_id,
      );

      setNotifications((current) =>
        mergeNotifications([nextNotification], current),
      );

      if (!alreadyExists && !nextNotification.viewed) {
        setUnreadCount((current) => current + 1);
      }
    };

    const handleConnect = () => {
      refreshNotifications({ silent: true }).catch(() => {});
    };

    socket.on("new_notification", handleNewNotification);
    socket.on("connect", handleConnect);

    return () => {
      socket.off("new_notification", handleNewNotification);
      socket.off("connect", handleConnect);
    };
  }, [isAuthenticated, refreshNotifications]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const handleFocus = () => {
      if (document.hidden) return;
      refreshNotifications({ silent: true }).catch(() => {});
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleFocus);
    };
  }, [isAuthenticated, refreshNotifications]);

  const markAsRead = useCallback(
    async (id: string) => {
      const existing = notificationsRef.current.find(
        (notification) => notification.notification_id === id,
      );
      if (!existing || existing.viewed) return;

      setNotifications((current) =>
        current.map((notification) =>
          notification.notification_id === id
            ? { ...notification, viewed: true }
            : notification,
        ),
      );
      setUnreadCount((current) => Math.max(0, current - 1));

      try {
        await markNotificationRead(id);
      } catch {
        refreshNotifications({ silent: true }).catch(() => {});
        throw new Error("Failed to mark notification as read.");
      }
    },
    [refreshNotifications],
  );

  const markAllAsRead = useCallback(async () => {
    const unreadIds = notificationsRef.current
      .filter((notification) => !notification.viewed)
      .map((notification) => notification.notification_id);

    if (unreadIds.length === 0) return;

    setNotifications((current) =>
      current.map((notification) => ({ ...notification, viewed: true })),
    );
    setUnreadCount(0);

    const results = await Promise.allSettled(
      unreadIds.map((id) => markNotificationRead(id)),
    );

    if (results.some((result) => result.status === "rejected")) {
      refreshNotifications({ silent: true }).catch(() => {});
      throw new Error("Failed to mark all notifications as read.");
    }
  }, [refreshNotifications]);

  const value = useMemo<NotificationsContextValue>(
    () => ({
      notifications,
      unreadCount,
      loading,
      error,
      refreshNotifications,
      markAsRead,
      markAllAsRead,
    }),
    [
      error,
      loading,
      markAllAsRead,
      markAsRead,
      notifications,
      refreshNotifications,
      unreadCount,
    ],
  );

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
}

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error("useNotifications must be used within NotificationsProvider.");
  }

  return context;
};
````

## File: src/context/ToastContext.tsx
````typescript
import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id:      number;
  message: string;
  type:    ToastType;
}

interface ToastContextValue {
  success: (msg: string) => void;
  error:   (msg: string) => void;
  info:    (msg: string) => void;
}

const ToastContext = createContext<ToastContextValue>(null!);
let nextId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: ToastType) => {
    const id = ++nextId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const value: ToastContextValue = {
    success: (msg) => addToast(msg, "success"),
    error:   (msg) => addToast(msg, "error"),
    info:    (msg) => addToast(msg, "info"),
  };

  const styles: Record<ToastType, string> = {
    success: "bg-green-600",
    error:   "bg-red-600",
    info:    "bg-dark-knight",
  };
  const icons: Record<ToastType, string> = {
    success: "✓",
    error:   "✕",
    info:    "i",
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-6 right-6 z-9999 flex flex-col gap-3 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl text-white text-sm font-semibold min-w-[260px] max-w-[360px] animate-toast-in pointer-events-auto ${styles[t.type]}`}
          >
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs shrink-0">
              {icons[t.type]}
            </span>
            <span className="leading-snug">{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
````

## File: src/features/ai/pages/AIChatPage.tsx
````typescript
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useToast } from "@/context/ToastContext";
import { sendAiChatMessage, getAiSessionId, resetAiSessionId } from "@/services/aiService";
import { getApiErrorMessage } from "@/utils/apiError";
import { BASE_URL } from "@/api/axiosInstance";
import type { AIChatProperty } from "@/types/ai";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  properties?: AIChatProperty[];
}

const HISTORY_STORAGE_KEY = "aqar_ai_history_v3";
const ASSET_BASE_URL = BASE_URL;

const resolveImage = (path: string) => {
  if (!path) return "https://placehold.co/400x300?text=No+Image";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${ASSET_BASE_URL}/${path.replace(/^\//, "")}`;
};

export default function AIChatPage() {
  const toast = useToast();
  const [sessionId, setSessionId] = useState(() => getAiSessionId());
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(messages.slice(-50)));
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sending]);

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem(HISTORY_STORAGE_KEY);
    setSessionId(resetAiSessionId());
    toast.success("Chat history cleared.");
  };

  const submit = async () => {
    const text = input.trim();
    if (!text || sending) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), role: "user", content: text };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setSending(true);

    try {
      const response = await sendAiChatMessage(sessionId, text);

      setMessages((current) => [
        ...current,
        {
          id: Date.now().toString() + "-ai",
          role: "assistant",
          content: response.answer || "No response text received.",
          properties: response.properties || [],
        },
      ]);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "AI assistant is unavailable."));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] w-full bg-gray-50 font-sans">

      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-white border-b border-gray-200 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-gray-500 hover:text-dark-knight transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-dark-knight">Aqar Assistant</h1>
            <p className="text-xs text-gray-500">Powered by AI Semantic Search Engine</p>
          </div>
        </div>
        <button
          onClick={handleClearChat}
          className="text-sm font-semibold text-gray-500 hover:text-red-600 transition-colors"
        >
          Clear Chat
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
        <div className="max-w-full lg:max-w-7xl mx-auto space-y-6 px-0 lg:px-4">

          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <svg className="w-16 h-16 mb-4 text-dark-knight opacity-40 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-xl font-semibold text-gray-700">Welcome to Aqar Smart Assistant</p>
              <p className="text-sm text-gray-500 mt-1">Ask anything! Example: "عايز شقة في التجمع ٣ غرف"</p>
            </div>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>

              <div className={`p-5 rounded-3xl text-[15px] leading-relaxed shadow-sm ${
                msg.role === "user"
                  ? "bg-dark-knight text-white rounded-br-sm max-w-[90%] md:max-w-[60%]"
                  : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm max-w-full md:max-w-[90%]"
              }`}>

                {msg.role === "assistant" ? (
                  <div className="overflow-x-auto [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_th]:bg-gray-50 [&_th]:p-2.5 [&_th]:border [&_th]:border-gray-200 [&_th]:text-left [&_td]:p-2.5 [&_td]:border [&_td]:border-gray-200 [&_td]:align-top [&_tr:nth-child(even)_td]:bg-gray-50/50 prose prose-sm max-w-none prose-headings:text-gray-900 prose-a:text-amber-600 prose-strong:text-gray-900 prose-code:text-amber-700 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200 prose-li:marker:text-gray-400">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap font-medium">{msg.content}</div>
                )}

                {msg.properties && Array.isArray(msg.properties) && msg.properties.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-gray-100 space-y-4">
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Matched Properties</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {msg.properties.map((prop: AIChatProperty, idx: number) => {
                        const currentId = prop.property_id || prop.id;
                        const finalTitle = prop.title || prop.property_name || "Premium Real Estate Listing";
                        const imgUrl = resolveImage(prop.image_url || (Array.isArray(prop.images) ? prop.images[0] : ""));
                        const displayPrice = prop.price || prop.price_value;
                        const beds = prop.bedrooms || prop.bedrooms_no || 0;
                        const baths = prop.bathrooms || prop.bathrooms_no || 0;
                        const sizeValue = prop.size || 0;
                        const isSale = prop.property_type === "for_sale";
                        return (
                          <div key={idx} className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/60 hover:shadow-md transition-all">
                            <div className="h-32 w-full relative bg-gray-200">
                              <img src={imgUrl} alt={finalTitle} className="w-full h-full object-cover" />
                              <span className="absolute top-2 right-2 bg-dark-knight/85 text-white font-bold text-[11px] px-2 py-0.5 rounded-full uppercase">
                                {isSale ? "For Sale" : "For Rent"}
                              </span>
                            </div>
                            <div className="p-3.5 flex-1 flex flex-col justify-between">
                              <div>
                                <h4 className="font-bold text-gray-900 text-sm line-clamp-1">{finalTitle}</h4>
                                <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{prop.location}</p>
                              </div>
                              <div className="mt-3">
                                <div className="text-xs text-gray-400 flex gap-2 mb-2 font-medium">
                                  <span>{beds} Beds</span>•<span>{baths} Baths</span>•<span>{sizeValue} m²</span>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                                  <span className="text-sm font-extrabold text-dark-knight">
                                    {displayPrice ? `${Number(displayPrice).toLocaleString()} EGP` : "Contact Agent"}
                                  </span>
                                  <Link
                                    to={isSale ? `/buy/property/${currentId}` : `/rent/property/${currentId}`}
                                    className="text-xs bg-amber-500 text-white font-bold px-3 py-1.5 rounded-lg hover:bg-amber-600 transition"
                                  >
                                    View Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}

          {sending && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 px-6 py-4 rounded-3xl rounded-bl-sm text-gray-500 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-dark-knight rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-dark-knight rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                <span className="w-2 h-2 bg-dark-knight rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 p-4 z-10">
        <div className="max-w-full lg:max-w-7xl mx-auto flex gap-3 items-end px-0 lg:px-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            className="flex-1 max-h-32 min-h-[52px] p-3.5 bg-gray-50 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-dark-knight focus:border-dark-knight transition-all resize-none font-medium text-gray-800"
            placeholder="Search listings with natural language... (Shift + Enter for new line)"
            rows={1}
          />
          <button
            onClick={submit}
            disabled={sending || !input.trim()}
            className="h-[52px] px-8 bg-dark-knight text-white font-bold rounded-2xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center shrink-0"
          >
            Send
          </button>
        </div>
      </footer>

    </div>
  );
}
````

## File: src/features/auth/AuthLayout.tsx
````typescript
import { Outlet } from "react-router"
import { FormContextProvider } from "@/context/FormContext"

const AuthLayout = () => {
    return (
        <FormContextProvider>
            <Outlet />
        </FormContextProvider>
    )
}

export default AuthLayout;
````

## File: src/features/auth/components/Card.tsx
````typescript
import type { FC, ReactNode } from "react";

const Card : FC<{children : ReactNode}> = (props) => {
    return <div className="flex flex-col justify-center items-center h-dvh">
        <section className="flex flex-col bg-gray-100 rounded-3xl py-10 px-10 sm:px-20 shadow border border-gray-200">{props.children}</section>
    </div>
}

export default Card;
````

## File: src/features/auth/components/CreateAccount.tsx
````typescript
import { Link } from "react-router-dom";

export default function CreateAccount() {
    return <p className="text-[16px] sm:text-xl tracking-tighter">
        Don't have an account ? <Link to="/auth/signup" className="text-gray-600 ms-2 hover:text-gray-400 transition-colors delay-100">Sign Up</Link>
    </p>
}
````

## File: src/features/auth/components/Form.tsx
````typescript
import type { FC, FormEvent, ReactNode } from "react";


const Form : FC<{submitHandler : (e : FormEvent<HTMLFormElement>) => void, children : ReactNode}> = (props) => {
    return (
        <form onSubmit={props.submitHandler} method="post" className="flex flex-col gap-4 items-center">
            {props.children}
        </form>
    )
}

export default Form;
````

## File: src/features/auth/components/FormContainer.tsx
````typescript
import type { FC, ReactNode } from "react";


const FormContainer : FC<{children : ReactNode}> = (props) => {
    return <section className="flex flex-col justify-center items-center h-dvh">
        {props.children}
    </section>
}

export default FormContainer;
````

## File: src/features/auth/components/FormDivider.tsx
````typescript
import type { FC, ReactNode } from "react";

const FormDivider : FC<{children : ReactNode}> = (props) => {
    return (
        <div className="relative w-full sm:w-[350px] flex pt-2 items-center">
            <div className="grow border-t-2 border-gray-900"></div>
            <span className="shrink mx-2">{props.children}</span>
            <div className="grow border-t-2 border-gray-900"></div>
        </div>
    );
} 

export default FormDivider;
````

## File: src/features/auth/components/Header.tsx
````typescript
import type { FC } from "react";

const Header : FC<{title : string, content : string}> = (props) => {
    return  <header className="flex flex-col text-center mb-5 gap-2">
                <h1 className="text-3xl sm:text-5xl font-semibold">{props.title}</h1>
                <p className="text-lg sm:text-xl">{props.content}</p>
            </header>
}

export default Header;
````

## File: src/features/auth/components/Input.tsx
````typescript
import type { FC, ReactNode, ChangeEvent, FocusEvent } from "react";
import { useContext, useState } from 'react';

import { FormContext } from "@/context/FormContext";

import { validateEmail, validateName, validatePassword } from "@/utils/authValidator";

import viewPassword from '@/assets/view.png';
import hidePassword from '@/assets/hide.png';

const Input : FC<{type : string, id : string, children : ReactNode | undefined}> = (props) => {
    const {user, inputErrors, setUser, setInputErrors} = useContext(FormContext);
    const [revealPassword, setRevealPassword] = useState(false);

    // For every input except fullname, the field key matches props.id directly
    const fieldValue = user[props.id as keyof typeof user];

    function revealPasswordHandler() {
        setRevealPassword(prev => !prev);
    }

    function inputHandler(id : string, event : ChangeEvent<HTMLInputElement>) {
        setUser(prev => ({...prev, [id]: event.target.value}));
    }

    function inputValidator(id : string, event : FocusEvent<HTMLInputElement>) {
        const inputValue = event.target.value;

        if (id === "email") {
            if (!validateEmail(inputValue)) {
                setInputErrors(prev => ({...prev, email_msg: "Enter a valid email (e.g., example@gmail.com)"}));
            } else {
                setInputErrors(prev => ({...prev, email_msg: ""}));
            }
        }

        if (id === "firstName") {
            if (!validateName(inputValue)) {
                setInputErrors(prev => ({...prev, firstname_msg: "Firstname must be 2–30 alphabetic characters only."}));
            } else {
                setInputErrors(prev => ({...prev, firstname_msg: ""}));
            }
        }

        if (id === "secondName") {
            if (!validateName(inputValue)) {
                setInputErrors(prev => ({...prev, secondname_msg: "Lastname must be 2–30 alphabetic characters only."}));
            } else {
                setInputErrors(prev => ({...prev, secondname_msg: ""}));
            }
        }

        if (id === "password") {
            if (!validatePassword(inputValue)) {
                setInputErrors(prev => ({...prev, password_msg: "Use 8–16 characters with at least 1 uppercase, 1 lowercase, 1 number & 1 symbol, and with no space."}));
            } else {
                setInputErrors(prev => ({...prev, password_msg: ""}));
            }
        }

        if (id === "confirmPassword") {
            if (inputValue !== user.password) {
                setInputErrors(prev => ({...prev, confirm_password_msg: "Passwords must match."}));
            } else {
                setInputErrors(prev => ({...prev, confirm_password_msg: ""}));
            }
        }
    }

    return (
        <div className="flex flex-col">

            {/* ── Regular text / email inputs ─────────────────────────── */}
            {props.type !== "password" && props.id !== "fullname" && (
                <>
                    <label htmlFor={props.id} className="text-xl">{props.children}</label>
                    <input
                        type={props.type}
                        id={props.id}
                        placeholder={String(props.children)}
                        className={`border-b-2 sm:w-xs text-lg py-1 px-2 ${inputErrors.email_msg ? "border-red-500" : ""}`}
                        onChange={(e) => inputHandler(props.id, e)}
                        onBlur={(e) => inputValidator(props.id, e)}
                        value={fieldValue || ""}
                        required
                    />
                    <p className="text-red-500 mt-0.5 font-semibold text-xs sm:w-80 w-56">{inputErrors.email_msg}</p>
                </>
            )}

            {/* ── Password inputs ─────────────────────────────────────── */}
            {props.type === "password" && (
                <>
                    <label htmlFor={props.id} className="text-xl">{props.children}</label>
                    <div className="relative">
                        <input
                            type={revealPassword ? "text" : props.type}
                            id={props.id}
                            placeholder={String(props.children)}
                            className={`border-b-2 sm:w-xs text-lg py-1 px-2
                                ${(inputErrors.password_msg && props.id === "password")
                                || (inputErrors.confirm_password_msg && props.id === "confirmPassword") ? "border-red-500" : ""}`}
                            onChange={(e) => inputHandler(props.id, e)}
                            onBlur={(e) => inputValidator(props.id, e)}
                            value={fieldValue || ""}
                            required
                        />
                        <img
                            src={revealPassword ? hidePassword : viewPassword}
                            alt={revealPassword ? "hide password" : "view password"}
                            onClick={revealPasswordHandler}
                            className="absolute top-1/2 -translate-y-1/2 right-2 w-6 hover:cursor-pointer"
                        />
                    </div>
                    <p className="text-red-500 mt-0.5 font-semibold text-xs sm:w-80 w-56">
                        {props.id === "password" ? inputErrors.password_msg : inputErrors.confirm_password_msg}
                    </p>
                </>
            )}

            {/* ── Full name (firstName + secondName) ──────────────────── */}
            {props.id === "fullname" && (
                <>
                    <label htmlFor="firstName" className="text-xl">{props.children}</label>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type={props.type}
                            id="firstName"
                            placeholder="First Name"
                            className={`border-b-2 sm:w-39 text-lg py-1 px-2 ${inputErrors.firstname_msg ? "border-red-500" : ""}`}
                            onChange={(e) => inputHandler("firstName", e)}
                            onBlur={(e) => inputValidator("firstName", e)}
                            value={user.firstName || ""}
                            required
                        />
                        <input
                            type={props.type}
                            id="secondName"
                            placeholder="Last Name"
                            className={`border-b-2 sm:w-39 text-lg py-1 px-2 ${inputErrors.secondname_msg ? "border-red-500" : ""}`}
                            onChange={(e) => inputHandler("secondName", e)}
                            onBlur={(e) => inputValidator("secondName", e)}
                            value={user.secondName || ""}
                            required
                        />
                    </div>
                    <p className="text-red-500 mt-0.5 font-semibold text-xs sm:w-80 w-56">
                        {inputErrors.firstname_msg || inputErrors.secondname_msg}
                    </p>
                </>
            )}

        </div>
    );
}

export default Input;
````

## File: src/features/auth/components/OtpInput.tsx
````typescript
import type { ChangeEvent, Dispatch, FC, KeyboardEvent, SetStateAction } from 'react';
import { useRef } from 'react';

const OTPInput : FC<{otpMsg : string , otp: string[], setOtp : Dispatch<SetStateAction<string[]>>}> = (props) => {
    const length = 6;
    const inputs = useRef<(HTMLInputElement | null)[]>([]);

    function addToRef(el : HTMLInputElement | null, index : number) {
        if(el && !inputs.current.includes(el)) {
            inputs.current[index] = el;
        }
    }

    function focusInput(index : number) {
        const inputElement = inputs.current[index];
        if(inputElement) {
            inputElement.focus();
        }
    }

    function changeHandler(e : ChangeEvent<HTMLInputElement>, index : number) {
        const { value } = e.target;
        
        if (value.match(/^\d$/)) {
            const newOtp = [...props.otp];
            newOtp[index] = value;
            props.setOtp(newOtp);
        

            if(index < length - 1) {
                focusInput(index + 1)
            }

        }
    };

    function keyDownHandler(e: KeyboardEvent<HTMLInputElement>, index : number) {
        if(e.key === 'Backspace') {
            if(index > -1) {
                const newOtp = [...props.otp];
                newOtp[index] = '';
                props.setOtp(newOtp);
                focusInput(index - 1)
            }
        }
    }

    return (
        <>
        <div className="flex justify-center">
            {props.otp.map((_, index) => (
                <input 
                    key={index}
                    type="text" 
                    maxLength={1}
                    value={props.otp[index]}
                    onChange={(e) => changeHandler(e, index)}
                    onKeyDown={(e) => keyDownHandler(e, index)}
                    ref={(el) => addToRef(el, index)}
                    className="w-8 sm:w-10 h-10 sm:h-12 mx-0.5 sm:mx-1 mb-4 text-center rounded-md text-[24px] border border-gray-300 bg-gray-200 shadow"
                />
            ))}
        </div>
        <p className="text-red-500 -mt-3 font-semibold text-2xs sm:w-80 w-56 text-center">{props.otpMsg}</p>
        </>
    );
}

export default OTPInput;
````

## File: src/features/auth/components/SubmitButton.tsx
````typescript
import type { FC, ReactNode } from "react";

const SubmitButton: FC<{ children: ReactNode, size? : string | undefined}> = (props) => {
  return <button type="submit" className={`bg-gray-600 text-white text-xl ${props.size === "full" ? "w-full" : "w-3/4"} p-2 rounded-lg shadow hover:cursor-pointer hover:scale-95 transition-all delay-100`}>
        {props.children}
    </button>
}

export default SubmitButton;
````

## File: src/features/auth/pages/EmailVerificationPage.tsx
````typescript
import { useContext, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Card from "../components/Card";
import Form from "../components/Form";
import Header from "../components/Header";
import OTPInput from "../components/OtpInput";
import SubmitButton from "../components/SubmitButton";

import { FormContext } from "@/context/FormContext";

import SuccessMessagePage from "./SuccessMessagePage";
import { requestOtp, verifyOtp } from "@/services/authService";


export default function EmailVerificationPage() {
    const [otp, setOtp] = useState(Array(6).fill(''));
    const [otpMsg, setOtpMsg] = useState('');
    const {user, setUser} = useContext(FormContext); 
    const email = user.email || localStorage.getItem("email");
    const [verifyEmail, setVerifyEmail] = useState(false);
    const navigate = useNavigate();
    
    async function submitHandler(e : FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const otpJoint = otp.join('');

        if(otpJoint.length !== 6) {
            setOtpMsg("Must Fill All Fields.");
            return;
        }

        setOtpMsg("");

        try {
                await verifyOtp(email, otpJoint);

                setUser({firstName : "", secondName : "", email : "", password : "", confirmPassword : ""});

                setVerifyEmail(true);
            }
        catch (error) {
            if(axios.isAxiosError(error)) {
                const errorMsg = error.response?.data.msg;
                if(errorMsg === "User already verified") {
                    navigate("/auth/login");
                }
                else if(errorMsg === "OTP expired") {
                    setOtpMsg(`${errorMsg}.`);
                }
                else if(errorMsg === "Invalid OTP") {
                    setOtpMsg(`${errorMsg}.`);
                }
            }
            else {
                throw new Error("Failed to send data");
            }
        }
    }

    const handleRequestOTP = async () => {
        await requestOtp(email);
    }
    

    return (
        <Card>
            {verifyEmail ? (
                <SuccessMessagePage title={
                    <>
                        Email Verified <br /> Successfully!
                    </>
                }/>
            ) : (
                <div className="flex flex-col items-center gap-8 p-0 sm:px-10">
                    <Header title="An Email sent" content="Check if an email has been sent"/>
                    <Form submitHandler={submitHandler}>
                        <OTPInput otpMsg={otpMsg} otp={otp} setOtp={setOtp}/>
                        <SubmitButton>Confirm</SubmitButton>
                        <button onClick={handleRequestOTP} className="cursor-pointer text-gray-600 ms-2 hover:text-gray-400 transition-colors delay-100">Send another email</button>
                    </Form>
                </div>
            )}
        </Card>
    )
}
````

## File: src/features/auth/pages/ForgetPasswordPage.tsx
````typescript
import { useContext, useState, type FormEvent } from "react";
import axios from "axios";

import Card from "../components/Card";
import CreateAccount from "../components/CreateAccount";
import Form from "../components/Form";
import Header from "../components/Header";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

import { FormContext } from "@/context/FormContext";
import { requestPasswordReset } from "@/services/authService";

export default function ForgetPasswordPage() {
    const {user, setUser, setInputErrors} = useContext(FormContext); 
    const [emailSent, setEmailSent] = useState(false);
    
    async function submitHandler(e : FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
                await requestPasswordReset(user.email);
                
                setUser({firstName : "", secondName : "", email : "", password : "", confirmPassword : ""});
                
                setEmailSent(true);
            }
        catch (error) {
            if(axios.isAxiosError(error)) {
                const errorMsg = error.response?.data?.msg;
                if(errorMsg === "Email is required") {
                    setInputErrors(prev => ({...prev, email_msg : `${errorMsg}.`}));
                }
                else if(errorMsg === "User not found") {
                    setInputErrors(prev => ({...prev, email_msg : `Email not found.`}));
                }
                else if(errorMsg) {
                    setInputErrors(prev => ({...prev, email_msg : errorMsg}));
                }
            }
            else {
                throw new Error("Failed to send data");
            }
        }
    }


    return (
        <Card>
            <Header 
                title={emailSent ? "Email Sent Successfully" : "Oh, no ! I Forgot"} 
                content={emailSent ? "Link was sent, Check your email." : "Enter your email and we'll send you a link to change your password"}/>
            {emailSent ? (
                undefined
            ) : (
                <Form submitHandler={submitHandler}>
                    <div className="my-5">
                        <Input type="email" id="email">Email</Input>
                    </div>
                    <SubmitButton>Send Email</SubmitButton>
                    <CreateAccount />
                </Form>
            )}
        </Card>
    )
}
````

## File: src/features/auth/pages/LoginPage.tsx
````typescript
import { useContext, useState, type FormEvent} from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../components/Card";
import CreateAccount from "../components/CreateAccount";
import Form from "../components/Form";
import FormContainer from "../components/FormContainer";
import FormDivider from "../components/FormDivider";
import Header from "../components/Header";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

import { FormContext } from "@/context/FormContext";
import { useAuth } from "@/context/AuthContext";

import axios from 'axios'
import { login, requestOtp } from "@/services/authService";

export default function LoginPage() {
  const {user, inputErrors, setInputErrors} = useContext(FormContext); 
  const [emailSent, setEmailSent] = useState(false);
  const auth = useAuth();
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  
  async function submitHandler(e : FormEvent<HTMLFormElement>) {
      e.preventDefault();
      for(const error of Object.values(inputErrors)) {
        if(error) return
      }

      try {
          const res = await login({
              email: user.email,
              password: user.password
            });
          
          auth.login(res.data.user, res.data.token);
          navigate("/");
          setErrorMsg("");
      }
      catch (error) {
          if(axios.isAxiosError(error)) {
              const errorMsg = error.response?.data.msg
              if(errorMsg === "Please verify your email before logging in") {
                setEmailSent(true);
              }
              else if(errorMsg === "Invalid email or password") {
                setErrorMsg(`${errorMsg}.`);
              }
          }
          else {
              console.log(error);
          }
      }
  }

  const handleRequestOTP = async () => {
      try {
          await requestOtp(user.email);

          localStorage.setItem("email", user.email);

          navigate("/auth/verify-email");
      }
      catch(error) {
        if(axios.isAxiosError(error)) {
          const errorMsg = error.response?.data.msg;

          if(errorMsg === "Email is required") {
            setInputErrors(prev => ({...prev, email_msg : `${errorMsg}.`}));
          }
        }
        else {
          throw new Error("Failed to send data");
        }
      }
  }

  return (
  <>
    {emailSent ? (
      <Card>
        <Header title="Email is not verified!" content="Click the button to send verification code to your email."/>
        <button 
          onClick={async () => {await handleRequestOTP()}} 
          className={`bg-gray-600 text-white text-xl "w-full" p-2 rounded-lg shadow hover:cursor-pointer hover:scale-95 transition-all delay-75`}>Send verification code</button>
      </Card>
    ) : (
      <FormContainer>
        <Header
          title="Welcome Back!"
          content="Im waiting for you, please enter your detail"
        />
        <Form submitHandler={submitHandler}>
          <Input type="email" id="email">
            Email
          </Input>
          <Input type="password" id="password">
            Password
          </Input>
          <section className="flex justify-between items-center w-full gap-3 sm:gap-5 px-3 sm:px-5">
            <p className="flex items-center gap-3 text-sm">
            </p>
            <Link
              to="/auth/forget-password"
              className="text-gray-600 text-sm hover:text-gray-400 transition-colors delay-100"
            >
              Forget Password ?
            </Link>
          </section>
          <SubmitButton>Login</SubmitButton>
          <p className="text-red-500 font-semibold">{errorMsg}</p>
          <CreateAccount />
        </Form>
      </FormContainer>
    )}
  </>
)}
````

## File: src/features/auth/pages/ResetPasswordPage.tsx
````typescript
import { useContext, useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../components/Card";
import Form from "../components/Form";
import Header from "../components/Header";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";


import { FormContext } from "@/context/FormContext";

import axios from "axios";
import SuccessMessagePage from "./SuccessMessagePage";
import { resetPassword } from "@/services/authService";

export default function ResetPasswordPage() {
    const {user, inputErrors, setUser} = useContext(FormContext);
    const [expired, setExpired] = useState(false);
    const [passwordReset, setPasswordReset] = useState(false);
    const navigate = useNavigate();
    const { token } = useParams();

    async function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        for(const error of Object.values(inputErrors)) {
            if(error) return;
        }

        try {
            await resetPassword(token, user.password);

            setUser({firstName : "", secondName : "", email : "", password : "", confirmPassword : ""});

            setPasswordReset(true);
        }
        catch(error) {
            if(axios.isAxiosError(error)) {
                const errorMsg = error.response?.data.msg;

                if(errorMsg === "Invalid or expired token") {
                    setExpired(true);
                }
            } 
        }
    }
    
    return (
        <Card>
            {passwordReset? 
            (
                <SuccessMessagePage title={
                    <>
                        Password Changed <br /> Successfully!
                    </>
                }/>
            ) : (
                <>
                <Header 
                    title={expired ? "Reset link has expired" : "Reset Password"} 
                    content={expired ? "Press The button to request a new link." : "Enter your new password"}/>
                    {expired ? (
                        <button onClick={() => navigate("/auth/forget-password")} 
                            className={`bg-gray-600 text-white text-xl "w-full" p-2 rounded-lg shadow hover:cursor-pointer hover:scale-95 transition-all delay-75`}>
                            Request new link
                        </button>
                    ) : (
                        <Form submitHandler={submitHandler}>
                            <div className="flex flex-col gap-5 my-5">
                                <Input type="password" id="password">New Password</Input>
                                <Input type="password" id="confirmPassword">Confirm Password</Input>
                            </div>
                            <SubmitButton size="full">Reset Password</SubmitButton>
                        </Form>
                    )}
               </> 
            )}
        </Card>         
    )
}
````

## File: src/features/auth/pages/SignupPage.tsx
````typescript
import { useContext, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Form from "../components/Form";
import FormContainer from "../components/FormContainer";
import FormDivider from "../components/FormDivider";
import Header from "../components/Header";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

import { FormContext } from "@/context/FormContext";
import { signup } from "@/services/authService";

export default function SignupPage () {
    const {user, inputErrors, setInputErrors} = useContext(FormContext); 
    const navigate = useNavigate();
    
    async function submitHandler(e : FormEvent<HTMLFormElement>) {
        e.preventDefault();
        for(const error of Object.values(inputErrors)) {
            if(error) return
        }

        try {
            await signup({...user});

            localStorage.setItem("email", user.email);
            navigate("/auth/verify-email");
        }
        catch (error) {
            if(axios.isAxiosError(error)) {
                const errorMsg = error.response?.data.msg
                if(errorMsg === "Email is already used") {
                    setInputErrors(prev => ({...prev, email_msg : `${errorMsg}.`}));
                }
            }
            else {
                throw new Error("Failed to send data");
            }
        }
    }

    return (
        <FormContainer>
            <Header title="Create an Account" content="Enter your details to sign up"/>
            <Form submitHandler={submitHandler}>
                <Input type="email" id="email">Email</Input>
                <Input type="text" id="fullname">Full Name</Input>
                <Input type="password" id="password">Password</Input>
                <Input type="password" id="confirmPassword">Confirm Password</Input>
                <p className="text-[16px] sm:text-xl tracking-tighter">
                    Already have an account ? <Link to="/auth/login" className="text-gray-600 ms-2 hover:text-gray-400 transition-colors delay-100">Login</Link>
                </p>
                <SubmitButton>Sign Up</SubmitButton>
            </Form>
        </FormContainer>
    )
}
````

## File: src/features/auth/pages/SuccessMessagePage.tsx
````typescript
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import checkMark from "@/assets/verify.png";

const SuccessMessagePage : FC<{title : ReactNode}> = ({ title }) => {
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col items-center gap-10 p-0 sm:px-10">
            <img src={checkMark} alt="check mark" className="w-32"/>
            <h1 className="text-3xl sm:text-5xl font-semibold text-center">{title}</h1>
            <button onClick={() => navigate("/auth/login")}
                className={`bg-gray-600 text-white text-xl "w-full" p-2 rounded-lg shadow hover:cursor-pointer hover:scale-95 transition-all delay-75`}>
                Return to login page
            </button>
        </div>
    )
}

export default SuccessMessagePage;
````

## File: src/features/chat/pages/ChatInboxPage.tsx
````typescript
import { useCallback, useEffect, useState } from "react";
import { useNavigate }                 from "react-router-dom";

import NavBar                          from "@/features/properties/components/NavBar";
import { useAuth }                     from "@/context/AuthContext";
import { useChatSync }                 from "@/context/ChatSyncProvider";
import { getSocket }                   from "@/api/socket";
import { BASE_URL }                    from "@/api/axiosInstance";
import {
  getInbox,
  hydrateInboxChat,
  rememberChatContext,
  type InboxChat,
  type SocketChatMessage,
} from "@/services/chatService";

// ─── Resolve image URL (same logic as propertyService) ────────────────────────
const resolveImg = (raw: string | null | undefined): string => {
  if (!raw) return "";
  if (raw.startsWith("http")) return raw;
  return `${BASE_URL}/${raw.replace(/^\//, "").replace(/\\/g, "/")}`;
};

const parseImages = (raw: string[] | string | null | undefined): string[] => {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  try { return JSON.parse(raw); } catch { return []; }
};

// ─── Relative time formatter ──────────────────────────────────────────────────
const timeAgo = (iso: string | null): string => {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1)  return "Just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 7)  return `${d}d ago`;
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
};

export default function ChatInboxPage() {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const { refreshInboxCount } = useChatSync();

  const [chats,   setChats]   = useState<InboxChat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);

  const loadInbox = useCallback(async () => {
    const res = await getInbox();
    const nextChats = (res.data.data ?? []).map((chat) => {
      const hydrated = hydrateInboxChat(chat);

      rememberChatContext(hydrated.chat_id, {
        property_id: hydrated.property_id,
        property_name: hydrated.property_name,
        property_img: parseImages(hydrated.property_images)[0] ?? null,
        partner_id: hydrated.partner_id,
        partner_name: hydrated.partner_name,
      });

      return hydrated;
    });

    setChats(nextChats);
  }, []);

  // ── Initial fetch ─────────────────────────────────────────────────────────
  useEffect(() => {
    loadInbox()
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [loadInbox]);

  // ── Socket: live inbox updates ────────────────────────────────────────────
  // When a new message arrives for any chat, update last_message + unread_count
  useEffect(() => {
    const attach = () => {
      const socket = getSocket();
      if (!socket) return false;

      const handler = (msg: SocketChatMessage) => {
        setChats((prev) => {
          const exists = prev.find((c) => c.chat_id === msg.chat_id);
          if (!exists) {
            rememberChatContext(msg.chat_id, {
              property_id: msg.property_id,
              partner_id: msg.sender_id === userInfo?.id ? undefined : msg.sender_id,
            });
            // Unknown chat — refresh inbox to get full details
            loadInbox().catch(() => {});
            return prev;
          }

          rememberChatContext(exists.chat_id, {
            property_id: msg.property_id ?? exists.property_id,
            property_name: exists.property_name,
            property_img: parseImages(exists.property_images)[0] ?? null,
            partner_id: exists.partner_id,
            partner_name: exists.partner_name,
          });

          const nextUnreadCount = msg.sender_id === userInfo?.id
            ? exists.unread_count
            : exists.unread_count + 1;

          // Move this chat to the top and update last message
          const updated: InboxChat = {
            ...exists,
            last_message:      msg.content,
            last_message_time: new Date(msg.created_at).toISOString(),
            property_id:       msg.property_id ?? exists.property_id ?? null,
            unread_count:      nextUnreadCount,
          };
          return [updated, ...prev.filter((c) => c.chat_id !== msg.chat_id)];
        });
      };

      socket.on("new_chat_message", handler);
      return () => { socket.off("new_chat_message", handler); };
    };

    const cleanup = attach();
    if (cleanup) return cleanup;
    const t = setTimeout(() => attach(), 1500);
    return () => clearTimeout(t);
  }, [loadInbox, userInfo?.id]);

  const navigateToChat = (chat: InboxChat) => {
    rememberChatContext(chat.chat_id, {
      property_id: chat.property_id,
      property_name: chat.property_name,
      property_img: parseImages(chat.property_images)[0] ?? null,
      partner_id: chat.partner_id,
      partner_name: chat.partner_name,
    });
    setChats((prev) =>
      prev.map((current) =>
        current.chat_id === chat.chat_id
          ? { ...current, unread_count: 0 }
          : current,
      ),
    );

    navigate(`/chat/${chat.chat_id}`, {
      state: {
        partnerName:  chat.partner_name,
        partnerId:    chat.partner_id,
        propertyId:   chat.property_id,
        propertyName: chat.property_name,
        propertyImg:  parseImages(chat.property_images)[0] ?? null,
      },
    });

    refreshInboxCount();
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-500 text-sm mt-1">Your conversations with property owners and renters.</p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-16">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="text-center py-20 space-y-3">
              <p className="text-4xl">⚠️</p>
              <p className="text-gray-600 font-semibold">Failed to load messages.</p>
              <button
                onClick={() => {
                  setError(false);
                  setLoading(true);
                  loadInbox()
                    .catch(() => setError(true))
                    .finally(() => setLoading(false));
                }}
                className="mt-2 bg-dark-knight text-white px-5 py-2 rounded-xl text-sm font-bold hover:opacity-90 transition cursor-pointer"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && chats.length === 0 && (
            <div className="text-center py-24 space-y-3">
              <p className="text-6xl">💬</p>
              <p className="text-xl font-bold text-gray-700">No messages yet.</p>
              <p className="text-gray-400 text-sm">
                When you contact a property owner, your conversation will appear here.
              </p>
            </div>
          )}

          {/* Chat list */}
          <div className="space-y-2">
            {chats.map((chat) => {
              const img    = resolveImg(parseImages(chat.property_images)[0]);
              const unread = chat.unread_count > 0;

              return (
                <button
                  key={chat.chat_id}
                  type="button"
                  onClick={() => navigateToChat(chat)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition cursor-pointer
                    ${unread
                      ? "bg-amber-50 border-amber-200 hover:bg-amber-100"
                      : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"}`}
                >
                  {/* Property thumbnail / avatar */}
                  <div className="relative shrink-0">
                    {img ? (
                      <img
                        src={img}
                        alt={chat.property_name}
                        className="w-14 h-14 rounded-xl object-cover"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center text-2xl">
                        🏠
                      </div>
                    )}
                    {unread && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 text-black rounded-full text-[10px] font-bold flex items-center justify-center">
                        {chat.unread_count > 9 ? "9+" : chat.unread_count}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-sm truncate ${unread ? "font-bold text-gray-900" : "font-semibold text-gray-800"}`}>
                        {chat.partner_name}
                      </p>
                      <p className="text-[10px] text-gray-400 shrink-0">
                        {timeAgo(chat.last_message_time)}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 truncate mb-0.5">
                      📍 {chat.is_property_deleted ? "Listing Removed" : chat.property_name}
                    </p>
                    <p className={`text-xs truncate ${unread ? "text-gray-700 font-semibold" : "text-gray-400"}`}>
                      {chat.last_message ?? "Start the conversation…"}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="w-4 h-4 text-gray-300 shrink-0">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
````

## File: src/features/chat/pages/ChatWindowPage.tsx
````typescript
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams }      from "react-router-dom";

import { getSocket }                                from "@/api/socket";
import { useAuth }                                  from "@/context/AuthContext";
import { useChatSync }                              from "@/context/ChatSyncProvider";
import { useToast }                                 from "@/context/ToastContext";
import NavBar                                       from "@/features/properties/components/NavBar";
import {
  getChatHistory,
  getInboxChatById,
  getRememberedChatContext,
  markChatAsRead,
  rememberChatContext,
  sendMessage,
  type ChatMessage,
  type SocketChatMessage,
}                                                   from "@/services/chatService";

// ─── Timestamp formatting ─────────────────────────────────────────────────────
const fmtTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

const fmtDate = (iso: string) => {
  const d = new Date(iso);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (d.toDateString() === today.toDateString())     return "Today";
  if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
};

const parseImages = (raw: string[] | string | null | undefined): string[] => {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  try { return JSON.parse(raw); } catch { return []; }
};

// ─── Day divider ──────────────────────────────────────────────────────────────
const DayDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3 my-4">
    <div className="flex-1 h-px bg-gray-200" />
    <span className="text-[11px] text-gray-400 font-semibold">{label}</span>
    <div className="flex-1 h-px bg-gray-200" />
  </div>
);

// ─── Group messages by day ────────────────────────────────────────────────────
type DayGroup = { date: string; messages: ChatMessage[] };
const groupByDay = (msgs: ChatMessage[]): DayGroup[] => {
  const map = new Map<string, ChatMessage[]>();
  msgs.forEach((m) => {
    const key = new Date(m.created_at).toDateString();
    map.set(key, [...(map.get(key) ?? []), m]);
  });
  return Array.from(map.entries()).map(([date, messages]) => ({ date, messages }));
};

interface ChatNavState {
  partnerName?: string;
  partnerId?: string;
  propertyId?: number | string | null;
  propertyName?: string;
  propertyImg?: string | null;
}

interface ChatContextState {
  partnerName: string;
  partnerId: string;
  propertyId: number | string | null;
  propertyName: string;
  propertyImg: string | null;
}

const EMPTY_CHAT_CONTEXT: ChatContextState = {
  partnerName: "Chat",
  partnerId: "",
  propertyId: null,
  propertyName: "",
  propertyImg: null,
};

const pickText = (...values: Array<string | null | undefined>) => {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value;
  }
  return "";
};

const readKnownChatContext = (
  chatId: string | undefined,
  state: ChatNavState | null,
): Partial<ChatContextState> => {
  const remembered = chatId ? getRememberedChatContext(chatId) : null;

  return {
    partnerName: state?.partnerName ?? remembered?.partner_name,
    partnerId: state?.partnerId ?? remembered?.partner_id,
    propertyId: state?.propertyId ?? remembered?.property_id ?? null,
    propertyName: state?.propertyName ?? remembered?.property_name,
    propertyImg: state?.propertyImg ?? remembered?.property_img ?? null,
  };
};

const mergeChatContext = (
  current: ChatContextState,
  incoming: Partial<ChatContextState>,
): ChatContextState => ({
  partnerName: pickText(incoming.partnerName, current.partnerName) || "Chat",
  partnerId: pickText(incoming.partnerId, current.partnerId),
  propertyId: incoming.propertyId ?? current.propertyId ?? null,
  propertyName: pickText(incoming.propertyName, current.propertyName),
  propertyImg: incoming.propertyImg ?? current.propertyImg ?? null,
});

export default function ChatWindowPage() {
  const { chat_id }  = useParams<{ chat_id: string }>();
  const location     = useLocation();
  const navigate     = useNavigate();
  const { userInfo } = useAuth();
  const { refreshInboxCount } = useChatSync();
  const toast        = useToast();
  const userId       = userInfo?.id ?? "";

  const state = location.state as ChatNavState | null;

  const [chatContext, setChatContext] = useState<ChatContextState>(() =>
    mergeChatContext(EMPTY_CHAT_CONTEXT, readKnownChatContext(chat_id, state)),
  );
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [contextLoading, setContextLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContextRef = useRef(chatContext);

  useEffect(() => {
    chatContextRef.current = chatContext;
  }, [chatContext]);

  const persistChatContext = useCallback((nextContext: ChatContextState) => {
    if (!chat_id) return;

    rememberChatContext(chat_id, {
      property_id: nextContext.propertyId,
      property_name: nextContext.propertyName,
      property_img: nextContext.propertyImg,
      partner_id: nextContext.partnerId,
      partner_name: nextContext.partnerName,
    });
  }, [chat_id]);

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    bottomRef.current?.scrollIntoView({ behavior });
  };

  const loadHistory = useCallback(async () => {
    if (!chat_id) return;

    setLoading(true);
    setError(false);

    try {
      const res = await getChatHistory(chat_id);
      setMessages(res.data.data ?? []);
      markChatAsRead(chat_id).catch(() => {});
      refreshInboxCount();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [chat_id, refreshInboxCount]);

  // ── Load history ──────────────────────────────────────────────────────────
  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  // ── Restore partner/property context from state, storage, then inbox ─────
  useEffect(() => {
    if (!chat_id) {
      setContextLoading(false);
      return;
    }

    let cancelled = false;
    const baseContext = mergeChatContext(
      EMPTY_CHAT_CONTEXT,
      readKnownChatContext(chat_id, state),
    );

    setChatContext((current) => mergeChatContext(current, baseContext));

    const needsInboxHydration =
      !baseContext.partnerId
      || !baseContext.partnerName
      || !baseContext.propertyName
      || baseContext.propertyId === null;

    if (!needsInboxHydration) {
      setContextLoading(false);
      return;
    }

    setContextLoading(true);

    const hydrateFromInbox = async () => {
      try {
        const inboxChat = await getInboxChatById(chat_id);
        if (!inboxChat || cancelled) return;

        const nextContext = mergeChatContext(baseContext, {
          partnerName: inboxChat.partner_name,
          partnerId: inboxChat.partner_id,
          propertyId: inboxChat.property_id ?? null,
          propertyName: inboxChat.property_name,
          propertyImg: parseImages(inboxChat.property_images)[0] ?? null,
        });

        setChatContext((current) => mergeChatContext(current, nextContext));
      } catch {
        // Leave the existing fallback warning if the backend cannot restore this chat.
      } finally {
        if (!cancelled) setContextLoading(false);
      }
    };

    hydrateFromInbox();

    return () => {
      cancelled = true;
    };
  }, [
    chat_id,
    state?.partnerId,
    state?.partnerName,
    state?.propertyId,
    state?.propertyImg,
    state?.propertyName,
  ]);

  useEffect(() => {
    persistChatContext(chatContext);
  }, [chatContext, persistChatContext]);

  // ── Scroll to bottom when messages load or change ─────────────────────────
  useEffect(() => {
    scrollToBottom("auto");
  }, [loading]);

  useEffect(() => {
    scrollToBottom("smooth");
  }, [messages.length]);

  // ── Socket: receive messages from the other person ────────────────────────
  useEffect(() => {
    const attach = () => {
      const socket = getSocket();
      if (!socket || !chat_id) return false;

      const handler = (msg: SocketChatMessage) => {
        if (msg.chat_id !== chat_id) return;
        if (msg.sender_id === userId) return;

        const nextContext = mergeChatContext(chatContextRef.current, {
          partnerId: msg.sender_id,
          propertyId: msg.property_id ?? null,
        });

        setChatContext(nextContext);
        persistChatContext(nextContext);
        setContextLoading(false);

        setMessages((prev) => [
          ...prev,
          {
            message_id: `socket-${Date.now()}`,
            sender_id: msg.sender_id,
            content: msg.content,
            is_read: false,
            created_at: msg.created_at
              ? new Date(msg.created_at).toISOString()
              : new Date().toISOString(),
          },
        ]);

        markChatAsRead(chat_id).catch(() => {});
      };

      socket.on("new_chat_message", handler);
      return () => { socket.off("new_chat_message", handler); };
    };

    const cleanup = attach();
    if (cleanup) return cleanup;
    const timer = setTimeout(() => attach(), 1500);
    return () => clearTimeout(timer);
  }, [chat_id, persistChatContext, userId]);

  // ── Send message ──────────────────────────────────────────────────────────
  const handleSend = useCallback(async () => {
    const text = content.trim();
    if (!text || sending || !chatContext.partnerId || !chat_id) return;

    if (!chatContext.propertyId) {
      toast.error("Cannot send: property context is missing. Please re-open this chat.");
      return;
    }

    setSending(true);
    setContent("");

    const optimistic: ChatMessage = {
      message_id: `opt-${Date.now()}`,
      sender_id: userId,
      content: text,
      is_read: true,
      created_at: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimistic]);

    try {
      await sendMessage(chatContext.partnerId, chatContext.propertyId, text);
      persistChatContext(chatContext);
    } catch {
      setMessages((prev) => prev.filter((m) => m.message_id !== optimistic.message_id));
      setContent(text);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }, [chatContext, chat_id, content, persistChatContext, sending, toast, userId]);

  // ── Enter to send, Shift+Enter for new line ───────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ── Auto-resize textarea ──────────────────────────────────────────────────
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  const dayGroups = groupByDay(messages);
  const canReply = Boolean(chatContext.partnerId && chatContext.propertyId);
  const showInvalidContextWarning = !contextLoading && !canReply;

  return (
    <>
      <NavBar />
      <div className="flex flex-col h-[calc(100vh-56px)] bg-gray-50">

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 shadow-sm">
          <button
            type="button"
            onClick={() => navigate("/chat")}
            className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="w-10 h-10 rounded-full bg-amber-300 text-dark-knight flex items-center justify-center font-bold text-sm shrink-0">
            {chatContext.partnerName?.[0]?.toUpperCase() ?? "?"}
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-sm truncate">
              {chatContext.partnerName}
            </p>
            {chatContext.propertyName && (
              <p className="text-xs text-gray-400 truncate">
                📍 {chatContext.propertyName}
              </p>
            )}
          </div>
        </div>

        {/* ── Messages area ────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">

          {loading && (
            <div className="flex justify-center py-10">
              <div className="w-8 h-8 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <p className="text-4xl">⚠️</p>
              <p className="text-gray-600 font-semibold">Failed to load messages.</p>
              <button
                onClick={() => {
                  loadHistory();
                }}
                className="bg-dark-knight text-white px-4 py-2 rounded-xl text-sm font-bold cursor-pointer"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && messages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-2">
              <p className="text-5xl">👋</p>
              <p className="text-gray-600 font-semibold">No messages yet.</p>
              <p className="text-gray-400 text-sm">Send a message to start the conversation.</p>
            </div>
          )}

          {!loading && !error && dayGroups.map((group) => (
            <div key={group.date}>
              <DayDivider label={fmtDate(group.messages[0].created_at)} />

              {group.messages.map((msg, idx) => {
                const isMe = msg.sender_id === userId;
                const prevMsg = group.messages[idx - 1];
                const sameSender = prevMsg?.sender_id === msg.sender_id;
                const isOptimistic =
                  msg.message_id.startsWith("opt-") || msg.message_id.startsWith("socket-");

                return (
                  <div
                    key={msg.message_id}
                    className={`flex ${isMe ? "justify-end" : "justify-start"} ${sameSender ? "mt-0.5" : "mt-3"}`}
                  >
                    {!isMe && !sameSender && (
                      <div className="w-7 h-7 rounded-full bg-amber-300 text-dark-knight flex items-center justify-center text-xs font-bold shrink-0 mr-2 mt-0.5">
                        {chatContext.partnerName?.[0]?.toUpperCase() ?? "?"}
                      </div>
                    )}
                    {!isMe && sameSender && <div className="w-7 mr-2 shrink-0" />}

                    <div className={`max-w-[70%] ${isMe ? "items-end" : "items-start"} flex flex-col`}>
                      <div
                        className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed
                          ${isMe
                            ? "bg-dark-knight text-white rounded-br-sm"
                            : "bg-white text-gray-800 rounded-bl-sm border border-gray-100 shadow-sm"}
                          ${isOptimistic && isMe ? "opacity-75" : "opacity-100"}`}
                      >
                        {msg.content}
                      </div>
                      {(group.messages[idx + 1]?.sender_id !== msg.sender_id || idx === group.messages.length - 1) && (
                        <p className={`text-[10px] text-gray-400 mt-1 ${isMe ? "text-right" : "text-left"}`}>
                          {fmtTime(msg.created_at)}
                          {isMe && (
                            <span className="ml-1">
                              {Number(msg.is_read) ? " ✓✓" : " ✓"}
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          <div ref={bottomRef} />
        </div>

        {/* ── Input bar ────────────────────────────────────────────────── */}
        <div className="bg-white border-t border-gray-100 px-4 py-3">
          {contextLoading && !canReply && (
            <div className="mx-auto mb-3 flex max-w-2xl items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-dark-knight border-t-transparent" />
              Restoring this conversation’s property context…
            </div>
          )}
          {showInvalidContextWarning && (
            <div className="mx-auto mb-3 max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              You can read this conversation, but replying is temporarily unavailable because the server did not return the property link for this chat. Re-open it from the property page to restore the full context.
            </div>
          )}
          <div className="flex items-end gap-3 max-w-2xl mx-auto">
            <textarea
              ref={inputRef}
              value={content}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={contextLoading || !canReply}
              placeholder={
                contextLoading
                  ? "Restoring conversation details…"
                  : "Type a message… (Enter to send, Shift+Enter for new line)"
              }
              rows={1}
              className="flex-1 resize-none border border-gray-200 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition max-h-[120px] overflow-y-auto"
              style={{ lineHeight: "1.5" }}
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={contextLoading || !canReply || !content.trim() || sending}
              className="w-10 h-10 bg-dark-knight text-white rounded-full flex items-center justify-center shrink-0 hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {sending ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 rotate-90">
                  <path d="M2 21L23 12 2 3v7l15 2-15 2z"/>
                </svg>
              )}
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
````

## File: src/features/chat/pages/NewChatPage.tsx
````typescript
import { useState }                  from "react";
import { useNavigate, useLocation }  from "react-router-dom";

import NavBar                        from "@/features/properties/components/NavBar";
import { rememberChatContext, sendMessage } from "@/services/chatService";
import { useToast }                  from "@/context/ToastContext";
import { useAuth }                   from "@/context/AuthContext";
import { BASE_URL }                  from "@/api/axiosInstance";

interface NewChatState {
  receiverId:   string;
  propertyId:   number | string;
  propertyName: string;
  propertyImg?: string | null;
  partnerName:  string;
}

export default function NewChatPage() {
  const navigate   = useNavigate();
  const location   = useLocation();
  const toast      = useToast();
  const { userInfo } = useAuth();

  const state = location.state as NewChatState | null;

  const [content,  setContent]  = useState("");
  const [sending,  setSending]  = useState(false);
  const propertyImg = state?.propertyImg ?? null;

  const imgSrc = propertyImg
    ? (propertyImg.startsWith("http")
        ? propertyImg
        : `${BASE_URL}/${propertyImg.replace(/^\//, "")}`)
    : null;

  const handleSend = async () => {
    if (!state?.receiverId || !state?.propertyId) return;

    const text = content.trim();
    if (!text || sending) return;

    setSending(true);
    try {
      const res    = await sendMessage(state.receiverId, state.propertyId, text);
      const chatId = res.data.data.chat_id;

      rememberChatContext(chatId, {
        property_id: state.propertyId,
        property_name: state.propertyName,
        property_img: state.propertyImg ?? null,
        partner_id: state.receiverId,
        partner_name: state.partnerName,
      });

      navigate(`/chat/${chatId}`, {
        replace: true,
        state: {
          partnerName:  state.partnerName,
          partnerId:    state.receiverId,
          propertyId:   state.propertyId,
          propertyName: state.propertyName,
          propertyImg:  state.propertyImg ?? null,
        },
      });
    } catch {
      toast.error("Failed to send message. Please try again.");
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 140)}px`;
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <div className="w-full max-w-lg">
          {!state?.receiverId || !state?.propertyId ? (
            <div className="space-y-5 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="space-y-2 text-center">
                <p className="text-5xl">💬</p>
                <h1 className="text-2xl font-bold text-gray-900">Chat Context Missing</h1>
                <p className="text-sm leading-relaxed text-gray-500">
                  We need a property and recipient before starting a conversation. Please open chat from a property page or your inbox.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/chat")}
                  className="rounded-xl bg-dark-knight px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 cursor-pointer"
                >
                  Open Inbox
                </button>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold transition hover:bg-gray-50 cursor-pointer"
                >
                  Go Back
                </button>
              </div>
            </div>
          ) : (
            <>

          {/* Back */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-sm text-gray-500 hover:text-gray-900 font-semibold mb-6 flex items-center gap-1 transition cursor-pointer"
          >
            ← Back
          </button>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">New Message</h1>
          <p className="text-gray-500 text-sm mb-6">
            You're starting a conversation about this property.
          </p>

          {/* Property preview card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex gap-4 p-4 mb-6">
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={state.propertyName}
                className="w-20 h-16 rounded-xl object-cover shrink-0"
              />
            ) : (
              <div className="w-20 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-2xl shrink-0">
                🏠
              </div>
            )}
            <div className="min-w-0">
              <p className="font-bold text-gray-900 text-sm truncate">{state.propertyName}</p>
              <p className="text-xs text-gray-500 mt-0.5">
                To: <span className="font-semibold text-gray-700">{state.partnerName}</span>
              </p>
            </div>
          </div>

          {/* Your name chip */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-300 text-dark-knight flex items-center justify-center text-xs font-bold shrink-0">
              {userInfo?.firstName?.[0]?.toUpperCase() ?? "?"}
            </div>
            <p className="text-sm font-semibold text-gray-700">
              {userInfo?.firstName} {userInfo?.secondName}
            </p>
          </div>

          {/* Message input */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-4">
            <textarea
              value={content}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Hi, I'm interested in this property and would like to know more…"
              rows={4}
              className="w-full resize-none border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
              autoFocus
            />

            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-gray-400">
                Enter to send · Shift+Enter for new line
              </p>
              <button
                type="button"
                onClick={handleSend}
                disabled={!content.trim() || sending}
                className="flex items-center gap-2 bg-dark-knight text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Message →"
                )}
              </button>
            </div>
          </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
````

## File: src/features/invoices/components/InvoiceCard.tsx
````typescript
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Invoice } from "@/types";
import {
  buildInvoicePaymentSuccessUrl,
  getInvoicePaymentLink,
  savePendingInvoicePayment,
} from "@/services/paymentService";
import { useToast } from "@/context/ToastContext";
import { getApiErrorMessage } from "@/utils/apiError";

const STATUS_STYLES: Record<string, string> = {
  UNPAID:  "bg-amber-100 text-amber-700",
  PAID:    "bg-green-100 text-green-700",
  OVERDUE: "bg-red-100 text-red-600",
  VOID:    "bg-gray-100 text-gray-500",
};

interface Props {
  invoice: Invoice;
}

export default function InvoiceCard({ invoice }: Props) {
  const navigate = useNavigate();
  const toast = useToast();
  const [paying, setPaying] = useState(false);

  const due = new Date(invoice.due_date);
  const today = new Date();
  const daysUntilDue = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  const isOverdue = invoice.status === "OVERDUE";

  const handlePay = async () => {
    if (paying) return;
    try {
      setPaying(true);
      savePendingInvoicePayment(invoice.invoice_id);
      const res = await getInvoicePaymentLink(
        invoice.invoice_id,
        buildInvoicePaymentSuccessUrl(invoice.invoice_id),
      );
      const paymentUrl = res.data?.url;
      if (typeof paymentUrl !== "string" || !paymentUrl) {
        throw new Error("Missing payment URL");
      }
      window.location.assign(paymentUrl);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Could not start payment."));
      setPaying(false);
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl border shadow-sm p-5 space-y-3 hover:shadow-md transition ${
        isOverdue ? "border-red-200" : "border-gray-100"
      }`}
    >
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="font-bold text-gray-900 text-sm">{invoice.property_name}</p>
          <p className="text-[11px] text-gray-400 mt-0.5">{invoice.location}</p>
        </div>
        <span
          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${STATUS_STYLES[invoice.status] ?? "bg-gray-100 text-gray-500"}`}
        >
          {invoice.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
        <p>Amount: <span className="font-semibold text-gray-800">EGP {Number(invoice.amount).toLocaleString()}</span></p>
        <p>Due: <span className="font-semibold text-gray-800">{invoice.due_date}</span></p>
        {isOverdue && (
          <p className="col-span-2 text-red-600 font-semibold">
            {Math.abs(daysUntilDue)} day{Math.abs(daysUntilDue) !== 1 ? "s" : ""} overdue
          </p>
        )}
        {invoice.status === "UNPAID" && daysUntilDue > 0 && daysUntilDue <= 3 && (
          <p className="col-span-2 text-amber-600 font-semibold">
            Due in {daysUntilDue} day{daysUntilDue !== 1 ? "s" : ""}
          </p>
        )}
        {invoice.paid_at && (
          <p className="col-span-2">Paid: <span className="font-semibold text-gray-800">{invoice.paid_at?.slice(0, 10)}</span></p>
        )}
      </div>

      <div className="flex gap-2 flex-wrap pt-1">
        {(invoice.status === "UNPAID" || invoice.status === "OVERDUE") && (
          <button
            onClick={handlePay}
            disabled={paying}
            className="text-xs px-4 py-1.5 bg-dark-knight text-white rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
          >
            {paying ? "Redirecting..." : "Pay Now"}
          </button>
        )}
        <button
          onClick={() => navigate(`/leases`)}
          className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
        >
          View Lease
        </button>
      </div>
    </div>
  );
}
````

## File: src/features/invoices/components/InvoiceSummaryCards.tsx
````typescript
import type { InvoiceStats } from "@/types";

interface Props {
  stats: InvoiceStats["asRenter"];
  perspective: "renter";
}

interface OwnerProps {
  stats: InvoiceStats["asOwner"];
  perspective: "owner";
}

type UnionProps = Props | OwnerProps;

function fmt(amount: number) {
  return `EGP ${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
}

export default function InvoiceSummaryCards(props: UnionProps) {
  if (props.perspective === "renter") {
    const s = props.stats;
    const cards = [
      { label: "Total Due", value: fmt(s.total_due), color: "text-red-600" },
      { label: "Unpaid", value: s.unpaid_count, color: "text-amber-600" },
      { label: "Overdue", value: s.overdue_count, color: "text-red-600" },
      { label: "Paid", value: s.paid_count, color: "text-green-600" },
    ];

    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{c.label}</p>
            <p className={`text-xl font-bold mt-1 ${c.color}`}>{c.value}</p>
          </div>
        ))}
      </div>
    );
  }

  const s = (props as OwnerProps).stats;
  const cards = [
    { label: "Expected Income", value: fmt(s.expected_income), color: "text-green-600" },
    { label: "Pending", value: s.pending_count, color: "text-amber-600" },
    { label: "Collected", value: s.paid_count, color: "text-green-600" },
    { label: "Delinquent Tenants", value: s.delinquent_tenants, color: "text-red-600" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {cards.map((c) => (
        <div key={c.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{c.label}</p>
          <p className={`text-xl font-bold mt-1 ${c.color}`}>{c.value}</p>
        </div>
      ))}
    </div>
  );
}
````

## File: src/features/invoices/pages/InvoicesPage.tsx
````typescript
import { useEffect, useState } from "react";

import NavBar from "@/features/properties/components/NavBar";
import InvoiceCard from "@/features/invoices/components/InvoiceCard";
import InvoiceSummaryCards from "@/features/invoices/components/InvoiceSummaryCards";
import {
  getRenterInvoices,
  getOwnerInvoices,
  getInvoiceStats,
} from "@/services/invoiceService";
import { useToast } from "@/context/ToastContext";
import type { Invoice, InvoiceStats } from "@/types";

export default function InvoicesPage() {
  const toast = useToast();

  const [renterInvoices, setRenterInvoices] = useState<Invoice[]>([]);
  const [ownerInvoices, setOwnerInvoices] = useState<Invoice[]>([]);
  const [stats, setStats] = useState<InvoiceStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"renter" | "owner">("renter");

  useEffect(() => {
    Promise.allSettled([
      getRenterInvoices(),
      getOwnerInvoices(),
      getInvoiceStats(),
    ]).then(([r, o, s]) => {
      if (r.status === "fulfilled") setRenterInvoices(r.value.data.data ?? []);
      if (o.status === "fulfilled") setOwnerInvoices(o.value.data.data ?? []);
      if (s.status === "fulfilled") setStats(s.value.data.data ?? null);
      if (r.status === "rejected" && o.status === "rejected") {
        toast.error("Failed to load invoices.");
      }
    }).finally(() => setLoading(false));
  }, []);

  const current = tab === "renter" ? renterInvoices : ownerInvoices;

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Invoices</h1>
          <p className="text-gray-500 text-sm mb-6">
            View and pay your rent invoices.
          </p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {(["renter", "owner"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 px-4 text-sm font-bold transition border-b-2 -mb-px capitalize ${
                  tab === t
                    ? "border-dark-knight text-dark-knight"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                As {t}
                <span className="ml-1.5 text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full font-semibold">
                  {(t === "renter" ? renterInvoices : ownerInvoices).length}
                </span>
              </button>
            ))}
          </div>

          {/* Stats */}
          {!loading && stats && (
            <InvoiceSummaryCards
              {...(tab === "renter"
                ? { stats: stats.asRenter, perspective: "renter" as const }
                : { stats: stats.asOwner, perspective: "owner" as const })}
            />
          )}

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-16">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Empty */}
          {!loading && current.length === 0 && (
            <div className="text-center py-20 text-gray-400 space-y-2">
              <p className="text-5xl">📄</p>
              <p className="font-semibold">No invoices as {tab} yet.</p>
            </div>
          )}

          {/* Invoice list */}
          <div className="space-y-4">
            {current.map((inv) => (
              <InvoiceCard key={inv.invoice_id} invoice={inv} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
````

## File: src/features/lease/pages/LeaseDetailPage.tsx
````typescript
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import { getLeaseById } from "@/services/leaseService";
import { resolveImageUrl } from "@/services/propertyService";
import type { Lease } from "@/types";

const STATUS_STYLES: Record<string, string> = {
  UPCOMING:    "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-green-100 text-green-700",
  COMPLETED:   "bg-gray-100 text-gray-500",
  CANCELLED:   "bg-red-100 text-red-600",
  OVERDUE:     "bg-orange-100 text-orange-700",
};

export default function LeaseDetailPage() {
  const { leaseId } = useParams<{ leaseId: string }>();
  const [lease, setLease] = useState<Lease | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!leaseId) return;
    setLoading(true);
    getLeaseById(leaseId)
      .then((res) => setLease(res.data.data))
      .catch((err) => {
        setError(err.response?.data?.msg ?? "Failed to load lease.");
      })
      .finally(() => setLoading(false));
  }, [leaseId]);

  const fmt = (iso: string) => iso?.slice(0, 10) ?? "—";

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
        </div>
      </>
    );
  }

  if (error || !lease) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4 px-4">
          <p className="text-red-600 font-semibold">{error ?? "Lease not found."}</p>
          <Link to="/leases" className="text-sm text-dark-knight font-bold underline">Back to Leases</Link>
        </div>
      </>
    );
  }

  const imgs: string[] = lease.images
    ? (typeof lease.images === "string" ? JSON.parse(lease.images) : lease.images).map(resolveImageUrl)
    : [];

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/leases" className="text-sm text-dark-knight font-bold hover:underline mb-4 inline-block">
            &larr; Back to Leases
          </Link>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {lease.property_name ?? `Property #${lease.property_id}`}
                  </h1>
                  {lease.location && (
                    <p className="text-sm text-gray-500 mt-1">{lease.location}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-2">Lease ID: {lease.lease_id}</p>
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${STATUS_STYLES[lease.status] ?? "bg-gray-100 text-gray-500"}`}
                >
                  {lease.status}
                </span>
              </div>
            </div>

            {/* Property Image */}
            {imgs.length > 0 && (
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src={imgs[0]}
                  alt={lease.property_name ?? "Property"}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Details */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                <div>
                  <p className="text-gray-500">Renting Type</p>
                  <p className="font-semibold text-gray-900">{lease.renting_type}</p>
                </div>
                <div>
                  <p className="text-gray-500">Property ID</p>
                  <p className="font-semibold text-gray-900">#{lease.property_id}</p>
                </div>
                <div>
                  <p className="text-gray-500">Check-in Date</p>
                  <p className="font-semibold text-gray-900">{fmt(lease.check_in_date)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Check-out Date</p>
                  <p className="font-semibold text-gray-900">{fmt(lease.check_out_date)}</p>
                </div>
                {lease.price_value && (
                  <div>
                    <p className="text-gray-500">Monthly Rent</p>
                    <p className="font-semibold text-gray-900">EGP {Number(lease.price_value).toLocaleString()}</p>
                  </div>
                )}
                {lease.next_billing_date && (
                  <div>
                    <p className="text-gray-500">Next Billing Date</p>
                    <p className="font-semibold text-gray-900">{fmt(lease.next_billing_date)}</p>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <Link
                  to={`/rent/property/${lease.property_id}`}
                  className="px-5 py-2.5 bg-dark-knight text-white text-sm font-bold rounded-xl hover:opacity-90 transition"
                >
                  View Property
                </Link>
                <Link
                  to="/leases"
                  className="px-5 py-2.5 border border-gray-300 text-sm font-semibold rounded-xl hover:bg-gray-50 transition"
                >
                  All Leases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
````

## File: src/features/lease/pages/LeasesPage.tsx
````typescript
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import { getLeasesAsRenter, getLeasesAsOwner } from "@/services/leaseService";
import { useToast }    from "@/context/ToastContext";
import type { Lease }  from "@/types";

const STATUS_STYLES: Record<string, string> = {
  UPCOMING:    "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-green-100 text-green-700",
  COMPLETED:   "bg-gray-100 text-gray-500",
  CANCELLED:   "bg-red-100 text-red-600",
  OVERDUE:     "bg-orange-100 text-orange-700",
};

export default function LeasesPage() {
  const toast = useToast();
  const navigate = useNavigate();

  const [renterLeases, setRenterLeases] = useState<Lease[]>([]);
  const [ownerLeases,  setOwnerLeases]  = useState<Lease[]>([]);
  const [loading,      setLoading]      = useState(true);
  const [tab,          setTab]          = useState<"renter" | "owner">("renter");

  useEffect(() => {
    Promise.allSettled([getLeasesAsRenter(), getLeasesAsOwner()])
      .then(([r, o]) => {
        if (r.status === "fulfilled") setRenterLeases(r.value.data.data ?? []);
        if (o.status === "fulfilled") setOwnerLeases(o.value.data.data  ?? []);
        if (r.status === "rejected" && o.status === "rejected") {
          toast.error("Failed to load leases.");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const fmt = (iso: string) => iso?.slice(0, 10) ?? "—";

  const LeaseCard = ({ lease }: { lease: Lease }) => (
    <div
      onClick={() => navigate(`/leases/${lease.lease_id}`)}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3 hover:shadow-md hover:border-gray-300 transition cursor-pointer"
    >

      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="font-bold text-gray-900 text-sm">
            Lease #{lease.lease_id.slice(0, 8)}…
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5">Property ID: {lease.property_id}</p>
        </div>
        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${STATUS_STYLES[lease.status] ?? "bg-gray-100 text-gray-500"}`}>
          {lease.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
        <p>🔄 Type: <span>{lease.renting_type}</span></p>
        <p>📅 Check-in: <span>{fmt(lease.check_in_date)}</span></p>
        <p>📅 Check-out: <span>{fmt(lease.check_out_date)}</span></p>
        {lease.next_billing_date && (
          <p>🗓️ Next billing: <span>{fmt(lease.next_billing_date)}</span></p>
        )}
      </div>

    </div>
  );

  const current = tab === "renter" ? renterLeases : ownerLeases;

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-3xl font-bold text-gray-900 mb-1">Leases</h1>
          <p className="text-gray-500 text-sm mb-6">View active and past lease agreements.</p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {(["renter", "owner"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 px-4 text-sm font-bold transition border-b-2 -mb-px capitalize
                  ${tab === t
                    ? "border-dark-knight text-dark-knight"
                    : "border-transparent text-gray-400 hover:text-gray-600"}`}
              >
                As {t}
                <span className="ml-1.5 text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full font-semibold">
                  {(t === "renter" ? renterLeases : ownerLeases).length}
                </span>
              </button>
            ))}
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-16">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Empty */}
          {!loading && current.length === 0 && (
            <div className="text-center py-20 text-gray-400 space-y-2">
              <p className="text-5xl">📋</p>
              <p className="font-semibold">No leases as {tab} yet.</p>
            </div>
          )}

          {/* Cards */}
          <div className="space-y-4">
            {current.map((l) => <LeaseCard key={l.lease_id} lease={l} />)}
          </div>

        </div>
      </div>
    </>
  );
}
````

## File: src/features/payment/components/RentDueBanner.tsx
````typescript
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { useNotifications } from "@/context/NotificationsContext";
import { useToast } from "@/context/ToastContext";
import {
  buildInvoicePaymentSuccessUrl,
  getInvoicePaymentLink,
  savePendingInvoicePayment,
} from "@/services/paymentService";
import { getApiErrorMessage } from "@/utils/apiError";
import { parseNotificationMetadata } from "@/utils/notifications";

const ACTIONABLE_TYPES = new Set(["RENT_DUE_NOTICE", "PAYMENT_OVERDUE"]);

export default function RentDueBanner() {
  const { notifications } = useNotifications();
  const toast = useToast();
  const [paying, setPaying] = useState(false);

  const activeNotification = useMemo(() => {
    const actionable = notifications.filter((notification) => {
      const metadata = parseNotificationMetadata(notification.metadata);
      return !notification.viewed && ACTIONABLE_TYPES.has(notification.event_type) && metadata.invoice_id;
    });

    return actionable.find((notification) => notification.event_type === "PAYMENT_OVERDUE")
      ?? actionable[0]
      ?? null;
  }, [notifications]);

  if (!activeNotification) return null;

  const metadata = parseNotificationMetadata(activeNotification.metadata);
  const invoiceId = String(metadata.invoice_id ?? "");
  const isOverdue = activeNotification.event_type === "PAYMENT_OVERDUE";

  const handlePayInvoice = async () => {
    if (!invoiceId || paying) return;

    try {
      setPaying(true);
      savePendingInvoicePayment(invoiceId);
      const res = await getInvoicePaymentLink(invoiceId, buildInvoicePaymentSuccessUrl(invoiceId));
      const paymentUrl = res.data?.url;

      if (typeof paymentUrl !== "string" || !paymentUrl) {
        throw new Error("Missing payment URL");
      }

      window.location.assign(paymentUrl);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Could not start invoice payment."));
      setPaying(false);
    }
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-3xl">
      <div className={`rounded-2xl border px-4 py-3 shadow-2xl ${
        isOverdue
          ? "border-red-200 bg-red-50 text-red-800"
          : "border-amber-200 bg-amber-50 text-amber-900"
      }`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold">
              {isOverdue ? "Rent payment overdue" : "Rent payment due soon"}
            </p>
            <p className="mt-0.5 text-xs leading-relaxed">
              {activeNotification.notification_body || "Complete your rent invoice payment to keep the lease active."}
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Link
              to="/leases"
              className="rounded-xl border border-current px-4 py-2 text-xs font-bold transition hover:bg-white/50"
            >
              View Lease
            </Link>
            <button
              type="button"
              onClick={handlePayInvoice}
              disabled={paying}
              className="rounded-xl bg-dark-knight px-4 py-2 text-xs font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
            >
              {paying ? "Preparing..." : "Pay Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: src/features/payment/pages/InvoicePaymentStatusPage.tsx
````typescript
import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import {
  clearPendingInvoicePayment,
  loadPendingInvoicePayment,
} from "@/services/paymentService";

export default function InvoicePaymentStatusPage() {
  const [searchParams] = useSearchParams();

  const invoiceId = useMemo(() => {
    const queryId = searchParams.get("invoice_id");
    return queryId || loadPendingInvoicePayment()?.invoiceId || null;
  }, [searchParams]);

  useEffect(() => {
    if (invoiceId) clearPendingInvoicePayment();
  }, [invoiceId]);

  return (
    <>
      <NavBar />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-12 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-700">
          i
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Invoice Payment Submitted</h1>
          <p className="max-w-md leading-relaxed text-gray-500">
            The payment provider redirected you back to AQAR. The backend confirms invoice payments through its webhook, so your lease and notifications may take a moment to update.
          </p>
        </div>

        {invoiceId && (
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 text-left text-sm shadow-sm">
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Invoice</span>
              <span className="font-semibold text-gray-900">{invoiceId.slice(0, 8)}...</span>
            </div>
          </div>
        )}

        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/leases"
            className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
          >
            View Leases
          </Link>
          <Link
            to="/notifications"
            className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
          >
            View Notifications
          </Link>
        </div>
      </div>
    </>
  );
}
````

## File: src/features/payment/pages/PaymentPage.tsx
````typescript
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import NavBar                from "@/features/properties/components/NavBar";
import { getRentRequestById } from "@/services/rentRequestService";
import {
  clearPendingRentPayment,
  buildRentPaymentSuccessUrl,
  getPaymentLink,
  savePendingRentPayment,
} from "@/services/paymentService";
import { useToast }           from "@/context/ToastContext";
import type { RentRequest }   from "@/types";

export default function PaymentPage() {
  const { id }   = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast    = useToast();

  const [request,   setRequest]   = useState<RentRequest | null>(null);
  const [loading,   setLoading]   = useState(true);
  const [paying,    setPaying]    = useState(false);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      navigate("/rent-requests");
      return;
    }

    getRentRequestById(id)
      .then((res) => setRequest(res.data))
      .catch(() => {
        toast.error("Could not load request details.");
        navigate("/rent-requests");
      })
      .finally(() => setLoading(false));
  }, [id, navigate, toast]);

  const handlePay = async () => {
    if (!id || !request) return;

    try {
      setPaying(true);

      const fresh = await getRentRequestById(id);
      const freshRequest = fresh.data as RentRequest;

      if (freshRequest.request_state === "PAID") {
        navigate(`/payment/success?request_id=${freshRequest.request_id}`);
        return;
      }

      if (!["ACCEPTED", "PAYMENT_PENDING"].includes(freshRequest.request_state)) {
        toast.error("This request is no longer available for payment.");
        setRequest(freshRequest);
        return;
      }

      setRequest(freshRequest);

      savePendingRentPayment(freshRequest.request_id);

      const res = await getPaymentLink(
        freshRequest.request_id,
        buildRentPaymentSuccessUrl(freshRequest.request_id),
      );

      const paymentUrl = res.data?.url;

      if (typeof paymentUrl !== "string" || !paymentUrl) {
        throw new Error("Missing payment URL");
      }

      window.location.assign(paymentUrl);
    } catch (err) {
      clearPendingRentPayment();
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        toast.error("This request no longer exists.");
        navigate("/rent-requests");
        return;
      }
      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? err.message ?? "Failed to start payment.")
          : err instanceof Error
            ? err.message
            : "Unexpected error.",
      );
      setPaying(false);
    }
  };

  if (loading) return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
      </div>
    </>
  );

  if (!request) return null;

  const isPaid = request.request_state === "PAID";
  const canPay = ["ACCEPTED", "PAYMENT_PENDING"].includes(request.request_state);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-lg mx-auto space-y-6">

          {/* Back */}
          <button
            onClick={() => navigate("/rent-requests")}
            className="text-sm text-gray-500 hover:text-gray-900 font-semibold flex items-center gap-1 transition cursor-pointer"
          >
            ← Back to Requests
          </button>

          <h1 className="text-3xl font-bold text-gray-900">Complete Payment</h1>

          {/* Order summary */}
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <h2 className="text-base font-bold text-gray-700 border-b border-gray-100 pb-3">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span className="text-gray-500">Property</span>
                <span className="font-semibold text-gray-900">
                  {request.property_name ?? `Property #${request.property_id}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Check-in</span>
                <span className="font-semibold text-gray-900">{request.check_in_date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Check-out</span>
                <span className="font-semibold text-gray-900">{request.check_out_date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Type</span>
                <span className="font-semibold text-gray-900">{request.renting_type}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-base font-bold text-gray-900">Total Due</span>
              <span className="text-2xl font-bold text-gray-900">
                EGP {Number(request.total_price).toLocaleString()}
              </span>
            </div>
          </div>

          {!canPay && !isPaid && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              This request is currently <strong>{request.request_state}</strong>. Payment is only available after the owner accepts the request.
            </div>
          )}

          {isPaid && (
            <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
              This request has already been paid. You can go straight to the confirmation page.
            </div>
          )}

          {/* Security note */}
          <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <span className="text-xl shrink-0">🔒</span>
            <p className="text-sm text-blue-700 leading-relaxed">
              You will be redirected to our secure payment partner Kashier to complete
              the transaction. Your card details are never stored on our servers.
            </p>
          </div>

          {/* Pay button */}
          <button
            onClick={handlePay}
            disabled={paying || (!canPay && !isPaid)}
            className="w-full bg-dark-knight text-white py-4 rounded-2xl font-bold text-base
                       hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed
                       cursor-pointer flex items-center justify-center gap-3"
          >
            {paying ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Preparing your payment…
              </>
            ) : (
              isPaid ? "View Payment Confirmation →" : "Proceed to Payment →"
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            By proceeding you agree to our terms of service.{" "}
            <Link to="/rent-requests" className="text-amber-500 hover:underline">
              Cancel
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}
````

## File: src/features/payment/pages/PaymentSuccessPage.tsx
````typescript
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import NavBar from "@/features/properties/components/NavBar";
import { getRentRequestById } from "@/services/rentRequestService";
import {
  clearPendingRentPayment,
  loadPendingRentPayment,
} from "@/services/paymentService";
import type { RentRequest } from "@/types";

type VerificationState =
  | "missing"
  | "checking"
  | "processing"
  | "success"
  | "not_paid"
  | "error";

const MAX_CHECKS = 6;
const CHECK_DELAY_MS = 2500;

export default function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const [request, setRequest] = useState<RentRequest | null>(null);
  const [status, setStatus] = useState<VerificationState>("checking");
  const [reloadKey, setReloadKey] = useState(0);

  const requestId = useMemo(() => {
    const queryId = searchParams.get("request_id");
    if (queryId) return queryId;
    return loadPendingRentPayment()?.requestId ?? null;
  }, [searchParams]);

  useEffect(() => {
    if (!requestId) {
      setStatus("missing");
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let attempts = 0;

    const verifyPayment = async () => {
      attempts += 1;

      try {
        const res = await getRentRequestById(requestId);
        if (cancelled) return;

        const nextRequest = res.data as RentRequest;
        setRequest(nextRequest);

        if (nextRequest.request_state === "PAID") {
          clearPendingRentPayment();
          setStatus("success");
          return;
        }

        if (["ACCEPTED", "PAYMENT_PENDING"].includes(nextRequest.request_state)) {
          if (attempts < MAX_CHECKS) {
            setStatus("checking");
            timeoutId = setTimeout(verifyPayment, CHECK_DELAY_MS);
            return;
          }

          setStatus("processing");
          return;
        }

        setStatus("not_paid");
      } catch {
        if (cancelled) return;

        if (attempts < MAX_CHECKS) {
          setStatus("checking");
          timeoutId = setTimeout(verifyPayment, CHECK_DELAY_MS);
          return;
        }

        setStatus("error");
      }
    };

    setStatus("checking");
    verifyPayment();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [requestId, reloadKey]);

  const summary = request && (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm">
      <h2 className="border-b border-gray-100 pb-3 text-sm font-bold text-gray-700">
        Payment Summary
      </h2>
      <div className="space-y-2 pt-3 text-sm text-gray-600">
        <div className="flex justify-between gap-4">
          <span>Request</span>
          <span className="font-semibold text-gray-900">
            {request.request_id.slice(0, 8)}…
          </span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Status</span>
          <span className="font-semibold text-gray-900">{request.request_state}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Total</span>
          <span className="font-semibold text-gray-900">
            EGP {Number(request.total_price).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-12 text-center">
        {status === "checking" && (
          <>
            <div className="h-24 w-24 rounded-full bg-blue-100 text-5xl flex items-center justify-center">
              ⏳
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Verifying Payment</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We&apos;re waiting for the payment provider to finish confirming your transaction.
                This can take a few seconds after the redirect.
              </p>
            </div>
            {summary}
          </>
        )}

        {status === "success" && (
          <>
            <div className="h-24 w-24 rounded-full bg-green-100 text-5xl flex items-center justify-center">
              🎉
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Confirmed!</h1>
              <p className="max-w-sm leading-relaxed text-gray-500">
                Your payment was successful. Your lease is now active and the owner
                has been notified. Check your notifications for details.
              </p>
            </div>
            {summary}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link
                to="/leases"
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                View My Leases
              </Link>
              <Link
                to="/rent-requests"
                className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                Back to Requests
              </Link>
            </div>
          </>
        )}

        {status === "processing" && (
          <>
            <div className="h-24 w-24 rounded-full bg-amber-100 text-5xl flex items-center justify-center">
              🔄
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Still Processing</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                You were redirected back successfully, but we have not seen the final payment confirmation yet.
                Please wait a moment and check again.
              </p>
            </div>
            {summary}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setReloadKey((value) => value + 1)}
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                Check Again
              </button>
              {requestId && (
                <Link
                  to={`/payment/${requestId}`}
                  className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
                >
                  Back to Payment
                </Link>
              )}
            </div>
          </>
        )}

        {status === "not_paid" && (
          <>
            <div className="h-24 w-24 rounded-full bg-red-100 text-5xl flex items-center justify-center">
              ⚠️
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Not Confirmed</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We checked the request status and it is still <strong>{request?.request_state ?? "not paid"}</strong>.
                If you completed the card step, give it a moment and try checking again.
              </p>
            </div>
            {summary}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setReloadKey((value) => value + 1)}
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                Check Again
              </button>
              {requestId && (
                <Link
                  to={`/payment/${requestId}`}
                  className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
                >
                  Return to Payment
                </Link>
              )}
            </div>
          </>
        )}

        {status === "missing" && (
          <>
            <div className="h-24 w-24 rounded-full bg-gray-100 text-5xl flex items-center justify-center">
              🧾
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Context Missing</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We couldn&apos;t determine which rent request this payment belongs to. Please return to your requests and open the payment flow again.
              </p>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link
                to="/rent-requests"
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                View My Requests
              </Link>
              <Link
                to="/"
                className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                Back to Home
              </Link>
            </div>
          </>
        )}

        {status === "error" && (
          <>
            <div className="h-24 w-24 rounded-full bg-red-100 text-5xl flex items-center justify-center">
              ❌
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Couldn&apos;t Verify Payment</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We ran into a problem while checking the request status. Try again in a moment or return to your rent requests.
              </p>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setReloadKey((value) => value + 1)}
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                Retry Verification
              </button>
              <Link
                to="/rent-requests"
                className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                Back to Requests
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
````

## File: src/features/properties/components/AddPropertyComponents/BasicInfoStep.tsx
````typescript
import type { FC } from "react";
import { type StepProps } from "@/types/index";
import NumberInput from "./NumberInput";
import PriceInput from "./PriceInput";
import SellingPlanSelector from "./SellingPlanSelector";

const BasicInfoStep: FC<StepProps> = ({ formData, setFormData, errors }) => {
  const update = <K extends keyof typeof formData>(field: K, value: (typeof formData)[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isRent = formData.property_type === "for_rent";
  const isSell = formData.property_type === "for_sale";

  return (
    <div className="space-y-6">

      {/* Property Title */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-700">Property Title</h2>
        <input
          type="text"
          placeholder="e.g., Luxury Penthouse in Downtown District"
          value={formData.propertyName}
          onChange={(e) => update("propertyName", e.target.value)}
          className={`w-full border bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none transition
            ${errors.propertyName ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-gray-400"}`}
        />
        {errors.propertyName && <p className="text-red-500 text-xs">{errors.propertyName}</p>}

        {/* Asking Price */}
        {isSell && (
          <div className="space-y-4 pt-2">
            <label className="text-sm font-semibold text-gray-700">Asking Price</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">EGP</span>
              <input
                type="number"
                min={0}
                placeholder="0.00"
                value={formData.price ?? ""}
                onChange={(e) => update("price", Number(e.target.value))}
                className={`w-full border bg-gray-50 rounded-xl pl-14 pr-4 py-3 text-sm outline-none transition
                  ${errors.price ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-gray-400"}`}
              />
            </div>
            {errors.price && <p className="text-red-500 text-xs">{errors.price}</p>}

            <SellingPlanSelector
              value={formData.sellingPlan}
              onChange={(value) => update("sellingPlan", value)}
              error={errors.sellingPlan}
              helperText="Your selling plan is saved during property creation, then becomes payable after the property passes admin verification."
            />
          </div>
        )}

        {/* Rent Configuration */}
        {isRent && (
          <div className="space-y-4 pt-2">
            <label className="text-sm font-semibold text-gray-700">Rent Configuration</label>
            {errors.pricingUnit && <p className="text-red-500 text-xs">{errors.pricingUnit}</p>}

            <div className="grid min-[480px]:grid-cols-2 gap-4">
              {(["DAY", "MONTH"] as const).map((unit) => (
                <label
                  key={unit}
                  className={`flex flex-col gap-3 border rounded-xl p-4 cursor-pointer transition
                    ${formData.pricingUnit === unit
                      ? "border-dark-knight bg-gray-50"
                      : "border-gray-200 hover:border-gray-300"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="pricingUnit"
                      value={unit}
                      checked={formData.pricingUnit === unit}
                      onChange={() => {
                        update("pricingUnit", unit);
                        update(unit === "DAY" ? "priceMonthly" : "pricePerDay", undefined);
                      }}
                      className="accent-gray-800"
                    />
                    <span className="text-sm font-semibold">
                      {unit === "DAY" ? "Daily" : "Monthly"}
                    </span>
                  </div>

                  {formData.pricingUnit === unit && (
                    <PriceInput
                      placeholder={unit === "DAY" ? "Price /day" : "Price /month"}
                      value={unit === "DAY" ? formData.pricePerDay : formData.priceMonthly}
                      onChange={(val) =>
                        update(unit === "DAY" ? "pricePerDay" : "priceMonthly", val)
                      }
                      error={unit === "DAY" ? errors.pricePerDay : errors.priceMonthly}
                    />
                  )}
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Furnished Checkbox */}
        <label className="flex items-center my-5 gap-3 cursor-pointer w-fit">
          <input
            type="checkbox"
            className="sr-only"
            checked={formData.is_furnished}
            onChange={() => update("is_furnished", !formData.is_furnished)}
          />
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition
              ${formData.is_furnished
                ? "bg-dark-knight border-dark-knight"
                : "border-gray-300 bg-white"
              }`}
          >
            {formData.is_furnished && (
              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className="text-sm font-semibold text-gray-700">Furnished</span>
        </label>

        {/* Number Inputs Grid */}
        <div className={`grid gap-4 ${formData.is_furnished ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"}`}>
          <NumberInput
            label="Bedrooms"
            value={formData.bedroomsNumber}
            onChange={(val) => update("bedroomsNumber", val)}
            error={errors.bedroomsNumber}
          />
          <NumberInput
            label="Bathrooms"
            value={formData.bathroomsNumber}
            onChange={(val) => update("bathroomsNumber", val)}
            error={errors.bathroomsNumber}
          />
          {formData.is_furnished && (
            <NumberInput
              label="Beds"
              value={formData.bedsNumber}
              onChange={(val) => update("bedsNumber", val)}
              error={errors.bedsNumber}
            />
          )}
          <NumberInput
            label="Size (m²)"
            value={formData.size}
            onChange={(val) => update("size", val)}
            error={errors.size}
          />
        </div>
      </div>

      {/* Property Description */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-2">
        <label className="text-sm font-semibold text-gray-700">Property Description</label>
        <textarea
          placeholder="Describe your property: location highlights, nearby amenities, special features..."
          value={formData.propertyDesc}
          onChange={(e) => update("propertyDesc", e.target.value)}
          rows={5}
          className={`w-full border bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none transition resize-none
            ${errors.propertyDesc ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-gray-400"}`}
        />
        {errors.propertyDesc && <p className="text-red-500 text-xs">{errors.propertyDesc}</p>}
      </div>

    </div>
  );
};

export default BasicInfoStep;
````

## File: src/features/properties/components/AddPropertyComponents/LocationPickerField.tsx
````typescript
import { useEffect, useState, type FC } from "react"
import MapPicker from "./MapPicker"
import { DEFAULT_MAP_CENTER, forwardGeocode, searchLocations, type MapboxFeature } from "@/utils/map"

interface LocationPatch {
  location: string
  latitude?: number
  longitude?: number
}

interface Props {
  value: string
  latitude?: number
  longitude?: number
  error?: string
  label?: string
  labelClassName?: string
  placeholder?: string
  className?: string
  inputClassName: string
  coordinatesClassName?: string
  onChange: (patch: LocationPatch) => void
}

const LocationPickerField: FC<Props> = ({
  value,
  latitude,
  longitude,
  error,
  label,
  labelClassName,
  placeholder = "Click on the map or type manually",
  className = "space-y-4",
  inputClassName,
  coordinatesClassName = "text-xs text-gray-400",
  onChange,
}) => {
  const [isSearchingAddress, setIsSearchingAddress] = useState(false)
  const [addressError, setAddressError] = useState<string | null>(null)
  const [suggestions, setSuggestions] = useState<MapboxFeature[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const selectedPosition: [number, number] | null =
    latitude != null && longitude != null
      ? [latitude, longitude]
      : null

  const mapCenter: [number, number] = selectedPosition ?? DEFAULT_MAP_CENTER

  useEffect(() => {
    if (!isTyping || !value.trim()) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    const timeoutId = setTimeout(async () => {
      const results = await searchLocations(value)
      setSuggestions(results)
      setShowSuggestions(results.length > 0)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [isTyping, value])

  const handleFindAddress = async () => {
    const query = value.trim()

    if (!query) {
      setAddressError("Enter an address first.")
      return
    }

    setIsSearchingAddress(true)
    setAddressError(null)

    const result = await forwardGeocode(query)

    if (!result) {
      setAddressError("We couldn't find that address. Try a more specific location.")
      setIsSearchingAddress(false)
      return
    }

    onChange({
      location: result.address,
      latitude: result.lat,
      longitude: result.lng,
    })
    setSuggestions([])
    setShowSuggestions(false)
    setIsTyping(false)
    setIsSearchingAddress(false)
  }

  const handleSelectSuggestion = (item: MapboxFeature) => {
    if (!item.center) return

    onChange({
      location: item.place_name ?? value,
      latitude: item.center[1],
      longitude: item.center[0],
    })
    setAddressError(null)
    setShowSuggestions(false)
    setIsTyping(false)
  }

  return (
    <div className={className}>
      {label && (
        <label className={labelClassName}>{label}</label>
      )}

      <div className="relative z-50">
        <input
          type="text"
          dir="auto"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setAddressError(null)
            setIsTyping(true)
            onChange({ location: e.target.value })
          }}
          onFocus={() => {
            if (suggestions.length > 0) {
              setShowSuggestions(true)
            }
            setIsTyping(true)
          }}
          className={inputClassName}
        />
        <button
          type="button"
          onClick={handleFindAddress}
          disabled={isSearchingAddress || !value.trim()}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {isSearchingAddress ? "Finding..." : "Show on map"}
        </button>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-1000 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 bg-white shadow-lg">
            {suggestions.map((item, index) => (
              <button
                key={`${item.place_name ?? "location"}-${index}`}
                type="button"
                onClick={() => handleSelectSuggestion(item)}
                className="block w-full px-4 py-2 text-left text-sm transition hover:bg-gray-100"
              >
                {item.place_name}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}
      {addressError && <p className="text-xs text-red-500">{addressError}</p>}

      <MapPicker
        initialCenter={mapCenter}
        selectedPosition={selectedPosition}
        onLocationSelect={(lat, lng, address) => {
          setSuggestions([])
          setShowSuggestions(false)
          setIsTyping(false)
          onChange({
            location: address,
            latitude: lat,
            longitude: lng,
          })
        }}
      />

      {latitude != null && longitude != null && (
        <p className={coordinatesClassName}>
          📍 {latitude.toFixed(5)}, {longitude.toFixed(5)}
        </p>
      )}
    </div>
  )
}

export default LocationPickerField
````

## File: src/features/properties/components/AddPropertyComponents/LocationStep.tsx
````typescript
import type { FC } from "react"
import { type StepProps } from "@/types/index"
import LocationPickerField from "./LocationPickerField"

const LocationStep: FC<StepProps> = ({ formData, setFormData, errors }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 relative z-50">
      <h2 className="text-base font-semibold text-gray-700">Property Location</h2>

      <LocationPickerField
        value={formData.location}
        latitude={formData.latitude}
        longitude={formData.longitude}
        error={errors.location}
        inputClassName={`w-full border bg-gray-50 rounded-xl px-4 py-3 pr-28 text-sm outline-none transition
          ${errors.location ? "border-red-400" : "border-gray-200 focus:border-gray-400"}`}
        onChange={(patch) =>
          setFormData((prev) => ({
            ...prev,
            ...patch,
          }))
        }
      />
    </div>
  )
}

export default LocationStep
````

## File: src/features/properties/components/AddPropertyComponents/MapPicker.tsx
````typescript
import { useState, useCallback, useEffect, type FC } from "react"
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet"
import { MAPBOX_ATTRIBUTION, MAPBOX_TILE_URL, reverseGeocode } from "@/utils/map"

interface Props {
  initialCenter: [number, number]
  selectedPosition?: [number, number] | null
  onLocationSelect: (lat: number, lng: number, address: string) => void
}

// ─── Moves the map to a new center ───────────────────────────────────────────
const MapFlyTo: FC<{ position: [number, number] | null }> = ({ position }) => {
  const map = useMap()

  useEffect(() => {
    if (position) {
      map.flyTo(position, 15)
    }
  }, [map, position?.[0], position?.[1]])

  return null
}

// ─── Click handler ────────────────────────────────────────────────────────────
const ClickHandler: FC<{ onMapClick: (lat: number, lng: number) => void }> = ({ onMapClick }) => {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng.lat, e.latlng.lng)
    },
  })
  return null
}

// ─── Main Component ───────────────────────────────────────────────────────────
const MapPicker: FC<Props> = ({ initialCenter, selectedPosition = null, onLocationSelect }) => {
  const [marker, setMarker] = useState<[number, number] | null>(null)
  const [flyTo, setFlyTo] = useState<[number, number] | null>(null)
  const [loading, setLoading] = useState(false)
  const [locating, setLocating] = useState(false)
  const [geoError, setGeoError] = useState<string | null>(null)

  useEffect(() => {
    if (!selectedPosition) return

    setMarker(selectedPosition)
    setFlyTo(selectedPosition)
  }, [selectedPosition?.[0], selectedPosition?.[1]])

  const handleSelect = useCallback(async (lat: number, lng: number) => {
    setMarker([lat, lng])
    setLoading(true)
    const address = await reverseGeocode(lat, lng)
    onLocationSelect(lat, lng, address)
    setLoading(false)
  }, [onLocationSelect])

  const handleMapClick = useCallback((lat: number, lng: number) => {
    setFlyTo(null)
    handleSelect(lat, lng)
  }, [handleSelect])

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by your browser.")
      return
    }

    setLocating(true)
    setGeoError(null)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        setFlyTo([lat, lng])
        await handleSelect(lat, lng)
        setLocating(false)
      },
      (err) => {
        setLocating(false)
        setGeoError(
          err.code === 1
            ? "Location access denied. Please allow location in your browser."
            : "Unable to retrieve your location."
        )
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  return (
    <div className="space-y-2">

      {/* Current Location Button */}
      <button
        type="button"
        onClick={handleCurrentLocation}
        disabled={locating || loading}
        className="flex items-center gap-2 text-sm font-medium border border-gray-200 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {locating ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Locating...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
              <path d="M12 8a4 4 0 100 8 4 4 0 000-8z"/>
            </svg>
            Use Current Location
          </>
        )}
      </button>

      {/* Error Message */}
      {geoError && (
        <p className="text-xs text-red-500">{geoError}</p>
      )}

      {/* Fetching Address Indicator */}
      {loading && !locating && (
        <p className="text-xs text-gray-400 animate-pulse">Fetching address...</p>
      )}

      {/* Map */}
      <div className="rounded-xl overflow-hidden border border-gray-200 h-64 w-full relative z-0">
        <MapContainer
          center={initialCenter}
          zoom={12}
          className="h-full w-full"
          scrollWheelZoom={false}
        >
          <TileLayer
            url={MAPBOX_TILE_URL}
            attribution={MAPBOX_ATTRIBUTION}
            tileSize={512}
            zoomOffset={-1}
          />
          <ClickHandler onMapClick={handleMapClick} />
          <MapFlyTo position={flyTo} />
          {marker && <Marker 
                      position={marker} 
                      draggable={true}
                      eventHandlers={{
                        dragend: (e) => {
                          const marker = e.target
                          const position = marker.getLatLng()
                          handleSelect(position.lat, position.lng)
                        }
                      }}
                    />}
        </MapContainer>
      </div>

    </div>
  )
}

export default MapPicker;
````

## File: src/features/properties/components/AddPropertyComponents/MediaStep.tsx
````typescript
import { useRef, type FC } from "react";
import { type StepProps } from "@/types/index";

const MIN_IMAGES = 5;

const MediaStep: FC<StepProps> = ({ formData, setFormData, errors }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...newFiles] }));
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleRemove = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const count     = formData.images.length;
  const remaining = Math.max(0, MIN_IMAGES - count);
  const met       = count >= MIN_IMAGES;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-gray-800">Property Photos</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Upload high-quality photos that showcase your property at its best.
          </p>
        </div>
        {/* Requirement badge */}
        <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full
          ${met ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
          {met ? `✓ ${count} photos` : `${count} / ${MIN_IMAGES} min`}
        </span>
      </div>

      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300
              ${met ? "bg-green-500" : "bg-amber-400"}`}
            style={{ width: `${Math.min(100, (count / MIN_IMAGES) * 100)}%` }}
          />
        </div>
        <p className="text-[11px] text-gray-400">
          {met
            ? `Great! You can add more photos to better showcase your property.`
            : `${remaining} more photo${remaining !== 1 ? "s" : ""} needed to continue.`}
        </p>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-2">
        <p className="text-xs font-bold text-blue-700 uppercase tracking-wide">📸 Photo Tips</p>
        <ul className="text-xs text-blue-600 space-y-1">
          <li>• Include every room — living room, bedroom(s), kitchen, bathroom(s)</li>
          <li>• Shoot during the day with natural light for best results</li>
          <li>• Add outdoor / building entrance shots</li>
          <li>• More photos = more trust from potential renters</li>
        </ul>
      </div>

      {/* Drop zone */}
      <div
        onClick={() => inputRef.current?.click()}
        className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl p-8 cursor-pointer transition
          ${errors.images
            ? "border-red-300 bg-red-50 hover:border-red-400"
            : "border-gray-200 hover:border-amber-400 hover:bg-amber-50"}`}
      >
        <svg className={`w-10 h-10 ${errors.images ? "text-red-300" : "text-gray-300"}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 16l4-4 4 4 4-6 4 6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none"/>
        </svg>
        <p className="text-sm font-semibold text-gray-600">Click to upload photos</p>
        <p className="text-xs text-gray-400">JPG, PNG, WEBP — up to 5 MB each</p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {errors.images && (
        <p className="text-red-500 text-xs flex items-center gap-1">
          <span>⚠️</span> {errors.images}
        </p>
      )}

      {/* Preview grid */}
      {count > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {formData.images.map((file, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden border border-gray-200 aspect-square bg-gray-50"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="w-full h-full object-cover"
              />
              
              <span className="absolute top-1 left-1 w-4 h-4 bg-green-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center">
                ✓
              </span>
    
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute top-1 right-1 w-6 h-6 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition cursor-pointer opacity-0 group-hover:opacity-100"
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                  <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          ))}

          {/* Empty slots to visualize how many are still needed */}
          {Array.from({ length: Math.max(0, MIN_IMAGES - count) }).map((_, i) => (
            <div
              key={`empty-${i}`}
              onClick={() => inputRef.current?.click()}
              className="rounded-xl border-2 border-dashed border-gray-200 aspect-square flex items-center justify-center cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition"
            >
              <span className="text-gray-300 text-xl">+</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default MediaStep;
````

## File: src/features/properties/components/AddPropertyComponents/NumberInput.tsx
````typescript
import type { FC } from "react";

interface Props {
  label: string;
  value: number;
  onChange: (val: number) => void;
  error?: string;
}

const NumberInput: FC<Props> = ({ label, value, onChange, error }) => (
  <div className="space-y-2">
    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
      {label}
    </label>
    <input
      type="number"
      min={0}
      placeholder="0"
      value={value || ""}
      onChange={(e) => onChange(Number(e.target.value))}
      className={`w-full border bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none transition
        ${error ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-gray-400"}`}
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default NumberInput;
````

## File: src/features/properties/components/AddPropertyComponents/OwnershipStep.tsx
````typescript
import { useRef, type FC } from "react";
import { type StepProps } from "@/types/index";

const MIN_DOCS = 3;

const OwnershipStep: FC<StepProps> = ({ formData, setFormData, errors }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, ownershipProof: [...prev.ownershipProof, ...newFiles] }));
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleRemove = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      ownershipProof: prev.ownershipProof.filter((_, i) => i !== index),
    }));
  };

  const count     = formData.ownershipProof.length;
  const remaining = Math.max(0, MIN_DOCS - count);
  const met       = count >= MIN_DOCS;

  // Labels assigned to uploaded files in order
  const FILE_LABELS = [
    "National ID / Passport",
    "Ownership Proof",
    "Additional Document",
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-gray-800">Ownership Documents</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Reviewed privately by our compliance team — never shown publicly.
          </p>
        </div>
        <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full
          ${met ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
          {met ? `✓ ${count} docs` : `${count} / ${MIN_DOCS} min`}
        </span>
      </div>

      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300
              ${met ? "bg-green-500" : "bg-amber-400"}`}
            style={{ width: `${Math.min(100, (count / MIN_DOCS) * 100)}%` }}
          />
        </div>
        <p className="text-[11px] text-gray-400">
          {met
            ? "Requirements met. You may add more documents if needed."
            : `${remaining} more document${remaining !== 1 ? "s" : ""} needed to continue.`}
        </p>
      </div>

      {/* What to upload */}
      <div className="space-y-3">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
          What to upload
        </p>

        {/* Required: ID */}
        <div className={`rounded-xl border p-3.5 space-y-1 transition
          ${count >= 1 ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🪪</span>
              <span className="text-xs font-bold text-gray-700">National ID or Passport</span>
            </div>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
              ${count >= 1 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
              {count >= 1 ? "✓ Uploaded" : "Required"}
            </span>
          </div>
          <p className="text-[11px] text-gray-500 leading-relaxed pl-7">
            A clear photo of your government-issued ID (front + back) or passport bio page.
          </p>
        </div>

        {/* Required: Ownership proof — contract OR utility bill, user's choice */}
        <div className={`rounded-xl border p-3.5 space-y-2 transition
          ${count >= 2 ? "border-green-200 bg-green-50" : "border-blue-100 bg-blue-50"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">📋</span>
              <span className="text-xs font-bold text-gray-700">Ownership Proof</span>
            </div>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
              ${count >= 2 ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
              {count >= 2 ? "✓ Uploaded" : "Required — pick one"}
            </span>
          </div>
          <p className="text-[11px] text-gray-600 leading-relaxed pl-7">
            Upload <strong>one</strong> of the following — whichever you have available:
          </p>
          <div className="pl-7 grid sm:grid-cols-2 gap-2">
            <div className="flex items-start gap-2 bg-white rounded-lg border border-blue-100 p-2.5">
              <span className="text-base">📄</span>
              <div>
                <p className="text-[11px] font-semibold text-gray-700">Property Contract</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Sale/purchase contract or title deed</p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-white rounded-lg border border-blue-100 p-2.5">
              <span className="text-base">🧾</span>
              <div>
                <p className="text-[11px] font-semibold text-gray-700">Utility Bill</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Water, electricity, or gas bill showing this address</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third doc — any additional */}
        <div className={`rounded-xl border p-3.5 space-y-1 transition
          ${count >= 3 ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">📎</span>
              <span className="text-xs font-bold text-gray-700">Supporting Document</span>
            </div>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
              ${count >= 3 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
              {count >= 3 ? "✓ Uploaded" : "Required"}
            </span>
          </div>
          <p className="text-[11px] text-gray-500 leading-relaxed pl-7">
            Any additional document that further supports your ownership claim — another utility bill, bank statement showing the address, etc.
          </p>
        </div>
      </div>

      {/* Privacy notice */}
      <div className="flex items-start gap-2.5 bg-gray-50 border border-gray-200 rounded-xl p-3.5">
        <span className="text-lg shrink-0">🔒</span>
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong className="text-gray-700">Your documents are secure.</strong> They are encrypted,
          reviewed only by our verification team, and permanently deleted after approval.
          We never share them with renters or third parties.
        </p>
      </div>

      {/* Drop zone */}
      <div
        onClick={() => inputRef.current?.click()}
        className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl p-7 cursor-pointer transition
          ${errors.ownershipProof
            ? "border-red-300 bg-red-50 hover:border-red-400"
            : "border-gray-200 hover:border-amber-400 hover:bg-amber-50"}`}
      >
        <svg className={`w-9 h-9 ${errors.ownershipProof ? "text-red-300" : "text-gray-300"}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round"/>
          <path d="M14 2v6h6M12 12v6M9 15l3-3 3 3" strokeLinecap="round"/>
        </svg>
        <p className="text-sm font-semibold text-gray-600">Click to upload documents</p>
        <p className="text-xs text-gray-400">JPG, PNG, PDF — up to 5 MB each</p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/jpeg,image/jpg,image/png,image/webp,.pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {errors.ownershipProof && (
        <p className="text-red-500 text-xs flex items-center gap-1">
          <span>⚠️</span> {errors.ownershipProof}
        </p>
      )}

      {/* Uploaded file list */}
      {count > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            Uploaded Files ({count})
          </p>
          {formData.ownershipProof.map((file, index) => {
            const isImage = file.type.startsWith("image/");
            const label   = FILE_LABELS[index] ?? `Additional Document ${index - 1}`;

            return (
              <div
                key={index}
                className="relative flex items-center gap-3 border border-gray-200 rounded-xl p-3 hover:border-gray-300 transition"
              >
                {isImage ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-12 h-12 object-cover rounded-lg shrink-0 border border-gray-100"
                  />
                ) : (
                  <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round"/>
                      <path d="M14 2v6h6" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-500 mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-gray-800 truncate">{file.name}</p>
                  <p className="text-xs text-gray-400">{(file.size / 1024).toFixed(0)} KB</p>
                </div>

                  <span className="w-6 h-6 bg-green-500 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0">✓</span>

                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  className="w-7 h-7 bg-gray-100 hover:bg-red-100 hover:text-red-500 text-gray-400 rounded-full flex items-center justify-center transition cursor-pointer shrink-0"
                >
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default OwnershipStep;
````

## File: src/features/properties/components/AddPropertyComponents/PriceInput.tsx
````typescript
import type { FC } from "react";

interface Props {
  placeholder: string;
  value: number | undefined;
  onChange: (val: number) => void;
  error?: string;
}

const PriceInput: FC<Props> = ({ placeholder, value, onChange, error }) => (
  <div className="space-y-1">
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
        EGP
      </span>
      <input
        type="number"
        min={0}
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full border bg-white rounded-lg pl-11 pr-3 py-2 text-sm outline-none transition
          ${error ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-gray-400"}`}
      />
    </div>
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default PriceInput;
````

## File: src/features/properties/components/AddPropertyComponents/PropertyTypeToggle.tsx
````typescript
import type { FC } from "react";

import sellingIcon from "@/assets/sellingIcon.svg";
import rentingIcon from "@/assets/rentingIcon.svg";

import sellingIconActive from "@/assets/sellingIconActive.svg";
import rentingIconActive from "@/assets/rentingIconActive.svg";

interface Props {
  value: "for_sale" | "for_rent";
  onChange: (value: "for_sale" | "for_rent") => void;
}

const PropertyTypeToggle: FC<Props> = ({ value, onChange }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <p className="text-sm text-gray-500 mb-4">I want to...</p>

      <div className="grid min-[405px]:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => onChange("for_sale")}
          className={`rounded-xl border p-6 transition-all duration-200 text-center cursor-pointer
            ${
              value === "for_sale"
                ? "border-black bg-gray-100 shadow-sm"
                : "border-gray-200 hover:border-gray-400"
            }
          `}
        >
          <div className="flex flex-col items-center">
            <div className={`rounded-full ${value === "for_sale" ? "bg-gray-700" : "bg-gray-100"}`}>
              <img src={value === "for_sale" ? sellingIconActive : sellingIcon} alt="Selling Icon" className="p-4"/>
            </div>
            <p className="text-base font-medium">Sell Property</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onChange("for_rent")}
          className={`rounded-xl border p-6 transition-all duration-200 text-center cursor-pointer
            ${
              value === "for_rent"
                ? "border-black bg-gray-100 shadow-sm"
                : "border-gray-200 hover:border-gray-400"
            }
          `}
        >
          <div className="flex flex-col items-center">
            <div className={`rounded-full ${value === "for_rent" ? "bg-gray-700" : "bg-gray-100"}`}>
              <img src={value === "for_rent" ?  rentingIconActive : rentingIcon} alt="Renting Icon" className="p-4"/>
            </div>
            <p className="text-base font-medium">Rent Property</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PropertyTypeToggle;
````

## File: src/features/properties/components/AddPropertyComponents/SellingPlanSelector.tsx
````typescript
import type { FC } from "react";

import {
  SELLING_PLAN_OPTIONS,
  formatSellingPlanLabel,
} from "@/services/listingSubscriptionService";
import type { SellingPlanMonths } from "@/types";

interface Props {
  value?: SellingPlanMonths;
  onChange?: (value: SellingPlanMonths) => void;
  error?: string;
  disabled?: boolean;
  helperText?: string;
  title?: string;
}

const SellingPlanSelector: FC<Props> = ({
  value,
  onChange,
  error,
  disabled = false,
  helperText,
  title = "Selling Plan",
}) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between gap-3">
      <label className="text-sm font-semibold text-gray-700">{title}</label>
      {value && (
        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">
          {formatSellingPlanLabel(value)}
        </span>
      )}
    </div>

    <div className="grid gap-3 min-[560px]:grid-cols-3">
      {SELLING_PLAN_OPTIONS.map((plan) => {
        const active = value === plan.months;

        return (
          <button
            key={plan.months}
            type="button"
            disabled={disabled}
            onClick={() => onChange?.(plan.months)}
            className={`rounded-2xl border p-4 text-left transition ${
              active
                ? "border-dark-knight bg-gray-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-bold text-gray-900">{plan.label}</span>
              <span className="text-xs font-semibold text-amber-600">
                EGP {plan.amount.toLocaleString()}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-gray-500">{plan.description}</p>
          </button>
        );
      })}
    </div>

    {helperText && <p className="text-xs leading-relaxed text-gray-500">{helperText}</p>}
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

export default SellingPlanSelector;
````

## File: src/features/properties/components/AddPropertyComponents/StepIndicator.tsx
````typescript
import type { FC } from "react";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: "Basic Info" },
  { id: 2, label: "Details" },
  { id: 3, label: "Media" },
  { id: 4, label: "Verify" },
];

const StepIndicator: FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div
              key={step.id}
              className="flex items-center"
            >

              {/* Step */}
              <div className="flex sm:flex-col items-center sm:w-auto w-40">

                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold border-2 z-10
                  ${
                    isActive
                      ? "bg-dark-knight text-white border-black"
                      : isCompleted
                      ? "bg-gray-600 text-white border-gray-600"
                      : "bg-white text-gray-400 border-gray-300"
                  }`}
                >
                  {step.id}
                </div>

                <span
                  className={`text-sm font-medium uppercase sm:mt-2 ml-3 sm:ml-0 text-center ${
                    isActive ? "text-dark-knight" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector */}
              {index !== steps.length - 1 && (
                <>
                  {/* Desktop Line */}
                  <div
                    className={`hidden sm:block h-1 sm:w-24 md:w-36 mx-2 mb-5
                    ${
                      isCompleted
                        ? "bg-dark-knight"
                        : "bg-gray-200"
                    }`}
                  />
                </>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default StepIndicator;
````

## File: src/features/properties/components/HomeCard.tsx
````typescript
import type { FC } from "react";

const HomeCard : FC<{imgUrl: string, title: string; description: string}> = ({ imgUrl, title, description }) => {
    return (
        <li key={title} className="bg-white w-full px-4 py-6 rounded-2xl shadow-2xl">
            <img src={imgUrl} alt={imgUrl} className="w-10" />
            <h2 className="text-2xl font-medium">{title}</h2>
            <p className="sm:text-xl text-[18px]">{description}</p>
        </li>
    );
}

export default HomeCard;
````

## File: src/features/properties/components/LoadingSkeleton.tsx
````typescript
// Shimmer overlay — slides across each skeleton card
const Shimmer = () => (
  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-linear-to-r from-transparent via-white/50 to-transparent" />
);

// One skeleton card that mirrors the real PropertyCard structure
const SkeletonCard = () => (
  <div className="flex flex-col h-full bg-white shadow-xl rounded-xl overflow-hidden">

    {/* Image placeholder */}
    <div className="relative w-full h-52 bg-gray-200 overflow-hidden shrink-0">
      <Shimmer />
      {/* Badge placeholder */}
      <div className="absolute top-2.5 left-2.5 w-16 h-5 rounded-full bg-gray-300" />
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 gap-3 p-3">

      {/* Title — two lines */}
      <div className="space-y-1.5">
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden w-full">
          <Shimmer />
        </div>
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden w-3/4">
          <Shimmer />
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <div className="relative w-4 h-4 rounded-full bg-gray-200 overflow-hidden shrink-0">
          <Shimmer />
        </div>
        <div className="relative h-3.5 bg-gray-200 rounded-full overflow-hidden w-2/3">
          <Shimmer />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={`relative h-3.5 bg-gray-200 rounded-full overflow-hidden ${n === 3 ? "col-span-2 w-1/2" : ""}`}
          >
            <Shimmer />
          </div>
        ))}
      </div>

      {/* Price — pinned to bottom */}
      <div className="mt-auto pt-3 border-t border-gray-100 space-y-1.5">
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden w-1/4">
          <Shimmer />
        </div>
        <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden w-2/3">
          <Shimmer />
        </div>
      </div>

    </div>
  </div>
);

// ─── Exported component ───────────────────────────────────────────────────────
// `count` lets callers control how many skeletons to show (default 8)
const LoadingSkeleton = ({ count = 8 }: { count?: number }) => (
  <>
    {/* Subtle label above the grid */}
    <div className="w-10/12 max-w-[1250px] mx-auto mt-16 mb-4 flex items-center gap-3">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-amber-300 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <p className="text-sm text-gray-400 font-medium">Loading properties…</p>
    </div>

    <div className="w-10/12 max-w-[1250px] mx-auto mb-20 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </>
);

export default LoadingSkeleton;
````

## File: src/features/properties/components/NavBar.tsx
````typescript
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate }           from "react-router-dom";

import { useAuth }               from "@/context/AuthContext";
import { useChatSync }           from "@/context/ChatSyncProvider";
import { useNotifications }      from "@/context/NotificationsContext";
import { logout as logoutAPI }   from "@/services/authService";

import { BellIcon, ChatIcon, ProfileIcon, SignOutIcon, WalletIcon } from "@/utils/Icons";

// ─── Small icon button with optional numeric badge ────────────────────────────
const NavIconButton = ({
  children,
  onClick,
  badgeCount = 0,
  title,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  badgeCount?: number;
  title?: string;
}) => (
  <button
    onClick={onClick}
    title={title}
    className="relative p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
  >
    {children}
    {badgeCount > 0 && (
      <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-amber-300 text-black rounded-full text-[9px] font-bold flex items-center justify-center leading-none">
        {badgeCount > 9 ? "9+" : badgeCount}
      </span>
    )}
  </button>
);

// ─── NavBar ───────────────────────────────────────────────────────────────────
const NavBar = () => {
  const { userInfo, isAuthenticated, logout } = useAuth();
  const { unreadCount } = useNotifications();
  const { unreadChatCount } = useChatSync();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ── Close dropdown on outside click ──────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    setDropdownOpen(false);
    try { await logoutAPI(); } catch { /* ignore */ }
    logout();
  };

  const initials = userInfo
    ? `${userInfo.firstName[0]}${userInfo.secondName[0]}`.toUpperCase()
    : "";

  return (
    <nav className="flex md:flex-row flex-col gap-2.5 justify-around items-center py-2 font-semibold bg-dark-knight text-white shadow-[0px_4px_4px_0px_#FFFFFF1A]">

      <Link to="/" className="text-2xl font-bold tracking-wide">AQAR</Link>

      <div className="flex md:gap-16 sm:gap-10 gap-5 text-sm">
        <Link to="/"                         className="hover:text-amber-300 transition-colors">Browse</Link>
        <Link to="/properties?type=for_sale" className="hover:text-amber-300 transition-colors">Buy</Link>
        <Link to="/properties?type=for_rent" className="hover:text-amber-300 transition-colors">Rent</Link>
        <Link to="/ai-assistant" className="hover:text-amber-300 transition-colors">Aqar Assistant</Link>
      </div>

      <div className="flex items-center gap-1">
        {!isAuthenticated ? (
          <>
            <Link to="/auth/login"  className="rounded-full px-5 py-1 bg-amber-300 text-black text-sm font-bold hover:bg-amber-400 transition">Login</Link>
            <Link to="/auth/signup" className="rounded-full px-5 py-1 bg-white text-black text-sm font-bold hover:bg-gray-100 transition">Sign up</Link>
          </>
        ) : (
          <>
            {/* Chat icon — links to /chat inbox */}
            <NavIconButton title="Messages" badgeCount={unreadChatCount} onClick={() => navigate("/chat")}>
              <ChatIcon />
            </NavIconButton>

            {/* Notification bell with live badge */}
            <NavIconButton
              title="Notifications"
              badgeCount={unreadCount}
              onClick={() => { navigate("/notifications"); }}
            >
              <BellIcon />
            </NavIconButton>

            {/* Wallet — signed‑in only */}
            <NavIconButton title="Wallet" onClick={() => navigate("/wallet")}>
              <WalletIcon />
            </NavIconButton>

            {/* Avatar + dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-2 ml-1 pl-2 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-amber-300 text-dark-knight flex items-center justify-center text-xs font-bold">
                  {initials}
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`w-3 h-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-11 w-52 bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">

                  {/* User info */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-bold truncate">{userInfo?.firstName} {userInfo?.secondName}</p>
                    <p className="text-xs text-gray-400 truncate">{userInfo?.email}</p>
                  </div>

                  {/* Nav links */}
                  <div className="py-1">
                    {[
                      { to: "/profile",       icon: <ProfileIcon />, label: "Profile"       },
                      { to: "/my-properties", icon: "🏠",            label: "My Properties" },
                      { to: "/rent-requests", icon: "📨", label: "Rent Requests" },
                      { to: "/leases",        icon: "📋", label: "My Leases"     },
                      { to: "/invoices",         icon: "🧾", label: "Invoices"          },
                      { to: "/favorites",     icon: "❤️",            label: "Saved"         },
                      { to: "/chat",          icon: "💬",            label: "Messages"      },
                    ].map(({ to, icon, label }) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                      >
                        <span className="w-4 h-4 flex items-center justify-center text-base">{icon}</span>
                        {label}
                      </Link>
                    ))}
                  </div>

                  {/* Sign out */}
                  <div className="border-t border-gray-100 py-1">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      <SignOutIcon /> Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
````

## File: src/features/properties/components/PropertiesSection.tsx
````typescript
import type { FC } from "react";
import { Link } from "react-router-dom";

import rightArrowIcon from "@/assets/RightArrow.svg"

const PropertiesSection : FC<{sectionTitle: string, sectionDescription: string, navigateTo: string, hideViewAll?: boolean}> = ({ sectionTitle, sectionDescription, navigateTo, hideViewAll }) => {
    return(
        <div className="flex justify-evenly mt-5">
            <div className="w-2/3">
                <h1 className="text-2xl font-medium">{sectionTitle}</h1>
                <p className="text-xl">{sectionDescription}</p>
            </div>
            <Link className={`text-xl flex items-center ${hideViewAll ? "invisible" : ""}`} to={navigateTo}>View all <img src={rightArrowIcon} alt={rightArrowIcon} className="w-4 h-4 mt-1"/></Link>
        </div>
    )
}

export default PropertiesSection;
````

## File: src/features/properties/components/PropertyCard.tsx
````typescript
import { useState, type FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  WhiteHeartIcon, RedHeartIcon,
  MapPinIcon, BedIcon, BathIcon, RulerIcon,
} from "@/utils/Icons";
import { useAuth }  from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import { addToFavorites, removeFromFavorites } from "@/services/favoriteService";

import type { Property } from "@/types";

interface Props {
  property:      Property;
  isFav?:        boolean;
  onFavChange?:  (propertyId: number, next: boolean) => void;
}

const PropertyCard: FC<Props> = ({ property, isFav = false, onFavChange }) => {
  const { isAuthenticated, userInfo } = useAuth();
  const navigate = useNavigate();
  const toast    = useToast();

  const [toggling, setToggling] = useState(false);

  const isSale  = property.property_type === "for_sale";
  const locallyPromoted = property.isSponsored === true;
  // Owner should not see the fav heart on their own property
  const isOwner = !!userInfo && userInfo.id === property.ownerId;

  const priceLabel = isSale
    ? `EGP ${property.priceValue.toLocaleString()}`
    : property.pricingUnit === "MONTH"
      ? `EGP ${property.priceValue.toLocaleString()}`
      : `EGP ${property.pricePerDay.toLocaleString()}`;

  const priceSuffix = isSale
    ? ""
    : property.pricingUnit === "MONTH" ? "/ mo" : "/ day";

  const handleFavToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) { navigate("/auth/login"); return; }
    if (toggling) return;

    setToggling(true);
    const next = !isFav;
    onFavChange?.(property.propertyId, next);

    try {
      if (next) await addToFavorites(property.propertyId);
      else      await removeFromFavorites(property.propertyId);
    } catch (err) {
      onFavChange?.(property.propertyId, !next); // rollback
      const msg = axios.isAxiosError(err)
        ? (err.response?.data?.message ?? err.response?.data?.msg ?? "Request failed.")
        : "Something went wrong.";
      toast.error(`Could not update saved. ${msg}`);
    } finally {
      setToggling(false);
    }
  };

  return (
    <Link
      to={isSale
        ? `/buy/property/${property.propertyId}`
        : `/rent/property/${property.propertyId}`
      }
      className="flex flex-col h-full bg-white shadow-xl rounded-xl hover:shadow-2xl transition-shadow"
    >
      {/* ── Image ──────────────────────────────────────────────────────── */}
      <div className="relative shrink-0">
        <img
          src={property.images[0] ?? "https://placehold.co/400x210?text=No+Image"}
          alt={property.propertyName}
          className="w-full h-52 object-cover rounded-t-xl"
        />

        <span className={`absolute top-2.5 left-2.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full
          ${isSale ? "bg-amber-300 text-black" : "bg-dark-knight text-white"}`}>
          {isSale ? "For Sale" : "For Rent"}
        </span>

        {locallyPromoted && (
          <span className="absolute left-2.5 top-9 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-amber-700 shadow-sm">
            Promoted
          </span>
        )}

        {/* Heart — hidden for the owner of this property */}
        {isAuthenticated && !isOwner && onFavChange && (
          <button
            type="button"
            onClick={handleFavToggle}
            disabled={toggling}
            className="absolute top-2 right-2 transition-transform hover:scale-110 active:scale-95 disabled:opacity-50 cursor-pointer"
            title={isFav ? "Remove from saved" : "Save property"}
          >
            {isFav ? <RedHeartIcon /> : <WhiteHeartIcon />}
          </button>
        )}

        {!property.isAvailable && (
          <div className="absolute inset-0 bg-black/45 rounded-t-xl flex items-center justify-center">
            <span className="text-white text-sm font-bold bg-black/60 px-3 py-1 rounded-full">
              Unavailable
            </span>
          </div>
        )}
      </div>

      {/* ── Body ────────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 gap-1.5 p-3">

        <h3 className="text-[17px] font-semibold leading-snug line-clamp-2 min-h-[2.6rem]">
          {property.propertyName}
        </h3>

        <p className="flex items-center gap-1 text-sm text-gray-500 font-medium">
          <MapPinIcon />
          <span className="truncate">{property.location}</span>
        </p>

        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm font-semibold text-gray-700 mt-1">
          <p className="flex items-center gap-1">
            <BedIcon />
            {property.bedroomsNumber} Bedroom{property.bedroomsNumber !== 1 ? "s" : ""}
          </p>
          <p className="flex items-center gap-1">
            <BathIcon />
            {property.bathroomsNumber} Bath{property.bathroomsNumber !== 1 ? "s" : ""}
          </p>
          <p className="flex items-center gap-1 col-span-2">
            <RulerIcon />
            {property.size} m²
          </p>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-medium mb-0.5">Price</p>
          <p className="flex flex-wrap items-baseline gap-x-1">
            <span className="text-xl font-bold text-gray-900">{priceLabel}</span>
            {priceSuffix && (
              <span className="text-sm font-medium text-gray-500">{priceSuffix}</span>
            )}
          </p>
        </div>

      </div>
    </Link>
  );
};

export default PropertyCard;
````

## File: src/features/properties/components/PropertyComponents/BookingSidebar.tsx
````typescript
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { eachDayOfInterval, isSameDay } from "date-fns";

import DatePicker, { type DateSelection } from "@/features/properties/components/PropertyComponents/DataPicker";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import { findRememberedChatContext } from "@/services/chatService";
import {
  cancelRentRequest,
  createRentRequest,
} from "@/services/rentRequestService";
import {
  getSaleListingLabel,
  getSaleListingTone,
} from "@/utils/propertyListing";
import type { Lease, Property, RentRequest } from "@/types";

import { usePropertyRentalContext } from "./usePropertyRentalContext";

interface Props { property: Property }

const ACTIVE_LEASE_STATUSES: Lease["status"][] = ["UPCOMING", "IN_PROGRESS", "OVERDUE"];
const PENDING_RENT_STATES: RentRequest["request_state"][] = ["PENDING", "ACCEPTED", "PAYMENT_PENDING", "PAID"];

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const hasDatePassed = (value: string) =>
  new Date(`${value}T23:59:59`).getTime() < Date.now();

const formatLeaseStatus = (status: Lease["status"]) => {
  switch (status) {
    case "UPCOMING":
      return "Upcoming lease";
    case "IN_PROGRESS":
      return "Active lease";
    case "OVERDUE":
      return "Payment overdue";
    case "COMPLETED":
      return "Completed lease";
    case "CANCELLED":
    default:
      return "Cancelled lease";
  }
};

export default function BookingSidebar({ property }: Props) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const isSale = property.property_type === "for_sale";
  const isMonthly = property.pricingUnit === "MONTH";

  const [showPicker, setShowPicker] = useState(false);
  const [selection, setSelection] = useState<DateSelection | null>(null);
  const [busyAction, setBusyAction] = useState<"create" | "cancel" | null>(null);

  const {
    loading: rentalStatusLoading,
    error: rentalStatusError,
    reload: reloadRentalContext,
    relevantSentRequest,
    relevantLease,
    disabledDates,
  } = usePropertyRentalContext({
    propertyId: property.propertyId,
    enabled: isAuthenticated && !isSale,
    role: "viewer",
  });

  const ownerName =
    [property.owner_first_name, property.owner_second_name].filter(Boolean).join(" ")
    || "Property Owner";

  const openPropertyChat = useCallback((partnerId: string, partnerName: string) => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }

    const existingChat = findRememberedChatContext(property.propertyId, partnerId);
    const chatState = {
      partnerName,
      partnerId,
      propertyId: property.propertyId,
      propertyName: property.propertyName,
      propertyImg: property.images[0] ?? null,
    };

    if (existingChat) {
      navigate(`/chat/${existingChat.chat_id}`, { state: chatState });
      return;
    }

    navigate("/chat/start", {
      state: {
        receiverId: partnerId,
        ...chatState,
      },
    });
  }, [isAuthenticated, navigate, property.images, property.propertyId, property.propertyName]);

  const priceLabel = isSale
    ? `EGP ${property.priceValue.toLocaleString()}`
    : isMonthly
      ? `EGP ${property.priceValue.toLocaleString()} / mo`
      : `EGP ${property.pricePerDay.toLocaleString()} / day`;

  const total = () => {
    if (!selection) return 0;
    if (selection.rentingType === "DAY") {
      return (selection.days ?? 0) * property.pricePerDay;
    }
    if (selection.rentingType === "MONTH") {
      return (selection.numMonths ?? 0) * property.priceValue;
    }
    return 0;
  };

  const hasCurrentLease = Boolean(
    relevantLease && ACTIVE_LEASE_STATUSES.includes(relevantLease.status),
  );

  const paidRequestStillActive = Boolean(
    relevantSentRequest?.request_state === "PAID"
    && !hasDatePassed(relevantSentRequest.check_out_date),
  );
  const currentRequestState = relevantSentRequest?.request_state === "PAID" && !paidRequestStillActive
    ? null
    : relevantSentRequest?.request_state ?? null;
  const hasBlockingRequest = currentRequestState
    ? PENDING_RENT_STATES.includes(currentRequestState)
    : false;

  const canStartNewRentRequest = useMemo(() => (
    !isSale
    && property.isVerified
    && property.isAvailable
    && !hasCurrentLease
    && !hasBlockingRequest
  ), [
    hasBlockingRequest,
    hasCurrentLease,
    isSale,
    property.isAvailable,
    property.isVerified,
  ]);

  const handleBook = async () => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }
    if (!selection) {
      toast.error("Please select your dates first.");
      return;
    }

    try {
      setBusyAction("create");

      await reloadRentalContext();

      const freshFrom = new Date(selection.checkIn + "T00:00:00");
      const freshTo   = new Date(selection.checkOut + "T00:00:00");
      const freshRange = eachDayOfInterval({ start: freshFrom, end: freshTo });
      const hasOverlap = freshRange.some((day) =>
        disabledDates.some((d) => isSameDay(day, d)),
      );

      if (hasOverlap) {
        toast.error("These dates were just booked by someone else. Please select new dates.");
        setSelection(null);
        setShowPicker(false);
        setBusyAction(null);
        return;
      }

      await createRentRequest({
        property_id: property.propertyId,
        check_in_date: selection.checkIn,
        check_out_date: selection.checkOut,
        renting_type: selection.rentingType,
      });
      toast.success("Rent request sent! The owner will review it shortly.");
      setSelection(null);
      setShowPicker(false);
      await reloadRentalContext();
    } catch (err) {
      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? "Request failed.")
          : "Unexpected error.",
      );
    } finally {
      setBusyAction(null);
    }
  };

  const handleCancelRequest = async () => {
    if (!relevantSentRequest) return;
    if (!window.confirm("Cancel this rent request?")) return;

    try {
      setBusyAction("cancel");
      await cancelRentRequest(relevantSentRequest.request_id);
      toast.success("Rent request cancelled.");
      await reloadRentalContext();
    } catch (err) {
      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? "Cancel failed.")
          : "Cancel failed.",
      );
    } finally {
      setBusyAction(null);
    }
  };

  const renderSaleStatus = () => {
    const tone = getSaleListingTone(property.listingStatus);
    const label = getSaleListingLabel(property.listingStatus);

    let description =
      "AQAR connects buyers and sellers through property chat only. Start a conversation with the seller to continue.";

    if (property.listingStatus === "under_negotiation") {
      description =
        "The seller is already discussing this listing with another buyer. You can still message them in case availability changes.";
    } else if (property.listingStatus === "sold") {
      description = "This listing has been marked as sold and is no longer open for new buyer conversations.";
    } else if (property.listingStatus === "expired") {
      description = "This sale listing has expired. The seller needs to renew it before new buyer conversations can start.";
    } else if (property.listingStatus === "inactive") {
      description = "This sale listing is not active yet. It may still be awaiting verification or listing payment.";
    }

    const canMessageSeller = ["active", "under_negotiation"].includes(property.listingStatus);

    return (
      <>
        <div className={`rounded-2xl border px-4 py-3 text-sm ${tone}`}>
          <p className="font-bold">{label}</p>
          <p className="mt-1 leading-relaxed">{description}</p>
        </div>

        <button
          type="button"
          disabled={!canMessageSeller}
          onClick={() => openPropertyChat(property.ownerId, ownerName)}
          className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
        >
          {canMessageSeller ? "Message Seller" : "Sale Chat Unavailable"}
        </button>

      </>
    );
  };

  const renderRentalStatus = () => {
    if (!isAuthenticated) {
      return (
        <>
          <button
            type="button"
            onClick={() => navigate("/auth/login")}
            className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 cursor-pointer"
          >
            Sign In to Book
          </button>
          <p className="text-center text-xs text-gray-400">
            Sign in to request dates or message the owner.
          </p>
        </>
      );
    }

    if (rentalStatusLoading) {
      return (
        <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 py-5">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-dark-knight border-t-transparent" />
        </div>
      );
    }

    if (rentalStatusError) {
      return (
        <div className="space-y-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p className="font-semibold">{rentalStatusError}</p>
          <button
            type="button"
            onClick={() => reloadRentalContext()}
            className="rounded-xl bg-white px-4 py-2 font-semibold text-red-700 transition hover:bg-red-100 cursor-pointer"
          >
            Retry
          </button>
        </div>
      );
    }

    if (hasCurrentLease && relevantLease) {
      const isOverdue = relevantLease.status === "OVERDUE";

      return (
        <>
          <div className={`rounded-2xl border px-4 py-3 text-sm ${
            isOverdue
              ? "border-orange-200 bg-orange-50 text-orange-800"
              : "border-green-200 bg-green-50 text-green-800"
          }`}>
            <p className="font-bold">{formatLeaseStatus(relevantLease.status)}</p>
            <p className="mt-1 leading-relaxed">
              {isOverdue
                ? "Your lease is active but there is an overdue payment on it. Check your leases and notifications for the next step."
                : `Your stay is confirmed from ${formatDate(relevantLease.check_in_date)} to ${formatDate(relevantLease.check_out_date)}.`}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/leases")}
            className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 cursor-pointer"
          >
            View My Lease
          </button>
        </>
      );
    }

    if (currentRequestState === "PAID") {
      return (
        <>
          <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            <p className="font-bold">Booking confirmed</p>
            <p className="mt-1 leading-relaxed">
              Your payment was accepted and the booking is now waiting for its lease details to appear.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/payment/success?request_id=" + relevantSentRequest?.request_id)}
            className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 cursor-pointer"
          >
            View Confirmation
          </button>
        </>
      );
    }

    if (currentRequestState === "ACCEPTED" || currentRequestState === "PAYMENT_PENDING") {
      return (
        <>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
            <p className="font-bold">Approved and awaiting payment</p>
            <p className="mt-1 leading-relaxed">
              The owner approved your request. Complete payment to confirm the booking for these dates.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(`/payment/${relevantSentRequest?.request_id}`)}
            className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 cursor-pointer"
          >
            Complete Payment
          </button>
          <button
            type="button"
            disabled={busyAction === "cancel"}
            onClick={handleCancelRequest}
            className="w-full rounded-full border border-gray-300 py-3 text-sm font-semibold transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            {busyAction === "cancel" ? "Cancelling…" : "Cancel Request"}
          </button>
        </>
      );
    }

    if (currentRequestState === "PENDING") {
      return (
        <>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            <p className="font-bold">Request pending</p>
            <p className="mt-1 leading-relaxed">
              The owner still needs to review your booking request. You can track it from your requests page or message the owner.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/rent-requests")}
            className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 cursor-pointer"
          >
            View My Request
          </button>
          <button
            type="button"
            disabled={busyAction === "cancel"}
            onClick={handleCancelRequest}
            className="w-full rounded-full border border-gray-300 py-3 text-sm font-semibold transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            {busyAction === "cancel" ? "Cancelling…" : "Cancel Request"}
          </button>
        </>
      );
    }

    if (currentRequestState === "REJECTED" || currentRequestState === "CANCELLED" || currentRequestState === "REFUNDED" || currentRequestState === "REFUND_DENIED") {
      const statusLabel = currentRequestState === "REJECTED"
        ? "Previous request declined"
        : currentRequestState === "REFUNDED"
          ? "Previous booking refunded"
          : currentRequestState === "REFUND_DENIED"
            ? "Refund request denied"
            : "Previous request cancelled";

      return (
        <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
          <p className="font-bold">{statusLabel}</p>
          <p className="mt-1 leading-relaxed">
            {canStartNewRentRequest
              ? "You can choose a new date range and submit another request."
              : "This property is not currently available for another booking request."}
          </p>
        </div>
      );
    }

    if (!property.isVerified) {
      return (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <p className="font-bold">Pending verification</p>
          <p className="mt-1 leading-relaxed">
            This property has not been verified yet, so booking requests are temporarily disabled.
          </p>
        </div>
      );
    }

    if (!property.isAvailable) {
      return (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <p className="font-bold">Unavailable for new bookings</p>
          <p className="mt-1 leading-relaxed">
            Another renter currently has this property booked, or the owner has taken it offline for now.
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="bg-white p-6 rounded-2xl shadow-xl space-y-5 w-full">
        <div className="flex justify-between items-end gap-3">
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
              {isSale ? "Sale Price" : "Rent Price"}
            </p>
            <p className="text-3xl font-bold text-gray-900">{priceLabel}</p>
          </div>
          {isSale ? (
            <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${getSaleListingTone(property.listingStatus)}`}>
              {getSaleListingLabel(property.listingStatus)}
            </span>
          ) : !property.isAvailable ? (
            <span className="text-xs font-bold bg-red-100 text-red-600 px-2.5 py-1 rounded-full">
              Unavailable
            </span>
          ) : null}
        </div>

        {!isSale && canStartNewRentRequest && (
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => {
                if (!isAuthenticated) {
                  navigate("/auth/login");
                  return;
                }
                setShowPicker((value) => !value);
              }}
              className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 hover:border-gray-400 transition cursor-pointer"
            >
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  {isMonthly ? "Select months" : "Select dates"}
                </p>
                <p className="font-semibold text-sm mt-0.5 text-gray-800">
                  {selection
                    ? isMonthly
                      ? `${selection.numMonths} month${(selection.numMonths ?? 0) > 1 ? "s" : ""}`
                      : `${selection.days} day${(selection.days ?? 0) > 1 ? "s" : ""}`
                    : "Add dates"}
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${showPicker ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {showPicker && (
              <div className="pt-2 border-t border-gray-100">
                <DatePicker
                  mode={isMonthly ? "MONTH" : "DAY"}
                  onChange={setSelection}
                  disabledDates={disabledDates}
                  onRangeError={(msg) => toast.error(msg)}
                />
              </div>
            )}

            {selection && total() > 0 && (
              <div className="bg-gray-50 rounded-xl px-4 py-3 space-y-1.5 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>
                    {selection.rentingType === "DAY"
                      ? `EGP ${property.pricePerDay.toLocaleString()} × ${selection.days} day${(selection.days ?? 0) > 1 ? "s" : ""}`
                      : `EGP ${property.priceValue.toLocaleString()} × ${selection.numMonths} month${(selection.numMonths ?? 0) > 1 ? "s" : ""}`}
                  </span>
                  <span>EGP {total().toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 pt-1.5 border-t border-gray-200">
                  <span>Total</span>
                  <span>EGP {total().toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="space-y-2.5">
          {isSale ? (
            renderSaleStatus()
          ) : (
            <>
              {renderRentalStatus()}

              {canStartNewRentRequest && (
                <button
                  type="button"
                  disabled={busyAction === "create" || !selection}
                  onClick={handleBook}
                  className="w-full rounded-full bg-dark-knight py-3 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                >
                  {busyAction === "create" ? "Sending…" : selection ? "Send Rent Request" : "Choose Dates to Request"}
                </button>
              )}
            </>
          )}

          {!isSale && (
            <button
              type="button"
              onClick={() => openPropertyChat(property.ownerId, ownerName)}
              className="flex items-center justify-center gap-2 w-full border border-gray-300 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                <path
                  d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Message Owner
            </button>
          )}
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-amber-300 text-dark-knight flex items-center justify-center font-bold text-lg shrink-0">
            {(property.owner_first_name?.[0] ?? "?").toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-sm truncate">{ownerName}</p>
            <p className="text-xs text-gray-400">{isSale ? "Property Seller" : "Property Owner"}</p>
            {property.owner_email && (
              <p className="text-xs text-gray-400 truncate">{property.owner_email}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-md w-full">
        <h3 className="font-semibold text-base mb-3">Property Info</h3>
        <div className="text-sm text-gray-600 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">Type</span>
            <span className="font-semibold text-gray-900">{isSale ? "For Sale" : "For Rent"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Furnished</span>
            <span className="font-semibold text-gray-900">{property.is_furnished ? "Yes" : "No"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className={`font-semibold ${
              isSale
                ? property.listingStatus === "active"
                  ? "text-green-600"
                  : property.listingStatus === "under_negotiation"
                    ? "text-amber-600"
                    : "text-red-600"
                : property.isVerified
                  ? "text-green-600"
                  : "text-yellow-600"
            }`}>
              {isSale ? getSaleListingLabel(property.listingStatus) : property.isVerified ? "Verified ✓" : "Pending"}
            </span>
          </div>
          {!isSale && (
            <div className="flex justify-between">
              <span className="text-gray-500">Pricing</span>
              <span className="font-semibold text-gray-900">{isMonthly ? "Monthly" : "Daily"}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-500">Bedrooms</span>
            <span className="font-semibold text-gray-900">{property.bedroomsNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Bathrooms</span>
            <span className="font-semibold text-gray-900">{property.bathroomsNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Size</span>
            <span className="font-semibold text-gray-900">{property.size} m²</span>
          </div>
          {property.is_furnished && property.bedsNumber > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-500">Beds</span>
              <span className="font-semibold text-gray-900">{property.bedsNumber}</span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
````

## File: src/features/properties/components/PropertyComponents/DataPicker.tsx
````typescript
import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { format, addMonths, addDays, startOfDay, differenceInCalendarDays, eachDayOfInterval, isSameDay } from "date-fns";

export interface DateSelection {
  checkIn:     string;
  checkOut:    string;
  rentingType: "DAY" | "MONTH";
  days?:       number;
  numMonths?:  number;
}

interface Props {
  mode:           "DAY" | "MONTH";
  onChange:       (selection: DateSelection | null) => void;
  disabledDates?: Date[];
  onRangeError?:  (msg: string) => void;
}

/*
  Centering strategy:
  ───────────────────────────────────────────────────────────────
  WRONG  →  flex justify-center  on the scroll wrapper
            When content overflows, CSS anchors the RIGHT edge
            and throws left overflow away — it's unreachable.

  CORRECT → overflow-x-auto  on outer wrapper (plain block)
            w-fit mx-auto     on inner wrapper
            `margin: auto` centers when container > content.
            When container < content it falls back to left-aligned,
            so both ← and → scroll directions work normally.
  ───────────────────────────────────────────────────────────────
*/
const rdpTheme: React.CSSProperties = {
  "--rdp-cell-size":               "40px",
  "--rdp-month-width":             "280px",
  "--rdp-accent-color":            "#0F172A",
  "--rdp-accent-color-dark":       "#0F172A",
  "--rdp-range-middle-color":      "#FEF3C7",
  "--rdp-range-middle-color-dark": "#FEF3C7",
  "--rdp-selected-color":          "#ffffff",
  "--rdp-today-color":             "#D97706",
} as React.CSSProperties;

export default function DatePicker({ mode, onChange, disabledDates = [], onRangeError }: Props) {
  const [dayRange,    setDayRange]    = useState<DateRange | undefined>();
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [numMonths,   setNumMonths]   = useState<number>(1);

  const isDisabled = (date: Date) => disabledDates.some((d) => isSameDay(date, d));

  const rangeHasDisabledDate = (from: Date, to: Date): boolean => {
    if (disabledDates.length === 0) return false;
    const days = eachDayOfInterval({ start: from, end: to });
    return days.some((day) => isDisabled(day));
  };

  const emitDay = (r: DateRange | undefined) => {
    setDayRange(r);
    if (!r?.from || !r?.to) { onChange(null); return; }
    if (rangeHasDisabledDate(r.from, r.to)) {
      setDayRange(undefined);
      onChange(null);
      onRangeError?.("Your selected range includes unavailable dates.");
      return;
    }
    const days = differenceInCalendarDays(r.to, r.from);
    if (days <= 0) { onChange(null); return; }
    onChange({
      checkIn:     format(r.from, "yyyy-MM-dd"),
      checkOut:    format(r.to,   "yyyy-MM-dd"),
      rentingType: "DAY",
      days,
    });
  };

  const emitMonth = (date: Date | undefined, months: number) => {
    if (!date || months < 1) { onChange(null); return; }
    const checkOut = addMonths(date, months);
    onChange({
      checkIn:     format(date,     "yyyy-MM-dd"),
      checkOut:    format(checkOut, "yyyy-MM-dd"),
      rentingType: "MONTH",
      numMonths:   months,
    });
  };

  // ── DAY mode ──────────────────────────────────────────────────────────────
  if (mode === "DAY") {
    return (
      <div>
        {/* outer: scrollable block — inner: w-fit mx-auto so both directions scroll */}
        <div className="overflow-x-auto">
          <div style={rdpTheme} className="w-fit mx-auto">
            <DayPicker
              mode="range"
              selected={dayRange}
              onSelect={emitDay}
              numberOfMonths={1}
              disabled={(date: Date) => {
                const isPastOrToday = date < startOfDay(addDays(new Date(), 1));
                return isPastOrToday || isDisabled(date);
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-1 max-w-[280px] mx-auto">
          {[
            { label: "Check-in",  date: dayRange?.from },
            { label: "Check-out", date: dayRange?.to   },
          ].map(({ label, date }) => (
            <div key={label} className="bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">{label}</p>
              <p className="font-semibold text-xs mt-0.5 truncate">
                {date ? format(date, "EEE, MMM d") : "—"}
              </p>
            </div>
          ))}
        </div>

        {dayRange?.from && dayRange?.to && (
          <p className="text-xs text-center text-gray-500 mt-2">
            {differenceInCalendarDays(dayRange.to, dayRange.from)} days
          </p>
        )}
      </div>
    );
  }

  // ── MONTH mode ────────────────────────────────────────────────────────────
  const checkOut = checkInDate ? addMonths(checkInDate, numMonths) : undefined;

  return (
    <div className="space-y-4">

      {/* Step 1 — move-in date picker */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">
          1. Pick your move-in date
        </p>
        {/* same scroll fix as DAY mode */}
        <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white">
          <div style={rdpTheme} className="w-fit mx-auto py-2">
            <DayPicker
              mode="single"
              selected={checkInDate}
              onSelect={(d) => {
                if (d && isDisabled(d)) {
                  onRangeError?.("This date is unavailable.");
                  return;
                }
                setCheckInDate(d ?? undefined);
                emitMonth(d ?? undefined, numMonths);
              }}
              numberOfMonths={1}
              disabled={(date: Date) => {
                const isPastOrToday = date < startOfDay(addDays(new Date(), 1));
                return isPastOrToday || isDisabled(date);
              }}
            />
          </div>
        </div>
      </div>

      {/* Step 2 — month spinner, centered */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">
          2. How many months?
        </p>
        <div className="flex items-center justify-center gap-4">
          <button type="button"
            onClick={() => { const n = Math.max(1, numMonths - 1); setNumMonths(n); emitMonth(checkInDate, n); }}
            className="w-9 h-9 rounded-full border border-gray-200 text-xl font-bold text-gray-600 hover:bg-gray-100 transition cursor-pointer flex items-center justify-center">
            −
          </button>
          <span className="text-2xl font-bold text-gray-900 w-10 text-center">{numMonths}</span>
          <button type="button"
            onClick={() => { const n = Math.min(24, numMonths + 1); setNumMonths(n); emitMonth(checkInDate, n); }}
            className="w-9 h-9 rounded-full border border-gray-200 text-xl font-bold text-gray-600 hover:bg-gray-100 transition cursor-pointer flex items-center justify-center">
            +
          </button>
          <span className="text-sm text-gray-500">month{numMonths !== 1 ? "s" : ""}</span>
        </div>
      </div>

      {/* Move-in / Move-out pills */}
      <div className="grid grid-cols-2 gap-2 max-w-[280px] mx-auto">
        {[
          { label: "Move-in",  date: checkInDate },
          { label: "Move-out", date: checkOut    },
        ].map(({ label, date }) => (
          <div key={label} className="bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">{label}</p>
            <p className="font-semibold text-xs mt-0.5 truncate">
              {date ? format(date, "MMM d, yyyy") : "—"}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
````

## File: src/features/properties/components/PropertyComponents/MortgageCalculator.tsx
````typescript
import { useState } from "react";
import type { Property } from "@/types/index";

interface Props {
  property: Property;
}

export default function MortgageCalculator({ property }: Props) {
  const [downPayment, setDownPayment]   = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm]         = useState("");
  const [monthly, setMonthly]           = useState<number | null>(null);

  const propertyPrice = property.priceValue ?? 0;

  const calculate = () => {
    const P   = propertyPrice - Number(downPayment || 0);
    const r   = Number(interestRate) / 100 / 12;
    const n   = Number(loanTerm) * 12;
    if (P <= 0 || r <= 0 || n <= 0) { setMonthly(null); return; }
    const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthly(M);
  };

  // Only show for sale properties
  if (property.property_type !== "for_sale") return null;

  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-4">
      <h2 className="text-xl font-semibold">Mortgage Calculator</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Property Price (EGP)</label>
          <input
            readOnly
            value={propertyPrice.toLocaleString()}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm bg-gray-50 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Down Payment (EGP)</label>
          <input
            type="number"
            min={0}
            placeholder="e.g. 500000"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Annual Interest Rate (%)</label>
          <input
            type="number"
            min={0}
            step={0.1}
            placeholder="e.g. 12"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Loan Term (Years)</label>
          <input
            type="number"
            min={1}
            placeholder="e.g. 20"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-black text-white py-2 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Calculate Monthly Payment
      </button>

      {monthly !== null && (
        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">Estimated Monthly Payment</p>
          <p className="text-3xl font-bold mt-1">
            EGP {monthly.toLocaleString("en-US", { maximumFractionDigits: 0 })}
          </p>
        </div>
      )}
    </div>
  );
}
````

## File: src/features/properties/components/PropertyComponents/OwnerPanel.tsx
````typescript
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { deleteProperty } from "@/services/propertyService";
import { findRememberedChatContext } from "@/services/chatService";
import {
  getStoredListingSubscription,
  syncStoredListingSubscriptionWithProperty,
} from "@/services/listingSubscriptionService";
import SponsorshipModal from "@/features/subscription/components/SponsorshipModal";

import { saleService } from "@/services/saleService";
import { getSaleListingLabel, getSaleListingTone } from "@/utils/propertyListing";
import { getSaleSubscriptionUiState, hasExpiredSaleListing } from "@/utils/saleSubscriptionState";
import { useToast } from "@/context/ToastContext";
import type { Lease, Property } from "@/types/index";

import { usePropertyRentalContext } from "./usePropertyRentalContext";

interface Props { property: Property }

const ACTIVE_LEASE_STATUSES: Lease["status"][] = ["UPCOMING", "IN_PROGRESS", "OVERDUE"];

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const hasDatePassed = (value: string) =>
  new Date(`${value}T23:59:59`).getTime() < Date.now();

export default function OwnerPanel({ property }: Props) {
  const navigate = useNavigate();
  const toast = useToast();
  const [deleting, setDeleting] = useState(false);
  const [showSponsorshipModal, setShowSponsorshipModal] = useState(false);

  const canManage = property.isVisible !== false && property.listingStatus !== "sold";
  const isSale = property.property_type === "for_sale";
  const saleSubscription = isSale
    ? syncStoredListingSubscriptionWithProperty(property) ?? getStoredListingSubscription(property.propertyId)
    : null;
  const saleSubscriptionState = isSale
    ? getSaleSubscriptionUiState(property, saleSubscription)
    : null;

  const {
    loading: rentalLoading,
    error: rentalError,
    relevantLease,
    relevantReceivedRequest,
  } = usePropertyRentalContext({
    propertyId: property.propertyId,
    enabled: !isSale,
    role: "owner",
  });

  const currentRenterId = useMemo(() => {
    if (relevantLease && ACTIVE_LEASE_STATUSES.includes(relevantLease.status)) {
      return relevantLease.renter_id;
    }

    if (relevantReceivedRequest?.request_state === "PAID"
      || relevantReceivedRequest?.request_state === "ACCEPTED"
      || relevantReceivedRequest?.request_state === "PAYMENT_PENDING") {
      if (relevantReceivedRequest.request_state === "PAID" && hasDatePassed(relevantReceivedRequest.check_out_date)) {
        return null;
      }
      return relevantReceivedRequest.renter_id;
    }

    return null;
  }, [relevantLease, relevantReceivedRequest]);

  const openRenterChat = useCallback(() => {
    if (!currentRenterId) return;

    const partnerName = relevantLease?.renter_name ?? "Current Renter";
    const existingChat = findRememberedChatContext(property.propertyId, currentRenterId);
    const chatState = {
      partnerName,
      partnerId: currentRenterId,
      propertyId: property.propertyId,
      propertyName: property.propertyName,
      propertyImg: property.images[0] ?? null,
    };

    if (existingChat) {
      navigate(`/chat/${existingChat.chat_id}`, { state: chatState });
      return;
    }

    navigate("/chat/start", {
      state: {
        receiverId: currentRenterId,
        ...chatState,
      },
    });
  }, [currentRenterId, navigate, property.images, property.propertyId, property.propertyName, relevantLease]);

  const [markingSold, setMarkingSold] = useState(false);

  const handleMarkAsSold = async () => {
    if (!window.confirm(`Mark "${property.propertyName}" as sold? This will hide it from search results.`)) return;
    try {
      setMarkingSold(true);
      await saleService.markAsSold(property.propertyId);
      toast.success("Property marked as sold.");
      navigate(0);
    } catch (err) {
      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.message ?? "Failed to mark as sold.")
          : "Failed to mark as sold.",
      );
    } finally {
      setMarkingSold(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Delete "${property.propertyName}"? This cannot be undone.`)) return;
    try {
      setDeleting(true);
      await deleteProperty(String(property.propertyId));
      toast.success("Property deleted.");
      navigate("/my-properties");
    } catch (err) {
      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? "Delete failed.")
          : "Delete failed.",
      );
    } finally {
      setDeleting(false);
    }
  };

  const renderPropertyStatusCard = () => {
    if (isSale) {
      const tone = saleSubscriptionState === "expired"
        ? "bg-red-50 text-red-700 border-red-200"
        : saleSubscriptionState === "ready_to_pay"
          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
          : saleSubscriptionState === "paid_awaiting_verification" || saleSubscriptionState === "payment_pending"
            ? "bg-blue-50 text-blue-700 border-blue-200"
            : getSaleListingTone(property.listingStatus);

      const title = saleSubscriptionState === "awaiting_verification"
        ? "Pending admin verification"
        : saleSubscriptionState === "paid_awaiting_verification"
          ? "Listing fee paid"
          : saleSubscriptionState === "ready_to_pay"
            ? "Ready for listing payment"
            : saleSubscriptionState === "payment_pending"
              ? "Waiting for payment confirmation"
              : saleSubscriptionState === "expired"
                ? "Subscription expired"
                : getSaleListingLabel(property.listingStatus);

      const description = saleSubscriptionState === "awaiting_verification"
        ? "The selling plan is attached, but payment stays locked until the property passes admin verification."
        : saleSubscriptionState === "paid_awaiting_verification"
          ? "The listing fee has been received. Buyers will only see the property after admin verification is complete."
          : saleSubscriptionState === "ready_to_pay"
            ? "The property is verified and can now be activated by paying the saved selling plan."
            : saleSubscriptionState === "payment_pending"
              ? "A payment session was started for this plan. Refresh or open the selling-plan page to confirm the result."
              : saleSubscriptionState === "expired"
                ? "The current backend has no renewal endpoint, so expired sale subscriptions cannot be recreated from the frontend yet."
                : property.listingStatus === "active"
                  ? "Visible to buyers and ready for chat."
                  : property.listingStatus === "under_negotiation"
                    ? "Buyer discussions are already underway."
                    : property.listingStatus === "sold"
                      ? "This property has been marked as sold."
                      : "This listing is waiting for activation.";

      return (
        <div className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm font-semibold ${tone}`}>
          <span className="text-base">🏷️</span>
          <div>
            <p>{title}</p>
            <p className="mt-1 text-xs font-medium opacity-80">{description}</p>
          </div>
        </div>
      );
    }

    if (rentalLoading) {
      return (
        <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 py-4">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-dark-knight border-t-transparent" />
        </div>
      );
    }

    if (rentalError) {
      return (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <p className="font-semibold">{rentalError}</p>
          <p className="mt-1 text-xs">Open rent requests to inspect the current tenant status manually.</p>
        </div>
      );
    }

    if (relevantLease && ACTIVE_LEASE_STATUSES.includes(relevantLease.status)) {
      const overdue = relevantLease.status === "OVERDUE";

      return (
        <div className={`rounded-xl border px-4 py-3 text-sm ${
          overdue
            ? "border-orange-200 bg-orange-50 text-orange-800"
            : "border-green-200 bg-green-50 text-green-800"
        }`}>
          <p className="font-semibold">{overdue ? "Current renter overdue" : "Current renter assigned"}</p>
          <p className="mt-1 text-xs leading-relaxed">
            Renter ID: {relevantLease.renter_id.slice(0, 8)}… | {formatDate(relevantLease.check_in_date)} to {formatDate(relevantLease.check_out_date)}
          </p>
        </div>
      );
    }

    if (relevantReceivedRequest?.request_state === "ACCEPTED" || relevantReceivedRequest?.request_state === "PAYMENT_PENDING") {
      return (
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
          <p className="font-semibold">Awaiting renter payment</p>
          <p className="mt-1 text-xs leading-relaxed">
            You approved a rent request for this property. The renter still needs to finish payment.
          </p>
        </div>
      );
    }

    if (relevantReceivedRequest?.request_state === "PAID" && !hasDatePassed(relevantReceivedRequest.check_out_date)) {
      return (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          <p className="font-semibold">Payment received</p>
          <p className="mt-1 text-xs leading-relaxed">
            A renter has paid for this booking. Lease details should already be visible or will appear shortly.
          </p>
        </div>
      );
    }

    if (relevantReceivedRequest?.request_state === "PENDING") {
      return (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <p className="font-semibold">Pending rent request</p>
          <p className="mt-1 text-xs leading-relaxed">
            A renter is waiting for your approval on this property.
          </p>
        </div>
      );
    }

    return (
      <div className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold ${
        property.isVerified
          ? "bg-green-50 text-green-700 border border-green-200"
          : "bg-amber-50 text-amber-700 border border-amber-200"
      }`}>
        <span className="text-base">{property.isVerified ? "✅" : "⏳"}</span>
        {property.isVerified
          ? property.isAvailable
            ? "Available for new rent requests"
            : "Currently unavailable for new renters"
          : "Pending verification"}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-[768px]:max-[1049px]:flex-row gap-5 items-start">
      <div className="bg-white p-6 rounded-2xl shadow-xl space-y-5 w-full min-[768px]:max-[1049px]:flex-3 min-[768px]:max-[1049px]:min-w-0">
        <div>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
            Your Property
          </p>
          <p className="text-xl font-bold text-gray-900 leading-tight">{property.propertyName}</p>
        </div>

        {renderPropertyStatusCard()}

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-gray-50 rounded-xl px-4 py-3">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Price</p>
            <p className="font-bold text-gray-900">
              EGP {property.priceValue.toLocaleString()}
              {!isSale && (
                <span className="font-normal text-gray-500 text-xs ml-1">
                  / {property.pricingUnit === "MONTH" ? "mo" : "day"}
                </span>
              )}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl px-4 py-3">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Availability</p>
            <p className={`font-bold ${
              isSale
                ? saleSubscriptionState === "active" || saleSubscriptionState === "paid_awaiting_verification"
                  ? "text-green-600"
                  : saleSubscriptionState === "expired"
                    ? "text-red-600"
                    : "text-amber-600"
                : property.isAvailable
                  ? "text-green-600"
                  : "text-red-500"
            }`}>
              {isSale
                ? saleSubscriptionState === "ready_to_pay"
                  ? "Ready to Pay"
                  : saleSubscriptionState === "awaiting_verification"
                    ? "Pending Review"
                    : saleSubscriptionState === "payment_pending"
                      ? "Payment Pending"
                      : hasExpiredSaleListing(property)
                        ? "Expired"
                        : getSaleListingLabel(property.listingStatus)
                : property.isAvailable
                  ? "Available"
                  : "Unavailable"}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {isSale && (
            <>
              {canManage && (
                <button
                  type="button"
                  onClick={() => navigate(`/property/${property.propertyId}/subscription`)}
                  className="w-full bg-dark-knight text-white py-3 rounded-full font-bold hover:opacity-90 transition cursor-pointer"
                >
                  Manage Selling Plan
                </button>
              )}
              {property.listingStatus !== "sold" && (
                <button
                  type="button"
                  onClick={handleMarkAsSold}
                  disabled={markingSold}
                  className="w-full border border-slate-300 py-3 rounded-full font-semibold text-sm hover:bg-slate-50 transition cursor-pointer disabled:opacity-50"
                >
                  {markingSold ? "Marking…" : "Mark as Sold"}
                </button>
              )}
            </>
          )}
          {!isSale && (
            <button
              type="button"
              onClick={() => navigate("/rent-requests")}
              className="w-full bg-dark-knight text-white py-3 rounded-full font-bold hover:opacity-90 transition cursor-pointer"
            >
              Review Rent Requests
            </button>
          )}
          {canManage && property.isVerified && !isSale && !property.isSponsored && (
            <button
              type="button"
              onClick={() => setShowSponsorshipModal(true)}
              className="w-full border border-amber-300 bg-amber-50 py-3 rounded-full font-bold text-amber-800 hover:bg-amber-100 transition cursor-pointer"
            >
              Boost Rental
            </button>
          )}
          {!isSale && currentRenterId && (
            <>
              <button
                type="button"
                onClick={() => navigate("/leases")}
                className="w-full border border-gray-200 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition cursor-pointer"
              >
                View Current Lease
              </button>
              <button
                type="button"
                onClick={openRenterChat}
                className="w-full border border-gray-200 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition cursor-pointer"
              >
                Message Current Renter
              </button>
            </>
          )}
          {canManage && (
            <button
              type="button"
              onClick={() => navigate(`/property/${property.propertyId}/edit`)}
              className="w-full bg-dark-knight text-white py-3 rounded-full font-bold hover:opacity-90 transition cursor-pointer"
            >
              Edit Property
            </button>
          )}
          <button
            type="button"
            onClick={() => navigate("/my-properties")}
            className="w-full border border-gray-200 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition cursor-pointer"
          >
            My Properties
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting || property.isVisible === false}
            className="w-full border border-red-200 text-red-500 py-3 rounded-full font-semibold text-sm hover:bg-red-50 transition cursor-pointer disabled:opacity-50"
          >
            {deleting ? "Deleting…" : property.isVisible === false ? "Deleted" : "Delete Property"}
          </button>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-md w-full min-[768px]:max-[1049px]:flex-2 min-[768px]:max-[1049px]:min-w-0">
        <h3 className="font-semibold text-base mb-3">Property Info</h3>
        <div className="text-sm text-gray-600 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">Type</span>
            <span className="font-semibold text-gray-900">
              {isSale ? "For Sale" : "For Rent"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Furnished</span>
            <span className="font-semibold text-gray-900">{property.is_furnished ? "Yes" : "No"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="font-semibold text-gray-900">
              {isSale
                ? saleSubscriptionState === "ready_to_pay"
                  ? "Verified · Unpaid"
                  : saleSubscriptionState === "awaiting_verification"
                    ? "Pending Review"
                    : saleSubscriptionState === "payment_pending"
                      ? "Payment Pending"
                      : hasExpiredSaleListing(property)
                        ? "Expired"
                        : getSaleListingLabel(property.listingStatus)
                : property.isVerified
                  ? "Verified"
                  : "Pending"}
            </span>
          </div>
          {!isSale && (
            <div className="flex justify-between">
              <span className="text-gray-500">Pricing</span>
              <span className="font-semibold text-gray-900">
                {property.pricingUnit === "MONTH" ? "Monthly" : "Daily"}
              </span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-500">Bedrooms</span>
            <span className="font-semibold text-gray-900">{property.bedroomsNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Bathrooms</span>
            <span className="font-semibold text-gray-900">{property.bathroomsNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Size</span>
            <span className="font-semibold text-gray-900">{property.size} m²</span>
          </div>
          {property.is_furnished && property.bedsNumber > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-500">Beds</span>
              <span className="font-semibold text-gray-900">{property.bedsNumber}</span>
            </div>
          )}
        </div>
      </div>
      {showSponsorshipModal && (
        <SponsorshipModal
          property={property}
          onClose={() => setShowSponsorshipModal(false)}
        />
      )}
    </div>
  );
}
````

## File: src/features/properties/components/PropertyComponents/PropertyDescription.tsx
````typescript
import { useState } from "react";
import type { Property } from "@/types/index";

interface Props {
  property: Property;
}

const LIMIT = 300;

export default function PropertyDescription({ property }: Props) {
  const [readMore, setReadMore] = useState(false);

  const description = property.propertyDesc ?? "";
  const isTruncatable = description.length > LIMIT;
  const displayedText = !readMore && isTruncatable
    ? description.slice(0, LIMIT) + "..."
    : description;

  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-3">
      <h2 className="text-xl font-semibold">About this property</h2>

      <p className="text-gray-600 whitespace-pre-wrap">{displayedText}</p>

      {isTruncatable && (
        <button
          onClick={() => setReadMore((prev) => !prev)}
          className="text-blue-600 font-medium hover:underline transition cursor-pointer"
        >
          {readMore ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
````

## File: src/features/properties/components/PropertyComponents/PropertyFeatures.tsx
````typescript
import bedroomIcon    from "@/assets/bedroom.png";
import bathIcon       from "@/assets/bathroom.svg";
import rulerIcon      from "@/assets/ruler.svg";
import mapPointerIcon from "@/assets/mapPointer.svg";

import { BedIcon }           from "@/utils/Icons";
import { WhiteHeartIcon, RedHeartIcon } from "@/utils/Icons";
import type { Property }     from "@/types/index";
import { hasExpiredSaleListing } from "@/utils/saleSubscriptionState";

interface Props {
  property:     Property;
  isFav?:       boolean;
  onFavChange?: (propertyId: number, next: boolean) => void;
}

const formatSize = (raw: string | number): string => {
  const n = parseFloat(String(raw));
  return isNaN(n) ? String(raw) : `${n} m²`;
};

export default function PropertyFeatures({ property, isFav = false, onFavChange }: Props) {
  const isSale = property.property_type === "for_sale";

  // Image-based features (bedroom, bath, size)
  const imgFeatures = [
    { icon: bedroomIcon, label: `${property.bedroomsNumber} Bedroom${property.bedroomsNumber !== 1 ? "s" : ""}` },
    { icon: bathIcon,    label: `${property.bathroomsNumber} Bathroom${property.bathroomsNumber !== 1 ? "s" : ""}` },
    { icon: rulerIcon,   label: formatSize(property.size) },
  ];

  return (
    <>
      <div className="flex flex-col gap-3">

        {/* Title row — name on left, heart on right */}
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-3xl font-semibold">{property.propertyName}</h1>

          {onFavChange && (
            <button
              type="button"
              onClick={() => onFavChange(property.propertyId, !isFav)}
              className="shrink-0 mt-1 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              title={isFav ? "Remove from saved" : "Save property"}
            >
              {isFav ? <RedHeartIcon /> : <WhiteHeartIcon />}
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full
            ${isSale ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"}`}>
            {isSale ? "For Sale" : "For Rent"}
          </span>
          {isSale && property.isVerified && property.listingStatus === "inactive" && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
              Subscription Pending
            </span>
          )}
          {isSale && hasExpiredSaleListing(property) && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-600">
              Subscription Expired
            </span>
          )}
          {isSale && property.listingStatus === "under_negotiation" && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700">
              Under Negotiation
            </span>
          )}
          {isSale && property.listingStatus === "sold" && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-200 text-gray-700">
              Sold
            </span>
          )}
          {!property.isAvailable && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-600">
              Not Available
            </span>
          )}
          {!property.isVerified && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
              Pending Verification
            </span>
          )}
        </div>

        <p className="flex items-start gap-1 text-xl font-semibold text-gray-700">
          <img src={mapPointerIcon} alt="location" className="w-6 h-6 shrink-0 mt-0.5" />
          {property.location}
        </p>
      </div>

      <hr className="border-gray-200" />

      <div className="grid lg:w-full sm:w-5/6 my-8 sm:mx-auto lg:text-lg sm:text-base lg:grid-cols-4 grid-cols-2 gap-y-4 ms-5 lg:justify-items-center">

        {/* Image-based features */}
        {imgFeatures.map((f, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <img src={f.icon} alt={f.label} className="w-5 h-5 opacity-70" />
            <span className="font-semibold text-gray-800">{f.label}</span>
          </div>
        ))}

        {/* Beds — only when furnished, uses BedIcon SVG from Icons.tsx */}
        {property.is_furnished && property.bedsNumber > 0 && (
          <div className="flex items-center gap-2.5">
            <BedIcon />
            <span className="font-semibold text-gray-800">
              {property.bedsNumber} Bed{property.bedsNumber !== 1 ? "s" : ""}
            </span>
          </div>
        )}

      </div>

      <hr className="border-gray-200" />
    </>
  );
}
````

## File: src/features/properties/components/PropertyComponents/PropertyGallery.tsx
````typescript
import { useState, type FC } from "react";
import Swiper from "@/features/properties/components/PropertyComponents/Swiper";

const PropertyGallery: FC<{ imagesList: string[] }> = ({ imagesList }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const imgs = imagesList.length > 0
    ? imagesList
    : ["https://placehold.co/900x420?text=No+Images"];

  const count = imgs.length;

  return (
    <>
      <div className="w-[90%] mx-auto my-10 rounded-2xl overflow-hidden">

        {/* ── 1 image ─────────────────────────────────────────────────── */}
        {count === 1 && (
          <img
            src={imgs[0]}
            onClick={() => setOpenIndex(0)}
            className="w-full h-[420px] object-cover cursor-pointer hover:opacity-95 transition-opacity"
            alt="property"
          />
        )}

        {/* ── 2 images: side by side ──────────────────────────────────── */}
        {count === 2 && (
          <div className="grid grid-cols-2 gap-1.5 h-[420px]">
            {imgs.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setOpenIndex(i)}
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                alt={`property-${i}`}
              />
            ))}
          </div>
        )}

        {/* ── 3 images: 1 large left + 2 stacked right ───────────────── */}
        {count === 3 && (
          <div className="grid grid-cols-3 gap-1.5 h-[420px]">
            {/* Main image — spans 2 cols, needs a wrapper to contain properly */}
            <div className="col-span-2 overflow-hidden">
              <img
                src={imgs[0]}
                onClick={() => setOpenIndex(0)}
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                alt="property-0"
              />
            </div>

            {/* Right column — each thumbnail in its own flex-1 wrapper */}
            <div className="flex flex-col gap-1.5 min-h-0">
              {imgs.slice(1, 3).map((img, i) => (
                <div key={i} className="flex-1 min-h-0 overflow-hidden">
                  <img
                    src={img}
                    onClick={() => setOpenIndex(i + 1)}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                    alt={`property-${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── 4+ images: 1 large left + up to 3 stacked right ────────── */}
        {count >= 4 && (
          <div className="grid grid-cols-3 gap-1.5 h-[420px]">
            <div className="col-span-2 overflow-hidden">
              <img
                src={imgs[0]}
                onClick={() => setOpenIndex(0)}
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                alt="property-main"
              />
            </div>

            <div className="flex flex-col gap-1.5 min-h-0">
              {imgs.slice(1, 4).map((img, i) => {
                const isLast = i === 2 && count > 4;
                return (
                  <div
                    key={i}
                    className="relative flex-1 min-h-0 overflow-hidden cursor-pointer"
                    onClick={() => setOpenIndex(i + 1)}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover hover:opacity-95 transition-opacity"
                      alt={`property-${i + 1}`}
                    />
                    {isLast && (
                      <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          +{count - 4} more
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {openIndex !== null && (
        <Swiper
          images={imgs}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
};

export default PropertyGallery;
````

## File: src/features/properties/components/PropertyComponents/PropertyLocationMap.tsx
````typescript
import type { FC } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { MAPBOX_ATTRIBUTION, MAPBOX_TILE_URL } from "@/utils/map";

interface Props {
  latitude?:  number;
  longitude?: number;
  location:   string;
}

const PropertyLocationMap: FC<Props> = ({ latitude, longitude, location }) => {
  const hasCoords = latitude != null && longitude != null;

  const googleMapsUrl = hasCoords
    ? `https://www.google.com/maps?q=${latitude},${longitude}`
    : `https://www.google.com/maps/search/${encodeURIComponent(location)}`;

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden" style={{ isolation: "isolate" }}>

      {/* Header — stacks vertically on mobile, side-by-side from sm up */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-semibold">Location</h2>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold text-dark-knight bg-amber-300 hover:bg-amber-400 transition px-3 py-1.5 rounded-lg cursor-pointer w-fit"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          Open in Google Maps
        </a>
      </div>

      {/* Address */}
      <p className="px-6 py-2 text-sm text-gray-500">{location}</p>

      {/* Map */}
      {hasCoords ? (
        <div className="h-[280px] border-t border-gray-100">
          <MapContainer
            center={[latitude!, longitude!]}
            zoom={15}
            className="h-full w-full"
            scrollWheelZoom={false}
            dragging={false}
            doubleClickZoom={false}
            touchZoom={false}
            boxZoom={false}
            keyboard={false}
            zoomControl={false}
          >
            <TileLayer
              url={MAPBOX_TILE_URL}
              attribution={MAPBOX_ATTRIBUTION}
              tileSize={512}
              zoomOffset={-1}
            />
            <Marker position={[latitude!, longitude!]} />
          </MapContainer>
        </div>
      ) : (
        <div
          className="h-[200px] bg-gray-100 flex flex-col items-center justify-center gap-3 cursor-pointer group"
          onClick={() => window.open(googleMapsUrl, "_blank")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-gray-300 group-hover:text-gray-400 transition">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          <p className="text-sm text-gray-400 group-hover:text-gray-600 transition font-medium">
            Click to search location on Google Maps
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyLocationMap;
````

## File: src/features/properties/components/PropertyComponents/ReviewSection.tsx
````typescript
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import {
  createReview,
  getReviews,
  type ReviewRecord,
} from "@/services/reviewService";
import type { Property } from "@/types/index";
import { getApiErrorMessage } from "@/utils/apiError";
import StarRating from "./StarRating";

interface Props {
  property: Property;
  autoFocusForm?: boolean;
  hideForm?: boolean;
  onReviewSubmitted?: () => Promise<void> | void;
}

const reviewerName = (review: ReviewRecord) =>
  [review.first_name, review.second_name].filter(Boolean).join(" ")
  || review.email
  || "AQAR Guest";

export default function ReviewsSection({
  property,
  autoFocusForm = false,
  hideForm = false,
  onReviewSubmitted,
}: Props) {
  const { isAuthenticated } = useAuth();
  const toast = useToast();
  const [reviews, setReviews] = useState<ReviewRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [rating, setRating] = useState(5);
  const [phrase, setPhrase] = useState("");
  const [error, setError] = useState<string | null>(null);

  const loadReviews = async () => {
    setLoading(true);
    setError(null);

    try {
      setReviews(await getReviews(property.propertyId));
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, "Could not load reviews."));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [property.propertyId]);

  const averageRating = useMemo(() => {
    if (reviews.length > 0) {
      const total = reviews.reduce((sum, review) => sum + review.rating, 0);
      return total / reviews.length;
    }

    return property.rate ?? 0;
  }, [property.rate, reviews]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isAuthenticated) {
      toast.error("Please sign in before leaving a review.");
      return;
    }

    if (rating < 1 || rating > 5) {
      toast.error("Choose a rating between 1 and 5 stars.");
      return;
    }

    try {
      setSubmitting(true);
      await createReview({
        property_id: property.propertyId,
        rating,
        phrase: phrase.trim(),
      });
      toast.success("Review submitted.");
      setPhrase("");
      setRating(5);
      await loadReviews();
      await onReviewSubmitted?.();
    } catch (submitError) {
      toast.error(
        axios.isAxiosError(submitError)
          ? getApiErrorMessage(submitError, "Could not submit your review.")
          : "Could not submit your review.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Ratings &amp; Reviews</h2>
          <p className="mt-1 text-sm text-gray-500">
            {reviews.length > 0
              ? `${reviews.length} review${reviews.length !== 1 ? "s" : ""} from AQAR guests`
              : "No written reviews yet."}
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-3">
          <span className="text-3xl font-bold text-gray-900">
            {Number(averageRating || 0).toFixed(1)}
          </span>
          <StarRating value={averageRating} readOnly />
        </div>
      </div>

      {!hideForm && (
      <form onSubmit={handleSubmit} className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-gray-900">Leave a Review</p>
            <p className="mt-0.5 text-xs text-gray-500">Share your experience with this property.</p>
          </div>
          <StarRating value={rating} onChange={setRating} />
        </div>

        <textarea
          value={phrase}
          onChange={(event) => setPhrase(event.target.value)}
          autoFocus={autoFocusForm}
          placeholder="What should future guests know?"
          rows={3}
          className="mt-4 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-dark-knight focus:ring-1 focus:ring-dark-knight"
        />

        <div className="mt-3 flex items-center justify-between gap-3">
          {!isAuthenticated ? (
            <p className="text-xs text-amber-700">Sign in to submit a review.</p>
          ) : (
            <p className="text-xs text-gray-400">Reviews are visible on the property page.</p>
          )}
          <button
            type="submit"
            disabled={submitting || !isAuthenticated}
            className="rounded-xl bg-dark-knight px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </form>
      )}

      {loading && (
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-dark-knight border-t-transparent" />
        </div>
      )}

      {!loading && error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p className="font-semibold">{error}</p>
          <button
            type="button"
            onClick={loadReviews}
            className="mt-3 rounded-xl bg-white px-4 py-2 font-semibold transition hover:bg-red-100 cursor-pointer"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && reviews.length === 0 && (
        <p className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-500">
          This property has not received written reviews yet.
        </p>
      )}

      {!loading && !error && reviews.length > 0 && (
        <div className="space-y-3">
          {reviews.map((review) => (
            <div key={review.review_id} className="rounded-2xl border border-gray-100 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-gray-900">{reviewerName(review)}</p>
                  <p className="mt-0.5 text-xs text-gray-400">
                    {new Date(review.created_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <StarRating value={review.rating} readOnly sizeClass="text-lg" />
              </div>
              {review.phrase && (
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{review.phrase}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
````

## File: src/features/properties/components/PropertyComponents/StarRating.tsx
````typescript
interface Props {
  value: number;
  onChange?: (value: number) => void;
  sizeClass?: string;
  readOnly?: boolean;
}

export default function StarRating({
  value,
  onChange,
  sizeClass = "text-2xl",
  readOnly = false,
}: Props) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.round(value);

        if (readOnly) {
          return (
            <span
              key={star}
              className={`${sizeClass} ${filled ? "text-yellow-400" : "text-gray-300"}`}
            >
              ★
            </span>
          );
        }

        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange?.(star)}
            className={`${sizeClass} leading-none transition hover:scale-110 cursor-pointer ${
              filled ? "text-yellow-400" : "text-gray-300"
            }`}
            aria-label={`Rate ${star} out of 5`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}
````

## File: src/features/properties/components/PropertyComponents/Swiper.tsx
````typescript
import { useState, useRef, type FC } from "react";

type Props = {
  images:     string[];
  startIndex: number;
  onClose:    () => void;
};

const Swiper: FC<Props> = ({ images, startIndex, onClose }) => {
  const [index, setIndex] = useState(startIndex);

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  // ── Touch swipe ───────────────────────────────────────────────────────────
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {        // 40px threshold
      delta < 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4">

      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-2 sm:p-4">

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-6 z-10 w-8 h-8 sm:w-9 sm:h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-red-500 font-black text-lg shadow cursor-pointer transition"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={images[index]}
          alt={`Property image ${index + 1}`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="w-full rounded-xl object-cover
            h-[55vw]          
            min-h-[200px]     
            max-h-[75vh]      
            sm:h-[420px]      
            md:h-[520px]      
          "
        />

        {/* Prev arrow */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2
            bg-white/80 hover:bg-white shadow rounded-full cursor-pointer transition
            p-1.5 sm:p-3"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Next arrow */}
        <button
          type="button"
          onClick={next}
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2
            bg-white/80 hover:bg-white shadow rounded-full cursor-pointer transition
            p-1.5 sm:p-3"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Counter + dot indicators */}
        <div className="mt-2 flex flex-col items-center gap-1.5">
          <p className="text-xs sm:text-sm font-medium text-gray-600">
            {index + 1} / {images.length}
          </p>
          {images.length > 1 && images.length <= 12 && (
            <div className="flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all cursor-pointer
                    ${i === index
                      ? "w-4 h-1.5 bg-dark-knight"
                      : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Swiper;
````

## File: src/features/properties/components/PropertyComponents/usePropertyRentalContext.ts
````typescript
import { useCallback, useEffect, useMemo, useState } from "react";
import { eachDayOfInterval, parseISO, isValid } from "date-fns"; // استخدام دالة جاهزة من date-fns

import { getLeasesAsOwner, getLeasesAsRenter } from "@/services/leaseService";
import { getRentRequests } from "@/services/rentRequestService";
import { getBookedDates } from "@/services/propertyService";
import type { Lease, RentRequest, RentRequestState } from "@/types";

type RentalRole = "owner" | "viewer";

type Options = {
  propertyId: number;
  enabled: boolean;
  role: RentalRole;
};

const REQUEST_PRIORITY: Record<RentRequestState, number> = {
  PAID: 0,
  PAYMENT_PENDING: 1,
  ACCEPTED: 2,
  PENDING: 3,
  REFUNDED: 4,
  REFUND_REQUESTED: 5,
  REFUND_DENIED: 6,
  REJECTED: 7,
  CANCELLED: 8,
};

const LEASE_PRIORITY: Record<Lease["status"], number> = {
  OVERDUE: 0,
  IN_PROGRESS: 1,
  UPCOMING: 2,
  COMPLETED: 3,
  CANCELLED: 4,
};

// تم تعديل دالة التحويل لتستخدم parseISO بدلاً من التقسيم اليدوي
const parseDate = (dateStr: string): Date => {
  return parseISO(dateStr);
};

const compareRequests = (left: RentRequest, right: RentRequest) => {
  const leftPriority = REQUEST_PRIORITY[left.request_state] ?? Number.MAX_SAFE_INTEGER;
  const rightPriority = REQUEST_PRIORITY[right.request_state] ?? Number.MAX_SAFE_INTEGER;

  if (leftPriority !== rightPriority) return leftPriority - rightPriority;

  return new Date(right.created_at).getTime() - new Date(left.created_at).getTime();
};

const compareLeases = (left: Lease, right: Lease) => {
  const leftPriority = LEASE_PRIORITY[left.status] ?? Number.MAX_SAFE_INTEGER;
  const rightPriority = LEASE_PRIORITY[right.status] ?? Number.MAX_SAFE_INTEGER;

  if (leftPriority !== rightPriority) return leftPriority - rightPriority;

  return new Date(right.check_in_date).getTime() - new Date(left.check_in_date).getTime();
};

export const pickRelevantRentRequest = (requests: RentRequest[]) =>
  [...requests].sort(compareRequests)[0] ?? null;

export const pickRelevantLease = (leases: Lease[]) =>
  [...leases].sort(compareLeases)[0] ?? null;

export function usePropertyRentalContext({ propertyId, enabled, role }: Options) {
  const [sentRequests, setSentRequests] = useState<RentRequest[]>([]);
  const [receivedRequests, setReceivedRequests] = useState<RentRequest[]>([]);
  const [leases, setLeases] = useState<Lease[]>([]);
  const [bookedRanges, setBookedRanges] = useState<{check_in_date: string; check_out_date: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const [bookedResult] = await Promise.allSettled([getBookedDates(propertyId)]);

    if (bookedResult.status === "fulfilled") {
      setBookedRanges(bookedResult.value.data?.data ?? []);
    } else {
      setBookedRanges([]);
    }

    if (!enabled) {
      setSentRequests([]);
      setReceivedRequests([]);
      setLeases([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const [requestsResult, leasesResult] = await Promise.allSettled([
      getRentRequests(),
      role === "owner" ? getLeasesAsOwner() : getLeasesAsRenter(),
    ]);

    if (requestsResult.status === "fulfilled") {
      setSentRequests(requestsResult.value.data.data?.sent ?? []);
      setReceivedRequests(requestsResult.value.data.data?.received ?? []);
    } else {
      setSentRequests([]);
      setReceivedRequests([]);
    }

    if (leasesResult.status === "fulfilled") {
      setLeases(leasesResult.value.data.data ?? []);
    } else {
      setLeases([]);
    }

    setLoading(false);
  }, [enabled, role, propertyId]);

  useEffect(() => {
    load();
  }, [load]);

  const propertySentRequests = useMemo(
    () => sentRequests.filter((request) => Number(request.property_id) === propertyId).sort(compareRequests),
    [propertyId, sentRequests],
  );

  const propertyReceivedRequests = useMemo(
    () => receivedRequests.filter((request) => Number(request.property_id) === propertyId).sort(compareRequests),
    [propertyId, receivedRequests],
  );

  const propertyLeases = useMemo(
    () => leases.filter((lease) => Number(lease.property_id) === propertyId).sort(compareLeases),
    [leases, propertyId],
  );

  const disabledDates = useMemo(() => {
    const result: Date[] = [];

    const addRange = (checkIn: string, checkOut: string) => {
      const start = parseDate(checkIn);
      const end = parseDate(checkOut);

      // التحقق من أن التاريخ صالح
      if (isValid(start) && isValid(end)) {
        if (start <= end) {
          const days = eachDayOfInterval({ start, end });
          result.push(...days);
        }
      }
    };

    propertyLeases.forEach((lease) => {
      if (lease.status !== "CANCELLED" && lease.status !== "COMPLETED") {
        addRange(lease.check_in_date, lease.check_out_date);
      }
    });

    propertyReceivedRequests.forEach((req) => {
      if (["PENDING", "ACCEPTED", "PAYMENT_PENDING", "PAID"].includes(req.request_state)) {
        addRange(req.check_in_date, req.check_out_date);
      }
    });

    bookedRanges.forEach((range) => {
      addRange(range.check_in_date, range.check_out_date);
    });

    return result;
  }, [propertyLeases, propertyReceivedRequests, bookedRanges]);

  return {
    loading,
    error,
    reload: load,
    sentRequests: propertySentRequests,
    receivedRequests: propertyReceivedRequests,
    relevantSentRequest: pickRelevantRentRequest(propertySentRequests),
    relevantReceivedRequest: pickRelevantRentRequest(propertyReceivedRequests),
    propertyLeases,
    relevantLease: pickRelevantLease(propertyLeases),
    disabledDates,
  };
}
````

## File: src/features/properties/components/RecommendedPropertiesRow.tsx
````typescript
import { useEffect, useRef, useState } from "react";

import PropertyCard from "@/features/properties/components/PropertyCard";
import { useToast } from "@/context/ToastContext";
import { useFavIds } from "@/hooks/useFavIds";
import { recommendSimilarProperties, getAiSessionId } from "@/services/aiService";
import type { Property } from "@/types";
import type { AIChatProperty } from "@/types/ai";
import { getApiErrorMessage } from "@/utils/apiError";
import { isPubliclyVisibleProperty } from "@/utils/propertyListing";
import { resolveImageUrl } from "@/services/propertyService";

interface Props {
  seedPropertyId: number | string | null;
  title: string;
  description?: string;
  excludePropertyId?: number;
}

export default function RecommendedPropertiesRow({
  seedPropertyId,
  title,
  description,
  excludePropertyId,
}: Props) {
  const toast = useToast();
  const toastRef = useRef(toast);
  const [favIds, setFavIds] = useFavIds();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    toastRef.current = toast;
  }, [toast]);

  useEffect(() => {
    if (!seedPropertyId) return;

    let cancelled = false;
    setLoading(true);

    const loadRecommendations = async () => {
      try {
        const results = await recommendSimilarProperties({
          property_description: description || `Context recommendations for seed item ${seedPropertyId}`,
          session_id: getAiSessionId(),
          property_ids: [Number(seedPropertyId)],
          limit: 8,
        });

        if (cancelled) return;

        const propertiesArray = results?.properties || [];

        const standardizedProperties: Property[] = propertiesArray.map((prop: AIChatProperty) => ({
          propertyId: prop.id || prop.property_id,
          ownerId: prop.owner_id || "",
          propertyName: prop.title || prop.property_name,
          propertyDesc: prop.description || prop.property_desc,
          location: prop.location,
          pricePerDay: prop.price_per_day || (prop.price ? prop.price / 30 : 0),
          priceValue: prop.price_value || prop.price,
          pricingUnit: prop.pricing_unit || "MONTH",
          size: String(prop.size),
          bedroomsNumber: prop.bedrooms || prop.bedrooms_no,
          bedsNumber: prop.beds_no || prop.bedrooms || 1,
          bathroomsNumber: prop.bathrooms || prop.bathrooms_no,
          images: Array.isArray(prop.images) ? prop.images.map(resolveImageUrl) : prop.image_url ? [resolveImageUrl(prop.image_url)] : [],
          ownershipProof: [],
          isAvailable: prop.is_available ?? true,
          isVerified: prop.is_verified ?? true,
          isVisible: prop.is_visible ?? true,
          is_furnished: prop.is_furnished ?? false,
          isSponsored: prop.is_sponsored ?? false,
          property_type: prop.property_type || "for_rent",
          listingStatus: prop.listing_status || "active",
          listingExpiry: prop.listing_expiry || null,
          rate: prop.rate || null,
          latitude: prop.latitude,
          longitude: prop.longitude,
          owner_first_name: prop.owner_first_name,
          owner_second_name: prop.owner_second_name,
          owner_email: prop.owner_email,
        }));

        setProperties(
          standardizedProperties
            .filter((property) => property.propertyId !== excludePropertyId)
            .filter(isPubliclyVisibleProperty)
            .slice(0, 8),
        );
      } catch (error) {
        if (!cancelled) {
          setProperties([]);
          toastRef.current.info(getApiErrorMessage(error, "AI recommendations are unavailable right now."));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadRecommendations();

    return () => {
      cancelled = true;
    };
  }, [excludePropertyId, seedPropertyId, description]);

  const handleFavChange = (propertyId: number, next: boolean) => {
    setFavIds((prev) => {
      const updated = new Set(prev);
      if (next) updated.add(propertyId);
      else updated.delete(propertyId);
      return updated;
    });
  };

  if (!seedPropertyId || (!loading && properties.length === 0)) return null;

  return (
    <section className="w-10/12 max-w-[1250px] mx-auto my-12">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-5 text-sm font-semibold text-gray-500">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-dark-knight border-t-transparent" />
          Finding matches...
        </div>
      ) : (
        <div className="flex gap-5 overflow-x-auto pb-4">
          {properties.map((property) => (
            <div key={property.propertyId} className="w-[280px] shrink-0">
              <PropertyCard
                property={property}
                isFav={favIds.has(property.propertyId)}
                onFavChange={handleFavChange}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
````

## File: src/features/properties/components/SearchBar.tsx
````typescript
import { useEffect, useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import SearchIcon from "@/assets/Search.svg";

interface Props {
  onSearch?:    (query: string) => void;
  placeholder?: string;
  value?: string;
  initialValue?: string;
  onQueryChange?: (query: string) => void;
  onDebouncedSearch?: (query: string) => void;
  debounceMs?: number;
}

const SearchBar = ({
  onSearch,
  placeholder = "Search by city or location…",
  value,
  initialValue = "",
  onQueryChange,
  onDebouncedSearch,
  debounceMs = 400,
}: Props) => {
  const [innerQuery, setInnerQuery] = useState(initialValue);
  const query = value ?? innerQuery;

  useEffect(() => {
    if (value === undefined) setInnerQuery(initialValue);
  }, [initialValue, value]);

  useEffect(() => {
    if (!onDebouncedSearch) return;

    const timer = window.setTimeout(() => {
      onDebouncedSearch(query.trim());
    }, debounceMs);

    return () => window.clearTimeout(timer);
  }, [debounceMs, onDebouncedSearch, query]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) setInnerQuery(e.target.value);
    onQueryChange?.(e.target.value);
    if (e.target.value === "") onSearch?.("");
  };

  return (
    <form onSubmit={submit} className="w-5/6 sm:w-1/2 md:w-5/12 bg-white md:mb-10 mb-10 rounded-xl shadow-lg">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <img src={SearchIcon} alt="search" className="w-5 opacity-50" />
        </div>
        <input
          type="search"
          value={query}
          onChange={change}
          placeholder={placeholder}
          className="block w-full p-4 ps-10 text-sm outline-none rounded-xl text-gray-800"
        />
        <button
          type="submit"
          className="absolute end-1.5 bottom-2.5 text-white bg-dark-knight font-semibold rounded-lg text-sm px-3.5 py-1.5 cursor-pointer hover:opacity-90 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
````

## File: src/features/properties/components/SearchFilterPanel.tsx
````typescript
import { useState } from "react";

export interface FilterValues {
  location?: string;
  propertyType?: "for_rent" | "for_sale";
  minPrice?: number;
  maxPrice?: number;
  pricingUnit?: "DAY" | "MONTH";
  bedrooms?: number;
  bathrooms?: number;
  minSize?: number;
  maxSize?: number;
  furnished?: boolean;
}

interface Props {
  initial: FilterValues;
  onApply: (filters: FilterValues) => void;
  onClear: () => void;
}

const BEDROOM_OPTIONS = [
  { label: "Any", value: undefined },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5+", value: 5 },
] as const;

const BATHROOM_OPTIONS = [
  { label: "Any", value: undefined },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3+", value: 3 },
] as const;

const btnBase =
  "rounded-lg px-3 py-2 text-sm font-semibold transition cursor-pointer";
const btnActive   = "bg-dark-knight text-white";
const btnInactive = "bg-gray-100 text-gray-600 hover:bg-gray-200";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-dark-knight transition";

const labelClass = "mb-1 block text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap";

export default function SearchFilterPanel({ initial, onApply, onClear }: Props) {
  const [location, setLocation] = useState(initial.location ?? "");
  const [propertyType, setPropertyType] = useState<"for_rent" | "for_sale">(
    initial.propertyType ?? "for_rent",
  );
  const [pricingUnit, setPricingUnit] = useState<"DAY" | "MONTH">(
    initial.pricingUnit ?? "MONTH",
  );
  const [minPrice, setMinPrice] = useState(initial.minPrice ?? "");
  const [maxPrice, setMaxPrice] = useState(initial.maxPrice ?? "");
  const [bedrooms, setBedrooms] = useState<number | undefined>(initial.bedrooms);
  const [bathrooms, setBathrooms] = useState<number | undefined>(initial.bathrooms);
  const [minSize, setMinSize] = useState(initial.minSize ?? "");
  const [maxSize, setMaxSize] = useState(initial.maxSize ?? "");
  const [furnished, setFurnished] = useState(initial.furnished ?? false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filters: FilterValues = {
      propertyType,
      pricingUnit,
      furnished: furnished || undefined,
    };

    if (location.trim()) filters.location = location.trim();
    if (minPrice !== "") filters.minPrice = Number(minPrice);
    if (maxPrice !== "") filters.maxPrice = Number(maxPrice);
    if (bedrooms !== undefined) filters.bedrooms = bedrooms;
    if (bathrooms !== undefined) filters.bathrooms = bathrooms;
    if (minSize !== "") filters.minSize = Number(minSize);
    if (maxSize !== "") filters.maxSize = Number(maxSize);

    onApply(filters);
  };

  const handleClear = () => {
    setLocation("");
    setPropertyType("for_rent");
    setPricingUnit("MONTH");
    setMinPrice("");
    setMaxPrice("");
    setBedrooms(undefined);
    setBathrooms(undefined);
    setMinSize("");
    setMaxSize("");
    setFurnished(false);
    onClear();
  };

  const isSale = propertyType === "for_sale";
  const priceLabel = isSale ? "Price (EGP)" : `Price Range (${pricingUnit === "MONTH" ? "monthly" : "per day"})`;

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Filters</h3>
        <button type="button" onClick={handleClear} className="text-xs text-gray-400 hover:text-red-500 transition cursor-pointer">
          Clear All
        </button>
      </div>

      <div className="flex flex-wrap items-end gap-x-5 gap-y-4">
        {/* Property Type */}
        <div>
          <label className={labelClass}>Type</label>
          <div className="flex gap-1">
            <button type="button" onClick={() => setPropertyType("for_rent")}
              className={`${btnBase} ${propertyType === "for_rent" ? btnActive : btnInactive}`}>
              For Rent
            </button>
            <button type="button" onClick={() => setPropertyType("for_sale")}
              className={`${btnBase} ${propertyType === "for_sale" ? btnActive : btnInactive}`}>
              For Sale
            </button>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className={labelClass}>Location</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
            placeholder="City or area…" className={`${inputClass} min-w-[160px]`} />
        </div>

        {/* Price Range */}
        <div>
          <label className={labelClass}>{priceLabel}</label>
          <div className="flex items-center gap-2">
            <input type="number" min={0} value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)} placeholder="Min"
              className={`${inputClass} w-24`} />
            <span className="text-gray-400">—</span>
            <input type="number" min={0} value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max"
              className={`${inputClass} w-24`} />
          </div>
          {!isSale && (
            <div className="mt-1 flex gap-2">
              <button type="button" onClick={() => setPricingUnit("MONTH")}
                className={`rounded px-2.5 py-1 text-xs font-medium transition cursor-pointer ${
                  pricingUnit === "MONTH"
                    ? "bg-dark-knight text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}>
                /month
              </button>
              <button type="button" onClick={() => setPricingUnit("DAY")}
                className={`rounded px-2.5 py-1 text-xs font-medium transition cursor-pointer ${
                  pricingUnit === "DAY"
                    ? "bg-dark-knight text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}>
                /day
              </button>
            </div>
          )}
        </div>

        {/* Bedrooms */}
        <div>
          <label className={labelClass}>Bedrooms</label>
          <select value={bedrooms ?? ""}
            onChange={(e) => setBedrooms(e.target.value ? Number(e.target.value) : undefined)}
            className={`${inputClass} min-w-[90px]`}>
            {BEDROOM_OPTIONS.map((opt) => (
              <option key={opt.label} value={opt.value ?? ""}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className={labelClass}>Bathrooms</label>
          <select value={bathrooms ?? ""}
            onChange={(e) => setBathrooms(e.target.value ? Number(e.target.value) : undefined)}
            className={`${inputClass} min-w-[90px]`}>
            {BATHROOM_OPTIONS.map((opt) => (
              <option key={opt.label} value={opt.value ?? ""}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Size */}
        <div>
          <label className={labelClass}>Size (m&sup2;)</label>
          <div className="flex items-center gap-2">
            <input type="number" min={0} value={minSize}
              onChange={(e) => setMinSize(e.target.value)} placeholder="Min"
              className={`${inputClass} w-20`} />
            <span className="text-gray-400">—</span>
            <input type="number" min={0} value={maxSize}
              onChange={(e) => setMaxSize(e.target.value)} placeholder="Max"
              className={`${inputClass} w-20`} />
          </div>
        </div>

        {/* Furnished */}
        <div>
          <label className={labelClass}>&nbsp;</label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={furnished}
              onChange={(e) => setFurnished(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-dark-knight accent-dark-knight" />
            <span className="text-sm text-gray-700 font-medium whitespace-nowrap">Furnished only</span>
          </label>
        </div>

        {/* Apply button */}
        <div>
          <label className={labelClass}>&nbsp;</label>
          <button type="submit"
            className="rounded-lg bg-dark-knight px-5 py-2 text-sm font-bold text-white hover:opacity-90 transition cursor-pointer whitespace-nowrap">
            Apply Filters
          </button>
        </div>
      </div>
    </form>
  );
}
````

## File: src/features/properties/data.ts
````typescript
import ProtectionIcon from "@/assets/Protection.png";
import FulltimeIcon   from "@/assets/Fulltime.png";
import MoneyIcon      from "@/assets/Money.png";
import RobotIcon      from "@/assets/Robot.png";

type HomeCardType = {
  imgUrl:      string;
  title:       string;
  description: string;
}

type PropertiesSectionType = {
  sectionTitle:       string;
  sectionDescription: string;
  navigateTo:         string;
}

export const HOME_CARDS: HomeCardType[] = [
  {
    imgUrl:      ProtectionIcon,
    title:       "Verified Listings",
    description: "Every property is hand-checked by our local experts.",
  },
  {
    imgUrl:      FulltimeIcon,
    title:       "AI-Powered Search",
    description: "Find exactly what you want using natural language.",
  },
  {
    imgUrl:      MoneyIcon,
    title:       "Secure Payments",
    description: "Integrated escrow and rent payment systems.",
  },
  {
    imgUrl:      RobotIcon,
    title:       "24/7 Concierge",
    description: "Our agents are always online to help your move.",
  },
];

export const PROPERTIES_SECTIONS: PropertiesSectionType[] = [
  {
    sectionTitle:       "Featured Properties",
    sectionDescription: "Sponsored listings promoted by owners to boost visibility",
    navigateTo:         "/properties?type=for_rent",   // shows all as a fallback
  },
  {
    sectionTitle:       "Properties for Sale",
    sectionDescription: "Discover homes and investments ready for ownership",
    navigateTo:         "/properties?type=for_sale",
  },
  {
    sectionTitle:       "Rental Properties",
    sectionDescription: "Flexible stays for daily, monthly, and long-term rentals",
    navigateTo:         "/properties?type=for_rent",
  },
];
````

## File: src/features/properties/pages/AddPropertyPage.tsx
````typescript
import { useState }      from "react";
import { useNavigate }   from "react-router-dom";
import axios             from "axios";

import NavBar             from "@/features/properties/components/NavBar";
import StepIndicator      from "@/features/properties/components/AddPropertyComponents/StepIndicator";
import PropertyTypeToggle from "@/features/properties/components/AddPropertyComponents/PropertyTypeToggle";
import BasicInfoStep      from "@/features/properties/components/AddPropertyComponents/BasicInfoStep";
import LocationStep       from "@/features/properties/components/AddPropertyComponents/LocationStep";
import MediaStep          from "@/features/properties/components/AddPropertyComponents/MediaStep";
import OwnershipStep      from "@/features/properties/components/AddPropertyComponents/OwnershipStep";

import { addProperty }       from "@/services/propertyService";
import {
  getSellingPlanPrice,
  saveListingSubscription,
} from "@/services/listingSubscriptionService";
import { useToast }          from "@/context/ToastContext";
import { validateStep, hasErrors } from "@/utils/propertyValidator";
import type { PropertyFormData }   from "@/types";

import cautionIcon from "@/assets/cautionIcon.svg";

const TOTAL_STEPS = 4;

const AddPropertyPage = () => {
  const navigate = useNavigate();
  const toast    = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step,   setStep]   = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<PropertyFormData>({
    property_type:   "for_sale",
    sellingPlan:     1,
    propertyName:    "",
    propertyDesc:    "",
    location:        "",
    latitude:        30.0444,
    longitude:       31.2357,
    is_furnished:    false,
    bedroomsNumber:  0,
    bathroomsNumber: 0,
    bedsNumber:      0,
    size:            0,
    price:           undefined,
    pricePerDay:     undefined,
    priceMonthly:    undefined,
    images:          [],
    ownershipProof:  [],
  });

  const nextStep = () => {
    const errs = validateStep(step, formData);
    if (hasErrors(errs)) { setErrors(errs); return; }
    setErrors({});
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setErrors({});
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    const errs = validateStep(step, formData);
    if (hasErrors(errs)) { setErrors(errs); return; }

    try {
      setIsSubmitting(true);
      const res = await addProperty(formData);
      const propertyId = res.data?.propertyId;
      const subscriptionId = res.data?.subscriptionId;

      if (formData.property_type === "for_sale" && propertyId && subscriptionId && formData.sellingPlan) {
        saveListingSubscription({
          propertyId: Number(propertyId),
          subscriptionId: String(subscriptionId),
          propertyName: formData.propertyName,
          planMonths: formData.sellingPlan,
          amount: getSellingPlanPrice(formData.sellingPlan),
          paymentState: "UNPAID",
        });

        toast.success("Sale property submitted. We’ll unlock subscription payment as soon as admin verification is complete.");
        navigate(`/property/${propertyId}/subscription`);
        return;
      }

      toast.success("Property submitted! It will go live after our team reviews it (24–48 h).");
      navigate("/my-properties");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.msg ?? "Submission failed. Please try again.");
      } else {
        toast.error("Unexpected error. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-6">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">List Your Property</h1>
            <p className="text-gray-500 mt-1">Complete the form below to submit your property for review.</p>
          </div>

          <StepIndicator currentStep={step} />

          {/* Verification notice */}
          <div className="flex items-start gap-4 bg-dark-knight text-white rounded-2xl p-5">
            <div className="w-11 h-11 rounded-full bg-dark-yellow border border-amber-300 shrink-0 flex items-center justify-center">
              <img src={cautionIcon} alt="caution" className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Pending Verification Status</h2>
              <p className="text-sm text-white/80 leading-relaxed mt-0.5">
                Your listing will be marked as <em>Pending Verification</em> and will not be visible to
                the public until our compliance team reviews your ownership documents. This typically
                takes 24–48 hours.
              </p>
            </div>
          </div>

          {/* Step content */}
          {step === 1 && (
            <>
              <PropertyTypeToggle
                value={formData.property_type}
                onChange={(val) => {
                  setFormData({
                    ...formData,
                    property_type: val,
                    sellingPlan: val === "for_sale" ? (formData.sellingPlan ?? 1) : undefined,
                  });
                  setErrors({});
                }}
              />
              <BasicInfoStep formData={formData} setFormData={setFormData} errors={errors} />
            </>
          )}
          {step === 2 && <LocationStep  formData={formData} setFormData={setFormData} errors={errors} />}
          {step === 3 && <MediaStep     formData={formData} setFormData={setFormData} errors={errors} />}
          {step === 4 && <OwnershipStep formData={formData} setFormData={setFormData} errors={errors} />}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4">
            {step > 1 ? (
              <button onClick={prevStep} className="px-5 py-2.5 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100 transition">
                ← Back
              </button>
            ) : <div />}

            {step < TOTAL_STEPS ? (
              <button onClick={nextStep} className="px-6 py-2.5 bg-dark-knight text-white rounded-xl font-bold hover:opacity-90 transition">
                Next Step →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-green-600 text-white rounded-xl font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {isSubmitting ? "Submitting…" : "Submit Property 🚀"}
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default AddPropertyPage;
````

## File: src/features/properties/pages/HomePage.tsx
````typescript
import { useEffect, useState, useMemo } from "react";
import { useNavigate }                  from "react-router-dom";

import HomeCard          from "@/features/properties/components/HomeCard";
import NavBar            from "@/features/properties/components/NavBar";
import PropertiesSection from "@/features/properties/components/PropertiesSection";
import PropertyCard      from "@/features/properties/components/PropertyCard";
import SearchBar         from "@/features/properties/components/SearchBar";
import LoadingSkeleton   from "@/features/properties/components/LoadingSkeleton";


import { HOME_CARDS, PROPERTIES_SECTIONS } from "@/features/properties/data";
import { getProperties }  from "@/services/propertyService";
import { sortPropertiesWithLocalSponsorship } from "@/services/sponsorshipService";
import { useFavIds }      from "@/hooks/useFavIds";
import { isPubliclyVisibleProperty } from "@/utils/propertyListing";
import { mapProperty }    from "@/utils/mapProperty";
import type { Property }  from "@/types/index";

const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

const HomePage = () => {
  const navigate = useNavigate();
  const [favIds, setFavIds] = useFavIds();

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading,    setLoading]    = useState(true);

  useEffect(() => {
    getProperties()
      .then((res) => {
        const mapped = (res.data as unknown[])
          .map(mapProperty)
          .filter((p: Property) => isPubliclyVisibleProperty(p));
        setProperties(mapped);
        console.log("HomePage — raw API response:", res.data);
        console.log("HomePage — mapped + filtered properties:", mapped);
      })
      .catch(() => setProperties([]))
      .finally(() => setLoading(false));
  }, []);

  // Shuffled slices are computed ONCE when properties loads, then frozen.
  // favIds changes (from heart toggles) will NOT trigger a re-shuffle because
  // favIds is not listed as a dependency here.
  const forSale = useMemo(() => sortPropertiesWithLocalSponsorship(shuffle(properties.filter((p) => p.property_type === "for_sale"))).slice(0, 4), [properties]);
  const forRent = useMemo(() => sortPropertiesWithLocalSponsorship(shuffle(properties.filter((p) => p.property_type === "for_rent"))).slice(0, 4), [properties]);

  const featuredMix = useMemo(() => {
    return sortPropertiesWithLocalSponsorship(
      shuffle(properties.filter((p) => p.property_type === "for_rent" && p.isSponsored)),
    ).slice(0, 4);
  }, [properties]);

  const handleSearch = (q: string) => {
    if (!q.trim()) return;
    navigate(`/search?mode=smart&q=${encodeURIComponent(q.trim())}`);
  };

  const handleFavChange = (propertyId: number, next: boolean) => {
    setFavIds((prev) => {
      const updated = new Set(prev);
      if (next) updated.add(propertyId);
      else      updated.delete(propertyId);
      return updated;
    });
  };

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(251,251,251,0.2)_0%,rgba(15,23,42,0.2)_89.9%),linear-gradient(#0F172A,#0F172A)]">
        <NavBar />
        <div className="flex flex-col items-center justify-center h-[450px] gap-y-5 text-center px-4">
          <h1 className="text-white md:text-7xl text-5xl font-extrabold leading-tight">
            Find your <span className="text-amber-300">dream home</span>
          </h1>
          <p className="text-xl text-white/80">
            Explore properties for sale and rent across Egypt.
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* ── Feature cards ───────────────────────────────────────────────── */}
      <ul className="relative -mt-24 w-full max-w-6xl mx-auto px-4 grid gap-5 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {HOME_CARDS.map((c) => (
          <HomeCard key={c.title} {...c} />
        ))}
      </ul>

      {/* ── Property sections ───────────────────────────────────────────── */}
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          {PROPERTIES_SECTIONS.filter((sec) => {
            const t = sec.sectionTitle.toLowerCase();
            return t.includes("sale") || t.includes("sell") || t.includes("rent") || featuredMix.length > 0;
          }).map((sec) => {
            const t    = sec.sectionTitle.toLowerCase();
            const data = t.includes("sale") || t.includes("sell")
              ? forSale
              : t.includes("rent")
                ? forRent
                : featuredMix;

            return (
              <div key={sec.sectionTitle}>
                <PropertiesSection {...sec} hideViewAll={data === featuredMix} />
                <div className="w-10/12 max-w-[1250px] mx-auto my-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                  {data.length > 0 ? (
                    data.map((p) => (
                      <PropertyCard
                        key={p.propertyId}
                        property={p}
                        isFav={favIds.has(p.propertyId)}
                        onFavChange={handleFavChange}
                      />
                    ))
                  ) : (
                    <p className="col-span-4 text-center text-gray-400 py-10">
                      No properties available at the moment.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default HomePage;
````

## File: src/features/properties/pages/PropertiesPage.tsx
````typescript
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import NavBar          from "@/features/properties/components/NavBar";
import PropertyCard    from "@/features/properties/components/PropertyCard";
import LoadingSkeleton from "@/features/properties/components/LoadingSkeleton";
import SearchBar       from "@/features/properties/components/SearchBar";

import { getProperties }  from "@/services/propertyService";
import { sortPropertiesWithLocalSponsorship } from "@/services/sponsorshipService";
import { useFavIds }      from "@/hooks/useFavIds";
import { isPubliclyVisibleProperty } from "@/utils/propertyListing";
import { mapProperty }    from "@/utils/mapProperty";
import type { Property }  from "@/types";

export default function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = (searchParams.get("type") ?? "for_rent") as "for_sale" | "for_rent";

  const [favIds, setFavIds] = useFavIds();

  const [all,     setAll]     = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [search,  setSearch]  = useState("");

  useEffect(() => {
    setLoading(true);
    getProperties()
      .then((res) => {
        const mapped = (res.data as unknown[])
          .map(mapProperty)
          .filter((p: Property) => isPubliclyVisibleProperty(p));
        setAll(mapped);
      })
      .catch(() => setAll([]))
      .finally(() => setLoading(false));
  }, []);

  const handleFavChange = (propertyId: number, next: boolean) => {
    setFavIds((prev) => {
      const updated = new Set(prev);
      if (next) updated.add(propertyId);
      else      updated.delete(propertyId);
      return updated;
    });
  };

  const displayed = sortPropertiesWithLocalSponsorship(
    all
      .filter((p) => p.property_type === type)
      .filter((p) =>
      search
        ? p.propertyName.toLowerCase().includes(search.toLowerCase()) ||
          p.location.toLowerCase().includes(search.toLowerCase())
        : true
      ),
  );

  const isRent = type === "for_rent";
  const title  = isRent ? "Rental Properties" : "Properties for Sale";

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-[1250px] mx-auto">

          <div className="mb-8 space-y-4">
            <Link to="/" className="text-sm text-gray-400 hover:text-gray-700 font-medium transition inline-flex items-center gap-1">
              ← Back to Home
            </Link>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                <p className="text-gray-500 text-sm mt-1">
                  {isRent
                    ? "Flexible stays for daily, monthly, and long-term rentals"
                    : "Discover homes and investments ready for ownership"}
                </p>
              </div>

              <div className="flex rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                {(["for_rent", "for_sale"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setSearchParams({ type: t })}
                    className={`px-5 py-2 text-sm font-bold transition
                      ${type === t ? "bg-dark-knight text-white" : "text-gray-500 hover:bg-gray-50"}`}
                  >
                    {t === "for_rent" ? "For Rent" : "For Sale"}
                  </button>
                ))}
              </div>
            </div>

            <SearchBar
              onSearch={(q) => setSearch(q)}
              placeholder={`Search ${isRent ? "rentals" : "properties for sale"}…`}
            />
          </div>

          {loading && <LoadingSkeleton count={8} />}

          {!loading && (
            <p className="text-sm text-gray-500 mb-6">
              {displayed.length > 0 && (
                <>Found <strong className="text-gray-900">{displayed.length}</strong> propert{displayed.length !== 1 ? "ies" : "y"}</>
              )}
            </p>
          )}

          {!loading && displayed.length === 0 && (
            <div className="text-center py-24 space-y-3">
              <p className="text-5xl">{isRent ? "🏠" : "🏡"}</p>
              <p className="text-xl font-bold text-gray-700">
                {search
                  ? `No results for "${search}"`
                  : `No ${isRent ? "rental" : "sale"} properties available right now.`}
              </p>
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="mt-2 bg-dark-knight text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}

          {!loading && displayed.length > 0 && (
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
              {displayed.map((p) => (
                <PropertyCard
                  key={p.propertyId}
                  property={p}
                  isFav={favIds.has(p.propertyId)}
                  onFavChange={handleFavChange}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
````

## File: src/features/properties/pages/PropertyPage.tsx
````typescript
import { useCallback, useEffect, useState } from "react";
import { useParams }           from "react-router-dom";

import NavBar              from "@/features/properties/components/NavBar";
import PropertyGallery     from "@/features/properties/components/PropertyComponents/PropertyGallery";
import PropertyFeatures    from "@/features/properties/components/PropertyComponents/PropertyFeatures";
import PropertyDescription from "@/features/properties/components/PropertyComponents/PropertyDescription";
import ReviewsSection      from "@/features/properties/components/PropertyComponents/ReviewSection";
import MortgageCalculator  from "@/features/properties/components/PropertyComponents/MortgageCalculator";
import BookingSidebar      from "@/features/properties/components/PropertyComponents/BookingSidebar";
import OwnerPanel          from "@/features/properties/components/PropertyComponents/OwnerPanel";
import PropertyLocationMap from "@/features/properties/components/PropertyComponents/PropertyLocationMap";
import RecommendedPropertiesRow from "@/features/properties/components/RecommendedPropertiesRow";

import { getPropertyById } from "@/services/propertyService";
import { mapProperty }     from "@/utils/mapProperty";
import { useAuth }         from "@/context/AuthContext";
import type { Property }   from "@/types/index";

const PropertyPage = () => {
  const { id }                   = useParams<{ id: string }>();
  const { userInfo }             = useAuth();
  const [property, setProperty]  = useState<Property | null>(null);
  const [loading,  setLoading]   = useState(true);
  const [error,    setError]     = useState<string | null>(null);

  const loadProperty = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getPropertyById(id);
      setProperty(mapProperty(res.data));
    } catch {
      setError("Property not found or failed to load.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadProperty();
  }, [loadProperty]);

  if (loading) return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
      </div>
    </>
  );

  if (error || !property) return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
        <p className="text-2xl font-semibold text-gray-700">{error ?? "Property not found."}</p>
        <a href="/" className="text-amber-600 font-semibold hover:underline">← Back to listings</a>
      </div>
    </>
  );

  // Owner sees management panel; anyone else sees the booking sidebar
  const isOwner = !!userInfo && userInfo.id === property.ownerId;

  return (
    <>
      <NavBar />
      <div className="pb-16">

        <PropertyGallery imagesList={property.images} />

        <div className="w-[90%] max-w-7xl mx-auto mt-8 flex flex-col min-[1050px]:flex-row gap-8 items-start">

          {/* Main content */}
          <div className="flex-1 min-w-0 w-full space-y-8">
            <PropertyFeatures    property={property} />
            <PropertyDescription property={property} />
            <PropertyLocationMap
              latitude={property.latitude}
              longitude={property.longitude}
              location={property.location}
            />
            {property.property_type !== "for_sale" && (
              <ReviewsSection
                property={property}
                onReviewSubmitted={loadProperty}
                hideForm={true}
              />
            )}
            <RecommendedPropertiesRow
              seedPropertyId={property.propertyId}
              excludePropertyId={property.propertyId}
              title="Similar Properties"
              description={property.propertyDesc || property.propertyName || ""}
            />
            <MortgageCalculator property={property} />
          </div>

          {/* Sidebar — owner gets management panel, visitors get booking sidebar */}
          <div className="w-full min-[1050px]:w-[360px] min-[1050px]:shrink-0">
            {isOwner
              ? <OwnerPanel   property={property} />
              : <BookingSidebar property={property} />
            }
          </div>

        </div>
      </div>
    </>
  );
};

export default PropertyPage;
````

## File: src/features/properties/pages/ReviewPage.tsx
````typescript
import { useCallback, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import ReviewsSection from "@/features/properties/components/PropertyComponents/ReviewSection";
import { getPropertyById } from "@/services/propertyService";
import { getLeasesAsRenter } from "@/services/leaseService";
import type { Lease, Property } from "@/types";
import { getApiErrorMessage } from "@/utils/apiError";
import { mapProperty } from "@/utils/mapProperty";

export default function ReviewPage() {
  const { propertyId } = useParams<{ propertyId: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [canReview, setCanReview] = useState(false);

  const loadProperty = useCallback(async () => {
    if (!propertyId) {
      setError("Missing property id.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const propRes = await getPropertyById(propertyId);
      const prop = mapProperty(propRes.data);
      setProperty(prop);

      const leasesRes = await getLeasesAsRenter();
      const leases: Lease[] = leasesRes.data.data ?? [];
      const hasCompleted = leases.some(
        (l) => Number(l.property_id) === Number(propertyId) && l.status === "COMPLETED"
      );

      if (!hasCompleted) {
        navigate("/", { replace: true });
        return;
      }

      setCanReview(true);
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, "Could not load this property."));
    } finally {
      setLoading(false);
    }
  }, [propertyId, navigate]);

  useEffect(() => {
    loadProperty();
  }, [loadProperty]);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="mx-auto max-w-3xl space-y-6">
          <Link to={property ? `/rent/property/${property.propertyId}` : "/"} className="text-sm font-semibold text-gray-500 transition hover:text-gray-900">
            Back to property
          </Link>

          {loading && (
            <div className="flex justify-center py-20">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-dark-knight border-t-transparent" />
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
              <p className="font-semibold">{error}</p>
              <button
                type="button"
                onClick={loadProperty}
                className="mt-3 rounded-xl bg-white px-4 py-2 font-semibold transition hover:bg-red-100 cursor-pointer"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && property && canReview && (
            <ReviewsSection
              property={property}
              autoFocusForm
              hideForm={false}
              onReviewSubmitted={loadProperty}
            />
          )}
        </div>
      </div>
    </>
  );
}
````

## File: src/features/properties/pages/SearchPropertiesPage.tsx
````typescript
import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import NavBar          from "@/features/properties/components/NavBar";
import PropertyCard    from "@/features/properties/components/PropertyCard";
import LoadingSkeleton from "@/features/properties/components/LoadingSkeleton";
import SearchBar       from "@/features/properties/components/SearchBar";
import SearchFilterPanel, { type FilterValues } from "@/features/properties/components/SearchFilterPanel";

import { mapProperty }   from "@/utils/mapProperty";
import { isPubliclyVisibleProperty } from "@/utils/propertyListing";
import { useFavIds }     from "@/hooks/useFavIds";
import type { Property } from "@/types";
import { searchAiProperties } from "@/services/aiService";
import { getProperties } from "@/services/propertyService";
import { sortPropertiesWithLocalSponsorship } from "@/services/sponsorshipService";
import { getApiErrorMessage } from "@/utils/apiError";
import { useToast } from "@/context/ToastContext";

type SearchMode = "smart" | "filter";

function readMode(sp: URLSearchParams): SearchMode {
  const m = sp.get("mode");
  if (m === "smart" || m === "filter") return m;
  return sp.has("q") ? "smart" : "filter";
}

export default function SearchPropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate       = useNavigate();
  const toast          = useToast();
  const toastRef       = useRef(toast);

  const mode  = readMode(searchParams);
  const query = searchParams.get("q") ?? "";

  const [favIds, setFavIds] = useFavIds();

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading,    setLoading]    = useState(false);
  const [error,      setError]      = useState<string | null>(null);
  const [draftQuery, setDraftQuery] = useState(query);

  useEffect(() => {
    toastRef.current = toast;
  }, [toast]);

  useEffect(() => {
    setDraftQuery(query);
  }, [query]);

  // ── Smart search (AI) ─────────────────────────────────────────────────────
  useEffect(() => {
    if (mode !== "smart" || !query.trim()) return;

    let cancelled = false;
    setLoading(true);
    setError(null);
    setProperties([]);

    const run = async () => {
      try {
        const aiResults = await searchAiProperties(query);
        if (cancelled) return;
        setProperties(sortPropertiesWithLocalSponsorship(aiResults.filter(isPubliclyVisibleProperty)));
      } catch (aiError) {
        if (cancelled) return;

        toastRef.current.error(getApiErrorMessage(aiError, "AI search is unavailable. Showing matching listings instead."));

        try {
          const fallback = await getProperties({ location: query });
          if (cancelled) return;
          setProperties(sortPropertiesWithLocalSponsorship(
            (fallback.data as unknown[])
              .map(mapProperty)
              .filter(isPubliclyVisibleProperty),
          ));
        } catch (fallbackError) {
          if (cancelled) return;
          setError(
            axios.isAxiosError(fallbackError)
              ? getApiErrorMessage(fallbackError, "Search failed. Please try again.")
              : "Search failed. Please check your connection and try again.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();
    return () => { cancelled = true; };
  }, [mode, query]);

  // ── Filter search (normal) ────────────────────────────────────────────────
  const hasActiveFilters = mode === "filter" && (
    searchParams.has("propertyType") || searchParams.has("location") ||
    searchParams.has("bedrooms") || searchParams.has("bathrooms") ||
    searchParams.has("minPrice") || searchParams.has("maxPrice") ||
    searchParams.has("minSize") || searchParams.has("maxSize") ||
    searchParams.has("furnished")
  );

  useEffect(() => {
    if (mode !== "filter" || !hasActiveFilters) return;

    let cancelled = false;
    setLoading(true);
    setError(null);
    setProperties([]);

    const run = async () => {
      try {
        const filters: Record<string, string | number> = {};
        const loc  = searchParams.get("location");
        const br   = searchParams.get("bedrooms");
        const ba   = searchParams.get("bathrooms");
        const minP = searchParams.get("minPrice");
        const maxP = searchParams.get("maxPrice");
        const minS = searchParams.get("minSize");
        const maxS = searchParams.get("maxSize");

        if (loc)  filters.location  = loc;
        if (br)   filters.bedrooms  = Number(br);
        if (ba)   filters.bathrooms = Number(ba);
        if (minS) filters.minSize   = Number(minS);
        if (maxS) filters.maxSize   = Number(maxS);
        if (minP) filters.minPrice  = Number(minP);
        if (maxP) filters.maxPrice  = Number(maxP);

        const res = await getProperties(filters);
        if (cancelled) return;

        let filtered = (res.data as unknown[])
          .map(mapProperty)
          .filter(isPubliclyVisibleProperty);

        const rawPropertyType = searchParams.get("propertyType");
        if (rawPropertyType === "for_rent" || rawPropertyType === "for_sale") {
          filtered = filtered.filter((p) => p.property_type === rawPropertyType);
        }

        if (searchParams.get("furnished") === "1") {
          filtered = filtered.filter((p) => p.is_furnished);
        }

        setProperties(sortPropertiesWithLocalSponsorship(filtered));
      } catch (err) {
        if (cancelled) return;
        setError(
          axios.isAxiosError(err)
            ? getApiErrorMessage(err, "Search failed. Please try again.")
            : "Search failed. Please check your connection and try again.",
        );
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();
    return () => { cancelled = true; };
  }, [mode, searchParams, hasActiveFilters]);

  // ── Mode switching ────────────────────────────────────────────────────────
  const setMode = (next: SearchMode) => {
    const params = new URLSearchParams();
    params.set("mode", next);
    if (next === "smart" && query.trim()) {
      params.set("q", query);
    }
    navigate(`/search?${params.toString()}`, { replace: true });
  };

  // ── Smart search handler ──────────────────────────────────────────────────
  const handleSmartSearch = useCallback((q: string) => {
    const trimmed = q.trim();
    const params = new URLSearchParams();
    params.set("mode", "smart");
    if (trimmed) params.set("q", trimmed);
    navigate(`/search?${params.toString()}`, { replace: true });
  }, [navigate]);

  // ── Filter apply / clear ──────────────────────────────────────────────────
  const handleFilterApply = useCallback((filters: FilterValues) => {
    const params = new URLSearchParams();
    params.set("mode", "filter");

    if (filters.propertyType) params.set("propertyType", filters.propertyType);
    if (filters.location)     params.set("location", filters.location);
    if (filters.bedrooms)     params.set("bedrooms", String(filters.bedrooms));
    if (filters.bathrooms)    params.set("bathrooms", String(filters.bathrooms));
    if (filters.minSize)      params.set("minSize", String(filters.minSize));
    if (filters.maxSize)      params.set("maxSize", String(filters.maxSize));
    if (filters.furnished)    params.set("furnished", "1");

    if (filters.propertyType === "for_sale") {
      if (filters.minPrice != null) params.set("minPrice", String(filters.minPrice));
      if (filters.maxPrice != null) params.set("maxPrice", String(filters.maxPrice));
    } else {
      const unit = filters.pricingUnit ?? "MONTH";
      params.set("pricingUnit", unit);
      const divisor = unit === "MONTH" ? 30 : 1;
      if (filters.minPrice != null) params.set("minPrice", String(filters.minPrice / divisor));
      if (filters.maxPrice != null) params.set("maxPrice", String(filters.maxPrice / divisor));
    }

    const qs = params.toString();
    navigate(`/search?${qs}`, { replace: true });
  }, [navigate]);

  const handleFilterClear = useCallback(() => {
    navigate("/search?mode=filter", { replace: true });
  }, [navigate]);

  // ── Favourite toggle ──────────────────────────────────────────────────────
  const handleFavChange = (propertyId: number, next: boolean) => {
    setFavIds((prev) => {
      const updated = new Set(prev);
      if (next) updated.add(propertyId);
      else      updated.delete(propertyId);
      return updated;
    });
  };

  // ── Initial values for the filter panel ───────────────────────────────────
  const rawPropertyType = searchParams.get("propertyType");
  const initialPropertyType = rawPropertyType === "for_rent" || rawPropertyType === "for_sale" ? rawPropertyType : undefined;

  const urlPricingUnit = (searchParams.get("pricingUnit") ?? "MONTH") as "MONTH" | "DAY";
  const priceDivisor   = initialPropertyType === "for_sale" ? 1 : (urlPricingUnit === "MONTH" ? 30 : 1);

  const initialFilters: FilterValues = {
    location:     searchParams.get("location") ?? undefined,
    propertyType: initialPropertyType,
    minPrice:     searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) * priceDivisor : undefined,
    maxPrice:     searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) * priceDivisor : undefined,
    pricingUnit:  urlPricingUnit,
    bedrooms:     searchParams.get("bedrooms") ? Number(searchParams.get("bedrooms")) : undefined,
    bathrooms:    searchParams.get("bathrooms") ? Number(searchParams.get("bathrooms")) : undefined,
    minSize:      searchParams.get("minSize") ? Number(searchParams.get("minSize")) : undefined,
    maxSize:      searchParams.get("maxSize") ? Number(searchParams.get("maxSize")) : undefined,
    furnished:    searchParams.get("furnished") === "1",
  };

  const showNoResults = !loading && !error && properties.length === 0 && (
    (mode === "smart" && !!query.trim()) ||
    (mode === "filter" && hasActiveFilters)
  );

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-[1250px] mx-auto">

          <div className="mb-8 space-y-4">
            <Link to="/" className="text-sm text-gray-400 hover:text-gray-700 font-medium transition inline-flex items-center gap-1">
              ← Back to Home
            </Link>

            <div className="flex gap-2">
              <button
                onClick={() => setMode("smart")}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition cursor-pointer ${
                  mode === "smart"
                    ? "bg-dark-knight text-white shadow-sm"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
                }`}
              >
                Smart Search
              </button>
              <button
                onClick={() => setMode("filter")}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition cursor-pointer ${
                  mode === "filter"
                    ? "bg-dark-knight text-white shadow-sm"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
                }`}
              >
                Filter Search
              </button>
            </div>

            {mode === "smart" && (
              <>
                <h1 className="text-2xl font-bold text-gray-900">
                  {query
                    ? <>Results for: <span className="text-amber-500">"{query}"</span></>
                    : "Smart Search"}
                </h1>
                <div className="flex justify-start">
                  <SearchBar
                    value={draftQuery}
                    onQueryChange={setDraftQuery}
                    onSearch={handleSmartSearch}
                    onDebouncedSearch={handleSmartSearch}
                    debounceMs={400}
                    placeholder="Describe what you want…"
                  />
                </div>
              </>
            )}

            {mode === "filter" && (
              <>
                <h1 className="text-2xl font-bold text-gray-900">Filter Search</h1>
                <p className="text-sm text-gray-500">Refine results by location, price, size, and more.</p>
                  <SearchFilterPanel
                    initial={initialFilters}
                    onApply={handleFilterApply}
                    onClear={handleFilterClear}
                  />
              </>
            )}
          </div>

          {loading && <LoadingSkeleton />}

          {!loading && error && (
            <div className="text-center py-24 space-y-3">
              <p className="text-5xl">⚠️</p>
              <p className="text-xl font-bold text-gray-700">{error}</p>
              <button
                onClick={() => mode === "smart" ? handleSmartSearch(query) : handleFilterApply(initialFilters)}
                className="mt-2 bg-dark-knight text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition cursor-pointer"
              >
                Try Again
              </button>
            </div>
          )}

          {showNoResults && (
            <div className="text-center py-24 space-y-3">
              <p className="text-5xl">🔍</p>
              <p className="text-xl font-bold text-gray-700">
                {mode === "smart"
                  ? `No properties found for "${query}"`
                  : "No properties match your filters"}
              </p>
              <p className="text-gray-400 text-sm">Try different keywords or adjust your filters.</p>
              <Link to="/" className="inline-block mt-2 bg-dark-knight text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition">
                Browse All Properties
              </Link>
            </div>
          )}

          {!loading && !error && properties.length > 0 && (
            <>
              <p className="text-sm text-gray-500 mb-6">
                Found <strong className="text-gray-900">{properties.length}</strong> propert{properties.length !== 1 ? "ies" : "y"}
              </p>
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                {properties.map((p) => (
                  <PropertyCard
                    key={p.propertyId}
                    property={p}
                    isFav={favIds.has(p.propertyId)}
                    onFavChange={handleFavChange}
                  />
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
}
````

## File: src/features/rentRequest/pages/RentRequestsListPage.tsx
````typescript
import { useEffect, useState } from "react";
import { useNavigate }         from "react-router-dom";
import axios                   from "axios";

import NavBar from "@/features/properties/components/NavBar";
import { findRememberedChatContext } from "@/services/chatService";
import {
  getRentRequests,
  acceptRentRequest,
  rejectRentRequest,
  cancelRentRequest,
} from "@/services/rentRequestService";
import { requestRefund, cancelRefundRequest } from "@/services/paymentService";
import { useToast }       from "@/context/ToastContext";
import type { RentRequest } from "@/types";

const STATE_STYLES: Record<string, string> = {
  PENDING:          "bg-yellow-100 text-yellow-700",
  ACCEPTED:         "bg-blue-100 text-blue-700",
  PAYMENT_PENDING:  "bg-blue-100 text-blue-700",
  REJECTED:         "bg-red-100 text-red-600",
  CANCELLED:        "bg-gray-100 text-gray-500",
  PAID:             "bg-green-100 text-green-700",
  REFUNDED:         "bg-slate-100 text-slate-600",
  REFUND_REQUESTED: "bg-indigo-100 text-indigo-700",
  REFUND_DENIED:    "bg-orange-100 text-orange-700",
};

export default function RentRequestsListPage() {
  const navigate = useNavigate();
  const toast    = useToast();

  const [sent,     setSent]     = useState<RentRequest[]>([]);
  const [received, setReceived] = useState<RentRequest[]>([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState<string | null>(null);
  const [tab,      setTab]      = useState<"sent" | "received">("sent");
  const [actionId, setActionId] = useState<string | null>(null);
  const [actionType, setActionType] = useState<string | null>(null);
  const [refunding, setRefunding] = useState<string | null>(null);
  const [refundReason, setRefundReason] = useState("");

  const load = () => {
    setLoading(true);
    setError(null);
    getRentRequests()
      .then((res) => {
        setSent(res.data.data.sent     ?? []);
        setReceived(res.data.data.received ?? []);
      })
      .catch((err) => {
        setError(
          axios.isAxiosError(err)
            ? (err.response?.data?.msg ?? "Failed to load requests.")
            : "Failed to load requests.",
        );
        toast.error("Failed to load requests.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const doAction = async (
    id: string,
    action: "accept" | "reject" | "cancel",
    label: string
  ) => {
    if (!window.confirm(`${label}?`)) return;
    try {
      setActionId(id);
      setActionType(action);
      if (action === "accept") await acceptRentRequest(id);
      if (action === "reject") await rejectRentRequest(id);
      if (action === "cancel") await cancelRentRequest(id);
      toast.success(`Request ${action}ed.`);
      load();
    } catch (err) {
      toast.error(axios.isAxiosError(err) ? (err.response?.data?.msg ?? "Action failed.") : "Action failed.");
    } finally {
      setActionId(null);
      setActionType(null);
    }
  };

  const current = tab === "sent" ? sent : received;

  const openChat = (req: RentRequest) => {
    const isSentTab = tab === "sent";
    const partnerId = isSentTab ? req.owner_id : req.renter_id;
    if (!partnerId) return;

    const partnerName = isSentTab
      ? "Property Owner"
      : `Renter ${req.renter_id.slice(0, 6)}`;
    const existingChat = findRememberedChatContext(req.property_id, partnerId);
    const chatState = {
      partnerName,
      partnerId,
      propertyId: req.property_id,
      propertyName: req.property_name ?? `Property #${req.property_id}`,
      propertyImg: null,
    };

    if (existingChat) {
      navigate(`/chat/${existingChat.chat_id}`, { state: chatState });
      return;
    }

    navigate("/chat/start", {
      state: {
        receiverId: partnerId,
        ...chatState,
      },
    });
  };

  const Card = ({ req }: { req: RentRequest }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3 hover:shadow-md transition">

      {/* Top row */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="font-bold text-gray-900 text-sm">
            {req.property_name ?? `Property #${req.property_id}`}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5">
            ID: {req.request_id.slice(0, 8)}…
          </p>
        </div>
        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${STATE_STYLES[req.request_state] ?? "bg-gray-100 text-gray-500"}`}>
          {req.request_state}
        </span>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
        <p>📅 Check-in: <span className="font-semibold text-gray-800">{req.check_in_date}</span></p>
        <p>📅 Check-out: <span className="font-semibold text-gray-800">{req.check_out_date}</span></p>
        <p>🔄 Type: <span className="font-semibold text-gray-800">{req.renting_type}</span></p>
        <p>💰 Total: <span className="font-semibold text-gray-800">EGP {Number(req.total_price).toLocaleString()}</span></p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 flex-wrap pt-1">
        <button
          onClick={() => navigate(`/rent/property/${req.property_id}`)}
          className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
        >
          View Property
        </button>

        {/* Owner actions */}
        {tab === "received" && req.request_state === "PENDING" && (
          <>
            <button
              onClick={() => doAction(req.request_id, "accept", "Accept this request")}
              disabled={actionId === req.request_id}
              className="text-xs px-4 py-1.5 bg-green-600 text-white rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
            >
              {actionId === req.request_id && actionType === "accept" ? "Accepting..." : "Accept"}
            </button>
            <button
              onClick={() => doAction(req.request_id, "reject", "Reject this request")}
              disabled={actionId === req.request_id}
              className="text-xs px-4 py-1.5 bg-red-500 text-white rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
            >
              Reject
            </button>
          </>
        )}

        {tab === "received" && (
          <button
            onClick={() => openChat(req)}
            className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
          >
            Message Renter
          </button>
        )}

        {/* Renter: cancel */}
        {tab === "sent" && ["PENDING", "ACCEPTED"].includes(req.request_state) && (
          <button
            onClick={() => doAction(req.request_id, "cancel", "Cancel this request")}
            disabled={actionId === req.request_id}
            className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition disabled:opacity-50"
          >
            Cancel Request
          </button>
        )}

        {/* Renter: pay */}
        {tab === "sent" && ["ACCEPTED", "PAYMENT_PENDING"].includes(req.request_state) && (
          <button
            onClick={() => navigate(`/payment/${req.request_id}`)}
            className="text-xs px-4 py-1.5 bg-dark-knight text-white rounded-lg font-bold hover:opacity-90 transition"
          >
            Pay Now →
          </button>
        )}

        {tab === "sent" && req.request_state === "REFUND_REQUESTED" && (
          <button
            onClick={async () => {
              try {
                await cancelRefundRequest(req.request_id);
                toast.success("Refund request cancelled.");
                load();
              } catch {
                toast.error("Failed to cancel refund request.");
              }
            }}
            className="text-xs px-4 py-1.5 bg-gray-500 text-white rounded-lg font-bold hover:opacity-90 transition cursor-pointer"
          >
            Cancel Refund Request
          </button>
        )}

        {tab === "sent" && req.request_state === "PAID" && new Date(req.check_in_date) > new Date() && (
          <>
            <button
              onClick={() => setRefunding(req.request_id)}
              className="text-xs px-4 py-1.5 bg-indigo-600 text-white rounded-lg font-bold hover:opacity-90 transition cursor-pointer"
            >
              Request Refund
            </button>
            <button
              onClick={() => navigate(`/payment/success?request_id=${req.request_id}`)}
              className="text-xs px-4 py-1.5 bg-dark-knight text-white rounded-lg font-bold hover:opacity-90 transition cursor-pointer"
            >
              View Confirmation
            </button>
          </>
        )}

        {tab === "sent" && (
          <button
            onClick={() => openChat(req)}
            className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
          >
            Message Owner
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-3xl font-bold text-gray-900 mb-1">Rent Requests</h1>
          <p className="text-gray-500 text-sm mb-6">Manage incoming and outgoing rent requests.</p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {(["sent", "received"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 px-4 text-sm font-bold transition border-b-2 -mb-px capitalize
                  ${tab === t
                    ? "border-dark-knight text-dark-knight"
                    : "border-transparent text-gray-400 hover:text-gray-600"}`}
              >
                {t === "sent" ? "Sent" : "Received"}
                <span className="ml-1.5 text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full font-semibold">
                  {(t === "sent" ? sent : received).length}
                </span>
              </button>
            ))}
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-16">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && error && (
            <div className="space-y-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
              <p className="font-semibold">{error}</p>
              <button
                type="button"
                onClick={load}
                className="rounded-xl bg-white px-4 py-2 font-semibold transition hover:bg-red-100 cursor-pointer"
              >
                Retry
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && current.length === 0 && (
            <div className="text-center py-20 text-gray-400 space-y-2">
              <p className="text-5xl">📭</p>
              <p className="font-semibold">No {tab} requests yet.</p>
            </div>
          )}

          {/* Cards */}
          <div className="space-y-4">
            {current.map((req) => <Card key={req.request_id} req={req} />)}
          </div>

        </div>
      </div>

      {/* Refund Modal */}
      {refunding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Request Refund</h3>
            <p className="text-sm text-gray-500">Provide a reason for the refund request (optional).</p>
            <textarea
              value={refundReason}
              onChange={(e) => setRefundReason(e.target.value)}
              placeholder="Reason for refund…"
              rows={3}
              className="w-full border border-gray-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-dark-knight"
            />
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => { setRefunding(null); setRefundReason(""); }}
                className="px-4 py-2 text-sm font-semibold border border-gray-300 rounded-xl hover:bg-gray-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  try {
                    await requestRefund(refunding, refundReason || undefined);
                    toast.success("Refund request submitted.");
                    setRefunding(null);
                    setRefundReason("");
                    load();
                  } catch (err) {
                    toast.error(axios.isAxiosError(err) ? (err.response?.data?.msg ?? "Request failed.") : "Request failed.");
                  }
                }}
                className="px-4 py-2 text-sm font-bold bg-indigo-600 text-white rounded-xl hover:opacity-90 transition cursor-pointer"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
````

## File: src/features/subscription/components/SponsorshipModal.tsx
````typescript
import { useState } from "react";

import { useToast } from "@/context/ToastContext";
import {
  buildSponsorshipPaymentSuccessUrl,
  createSponsorshipCheckout,
  SPONSORSHIP_PLANS,
  type SponsorshipDuration,
} from "@/services/sponsorshipService";
import type { Property } from "@/types";
import { getApiErrorMessage } from "@/utils/apiError";

interface Props {
  property: Property;
  onClose: () => void;
}

export default function SponsorshipModal({ property, onClose }: Props) {
  const toast = useToast();
  const [duration, setDuration] = useState<SponsorshipDuration>(1);
  const [starting, setStarting] = useState(false);

  const selectedPlan = SPONSORSHIP_PLANS.find((plan) => plan.duration === duration);

  const handleCheckout = async () => {
    if (!property.isVerified) {
      toast.error("Only verified properties can be boosted.");
      return;
    }

    try {
      setStarting(true);
      const res = await createSponsorshipCheckout(
        property.propertyId,
        duration,
        buildSponsorshipPaymentSuccessUrl(property.propertyId),
      );

      const checkoutUrl = res.data?.url;
      if (typeof checkoutUrl !== "string" || !checkoutUrl) {
        throw new Error("Missing sponsorship checkout URL");
      }

      window.location.assign(checkoutUrl);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Could not start sponsorship payment."));
      setStarting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-amber-600">
              Rental Boost
            </p>
            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              Boost Rental Visibility
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {property.propertyName}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            aria-label="Close sponsorship modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {SPONSORSHIP_PLANS.map((plan) => (
            <button
              key={plan.duration}
              type="button"
              onClick={() => setDuration(plan.duration)}
              className={`rounded-2xl border p-4 text-left transition cursor-pointer ${
                duration === plan.duration
                  ? "border-dark-knight bg-dark-knight text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <p className="text-sm font-bold">{plan.label}</p>
              <p className={`mt-1 text-xl font-bold ${duration === plan.duration ? "text-amber-300" : "text-gray-900"}`}>
                EGP {plan.amount.toLocaleString()}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
          Rental boosts are prioritized for home-page rental visibility.
          The backend updates sponsorship status automatically via webhook.
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Selected: <strong className="text-gray-900">{selectedPlan?.label}</strong>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold transition hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCheckout}
              disabled={starting || !property.isVerified}
              className="rounded-xl bg-dark-knight px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
              {starting ? "Preparing..." : "Continue to Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: src/features/subscription/pages/PropertySubscriptionPage.tsx
````typescript
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import NavBar from "@/features/properties/components/NavBar";
import SellingPlanSelector from "@/features/properties/components/AddPropertyComponents/SellingPlanSelector";
import { useToast } from "@/context/ToastContext";
import {
  createSubscriptionForProperty,
  fetchSubscriptionFromApi,
  getStoredListingSubscription,
  syncStoredListingSubscriptionWithProperty,
  updateStoredListingSubscriptionState,
  type ListingSubscriptionRecord,
} from "@/services/listingSubscriptionService";
import type { SellingPlanMonths } from "@/types";
import {
  buildSubscriptionPaymentSuccessUrl,
  clearPendingSubscriptionPayment,
  getSubscriptionPaymentLink,
  savePendingSubscriptionPayment,
} from "@/services/paymentService";
import { getPropertyById } from "@/services/propertyService";
import type { Property } from "@/types";
import { mapProperty } from "@/utils/mapProperty";
import {
  getSaleSubscriptionUiState,
  hasExpiredSaleListing,
} from "@/utils/saleSubscriptionState";

const formatDate = (value: string | null | undefined) =>
  value
    ? new Date(value).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";

export default function PropertySubscriptionPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast = useToast();

  const [property, setProperty] = useState<Property | null>(null);
  const [subscription, setSubscription] = useState<ListingSubscriptionRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SellingPlanMonths>(1);
  const [creating, setCreating] = useState(false);

  const loadPage = useCallback(async () => {
    if (!id) {
      setError("Missing property id.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await getPropertyById(id);
      const nextProperty = mapProperty(res.data);

      if (nextProperty.property_type !== "for_sale") {
        setError("This page is only available for sale listings.");
        setProperty(nextProperty);
        setSubscription(null);
        return;
      }

      setProperty(nextProperty);
      const synced = syncStoredListingSubscriptionWithProperty(nextProperty);
      const stored = synced ?? getStoredListingSubscription(nextProperty.propertyId);
      const sub = stored ?? await fetchSubscriptionFromApi(nextProperty.propertyId);
      setSubscription(sub);
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? "Could not load subscription details.")
          : "Could not load subscription details.",
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadPage();
  }, [loadPage]);

  const uiState = useMemo(
    () => (property ? getSaleSubscriptionUiState(property, subscription) : null),
    [property, subscription],
  );

  useEffect(() => {
    if (!uiState || !["awaiting_verification", "payment_pending"].includes(uiState)) {
      return;
    }

    const timer = window.setInterval(() => {
      loadPage();
    }, 15000);

    return () => window.clearInterval(timer);
  }, [loadPage, uiState]);

  const handleCreateSubscription = async () => {
    if (!property || creating) return;
    try {
      setCreating(true);
      const sub = await createSubscriptionForProperty(property.propertyId, selectedPlan);
      if (!sub) {
        toast.error("Failed to create subscription. Please try again.");
        return;
      }
      setSubscription(sub);
      toast.success("Subscription created. You can now pay the listing fee.");
    } catch {
      toast.error("Failed to create subscription.");
    } finally {
      setCreating(false);
    }
  };

  const handlePay = async () => {
    if (!property || !subscription) return;

    try {
      setPaying(true);
      savePendingSubscriptionPayment(property.propertyId, subscription.subscriptionId);
      updateStoredListingSubscriptionState(property.propertyId, "PENDING");
      setSubscription((current) => current ? { ...current, paymentState: "PENDING" } : current);

      const res = await getSubscriptionPaymentLink(
        subscription.subscriptionId,
        buildSubscriptionPaymentSuccessUrl(property.propertyId, subscription.subscriptionId),
      );

      const paymentUrl = res.data?.url;
      if (typeof paymentUrl !== "string" || !paymentUrl) {
        throw new Error("Missing payment URL");
      }

      window.location.assign(paymentUrl);
    } catch (err) {
      clearPendingSubscriptionPayment();
      updateStoredListingSubscriptionState(property.propertyId, "UNPAID");
      setSubscription((current) => current ? { ...current, paymentState: "UNPAID" } : current);

      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? err.message ?? "Failed to start subscription payment.")
          : err instanceof Error
            ? err.message
            : "Failed to start subscription payment.",
      );
      setPaying(false);
    }
  };

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-dark-knight border-t-transparent" />
        </div>
      </>
    );
  }

  if (error || !property) {
    return (
      <>
        <NavBar />
        <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
          <p className="text-4xl">⚠️</p>
          <p className="text-xl font-bold text-gray-800">{error ?? "Property not found."}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => loadPage()}
              className="rounded-xl bg-dark-knight px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 cursor-pointer"
            >
              Try Again
            </button>
            <Link
              to="/my-properties"
              className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold transition hover:bg-gray-50"
            >
              Back to My Properties
            </Link>
          </div>
        </div>
      </>
    );
  }

  const showRenewalLimitation = uiState === "expired";
  const canPay = uiState === "ready_to_pay" && Boolean(subscription?.subscriptionId);
  const expiryLabel = hasExpiredSaleListing(property)
    ? "Expired"
    : formatDate(property.listingExpiry);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="mx-auto max-w-3xl space-y-6">
          <button
            type="button"
            onClick={() => navigate("/my-properties")}
            className="text-sm font-semibold text-gray-500 transition hover:text-gray-900 cursor-pointer"
          >
            ← Back to My Properties
          </button>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">Selling Plan</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage the verification, subscription, and payment status for <strong className="text-gray-800">{property.propertyName}</strong>.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <SellingPlanSelector
                  value={subscription?.planMonths}
                  disabled
                  helperText={
                    subscription
                      ? "Selling plans are created with the property in the current backend. This screen controls when that saved plan can be paid."
                      : "Plan details are only available when this browser has a stored subscription record for the property."
                  }
                />

                {subscription && (
                  <div className="mt-5 rounded-2xl bg-gray-50 p-4 text-sm text-gray-600">
                    <div className="flex justify-between gap-4">
                      <span>Subscription ID</span>
                      <span className="font-semibold text-gray-900">{subscription.subscriptionId.slice(0, 8)}…</span>
                    </div>
                    <div className="mt-2 flex justify-between gap-4">
                      <span>Listing fee</span>
                      <span className="font-semibold text-gray-900">EGP {subscription.amount.toLocaleString()}</span>
                    </div>
                    <div className="mt-2 flex justify-between gap-4">
                      <span>Frontend payment state</span>
                      <span className="font-semibold text-gray-900">{subscription.paymentState}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                {uiState === "awaiting_verification" && (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
                    <p className="font-bold">Waiting for admin verification</p>
                    <p className="mt-2 leading-relaxed">
                      Your selling plan is already attached to the property, but payment stays locked until the admin verifies the listing and enables it for sale.
                    </p>
                  </div>
                )}

                {uiState === "paid_awaiting_verification" && (
                  <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-800">
                    <p className="font-bold">Listing fee paid</p>
                    <p className="mt-2 leading-relaxed">
                      Payment was received, but the property still needs admin verification before buyers can see it publicly.
                    </p>
                  </div>
                )}

                {uiState === "ready_to_pay" && (
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-sm text-green-800">
                    <p className="font-bold">Ready for payment</p>
                    <p className="mt-2 leading-relaxed">
                      The property is verified. You can now pay the saved selling plan to activate the public sale listing.
                    </p>
                  </div>
                )}

                {uiState === "payment_pending" && (
                  <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-800">
                    <p className="font-bold">Payment in progress</p>
                    <p className="mt-2 leading-relaxed">
                      We’re waiting for the payment provider to confirm the listing fee. Use refresh if you already completed the card step.
                    </p>
                  </div>
                )}

                {uiState === "active" && (
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-sm text-green-800">
                    <p className="font-bold">Subscription active</p>
                    <p className="mt-2 leading-relaxed">
                      Your listing is active and visible to buyers. The current subscription expires on <strong>{expiryLabel}</strong>.
                    </p>
                  </div>
                )}

                {uiState === "expired" && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
                    <p className="font-bold">Subscription expired</p>
                    <p className="mt-2 leading-relaxed">
                      The listing is no longer active for buyers. The current backend does not expose a renewal API or a way to create a replacement subscription from the frontend.
                    </p>
                  </div>
                )}

                {uiState === "missing_subscription" && (
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <p className="text-sm font-bold text-gray-900">No subscription yet</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Choose a selling plan to activate this property for buyers.
                    </p>
                    <div className="mt-4">
                      <SellingPlanSelector
                        value={selectedPlan}
                        onChange={setSelectedPlan}
                        disabled={false}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleCreateSubscription}
                      disabled={creating}
                      className="mt-4 rounded-xl bg-dark-knight px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                    >
                      {creating ? "Creating…" : "Create Subscription"}
                    </button>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-3">
                  {canPay && (
                    <button
                      type="button"
                      onClick={handlePay}
                      disabled={paying}
                      className="rounded-xl bg-dark-knight px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                    >
                      {paying ? "Preparing payment…" : "Pay Listing Fee"}
                    </button>
                  )}

                  {uiState === "payment_pending" && (
                    <button
                      type="button"
                      onClick={() => loadPage()}
                      className="rounded-xl bg-dark-knight px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 cursor-pointer"
                    >
                      Check Payment Status
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => loadPage()}
                    className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50 cursor-pointer"
                  >
                    Refresh
                  </button>

                  <Link
                    to={`/buy/property/${property.propertyId}`}
                    className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
                  >
                    View Property Page
                  </Link>
                </div>

                {showRenewalLimitation && (
                  <p className="mt-4 text-xs leading-relaxed text-gray-500">
                    Renewal and post-expiry plan changes are blocked by the current backend, which has no route to create a new unpaid sale subscription after the original one is paid.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-base font-bold text-gray-800">Listing Snapshot</h2>
                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between gap-4">
                    <span>Verification</span>
                    <span className="font-semibold text-gray-900">
                      {property.isVerified ? "Verified" : "Pending"}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Listing status</span>
                    <span className="font-semibold text-gray-900">{property.listingStatus}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Expiry</span>
                    <span className="font-semibold text-gray-900">{expiryLabel}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sale price</span>
                    <span className="font-semibold text-gray-900">EGP {property.priceValue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-base font-bold text-gray-800">What happens next</h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
                  <p>1. Add the sale property with a selling plan.</p>
                  <p>2. Wait for admin verification to mark the property verified and available.</p>
                  <p>3. Pay the listing fee to activate the selling subscription.</p>
                  <p>4. Buyers can then contact you through chat while the listing stays active.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
````

## File: src/features/subscription/pages/SponsorshipPaymentStatusPage.tsx
````typescript
import { Link, useSearchParams } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";

export default function SponsorshipPaymentStatusPage() {
  const [searchParams] = useSearchParams();
  const propertyId = Number(searchParams.get("property_id"));

  return (
    <>
      <NavBar />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-12 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-4xl font-bold text-amber-700">
          B
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Boost Payment Submitted</h1>
          <p className="max-w-md leading-relaxed text-gray-500">
            The payment provider redirected you back to AQAR. Promotion activation is confirmed by the backend webhook and may take a moment to appear.
          </p>
        </div>

        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/my-properties"
            className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
          >
            My Properties
          </Link>
          {Number.isFinite(propertyId) && (
            <Link
              to={`/rent/property/${propertyId}`}
              className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
            >
              View Property
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
````

## File: src/features/subscription/pages/SubscriptionPaymentStatusPage.tsx
````typescript
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import {
  clearPendingSubscriptionPayment,
  loadPendingSubscriptionPayment,
} from "@/services/paymentService";
import {
  getStoredListingSubscription,
  syncStoredListingSubscriptionWithProperty,
  updateStoredListingSubscriptionState,
} from "@/services/listingSubscriptionService";
import { getPropertyById } from "@/services/propertyService";
import type { Property } from "@/types";
import { mapProperty } from "@/utils/mapProperty";
import { getSaleSubscriptionUiState } from "@/utils/saleSubscriptionState";

type VerificationState =
  | "missing"
  | "checking"
  | "processing"
  | "success"
  | "not_paid"
  | "error";

const MAX_CHECKS = 6;
const CHECK_DELAY_MS = 2500;

export default function SubscriptionPaymentStatusPage() {
  const [searchParams] = useSearchParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [status, setStatus] = useState<VerificationState>("checking");
  const [reloadKey, setReloadKey] = useState(0);

  const pendingPayment = useMemo(() => loadPendingSubscriptionPayment(), []);

  const propertyId = useMemo(() => {
    const queryId = searchParams.get("property_id");
    return queryId ? Number(queryId) : (pendingPayment?.propertyId ?? null);
  }, [pendingPayment, searchParams]);

  const subscriptionId = useMemo(() => {
    const queryId = searchParams.get("subscription_id");
    return queryId ?? pendingPayment?.subscriptionId ?? null;
  }, [pendingPayment, searchParams]);

  useEffect(() => {
    if (!propertyId || !subscriptionId) {
      setStatus("missing");
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let attempts = 0;

    const verifyPayment = async () => {
      attempts += 1;

      try {
        const res = await getPropertyById(String(propertyId));
        if (cancelled) return;

        const nextProperty = mapProperty(res.data);
        setProperty(nextProperty);

        const synced = syncStoredListingSubscriptionWithProperty(nextProperty)
          ?? getStoredListingSubscription(nextProperty.propertyId);
        const uiState = getSaleSubscriptionUiState(nextProperty, synced);

        if (uiState === "active" || uiState === "paid_awaiting_verification") {
          updateStoredListingSubscriptionState(nextProperty.propertyId, "PAID");
          clearPendingSubscriptionPayment();
          setStatus("success");
          return;
        }

        if (uiState === "payment_pending" || (uiState === "ready_to_pay" && attempts < MAX_CHECKS)) {
          setStatus("checking");
          timeoutId = setTimeout(verifyPayment, CHECK_DELAY_MS);
          return;
        }

        updateStoredListingSubscriptionState(nextProperty.propertyId, "UNPAID");
        clearPendingSubscriptionPayment();
        setStatus(attempts < MAX_CHECKS ? "checking" : "not_paid");
      } catch {
        if (cancelled) return;

        if (attempts < MAX_CHECKS) {
          setStatus("checking");
          timeoutId = setTimeout(verifyPayment, CHECK_DELAY_MS);
          return;
        }

        setStatus("error");
      }
    };

    setStatus("checking");
    verifyPayment();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [propertyId, reloadKey, subscriptionId]);

  const summary = property && (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm">
      <h2 className="border-b border-gray-100 pb-3 text-sm font-bold text-gray-700">
        Listing Summary
      </h2>
      <div className="space-y-2 pt-3 text-sm text-gray-600">
        <div className="flex justify-between gap-4">
          <span>Property</span>
          <span className="font-semibold text-gray-900">{property.propertyName}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Status</span>
          <span className="font-semibold text-gray-900">{property.listingStatus}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Verification</span>
          <span className="font-semibold text-gray-900">
            {property.isVerified ? "Verified" : "Pending"}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-12 text-center">
        {status === "checking" && (
          <>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl">⏳</div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Verifying Listing Payment</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We&apos;re checking whether the selling-plan payment has activated the property listing yet.
              </p>
            </div>
            {summary}
          </>
        )}

        {status === "success" && (
          <>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">🎉</div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Listing Payment Confirmed!</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                {property?.isVerified
                  ? "Your sale listing is now active and available to buyers."
                  : "The listing fee has been received. The property will become visible after admin verification is completed."}
              </p>
            </div>
            {summary}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              {propertyId && (
                <Link
                  to={`/property/${propertyId}/subscription`}
                  className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
                >
                  View Subscription
                </Link>
              )}
              <Link
                to="/my-properties"
                className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                Back to My Properties
              </Link>
            </div>
          </>
        )}

        {status === "not_paid" && (
          <>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-5xl">⚠️</div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Not Confirmed</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We redirected back successfully, but the property listing still has not switched to an active paid state.
              </p>
            </div>
            {summary}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setReloadKey((value) => value + 1)}
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                Check Again
              </button>
              {propertyId && (
                <Link
                  to={`/property/${propertyId}/subscription`}
                  className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
                >
                  Return to Subscription
                </Link>
              )}
            </div>
          </>
        )}

        {status === "missing" && (
          <>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-5xl">🧾</div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Context Missing</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We couldn&apos;t determine which sale subscription this payment belongs to.
              </p>
            </div>
            <Link
              to="/my-properties"
              className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
            >
              View My Properties
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-5xl">❌</div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Couldn&apos;t Verify Payment</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We ran into a problem while checking the sale listing status. Try again in a moment.
              </p>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setReloadKey((value) => value + 1)}
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                Retry Verification
              </button>
              <Link
                to="/my-properties"
                className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                Back to My Properties
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
````

## File: src/features/user/components/EditInfoForm.tsx
````typescript
import type { FC } from "react";
import NumberInput from "@/features/properties/components/AddPropertyComponents/NumberInput";
import PriceInput  from "@/features/properties/components/AddPropertyComponents/PriceInput";
import LocationPickerField from "@/features/properties/components/AddPropertyComponents/LocationPickerField";
import type { Property } from "@/types";

const textareaCls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition resize-none";
const inputCls    = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition";
const labelCls    = "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5";

export interface EditInfoFormValues {
  propertyName:    string;
  propertyDesc:    string;
  location:        string;
  latitude?:       number;
  longitude?:      number;
  priceValue:      string;
  size:            string;
  bedroomsNumber:  string;
  bedsNumber:      string;
  bathroomsNumber: string;
  is_furnished:    boolean;
}

interface Props {
  property: Property;
  form:     EditInfoFormValues;
  saving:   boolean;
  onChange:    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFormChange: (patch: Partial<EditInfoFormValues>) => void;
  onSubmit:    (e: React.FormEvent) => void;
  onCancel:    () => void;
}

const EditInfoForm: FC<Props> = ({
  property, form, saving, onChange, onFormChange, onSubmit, onCancel,
}) => {
  const isRent = property.property_type === "for_rent";

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <form onSubmit={onSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className={labelCls}>Property Name</label>
          <input name="propertyName" value={form.propertyName} onChange={onChange} className={inputCls} />
        </div>

        {/* Description */}
        <div>
          <label className={labelCls}>Description</label>
          <textarea name="propertyDesc" value={form.propertyDesc} onChange={onChange} rows={4} className={textareaCls} />
        </div>

        {/* Price + Size */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>
              Price (EGP)
              {isRent && (
                <span className="normal-case font-normal ml-1 text-gray-400">
                  / {property.pricingUnit === "MONTH" ? "month" : "day"}
                </span>
              )}
            </label>
            {/* Reuse PriceInput from AddProperty */}
            <PriceInput
              placeholder="0"
              value={form.priceValue ? Number(form.priceValue) : undefined}
              onChange={(val) => onFormChange({ priceValue: String(val) })}
            />
          </div>
          <div>
            {/* Reuse NumberInput from AddProperty */}
            <NumberInput
              label="Size (m²)"
              value={form.size ? Number(form.size) : 0}
              onChange={(val) => onFormChange({ size: String(val) })}
            />
          </div>
        </div>

        {/* Furnished toggle — above room counts */}
        <div>
          <label className={labelCls}>Furnished</label>
          <label className="flex items-center gap-3 cursor-pointer w-fit mt-1">
            <input
              type="checkbox"
              className="sr-only"
              checked={form.is_furnished}
              // Only toggle boolean — bedsNumber is NOT reset here
              onChange={() => onFormChange({ is_furnished: !form.is_furnished })}
            />
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition
              ${form.is_furnished ? "bg-dark-knight border-dark-knight" : "border-gray-300 bg-white"}`}>
              {form.is_furnished && (
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {form.is_furnished ? "Yes — furnished" : "No — not furnished"}
            </span>
          </label>
          {/* Warn only if the user is about to lose beds data on save */}
          {!form.is_furnished && Number(form.bedsNumber) > 0 && (
            <p className="text-xs text-amber-600 mt-1.5">
              ⚠️ Beds count will be set to 0 when you save.
            </p>
          )}
        </div>

        {/* Room counts — beds only when furnished */}
        <div className={`grid gap-4 ${form.is_furnished ? "grid-cols-3" : "grid-cols-2"}`}>
          <NumberInput
            label="Bedrooms"
            value={form.bedroomsNumber ? Number(form.bedroomsNumber) : 0}
            onChange={(val) => onFormChange({ bedroomsNumber: String(val) })}
          />
          {form.is_furnished && (
            <NumberInput
              label="Beds"
              value={form.bedsNumber ? Number(form.bedsNumber) : 0}
              onChange={(val) => onFormChange({ bedsNumber: String(val) })}
            />
          )}
          <NumberInput
            label="Bathrooms"
            value={form.bathroomsNumber ? Number(form.bathroomsNumber) : 0}
            onChange={(val) => onFormChange({ bathroomsNumber: String(val) })}
          />
        </div>

        {/* Location picker */}
        <div className="border-t border-gray-100 pt-5 space-y-4">
          <LocationPickerField
            label="Location"
            labelClassName={labelCls}
            value={form.location}
            latitude={form.latitude}
            longitude={form.longitude}
            inputClassName={`${inputCls} pr-28`}
            onChange={(patch) => onFormChange(patch)}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving}
            className="flex-1 bg-dark-knight text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50 cursor-pointer">
            {saving ? "Saving…" : "Save Changes"}
          </button>
          <button type="button" onClick={onCancel}
            className="px-6 py-3 border border-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-50 transition cursor-pointer">
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default EditInfoForm;
````

## File: src/features/user/components/ImageGalleryEditor.tsx
````typescript
import { useRef, type FC } from "react";

interface Props {
  /** Label shown at the top e.g. "Property Photos" */
  title:       string;
  /** Minimum count required */
  minCount:    number;
  /** URLs already on the server that are still kept */
  keptUrls:    string[];
  /** New File objects the user picked */
  newFiles:    File[];
  /** Accept string for file input e.g. "image/*" or "image/*,.pdf" */
  accept:      string;
  /** Upload zone hint e.g. "JPG, PNG, WEBP" */
  hint:        string;
  /** Icon SVG path(s) for the drop zone icon */
  iconType:    "photo" | "document";
  onRemoveUrl: (url: string)   => void;
  onAddFiles:  (files: File[]) => void;
  onRemoveNew: (index: number) => void;
}

const PhotoIcon = () => (
  <svg className="w-7 h-7 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 16l4-4 4 4 4-6 4 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocIcon = () => (
  <svg className="w-7 h-7 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round"/>
    <path d="M14 2v6h6M12 12v6M9 15l3-3 3 3" strokeLinecap="round"/>
  </svg>
);

const ImageGalleryEditor: FC<Props> = ({
  title, minCount,
  keptUrls, newFiles, accept, hint, iconType,
  onRemoveUrl, onAddFiles, onRemoveNew,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const total    = keptUrls.length + newFiles.length;
  const met      = total >= minCount;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-700">{title}</h3>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full
          ${met ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
          {total} / {minCount} min
        </span>
      </div>

      {/* Current files */}
      {keptUrls.length > 0 && (
        <div>
          <p className="text-xs text-gray-400 mb-2">Current — hover to remove</p>
          {iconType === "photo" ? (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {keptUrls.map((url, i) => (
                <div key={i} className="relative group aspect-square rounded-xl overflow-hidden border border-gray-200">
                  <img src={url} alt={`current-${i}`} className="w-full h-full object-cover" />
                  <button type="button"
                    onClick={() => onRemoveUrl(url)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition cursor-pointer">
                    <span className="w-7 h-7 bg-red-500 rounded-full text-white text-sm font-bold flex items-center justify-center">✕</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {keptUrls.map((url, i) => (
                <div key={i} className="flex items-center gap-3 border border-gray-200 rounded-xl p-3">
                  <img src={url} alt={`doc-${i}`} className="w-10 h-10 object-cover rounded-lg shrink-0 border border-gray-100" />
                  <p className="flex-1 text-xs font-medium text-gray-600 truncate">Document {i + 1}</p>
                  <button type="button"
                    onClick={() => onRemoveUrl(url)}
                    className="w-7 h-7 bg-gray-100 hover:bg-red-100 hover:text-red-500 text-gray-400 rounded-full flex items-center justify-center transition cursor-pointer shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Drop zone */}
      <div onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center gap-2 border-2 border-dashed border-gray-200 hover:border-amber-400 hover:bg-amber-50 rounded-xl p-5 cursor-pointer transition">
        {iconType === "photo" ? <PhotoIcon /> : <DocIcon />}
        <p className="text-sm font-semibold text-gray-600">Add new files</p>
        <p className="text-xs text-gray-400">{hint}</p>
        <input ref={inputRef} type="file" multiple accept={accept}
          onChange={(e) => {
            if (!e.target.files) return;
            onAddFiles(Array.from(e.target.files));
            e.target.value = "";
          }}
          className="hidden" />
      </div>

      {/* New files preview */}
      {newFiles.length > 0 && (
        <div>
          <p className="text-xs text-gray-400 mb-2">New — to be uploaded</p>
          {iconType === "photo" ? (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {newFiles.map((file, i) => (
                <div key={i} className="relative group aspect-square rounded-xl overflow-hidden border-2 border-green-300">
                  <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-full object-cover" />
                  <button type="button" onClick={() => onRemoveNew(i)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition cursor-pointer">
                    <span className="w-7 h-7 bg-red-500 rounded-full text-white text-sm font-bold flex items-center justify-center">✕</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {newFiles.map((file, i) => (
                <div key={i} className="flex items-center gap-3 border-2 border-green-200 rounded-xl p-3">
                  {file.type.startsWith("image/") ? (
                    <img src={URL.createObjectURL(file)} alt={file.name} className="w-10 h-10 object-cover rounded-lg shrink-0 border border-gray-100"/>
                  ) : (
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0 border border-red-100">
                      <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )}
                  <p className="flex-1 text-sm font-medium text-gray-800 truncate">{file.name}</p>
                  <button type="button" onClick={() => onRemoveNew(i)}
                    className="w-7 h-7 bg-gray-100 hover:bg-red-100 hover:text-red-500 text-gray-400 rounded-full flex items-center justify-center transition cursor-pointer shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGalleryEditor;
````

## File: src/features/user/pages/EditPropertyPage.tsx
````typescript
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import NavBar             from "@/features/properties/components/NavBar";
import SellingPlanSelector from "@/features/properties/components/AddPropertyComponents/SellingPlanSelector";
import EditInfoForm, { type EditInfoFormValues } from "@/features/user/components/EditInfoForm";
import ImageGalleryEditor from "@/features/user/components/ImageGalleryEditor";

import {
  getPropertyById,
  editPropertyInfo,
  editPropertyImages,
} from "@/services/propertyService";
import {
  getStoredListingSubscription,
  syncStoredListingSubscriptionWithProperty,
} from "@/services/listingSubscriptionService";
import { mapProperty } from "@/utils/mapProperty";
import { useToast }    from "@/context/ToastContext";
import type { Property } from "@/types";
import { getSaleSubscriptionUiState, hasExpiredSaleListing } from "@/utils/saleSubscriptionState";

type Tab = "info" | "images";

// ─── Fetch a remote URL and return it as a File object ───────────────────────
// Used to re-package kept images so the backend receives one flat list of files.
const urlToFile = async (url: string): Promise<File> => {
  const res      = await fetch(url);
  const blob     = await res.blob();
  const filename = url.split("/").pop() ?? "image.jpg";
  return new File([blob], filename, { type: blob.type });
};

export default function EditPropertyPage() {
  const { id }   = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast    = useToast();

  const [property, setProperty] = useState<Property | null>(null);
  const [loading,  setLoading]  = useState(true);
  const [tab,      setTab]      = useState<Tab>("info");
  const [saving,   setSaving]   = useState(false);

  // ── Info form state ───────────────────────────────────────────────────────
  const [form, setForm] = useState<EditInfoFormValues>({
    propertyName:    "",
    propertyDesc:    "",
    location:        "",
    latitude:        undefined,
    longitude:       undefined,
    priceValue:      "",
    size:            "",
    bedroomsNumber:  "",
    bedsNumber:      "",
    bathroomsNumber: "",
    is_furnished:    false,
  });

  // ── Images state ──────────────────────────────────────────────────────────
  // keptUrls = existing server URLs the user hasn't removed
  // newFiles  = freshly picked File objects
  const [keptPropertyUrls,  setKeptPropertyUrls]  = useState<string[]>([]);
  const [newPropertyFiles,  setNewPropertyFiles]  = useState<File[]>([]);
  const [keptOwnershipUrls, setKeptOwnershipUrls] = useState<string[]>([]);
  const [newOwnershipFiles, setNewOwnershipFiles] = useState<File[]>([]);
  const [uploadingImages,   setUploadingImages]   = useState(false);

  // ── Load ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!id) return;
    getPropertyById(id)
      .then((res) => {
        const p = mapProperty(res.data);
        setProperty(p);
        setForm({
          propertyName:    p.propertyName,
          propertyDesc:    p.propertyDesc,
          location:        p.location,
          latitude:        p.latitude,
          longitude:       p.longitude,
          priceValue:      String(p.priceValue),
          size:            String(p.size),
          bedroomsNumber:  String(p.bedroomsNumber),
          bedsNumber:      String(p.bedsNumber),
          bathroomsNumber: String(p.bathroomsNumber),
          is_furnished:    p.is_furnished,
        });
        setKeptPropertyUrls(p.images);
        setKeptOwnershipUrls(p.ownershipProof);
      })
      .catch(() => { toast.error("Failed to load property."); navigate("/my-properties"); })
      .finally(() => setLoading(false));
  }, [id]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onFormChange = (patch: Partial<EditInfoFormValues>) =>
    setForm((f) => ({ ...f, ...patch }));

  const saleSubscription = property?.property_type === "for_sale"
    ? syncStoredListingSubscriptionWithProperty(property) ?? getStoredListingSubscription(property.propertyId)
    : null;
  const saleSubscriptionState = property?.property_type === "for_sale"
    ? getSaleSubscriptionUiState(property, saleSubscription)
    : null;

  // ── Save info ─────────────────────────────────────────────────────────────
  const handleSaveInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    if (
      form.propertyName === property?.propertyName &&
      form.propertyDesc === property?.propertyDesc &&
      form.location === property?.location &&
      Number(form.priceValue) === property?.priceValue &&
      form.size === property?.size &&
      Number(form.bedroomsNumber) === property?.bedroomsNumber &&
      (form.is_furnished ? Number(form.bedsNumber) : 0) === (form.is_furnished ? Number(property?.bedsNumber) : 0) &&
      Number(form.bathroomsNumber) === property?.bathroomsNumber &&
      form.latitude === property?.latitude &&
      form.longitude === property?.longitude
    ) {
      toast.error("No changes detected.");
      return;
    }
    try {
      setSaving(true);
      await editPropertyInfo(id, {
        propertyName:    form.propertyName    || undefined,
        propertyDesc:    form.propertyDesc    || undefined,
        location:        form.location        || undefined,
        latitude:        form.latitude,
        longitude:       form.longitude,
        priceValue:      form.priceValue      ? Number(form.priceValue)      : undefined,
        size:            form.size            ? Number(form.size)            : undefined,
        bedroomsNumber:  form.bedroomsNumber  ? Number(form.bedroomsNumber)  : undefined,
        bedsNumber:      form.is_furnished
          ? (form.bedsNumber ? Number(form.bedsNumber) : undefined)
          : 0,
        bathroomsNumber: form.bathroomsNumber ? Number(form.bathroomsNumber) : undefined,
      });
      toast.success("Property updated. It will be re-verified by our team.");
      navigate("/my-properties");
    } catch (err) {
      toast.error(axios.isAxiosError(err) ? (err.response?.data?.msg ?? "Update failed.") : "Unexpected error.");
    } finally {
      setSaving(false);
    }
  };

  // ── Save images ───────────────────────────────────────────────────────────
  const propertyChanged  = newPropertyFiles.length  > 0 || keptPropertyUrls.length  !== (property?.images.length        ?? 0);
  const ownershipChanged = newOwnershipFiles.length > 0 || keptOwnershipUrls.length !== (property?.ownershipProof.length ?? 0);
  const totalProperty    = keptPropertyUrls.length  + newPropertyFiles.length;
  const totalOwnership   = keptOwnershipUrls.length + newOwnershipFiles.length;

  const handleSaveImages = async () => {
    if (!id) return;
    if (!propertyChanged && !ownershipChanged) { toast.error("No changes to save."); return; }
    if (propertyChanged  && totalProperty  < 5) { toast.error(`Property photos need at least 5 total (currently ${totalProperty}).`);  return; }
    if (ownershipChanged && totalOwnership < 3) { toast.error(`Ownership documents need at least 3 total (currently ${totalOwnership}).`); return; }

    try {
      setUploadingImages(true);

      // Convert kept URLs → File blobs so the backend receives one flat list.
      // The backend deletes ALL old files then saves whatever it receives,
      // so sending kept images as blobs = keep them + add new ones in one call.
      const keptPropertyAsFiles  = propertyChanged  ? await Promise.all(keptPropertyUrls.map(urlToFile))  : [];
      const keptOwnershipAsFiles = ownershipChanged ? await Promise.all(keptOwnershipUrls.map(urlToFile)) : [];

      await editPropertyImages(id, {
        images:         propertyChanged  ? [...keptPropertyAsFiles,  ...newPropertyFiles]  : undefined,
        ownershipProof: ownershipChanged ? [...keptOwnershipAsFiles, ...newOwnershipFiles] : undefined,
      });

      toast.success("Images updated. Property will be re-verified.");
      navigate("/my-properties");
    } catch (err) {
      toast.error(axios.isAxiosError(err) ? (err.response?.data?.msg ?? "Upload failed.") : "Unexpected error.");
    } finally {
      setUploadingImages(false);
    }
  };

  // ── Loading ───────────────────────────────────────────────────────────────
  if (loading) return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
      </div>
    </>
  );

  const TABS: { key: Tab; label: string; icon: string }[] = [
    { key: "info",   label: "Info & Location", icon: "✏️" },
    { key: "images", label: "Images",          icon: "🖼️" },
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">

          <button type="button" onClick={() => navigate("/my-properties")}
            className="text-sm text-gray-500 hover:text-gray-900 font-semibold mb-6 flex items-center gap-1 transition cursor-pointer">
            ← Back to My Properties
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-1">Edit Property</h1>
          <p className="text-gray-500 text-sm mb-6">
            Editing: <strong className="text-gray-800">{property?.propertyName}</strong>
          </p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {TABS.map((t) => (
              <button key={t.key} type="button" onClick={() => setTab(t.key)}
                className={`flex items-center gap-1.5 pb-3 px-4 text-sm font-bold transition border-b-2 -mb-px cursor-pointer
                  ${tab === t.key
                    ? "border-dark-knight text-dark-knight"
                    : "border-transparent text-gray-400 hover:text-gray-600"}`}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          {/* ── INFO & LOCATION ──────────────────────────────────────────── */}
          {tab === "info" && property && (
            <div className="space-y-6">
              {property.property_type === "for_sale" && (
                <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">Selling Plan</h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Sale plans are created with the property and managed through the subscription flow.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate(`/property/${property.propertyId}/subscription`)}
                      className="rounded-xl bg-dark-knight px-4 py-2.5 text-sm font-bold text-white transition hover:opacity-90 cursor-pointer"
                    >
                      Open Selling Plan
                    </button>
                  </div>

                  <SellingPlanSelector
                    value={saleSubscription?.planMonths}
                    disabled
                    helperText={
                      saleSubscriptionState === "active"
                        ? "The plan is locked because the current subscription is active."
                        : saleSubscriptionState === "paid_awaiting_verification"
                          ? "Payment is complete, so the plan stays locked while the property waits for admin verification."
                          : saleSubscriptionState === "ready_to_pay"
                            ? "The property is verified and waiting for payment of the saved plan."
                            : saleSubscriptionState === "payment_pending"
                              ? "A payment session is already in progress for this saved plan."
                              : saleSubscriptionState === "expired"
                                ? "The previous plan has expired, but the current backend does not expose a renewal or plan-update endpoint from edit."
                                : "Plan details are only available when this browser has a stored subscription record for the property."
                    }
                  />

                  <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-600">
                    <p className="font-semibold text-gray-900">
                      {saleSubscriptionState === "awaiting_verification" && "Pending verification"}
                      {saleSubscriptionState === "paid_awaiting_verification" && "Paid · pending verification"}
                      {saleSubscriptionState === "ready_to_pay" && "Verified · unpaid"}
                      {saleSubscriptionState === "payment_pending" && "Payment processing"}
                      {saleSubscriptionState === "active" && "Subscription active"}
                      {saleSubscriptionState === "expired" && "Subscription expired"}
                      {saleSubscriptionState === "missing_subscription" && "Subscription details unavailable"}
                    </p>
                    <p className="mt-1">
                      {hasExpiredSaleListing(property)
                        ? "This listing has expired. A new frontend renewal flow cannot be completed until the backend exposes a fresh sale-subscription endpoint."
                        : property.listingExpiry
                          ? `Current listing expiry: ${new Date(property.listingExpiry).toLocaleDateString("en-GB")}`
                          : "No active listing expiry is currently set."}
                    </p>
                  </div>
                </div>
              )}

              <EditInfoForm
                property={property}
                form={form}
                saving={saving}
                onChange={onChange}
                onFormChange={onFormChange}
                onSubmit={handleSaveInfo}
                onCancel={() => navigate("/my-properties")}
              />
            </div>
          )}

          {/* ── IMAGES ───────────────────────────────────────────────────── */}
          {tab === "images" && (
            <div className="space-y-6">

              <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <span className="text-xl shrink-0">ℹ️</span>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Remove photos you no longer want and add new ones.
                  Kept photos are re-uploaded automatically when you save.
                </p>
              </div>

              <ImageGalleryEditor
                title="Property Photos"
                minCount={5}
                keptUrls={keptPropertyUrls}
                newFiles={newPropertyFiles}
                accept="image/jpeg,image/jpg,image/png,image/webp"
                hint="JPG, PNG, WEBP"
                iconType="photo"
                onRemoveUrl={(url) => setKeptPropertyUrls((prev) => prev.filter((u) => u !== url))}
                onAddFiles={(files) => setNewPropertyFiles((prev) => [...prev, ...files])}
                onRemoveNew={(i) => setNewPropertyFiles((prev) => prev.filter((_, idx) => idx !== i))}
              />

              <ImageGalleryEditor
                title="Ownership Documents"
                minCount={3}
                keptUrls={keptOwnershipUrls}
                newFiles={newOwnershipFiles}
                accept="image/jpeg,image/jpg,image/png,image/webp,.pdf"
                hint="JPG, PNG, PDF"
                iconType="document"
                onRemoveUrl={(url) => setKeptOwnershipUrls((prev) => prev.filter((u) => u !== url))}
                onAddFiles={(files) => setNewOwnershipFiles((prev) => [...prev, ...files])}
                onRemoveNew={(i) => setNewOwnershipFiles((prev) => prev.filter((_, idx) => idx !== i))}
              />

              <div className="flex gap-3">
                <button type="button" onClick={handleSaveImages}
                  disabled={uploadingImages || (!propertyChanged && !ownershipChanged)}
                  className="flex-1 bg-dark-knight text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
                  {uploadingImages ? "Uploading…" : "Save Image Changes"}
                </button>
                <button type="button" onClick={() => navigate("/my-properties")}
                  className="px-6 py-3 border border-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-50 transition cursor-pointer">
                  Cancel
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </>
  );
}
````

## File: src/features/user/pages/FavoritesPage.tsx
````typescript
import { useEffect, useState } from "react";
import { Link }                from "react-router-dom";

import NavBar       from "@/features/properties/components/NavBar";
import PropertyCard from "@/features/properties/components/PropertyCard";
import { getFavorites } from "@/services/favoriteService";
import { mapProperty }  from "@/utils/mapProperty";
import { useToast }     from "@/context/ToastContext";
import type { Property } from "@/types";

export default function FavoritesPage() {
  const toast = useToast();
  const [favorites, setFavorites] = useState<Property[]>([]);
  const [loading,   setLoading]   = useState(true);

  useEffect(() => {
    getFavorites()
      .then((res) => {
        const list: any[] = res.data.favorites ?? [];
        setFavorites(list.map(mapProperty));
      })
      .catch(() => toast.error("Failed to load saved properties."))
      .finally(() => setLoading(false));
  }, []);

  // On this page isFav is always true for every card.
  // When the user un-hearts a card, remove it from the list immediately.
  const handleFavChange = (propertyId: number, next: boolean) => {
    if (!next) setFavorites((prev) => prev.filter((p) => p.propertyId !== propertyId));
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto">

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Saved Properties</h1>
            <p className="text-gray-500 mt-1 text-sm">Properties you've hearted for later.</p>
          </div>

          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && favorites.length === 0 && (
            <div className="text-center py-24 space-y-4">
              <p className="text-6xl">❤️</p>
              <p className="text-xl font-bold text-gray-700">Nothing saved yet.</p>
              <p className="text-gray-400 text-sm">Tap the heart on any property to save it here.</p>
              <Link to="/" className="inline-block mt-2 bg-dark-knight text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition">
                Browse Properties
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {favorites.map((p) => (
              <PropertyCard
                key={p.propertyId}
                property={p}
                isFav={true}
                onFavChange={handleFavChange}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
````

## File: src/features/user/pages/MyPropertiesPage.tsx
````typescript
import { useEffect, useState } from "react";
import { Link, useNavigate }   from "react-router-dom";
import axios                   from "axios";

import NavBar                        from "@/features/properties/components/NavBar";
import SponsorshipModal              from "@/features/subscription/components/SponsorshipModal";
import {
  getMyProperties,
  deleteProperty,
  getPropertyById,
} from "@/services/propertyService";
import {
  getStoredListingSubscription,
  syncStoredListingSubscriptionWithProperty,
} from "@/services/listingSubscriptionService";

import { mapProperty }               from "@/utils/mapProperty";
import { useToast }                  from "@/context/ToastContext";
import type { Property }             from "@/types";
import { getSaleSubscriptionUiState, hasExpiredSaleListing } from "@/utils/saleSubscriptionState";

export default function MyPropertiesPage() {
  const navigate = useNavigate();
  const toast    = useToast();

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading,    setLoading]    = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [boostProperty, setBoostProperty] = useState<Property | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getMyProperties();
        const baseProperties = (res.data as unknown[]).map(mapProperty);
        const saleIds = baseProperties
          .filter((property) => property.property_type === "for_sale")
          .map((property) => property.propertyId);

        const detailedSales = await Promise.allSettled(
          saleIds.map((propertyId) => getPropertyById(String(propertyId))),
        );

        const detailedMap = new Map<number, Property>();
        detailedSales.forEach((result) => {
          if (result.status !== "fulfilled") return;
          const detailedProperty = mapProperty(result.value.data);
          detailedMap.set(detailedProperty.propertyId, detailedProperty);
        });

        const merged = baseProperties.map((property) =>
          detailedMap.get(property.propertyId) ?? property,
        );

        setProperties(merged);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleDelete = async (id: number, name: string) => {
    if (!window.confirm(`Delete "${name}"? This will hide it from search results.`)) return;
    try {
      setDeletingId(id);
      await deleteProperty(String(id));
      setProperties((prev) => prev.map((p) => p.propertyId === id ? { ...p, isVisible: false } : p));
      toast.success("Property hidden from search results.");
    } catch (err) {
      toast.error(axios.isAxiosError(err) ? (err.response?.data?.msg ?? "Delete failed.") : "Delete failed.");
    } finally {
      setDeletingId(null);
    }
  };

  const StatusBadge = ({ p }: { p: Property }) => {
    if (p.isVisible === false) {
      return <span className="text-[11px] font-bold bg-gray-200 text-gray-500 px-2.5 py-0.5 rounded-full">Deleted</span>;
    }
    if (p.property_type === "for_sale") {
      const subscription = syncStoredListingSubscriptionWithProperty(p)
        ?? getStoredListingSubscription(p.propertyId);
      const state = getSaleSubscriptionUiState(p, subscription);

      if (state === "awaiting_verification")
        return <span className="text-[11px] font-bold bg-yellow-100 text-yellow-700 px-2.5 py-0.5 rounded-full">Awaiting Review</span>;
      if (state === "paid_awaiting_verification")
        return <span className="text-[11px] font-bold bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full">Paid · Pending Review</span>;
      if (state === "ready_to_pay")
        return <span className="text-[11px] font-bold bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full">Verified · Unpaid</span>;
      if (state === "payment_pending")
        return <span className="text-[11px] font-bold bg-sky-100 text-sky-700 px-2.5 py-0.5 rounded-full">Payment Processing</span>;
      if (state === "expired")
        return <span className="text-[11px] font-bold bg-red-100 text-red-600 px-2.5 py-0.5 rounded-full">Subscription Expired</span>;
      if (state === "active")
        return <span className="text-[11px] font-bold bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full">Listing Active ✓</span>;
      return <span className="text-[11px] font-bold bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">Subscription Missing</span>;
    }

    if (!p.isVerified)
      return <span className="text-[11px] font-bold bg-yellow-100 text-yellow-700 px-2.5 py-0.5 rounded-full">Pending Review</span>;
    if (!p.isAvailable)
      return <span className="text-[11px] font-bold bg-red-100 text-red-600 px-2.5 py-0.5 rounded-full">Unavailable</span>;
    return <span className="text-[11px] font-bold bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full">Active ✓</span>;
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Properties</h1>
              <p className="text-gray-500 mt-1 text-sm">Manage all the properties you've listed on AQAR.</p>
            </div>
            <Link
              to="/property/add-property"
              className="bg-dark-knight text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition"
            >
              + Add New
            </Link>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Empty state */}
          {!loading && properties.length === 0 && (
            <div className="text-center py-24 space-y-4">
              <p className="text-6xl">🏠</p>
              <p className="text-xl font-bold text-gray-700">No properties listed yet.</p>
              <p className="text-gray-400 text-sm">Start earning by listing your first property.</p>
              <Link
                to="/property/add-property"
                className="inline-block mt-2 bg-dark-knight text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
              >
                List Your First Property
              </Link>
            </div>
          )}

          {/* Property rows */}
          <div className="space-y-4">
            {properties.map((p) => (
              <div
                key={p.propertyId}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex gap-4 p-4"
              >
                {/* Thumbnail */}
                <img
                  src={p.images[0] ?? "https://placehold.co/160x120?text=No+Image"}
                  alt={p.propertyName}
                  className="w-36 h-24 object-cover rounded-xl shrink-0"
                />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h2 className="text-base font-bold text-gray-900 truncate">{p.propertyName}</h2>
                    <StatusBadge p={p} />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">📍 {p.location}</p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {p.bedroomsNumber} bed · {p.bathroomsNumber} bath · {p.size} m²
                  </p>
                  <p className="font-bold text-gray-900 mt-1.5 text-sm">
                    EGP {p.priceValue.toLocaleString()}
                    {p.property_type === "for_rent" && (
                      <span className="text-gray-400 font-normal">
                        {" "}/ {p.pricingUnit === "MONTH" ? "month" : "day"}
                      </span>
                    )}
                  </p>
                  {p.property_type === "for_sale" && (
                    <p className="mt-1 text-xs text-gray-400">
                      {hasExpiredSaleListing(p)
                        ? "Subscription expired"
                        : p.listingExpiry
                          ? `Listing expiry: ${new Date(p.listingExpiry).toLocaleDateString("en-GB")}`
                          : "Waiting for subscription activation"}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 shrink-0 justify-center">
                  {(() => {
                    const canManage = p.isVisible !== false && p.listingStatus !== "sold";
                    return (
                      <>
                        <Link
                          to={p.property_type === "for_sale"
                            ? `/buy/property/${p.propertyId}`
                            : `/rent/property/${p.propertyId}`}
                          className="text-xs px-3.5 py-1.5 border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
                        >
                          View
                        </Link>
                        {canManage && (
                          <button
                            onClick={() => navigate(`/property/${p.propertyId}/edit`)}
                            className="text-xs px-3.5 py-1.5 bg-amber-300 text-dark-knight rounded-lg font-bold hover:bg-amber-400 transition"
                          >
                            Edit
                          </button>
                        )}
                        {canManage && p.property_type === "for_sale" && (
                          <button
                            onClick={() => navigate(`/property/${p.propertyId}/subscription`)}
                            className="text-xs px-3.5 py-1.5 border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition"
                          >
                            Selling Plan
                          </button>
                        )}
                        {canManage && p.isVerified && p.property_type === "for_rent" && !p.isSponsored && (
                          <button
                            type="button"
                            onClick={() => setBoostProperty(p)}
                            className="text-xs px-3.5 py-1.5 border border-amber-300 bg-amber-50 text-amber-800 rounded-lg font-bold hover:bg-amber-100 transition"
                          >
                            Boost
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(p.propertyId, p.propertyName)}
                          disabled={deletingId === p.propertyId || p.isVisible === false}
                          className="text-xs px-3.5 py-1.5 bg-red-50 text-red-600 rounded-lg font-bold hover:bg-red-100 transition disabled:opacity-50"
                        >
                          {deletingId === p.propertyId ? "…" : p.isVisible === false ? "Deleted" : "Delete"}
                        </button>
                      </>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      {boostProperty && (
        <SponsorshipModal
          property={boostProperty}
          onClose={() => setBoostProperty(null)}
        />
      )}
    </>
  );
}
````

## File: src/features/user/pages/NotificationsPage.tsx
````typescript
import { useState } from "react";
import { useNavigate }         from "react-router-dom";

import { useNotifications }      from "@/context/NotificationsContext";
import { useToast }              from "@/context/ToastContext";
import NavBar                    from "@/features/properties/components/NavBar";
import type { Notification }     from "@/types";
import {
  parseNotificationMetadata,
  resolveNotificationRoute,
  TYPE_ICONS,
} from "@/utils/notifications";

// ─── Format a timestamp nicely ───────────────────────────────────────────────
const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

export default function NotificationsPage() {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    notifications,
    unreadCount,
    loading,
    error,
    refreshNotifications,
    markAsRead,
    markAllAsRead,
  } = useNotifications();
  const [markingAll, setMarkingAll] = useState(false);

  const openReview = async (n: Notification, propertyId: string) => {
    if (!n.viewed) {
      try {
        await markAsRead(n.notification_id);
      } catch {
        toast.error("Failed to update this notification.");
        return;
      }
    }

    navigate(`/review/${propertyId}`);
  };

  // ── Click: mark read + navigate ───────────────────────────────────────────
  const handleClick = async (n: Notification) => {
    if (!n.viewed) {
      try {
        await markAsRead(n.notification_id);
      } catch {
        toast.error("Failed to update this notification.");
        return;
      }
    }

    const route = resolveNotificationRoute(n);
    if (route) navigate(route);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
              <p className="text-gray-500 text-sm mt-1">
                {unreadCount > 0 ? `${unreadCount} unread` : "You're all caught up!"}
              </p>
            </div>
            {unreadCount > 0 && (
              <button
                disabled={markingAll}
                onClick={async () => {
                  try {
                    setMarkingAll(true);
                    await markAllAsRead();
                  } catch {
                    toast.error("Failed to update all notifications.");
                  } finally {
                    setMarkingAll(false);
                  }
                }}
                className="text-xs font-bold text-gray-500 hover:text-dark-knight border border-gray-200 px-3 py-1.5 rounded-lg transition mt-1 cursor-pointer disabled:opacity-50"
              >
                {markingAll ? "Updating…" : "Mark all read"}
              </button>
            )}
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-16">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && error && (
            <div className="space-y-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
              <p className="font-semibold">{error}</p>
              <button
                type="button"
                onClick={() => refreshNotifications().catch(() => {})}
                className="rounded-xl bg-white px-4 py-2 font-semibold transition hover:bg-red-100 cursor-pointer"
              >
                Retry
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && notifications.length === 0 && (
            <div className="text-center py-24 space-y-3">
              <p className="text-6xl">🔔</p>
              <p className="text-xl font-bold text-gray-700">No notifications yet.</p>
            </div>
          )}

          {/* List */}
          <div className="space-y-2.5">
            {notifications.map((n) => {
              const hasRoute = resolveNotificationRoute(n) !== null;
              const isInteractive = hasRoute || !n.viewed;
              const metadata = parseNotificationMetadata(n.metadata);
              const reviewPropertyId = metadata.property_id;
              const canReview =
                n.event_type === "LEASE_COMPLETED"
                && (typeof reviewPropertyId === "string" || typeof reviewPropertyId === "number");

              return (
                <div
                  key={n.notification_id}
                  onClick={() => handleClick(n)}
                  className={`flex gap-4 p-4 rounded-2xl border transition
                    ${isInteractive ? "cursor-pointer" : "cursor-default"}
                    ${n.viewed
                      ? "bg-white border-gray-100 hover:border-gray-200"
                      : "bg-amber-50 border-amber-200 hover:bg-amber-100"}`}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-xl shrink-0 select-none">
                    {TYPE_ICONS[n.event_type] ?? "🔔"}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-sm font-bold ${n.viewed ? "text-gray-700" : "text-gray-900"}`}>
                        {n.notification_title}
                      </p>
                      {!n.viewed && (
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5 leading-snug">
                      {n.notification_body}
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <p className="text-xs text-gray-400">
                        {formatDate(n.created_at)}
                      </p>
                      {canReview ? (
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            openReview(n, String(reviewPropertyId));
                          }}
                          className="text-[11px] text-amber-600 font-semibold hover:text-amber-700 cursor-pointer"
                        >
                          Leave a Review →
                        </button>
                      ) : hasRoute && (
                        <span className="text-[11px] text-amber-600 font-semibold">
                          View →
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
````

## File: src/features/user/pages/ProfilePage.tsx
````typescript
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
      const res = await updateProfile(payload);
      const emailChanged = res.data?.emailChanged === true;

      // If email changed, redirect to OTP verification page
      if (emailChanged) {
        localStorage.setItem("email", payload.email ?? profile?.email ?? "");
        toast.success("Verification code sent to your new email.");
        setForm((f) => ({ ...f, password: "", confirmPassword: "" }));
        navigate("/auth/verify-email");
        return;
      }

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
              {profile?.is_verified ? (
                <span className="mt-1 inline-block text-xs font-bold text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full">
                  ✓ Verified
                </span>
              ) : (
                <span className="mt-1 inline-block text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  ⚠ Unverified — verify your email
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
````

## File: src/features/wallet/pages/WalletPage.tsx
````typescript
import { useEffect, useState } from "react";

import NavBar from "@/features/properties/components/NavBar";
import {
  getBalance,
  getTransactionHistory,
  requestWithdrawal,
} from "@/services/paymentService";
import type { Transaction } from "@/services/paymentService";
import { useToast } from "@/context/ToastContext";
import { getApiErrorMessage } from "@/utils/apiError";

export default function WalletPage() {
  const toast = useToast();

  const [balance, setBalance] = useState<string | null>(null);
  const [lockedFunds, setLockedFunds] = useState<string | null>(null);
  const [availableBalance, setAvailableBalance] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [txLoading, setTxLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawMethod, setWithdrawMethod] = useState("bank_transfer");
  const [withdrawReceiver, setWithdrawReceiver] = useState("");
  const [receiverError, setReceiverError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchBalance = () =>
    getBalance()
      .then((res) => {
        setBalance(res.data.balance);
        setLockedFunds(res.data.lockedFunds ?? null);
        setAvailableBalance(res.data.availableBalance ?? null);
      })
      .catch((err) => {
        const msg = getApiErrorMessage(err, "Could not load balance.");
        toast.error(msg);
      });

  const fetchTransactions = () =>
    getTransactionHistory()
      .then((res) => setTransactions(res.data.transactions))
      .catch(() => {})
      .finally(() => setTxLoading(false));

  useEffect(() => {
    Promise.all([fetchBalance(), fetchTransactions()])
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const validateReceiver = (value: string, method: string): string => {
    const trimmed = value.trim();
    if (!trimmed) return "Receiver details are required.";

    if (method === "wallet") {
      const walletRegex = /^(01)[0-2,5]{1}[0-9]{8}$/;
      if (!walletRegex.test(trimmed)) {
        return "Invalid wallet number. Must be 11 digits starting with 01 (e.g. 01012345678).";
      }
    } else {
      const digitsOnly = trimmed.replace(/\D/g, "");
      if (digitsOnly.length < 10) {
        return "Account number must be at least 10 digits.";
      }
    }
    return "";
  };

  const handleReceiverChange = (value: string) => {
    setWithdrawReceiver(value);
    setReceiverError(validateReceiver(value, withdrawMethod));
  };

  const handleMethodChange = (method: string) => {
    setWithdrawMethod(method);
    setReceiverError(validateReceiver(withdrawReceiver, method));
  };

  const handleWithdraw = async () => {
    const amountNum = parseFloat(withdrawAmount);
    if (!Number.isFinite(amountNum) || amountNum <= 0) {
      toast.error("Enter a valid positive amount.");
      return;
    }

    if (availableBalance !== null && amountNum > parseFloat(availableBalance)) {
      toast.error("Amount exceeds your available balance.");
      return;
    }

    const err = validateReceiver(withdrawReceiver, withdrawMethod);
    if (err) {
      setReceiverError(err);
      toast.error(err);
      return;
    }

    try {
      setSubmitting(true);
      await requestWithdrawal(amountNum, withdrawMethod, withdrawReceiver.trim());
      toast.success("Withdrawal submitted successfully!");
      setShowModal(false);
      setWithdrawAmount("");
      setWithdrawReceiver("");

      await Promise.all([fetchBalance(), fetchTransactions()]);
    } catch (err) {
      toast.error(getApiErrorMessage(err, "Withdrawal failed."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Wallet</h1>
            <p className="text-sm text-gray-500 mb-6">Manage your earnings and withdrawals.</p>

            {loading ? (
              <div className="flex justify-center py-10">
                <div className="w-8 h-8 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="space-y-6">
                <div className="rounded-2xl bg-gradient-to-br from-dark-knight to-slate-700 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-wide">Total Balance</p>
                  <p className="mt-2 text-4xl font-extrabold">
                    {balance !== null ? `${parseFloat(balance).toLocaleString("en-GB")} EGP` : "—"}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-white/70">Available for Withdrawal</p>
                      <p className="text-lg font-bold text-emerald-300">
                        {availableBalance !== null
                          ? `${parseFloat(availableBalance).toLocaleString("en-GB")} EGP`
                          : "—"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-white/70">Locked for Upcoming Rentals</p>
                      <p className="text-sm font-semibold text-white/50">
                        {lockedFunds !== null
                          ? `${parseFloat(lockedFunds).toLocaleString("en-GB")} EGP`
                          : "—"}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  disabled={availableBalance !== null && parseFloat(availableBalance) <= 0}
                  className="w-full bg-dark-knight text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50"
                >
                  Withdraw
                </button>
              </div>
            )}
          </div>

          {/* Transaction History */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Transaction History</h2>
            {txLoading ? (
              <div className="flex justify-center py-6">
                <div className="w-6 h-6 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
              </div>
            ) : transactions.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-6">No transactions yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 text-xs uppercase tracking-wide border-b border-gray-100">
                      <th className="pb-2 pr-4 font-semibold">Date</th>
                      <th className="pb-2 pr-4 font-semibold">Type</th>
                      <th className="pb-2 font-semibold text-right">Amount</th>
                      <th className="pb-2 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {transactions.map((tx) => (
                      <tr key={tx.payment_id} className="hover:bg-gray-50/50">
                        <td className="py-3 pr-4 text-gray-500 whitespace-nowrap">
                          {new Date(tx.created_at).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-3 pr-4">
                          <span
                            className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full ${
                              tx.payment_type === "rent"
                                ? "bg-green-100 text-green-700"
                                : tx.payment_type === "withdraw"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {tx.payment_type === "rent"
                              ? "Rent"
                              : tx.payment_type === "withdraw"
                                ? "Withdrawal"
                                : "Refund"}
                          </span>
                        </td>
                        <td className="py-3 text-right font-semibold tabular-nums whitespace-nowrap">
                          {parseFloat(tx.value).toLocaleString("en-GB")} EGP
                        </td>
                        <td className="py-3 text-right whitespace-nowrap">
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                              tx.status === "succeeded"
                                ? "bg-green-100 text-green-700"
                                : tx.status === "pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-600"
                            }`}
                          >
                            {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Withdrawal Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Withdraw Funds</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Available: {availableBalance !== null ? `${parseFloat(availableBalance).toLocaleString("en-GB")} EGP` : "—"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Amount (EGP)
              </label>
              <input
                type="number"
                min="1"
                step="0.01"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                placeholder="e.g. 500"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
              />
              <p className="mt-1 text-xs text-gray-400">
                Max: {availableBalance !== null ? `${parseFloat(availableBalance).toLocaleString("en-GB")} EGP` : "—"}
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Method</label>
              <select
                value={withdrawMethod}
                onChange={(e) => handleMethodChange(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
              >
                <option value="bank_transfer">Bank Transfer</option>
                <option value="card">Card</option>
                <option value="wallet">Mobile Wallet</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Receiver Details
              </label>
              <textarea
                value={withdrawReceiver}
                onChange={(e) => handleReceiverChange(e.target.value)}
                placeholder={
                  withdrawMethod === "wallet"
                    ? "Phone number (e.g. 01012345678)"
                    : "Bank account number (min 10 digits)"
                }
                rows={3}
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none transition resize-none ${
                  receiverError
                    ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-200 focus:border-dark-knight focus:ring-1 focus:ring-dark-knight"
                }`}
              />
              {receiverError && <p className="mt-1 text-xs text-red-500">{receiverError}</p>}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleWithdraw}
                disabled={submitting || !!receiverError}
                className="flex-1 bg-dark-knight text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50"
              >
                {submitting ? "Processing…" : "Confirm Withdrawal"}
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-6 py-3 border border-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
````

## File: src/hooks/useAuthGuard.ts
````typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { isAuthExpired } from "@/utils/authStorage";

export const useAuthGuard = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated && isAuthExpired()) {
      logout();
    }
  }, [location.pathname]);
};
````

## File: src/hooks/useFavIds.ts
````typescript
import { useEffect, useState } from "react";
import { getFavorites } from "@/services/favoriteService";
import { useAuth }      from "@/context/AuthContext";

/**
 * Fetches the user's saved property IDs once and exposes them as a
 * mutable Set so pages can update the set on every heart toggle —
 * keeping all cards for the same property in sync without a re-fetch.
 */
export function useFavIds(): [Set<number>, React.Dispatch<React.SetStateAction<Set<number>>>] {
  const { isAuthenticated } = useAuth();
  const [favIds, setFavIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!isAuthenticated) { setFavIds(new Set()); return; }

    getFavorites()
      .then((res) => {
        const list: any[] = res.data.favorites ?? [];
        setFavIds(new Set(list.map((p) => Number(p.property_id))));
      })
      .catch(() => setFavIds(new Set()));
  }, [isAuthenticated]);

  return [favIds, setFavIds];
}
````

## File: src/index.css
````css
@import "tailwindcss";

@theme {
  --color-dark-knight: #0F172A;
  --color-dark-yellow: #D4AF3733;
}

/* ─── Toast slide-up animation ──────────────────────────────────────────────── */
@keyframes toast-in {
  from { opacity: 0; transform: translateY(10px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
}
.animate-toast-in {
  animation: toast-in 0.2s ease-out both;
}

/* ─── Skeleton shimmer animation ─────────────────────────────────────────────── */
@keyframes shimmer {
  100% { transform: translateX(200%); }
}
````

## File: src/main.tsx
````typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "leaflet/dist/leaflet.css";          
import "@/utils/fixLeafletIcon";            
import "react-day-picker/style.css";        

import App from "./App";
import { ToastProvider } from "@/context/ToastContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>
);
````

## File: src/routes/ProtectedRoute.tsx
````typescript
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;

  return children;
};

export default ProtectedRoute;
````

## File: src/services/aiService.ts
````typescript
import type { Property } from "@/types";
import { resolveImageUrl } from "@/services/propertyService";

// ─── Session Management ──────────────────────────────────────────────────────
const SESSION_KEY = "aqar_ai_session_id";
let memorySessionId: string | null = null;

const generateId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export const getAiSessionId = (): string => {
  if (memorySessionId) return memorySessionId;

  const stored = localStorage.getItem(SESSION_KEY);
  if (stored) {
    memorySessionId = stored;
    return stored;
  }

  const next = generateId();
  memorySessionId = next;
  localStorage.setItem(SESSION_KEY, next);
  return next;
};

export const resetAiSessionId = (): string => {
  const next = generateId();
  memorySessionId = next;
  localStorage.setItem(SESSION_KEY, next);
  return next;
};

// ─── Configuration ───────────────────────────────────────────────────────────
const AI_REQUEST_TIMEOUT_MS = 90_000;

const env = import.meta.env as Record<string, string | undefined>;
export const AI_BASE_URL = (
  env.VITE_AI_API_URL ??
  env.REACT_APP_AI_API_URL ??
  "https://web-production-c0669.up.railway.app/api/v1"
).replace(/\/$/, "");

// ─── Warm-up ping (wakes Railway from cold start) ────────────────────────────
const PING_TIMEOUT_MS = 5_000;

export const pingAiService = async (): Promise<void> => {
  const base = AI_BASE_URL.replace(/\/api\/v1$/, "");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PING_TIMEOUT_MS);
  try {
    await fetch(`${base}/health`, {
      method: "GET",
      signal: controller.signal,
    });
  } catch {
    // Silently ignore — this is just a warm-up
  } finally {
    clearTimeout(timer);
  }
};

// ─── HTTP helper with timeout + retry ────────────────────────────────────────
const isRetryableStatus = (status: number) =>
  status === 502 || status === 503;

const postAi = async (path: string, body: object, attempt: number = 1): Promise<any> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), AI_REQUEST_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(`${AI_BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (err: unknown) {
    clearTimeout(timer);

    if (err instanceof DOMException && err.name === "AbortError") {
      if (attempt < 2) {
        return postAi(path, body, attempt + 1);
      }
      throw new Error("The AI service is taking longer than expected. Please try again.");
    }

    if (attempt < 2) {
      return postAi(path, body, attempt + 1);
    }
    throw new Error("Unable to contact AI service. Check your network connection.");
  }

  clearTimeout(timer);

  if (!response.ok && isRetryableStatus(response.status) && attempt < 2) {
    return postAi(path, body, attempt + 1);
  }

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMsg =
      data?.detail?.[0]?.msg ??
      data?.message ??
      `AI Service Error (${response.status})`;
    throw new Error(errorMsg);
  }

  return data;
};

// ─── Chat endpoint ───────────────────────────────────────────────────────────
export const sendAiChatMessage = async (sessionId: string, message: string) => {
  const data = await postAi("/chat", { message, session_id: sessionId });

  return {
    answer: data?.answer ?? data?.reply ?? "I could not read the assistant response.",
    reply: data?.reply,
    properties: data?.properties ?? [],
  };
};

// ─── Search endpoint ─────────────────────────────────────────────────────────
const mapAiProperty = (prop: any): Property => ({
  propertyId: prop.id ?? prop.property_id,
  ownerId: prop.owner_id ?? "",
  propertyName: prop.title ?? prop.property_name ?? "",
  propertyDesc: prop.description ?? prop.property_desc ?? "",
  location: prop.location ?? "",
  pricePerDay: prop.price_per_day ?? (prop.price ? prop.price / 30 : 0),
  priceValue: prop.price_value ?? prop.price ?? 0,
  pricingUnit: prop.pricing_unit ?? "MONTH",
  size: String(prop.size ?? ""),
  bedroomsNumber: prop.bedrooms ?? prop.bedrooms_no ?? 0,
  bedsNumber: prop.beds_no ?? prop.bedrooms ?? 1,
  bathroomsNumber: prop.bathrooms ?? prop.bathrooms_no ?? 0,
  images: Array.isArray(prop.images)
    ? prop.images.map(resolveImageUrl)
    : prop.image_url
      ? [resolveImageUrl(prop.image_url)]
      : [],
  ownershipProof: [],
  isAvailable: prop.is_available ?? true,
  isVerified: prop.is_verified ?? true,
  isVisible: prop.is_visible ?? true,
  is_furnished: prop.is_furnished ?? false,
  isSponsored: prop.is_sponsored ?? false,
  property_type: prop.property_type ?? "for_rent",
  listingStatus: prop.listing_status ?? "active",
  listingExpiry: prop.listing_expiry ?? null,
  rate: prop.rate ?? null,
  latitude: prop.latitude,
  longitude: prop.longitude,
  owner_first_name: prop.owner_first_name,
  owner_second_name: prop.owner_second_name,
  owner_email: prop.owner_email,
});

export const searchAiProperties = async (query: string): Promise<Property[]> => {
  const data = await postAi("/search", { query });
  return (data?.properties || []).map(mapAiProperty);
};

// ─── Recommendations ─────────────────────────────────────────────────────────
export interface RecommendPayload {
  property_description: string;
  session_id: string;
  property_ids: number[];
  limit: number;
}

export const recommendSimilarProperties = async (payload: RecommendPayload) => {
  const data = await postAi("/recommend/similar", payload);
  return data;
};
````

## File: src/services/authService.ts
````typescript
import axios from "@/api/axiosInstance";

export const login = (data: { email: string; password: string }) =>
  axios.post("/auth/login", data);

export const signup = (data: {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => axios.post("/auth/signup", data);

// Marks user offline on the server — call before clearing local state
export const logout = () => axios.post("/auth/logout");

export const requestOtp = (email: string | null) =>
  axios.post("/auth/request-otp", { email });

export const verifyOtp = (email: string | null, otp: string) =>
  axios.post("/auth/verify-otp", { email, otp });

export const requestPasswordReset = (email: string) =>
  axios.post("/auth/request-reset", { email });

export const verifyResetToken = (token: string) =>
  axios.get(`/auth/verify-reset/${token}`);

export const resetPassword = (token: string | undefined, password: string) =>
  axios.post(`/auth/reset-password/${token}`, { newPassword: password });

export const getProfile = () => axios.get("/auth/profile");

export const updateProfile = (data: {
  firstName?: string;
  secondName?: string;
  email?: string;
  password?: string;
}) => axios.put("/auth/profile", data);
````

## File: src/services/chatService.ts
````typescript
import axios from "@/api/axiosInstance";

export interface InboxChat {
  chat_id: string;
  property_id?: number | string | null;
  property_name: string;
  property_images: string[] | string | null;
  partner_name: string;
  partner_id: string;
  last_message: string | null;
  last_message_time: string | null;
  unread_count: number;
  is_property_deleted?: boolean;
}

export interface ChatMessage {
  message_id: string;
  sender_id:  string;
  content:    string;
  is_read:    boolean | number;
  created_at: string;
}

export interface SendMessageData {
  chat_id: string;
  sender_id: string;
  property_id?: number | string;
  content: string;
  created_at: string | Date;
}

export interface SocketChatMessage {
  chat_id: string;
  sender_id: string;
  property_id?: number | string;
  content: string;
  created_at: string | Date;
}

export interface StoredChatContext {
  chat_id: string;
  property_id?: number | string | null;
  property_name?: string;
  property_img?: string | null;
  partner_id?: string;
  partner_name?: string;
  updated_at: number;
}

const CHAT_CONTEXT_STORAGE_KEY = "aqar_chat_context";
const MAX_STORED_CHAT_CONTEXTS = 50;

const normalizePropertyId = (value: number | string | null | undefined) => {
  if (value === undefined || value === null || value === "") return undefined;
  const asNumber = Number(value);
  return Number.isFinite(asNumber) ? asNumber : value;
};

const mergeStoredText = (
  next: string | null | undefined,
  previous: string | null | undefined,
): string | undefined => {
  if (typeof next === "string") return next.trim() ? next : previous ?? undefined;
  if (typeof previous === "string") return previous;
  return undefined;
};

const readStoredChatContexts = (): Record<string, StoredChatContext> => {
  try {
    const raw = localStorage.getItem(CHAT_CONTEXT_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, StoredChatContext>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
};

const writeStoredChatContexts = (contexts: Record<string, StoredChatContext>) => {
  const trimmed = Object.values(contexts)
    .sort((left, right) => right.updated_at - left.updated_at)
    .slice(0, MAX_STORED_CHAT_CONTEXTS)
    .reduce<Record<string, StoredChatContext>>((next, context) => {
      next[context.chat_id] = context;
      return next;
    }, {});

  localStorage.setItem(CHAT_CONTEXT_STORAGE_KEY, JSON.stringify(trimmed));
};

export const rememberChatContext = (
  chatId: string,
  context: Partial<Omit<StoredChatContext, "chat_id" | "updated_at">>,
) => {
  if (!chatId) return;

  const existing = readStoredChatContexts();
  const previous = existing[chatId];

  existing[chatId] = {
    chat_id: chatId,
    property_id: normalizePropertyId(context.property_id ?? previous?.property_id),
    property_name: mergeStoredText(context.property_name, previous?.property_name),
    property_img: context.property_img ?? previous?.property_img ?? null,
    partner_id: mergeStoredText(context.partner_id, previous?.partner_id),
    partner_name: mergeStoredText(context.partner_name, previous?.partner_name),
    updated_at: Date.now(),
  };

  writeStoredChatContexts(existing);
};

export const getRememberedChatContext = (chatId: string) =>
  readStoredChatContexts()[chatId] ?? null;

export const findRememberedChatContext = (
  propertyId: number | string,
  partnerId: string,
) => {
  if (!partnerId) return null;

  const normalizedPropertyId = String(normalizePropertyId(propertyId));

  return Object.values(readStoredChatContexts()).find(
    (context) =>
      String(normalizePropertyId(context.property_id)) === normalizedPropertyId &&
      context.partner_id === partnerId,
  ) ?? null;
};

export const hydrateInboxChat = (chat: InboxChat): InboxChat => {
  const remembered = getRememberedChatContext(chat.chat_id);

  return {
    ...chat,
    property_id: normalizePropertyId(chat.property_id ?? remembered?.property_id) ?? null,
  };
};

export const getInbox = () =>
  axios.get<{ status: string; data: InboxChat[] }>("/chat/inbox");

export const getInboxChatById = async (chatId: string) => {
  const res = await getInbox();
  const chats = (res.data.data ?? []).map(hydrateInboxChat);
  return chats.find((chat) => chat.chat_id === chatId) ?? null;
};

export const getChatHistory = (chat_id: string) =>
  axios.get<{ status: string; data: ChatMessage[] }>(`/chat/history/${chat_id}`);

export const sendMessage = (
  receiver_id: string,
  property_id: number | string,
  content: string,
) =>
  axios.post<{ status: string; data: SendMessageData }>("/chat/send", {
    receiver_id,
    property_id,
    content,
  });

export const markChatAsRead = (chat_id: string) =>
  axios.patch(`/chat/read/${chat_id}`);
````

## File: src/services/favoriteService.ts
````typescript
import axios from "@/api/axiosInstance";

export const getFavorites = () =>
  axios.get("/favorites");

export const addToFavorites = (apartmentId: number) =>
  axios.post(`/favorites/${apartmentId}`);

export const removeFromFavorites = (apartmentId: number) =>
  axios.delete(`/favorites/${apartmentId}`);

export const compareFavorites = () =>
  axios.post("/favorites/compare");
````

## File: src/services/invoiceService.ts
````typescript
import axios from "@/api/axiosInstance";
import type { Invoice, InvoiceStats } from "@/types";

export const getRenterInvoices = () =>
  axios.get<{ success: boolean; data: Invoice[] }>("/api/invoices/renter");

export const getOwnerInvoices = () =>
  axios.get<{ success: boolean; data: Invoice[] }>("/api/invoices/owner");

export const getInvoiceStats = () =>
  axios.get<{ success: boolean; data: InvoiceStats }>("/api/invoices/stats");
````

## File: src/services/leaseService.ts
````typescript
import axios from "@/api/axiosInstance";

export const getLeasesAsRenter = () =>
  axios.get("/leases/renter");

export const getLeasesAsOwner = () =>
  axios.get("/leases/owner");

export const getLeaseById = (leaseId: string) =>
  axios.get(`/leases/${leaseId}`);
````

## File: src/services/listingSubscriptionService.ts
````typescript
import axiosInstance from "@/api/axiosInstance";
import type { Property, SellingPlanMonths } from "@/types";

export type ListingSubscriptionPaymentState = "UNPAID" | "PENDING" | "PAID";

export interface ListingSubscriptionRecord {
  propertyId: number;
  subscriptionId: string;
  propertyName: string;
  planMonths: SellingPlanMonths;
  amount: number;
  paymentState: ListingSubscriptionPaymentState;
  createdAt: number;
  updatedAt: number;
}

const STORAGE_KEY = "aqar_listing_subscriptions";

export const SELLING_PLAN_OPTIONS: Array<{
  months: SellingPlanMonths;
  label: string;
  amount: number;
  description: string;
}> = [
  { months: 1, label: "1 Month", amount: 120, description: "Short launch for testing buyer interest." },
  { months: 3, label: "3 Months", amount: 360, description: "Balanced visibility for active selling." },
  { months: 6, label: "6 Months", amount: 600, description: "Longest campaign for maximum exposure." },
];

const isValidPlanMonths = (value: number): value is SellingPlanMonths =>
  SELLING_PLAN_OPTIONS.some((plan) => plan.months === value);

export const getSellingPlanPrice = (months: SellingPlanMonths) =>
  SELLING_PLAN_OPTIONS.find((plan) => plan.months === months)?.amount ?? 0;

export const formatSellingPlanLabel = (months: SellingPlanMonths) =>
  SELLING_PLAN_OPTIONS.find((plan) => plan.months === months)?.label ?? `${months} Months`;

const readStoredSubscriptions = (): Record<string, ListingSubscriptionRecord> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, ListingSubscriptionRecord>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
};

const writeStoredSubscriptions = (records: Record<string, ListingSubscriptionRecord>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
};

export const saveListingSubscription = (
  record: Omit<ListingSubscriptionRecord, "createdAt" | "updatedAt">,
) => {
  const existing = readStoredSubscriptions();
  const previous = existing[String(record.propertyId)];

  existing[String(record.propertyId)] = {
    ...record,
    createdAt: previous?.createdAt ?? Date.now(),
    updatedAt: Date.now(),
  };

  writeStoredSubscriptions(existing);
};

export const getStoredListingSubscription = (propertyId: number) =>
  readStoredSubscriptions()[String(propertyId)] ?? null;

export const updateStoredListingSubscriptionState = (
  propertyId: number,
  paymentState: ListingSubscriptionPaymentState,
) => {
  const existing = readStoredSubscriptions();
  const current = existing[String(propertyId)];
  if (!current) return;

  existing[String(propertyId)] = {
    ...current,
    paymentState,
    updatedAt: Date.now(),
  };

  writeStoredSubscriptions(existing);
};

export const syncStoredListingSubscriptionWithProperty = (property: Property) => {
  if (property.property_type !== "for_sale") return null;

  const current = getStoredListingSubscription(property.propertyId);
  if (!current) return null;

  const hasActiveListing =
    property.listingStatus === "active"
    || property.listingStatus === "under_negotiation"
    || property.listingStatus === "sold"
    || property.listingStatus === "expired";

  if (hasActiveListing && current.paymentState !== "PAID") {
    updateStoredListingSubscriptionState(property.propertyId, "PAID");
    return getStoredListingSubscription(property.propertyId);
  }

  return current;
};

export const getStoredSellingPlanMonths = (propertyId: number) =>
  getStoredListingSubscription(propertyId)?.planMonths ?? null;

export const normalizeStoredSellingPlan = (
  value: number | string | null | undefined,
): SellingPlanMonths | null => {
  const asNumber = Number(value);
  return isValidPlanMonths(asNumber) ? asNumber : null;
};

export const createSubscriptionForProperty = async (
  propertyId: number,
  planMonths: SellingPlanMonths,
): Promise<ListingSubscriptionRecord | null> => {
  try {
    const res = await axiosInstance.post(`/subscription/${propertyId}`, { planMonths });
    const data = res.data;
    const record: ListingSubscriptionRecord = {
      propertyId,
      subscriptionId: data.subscription_id,
      propertyName: "",
      planMonths,
      amount: Number(data.amount),
      paymentState: "UNPAID",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    saveListingSubscription(record);
    return record;
  } catch {
    return null;
  }
};

export const fetchSubscriptionFromApi = async (propertyId: number): Promise<ListingSubscriptionRecord | null> => {
  try {
    const res = await axiosInstance.get(`/subscription/${propertyId}`);
    const data = res.data;
    const months = normalizeStoredSellingPlan(data.plan_months);
    if (!months) return null;

    const record: ListingSubscriptionRecord = {
      propertyId,
      subscriptionId: data.subscription_id,
      propertyName: "",
      planMonths: months,
      amount: Number(data.amount),
      paymentState: data.status === "PAID" ? "PAID" : data.status === "PENDING" ? "PENDING" : "UNPAID",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    saveListingSubscription(record);
    return record;
  } catch {
    return null;
  }
};
````

## File: src/services/notificationService.ts
````typescript
import axios from "@/api/axiosInstance";

export interface NotificationRecord {
  notification_id: string | number;
  sender?: string;
  receiver?: string;
  event_type?: string;
  notification_title?: string;
  notification_body?: string;
  metadata?: Record<string, unknown> | string | null;
  viewed?: boolean | number | null;
  created_at?: string;
  type?: string;
  title?: string;
  body?: string;
}

export interface NotificationsListData {
  notifications?: NotificationRecord[];
  unreadCount?: number;
}

export const getAllNotifications = () =>
  axios.get<{ status: string; data: NotificationsListData }>("/api/notification");

export const getNotificationById = (id: string) =>
  axios.get<{ status: string; data: NotificationRecord }>(`/api/notification/${id}`);

export const markNotificationRead = (id: string) =>
  axios.put<{ status: string; data?: NotificationRecord }>(`/api/notification/${id}`);
````

## File: src/services/paymentService.ts
````typescript
import axios from "@/api/axiosInstance";

const PENDING_RENT_PAYMENT_KEY = "pending_rent_payment";
const PENDING_SUBSCRIPTION_PAYMENT_KEY = "pending_subscription_payment";
const PENDING_INVOICE_PAYMENT_KEY = "pending_invoice_payment";
const LOCAL_PAYMENT_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0"]);

export type PendingRentPayment = {
  requestId: string;
  createdAt: number;
};

export type PendingSubscriptionPayment = {
  propertyId: number;
  subscriptionId: string;
  createdAt: number;
};

export type PendingInvoicePayment = {
  invoiceId: string;
  createdAt: number;
};

export const getPaymentLink = (requestId: string, redirectUrl: string) =>
  axios.post("/api/payment/", {
    request_id: requestId,
    redirect: redirectUrl,
  });

export const getSubscriptionPaymentLink = (
  subscriptionId: string,
  redirectUrl: string,
) =>
  axios.post("/api/payment/", {
    subscription_id: subscriptionId,
    redirect: redirectUrl,
  });

export const getInvoicePaymentLink = (
  invoiceId: string,
  redirectUrl: string,
) =>
  axios.post("/api/payment/", {
    invoice_id: invoiceId,
    redirect: redirectUrl,
  });

const isLocalHost = (hostname: string) =>
  LOCAL_PAYMENT_HOSTS.has(hostname) || hostname.endsWith(".local");

const resolvePaymentAppUrl = () => {
  const currentAppUrl = new URL(window.location.origin);
  if (!isLocalHost(currentAppUrl.hostname)) {
    return currentAppUrl;
  }

  const configuredUrl = import.meta.env.VITE_APP_URL?.trim();
  if (!configuredUrl) {
    throw new Error(
      "Kashier redirect needs a public frontend URL. Set VITE_APP_URL to the deployed app URL or a tunnel URL that opens /payment/success.",
    );
  }

  const resolvedUrl = new URL(configuredUrl);
  if (isLocalHost(resolvedUrl.hostname)) {
    throw new Error(
      "Kashier redirect cannot point back to localhost. Set VITE_APP_URL to a public frontend URL or tunnel that serves /payment/success.",
    );
  }

  return resolvedUrl;
};

export const buildRentPaymentSuccessUrl = (requestId: string) => {
  const successUrl = new URL("/payment/success", resolvePaymentAppUrl());
  successUrl.searchParams.set("request_id", requestId);
  successUrl.searchParams.set("source", "rent_request");
  return successUrl.toString();
};

export const buildSubscriptionPaymentSuccessUrl = (
  propertyId: number | string,
  subscriptionId: string,
) => {
  const successUrl = new URL("/payment/subscription/success", resolvePaymentAppUrl());
  successUrl.searchParams.set("property_id", String(propertyId));
  successUrl.searchParams.set("subscription_id", subscriptionId);
  successUrl.searchParams.set("source", "sale_subscription");
  return successUrl.toString();
};

export const buildInvoicePaymentSuccessUrl = (invoiceId: string) => {
  const successUrl = new URL("/payment/invoice/success", resolvePaymentAppUrl());
  successUrl.searchParams.set("invoice_id", invoiceId);
  successUrl.searchParams.set("source", "invoice");
  return successUrl.toString();
};

export const savePendingRentPayment = (requestId: string) => {
  const payload: PendingRentPayment = {
    requestId,
    createdAt: Date.now(),
  };

  sessionStorage.setItem(PENDING_RENT_PAYMENT_KEY, JSON.stringify(payload));
};

export const loadPendingRentPayment = (): PendingRentPayment | null => {
  const raw = sessionStorage.getItem(PENDING_RENT_PAYMENT_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as PendingRentPayment;
    if (!parsed.requestId) return null;
    return parsed;
  } catch {
    return null;
  }
};

export const clearPendingRentPayment = () => {
  sessionStorage.removeItem(PENDING_RENT_PAYMENT_KEY);
};

export const savePendingSubscriptionPayment = (
  propertyId: number,
  subscriptionId: string,
) => {
  const payload: PendingSubscriptionPayment = {
    propertyId,
    subscriptionId,
    createdAt: Date.now(),
  };

  sessionStorage.setItem(PENDING_SUBSCRIPTION_PAYMENT_KEY, JSON.stringify(payload));
};

export const loadPendingSubscriptionPayment = (): PendingSubscriptionPayment | null => {
  const raw = sessionStorage.getItem(PENDING_SUBSCRIPTION_PAYMENT_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as PendingSubscriptionPayment;
    if (!parsed.propertyId || !parsed.subscriptionId) return null;
    return parsed;
  } catch {
    return null;
  }
};

export const clearPendingSubscriptionPayment = () => {
  sessionStorage.removeItem(PENDING_SUBSCRIPTION_PAYMENT_KEY);
};

export const savePendingInvoicePayment = (invoiceId: string) => {
  const payload: PendingInvoicePayment = {
    invoiceId,
    createdAt: Date.now(),
  };

  sessionStorage.setItem(PENDING_INVOICE_PAYMENT_KEY, JSON.stringify(payload));
};

export const loadPendingInvoicePayment = (): PendingInvoicePayment | null => {
  const raw = sessionStorage.getItem(PENDING_INVOICE_PAYMENT_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as PendingInvoicePayment;
    if (!parsed.invoiceId) return null;
    return parsed;
  } catch {
    return null;
  }
};

export const clearPendingInvoicePayment = () => {
  sessionStorage.removeItem(PENDING_INVOICE_PAYMENT_KEY);
};

// ─── Wallet / Balance ──────────────────────────────────────────────────────────

export interface BalanceResponse {
  success: boolean;
  balance: string;
  lockedFunds?: string;
  availableBalance?: string;
  currency: string;
}

export interface Transaction {
  payment_id:     string;
  property_id:    number | null;
  payment_type:   "rent" | "withdraw" | "refund";
  value:          string;
  payment_method: string;
  status:         "pending" | "succeeded" | "failed" | "canceled";
  transfer_id:    string | null;
  created_at:     string;
}

export const getBalance = () =>
  axios.get<BalanceResponse>("/api/balance");

export const getTransactionHistory = () =>
  axios.get<{ success: boolean; transactions: Transaction[] }>("/api/payment/transactions");

export const requestWithdrawal = (amount: number, method: string, receiverData: string) => {
  return axios.post("/api/payment/request-withdrawal", { amount, method, receiverData, property_id: null });
}

export const requestRefund = (requestId: string, reason?: string) =>
  axios.post("/api/payment/request-refund", { request_id: requestId, reason });

export const cancelRefundRequest = (requestId: string) =>
  axios.post("/api/payment/cancel-refund-request", { request_id: requestId });
````

## File: src/services/propertyService.ts
````typescript
import axios, { BASE_URL } from "@/api/axiosInstance";
import type { PropertyFormData } from "@/types";

export const getBookedDates = (propertyId: number) =>
  axios.get(`/properties/${propertyId}/booked-dates`);

export const resolveImageUrl = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${BASE_URL}/${path.replace(/^\//, "").replace(/\\/g, "/")}`;
};

export const addProperty = async (data: PropertyFormData) => {
  const fd = new FormData();

  fd.append("propertyName",    data.propertyName);
  fd.append("propertyDesc",    data.propertyDesc);
  fd.append("location",        data.location);
  fd.append("property_type",   data.property_type);
  fd.append("is_furnished",    data.is_furnished ? "1" : "0");
  fd.append("size",            String(data.size));
  fd.append("bedroomsNumber",  String(data.bedroomsNumber));
  fd.append("bedsNumber",      String(data.bedsNumber));
  fd.append("bathroomsNumber", String(data.bathroomsNumber));

  if (data.property_type === "for_sale") {
    fd.append("pricingUnit", "DAY");
    fd.append("priceValue",  String(data.price ?? 0));
    fd.append("sellingPlan", String(data.sellingPlan ?? 1));
  } else {
    fd.append("pricingUnit", data.pricingUnit ?? "DAY");
    fd.append("priceValue",
      data.pricingUnit === "MONTH"
        ? String(data.priceMonthly ?? 0)
        : String(data.pricePerDay  ?? 0)
    );
  }

  if (data.latitude)  fd.append("latitude",  String(data.latitude));
  if (data.longitude) fd.append("longitude", String(data.longitude));

  data.images.forEach((f)         => fd.append("images",         f));
  data.ownershipProof.forEach((f) => fd.append("ownershipProof", f));

  return axios.post("/property", fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getProperties = (filters?: {
  location?:  string;
  minPrice?:  number;
  maxPrice?:  number;
  minSize?:   number;
  maxSize?:   number;
  bedrooms?:  number;
  bathrooms?: number;
}) => axios.get("/property", { params: filters });

export const getPropertyById = (id: string) =>
  axios.get(`/property/${id}`);

export const getPropertyVerificationStatus = (id: string | number) =>
  axios.get<{ is_verified: boolean }>(`/property/verfication/status/${id}`);

export const getMyProperties = () =>
  axios.get("/property/my-properties");

export const editPropertyInfo = (id: string, data: {
  propertyName?:    string;
  propertyDesc?:    string;
  location?:        string;
  priceValue?:      number;
  size?:            number;
  bedroomsNumber?:  number;
  bedsNumber?:      number;
  bathroomsNumber?: number;
  latitude?:        number;
  longitude?:       number;
}) => axios.put(`/property/${id}`, data);

// Simple file-only upload — backend replaces all old images with whatever is sent.
// The frontend is responsible for including kept images (fetched as blobs) alongside
// new files so the final set = kept + new.
export const editPropertyImages = (id: string, data: {
  images?:         File[];
  ownershipProof?: File[];
}) => {
  const fd = new FormData();
  data.images?.forEach((f)         => fd.append("images",         f));
  data.ownershipProof?.forEach((f) => fd.append("ownershipProof", f));
  return axios.put(`/property/${id}/images`, fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteProperty = (id: string) =>
  axios.delete(`/property/${id}`);
````

## File: src/services/rentRequestService.ts
````typescript
import axios from "@/api/axiosInstance";

export type RentingType = "DAY" | "MONTH";

export type CreateRentRequestData = {
  property_id: number | string;
  check_in_date: string;   // "YYYY-MM-DD"
  check_out_date: string;  // "YYYY-MM-DD"
  renting_type: RentingType;
};

export const getRentRequests = () =>
  axios.get("/rent-requests");

export const getRentRequestById = (id: string) =>
  axios.get(`/rent-requests/${id}`);

export const createRentRequest = (data: CreateRentRequestData) =>
  axios.post("/rent-requests", data);

export const acceptRentRequest = (id: string) =>
  axios.post(`/rent-requests/${id}/accept`);

export const rejectRentRequest = (id: string) =>
  axios.post(`/rent-requests/${id}/reject`);

export const cancelRentRequest = (id: string) =>
  axios.post(`/rent-requests/${id}/cancel`);
````

## File: src/services/reviewService.ts
````typescript
import axios from "@/api/axiosInstance";

export interface ReviewRecord {
  review_id: string;
  property_id: number;
  rent_id?: string | null;
  rating: number;
  phrase: string;
  created_at: string;
  first_name?: string;
  second_name?: string;
  email?: string;
}

export interface CreateReviewPayload {
  property_id: number;
  rating: number;
  phrase?: string;
  rent_id?: string;
  lease_id?: string;
}

interface RawReviewRecord {
  review_id?: string | number;
  property_id?: string | number;
  rent_id?: string | null;
  rating?: string | number;
  phrase?: string | null;
  created_at?: string;
  first_name?: string;
  second_name?: string;
  email?: string;
}

const normalizeReview = (review: RawReviewRecord): ReviewRecord => ({
  review_id: String(review.review_id ?? `${review.property_id}-${review.created_at}`),
  property_id: Number(review.property_id) || 0,
  rent_id: review.rent_id ?? null,
  rating: Number(review.rating) || 0,
  phrase: review.phrase ?? "",
  created_at: review.created_at ?? new Date().toISOString(),
  first_name: review.first_name,
  second_name: review.second_name,
  email: review.email,
});

export const getReviews = async (propertyId: number | string) => {
  const res = await axios.get<{ success: boolean; data: RawReviewRecord[] }>("/reviews", {
    params: { property_id: propertyId },
  });

  return (res.data.data ?? []).map(normalizeReview);
};

export const createReview = (payload: CreateReviewPayload) =>
  axios.post<{ success: boolean; msg: string; review_id?: string }>("/review", payload);
````

## File: src/services/saleService.ts
````typescript
import axios from '@/api/axiosInstance';

export const saleService = {
  markAsSold: (property_id: number) =>
    axios.post(`/property/${property_id}/sold`),
};
````

## File: src/services/sponsorshipService.ts
````typescript
import axios from "@/api/axiosInstance";
import type { Property } from "@/types";

export type SponsorshipDuration = 1 | 3 | 6;

export const SPONSORSHIP_PLANS: Array<{
  duration: SponsorshipDuration;
  label: string;
  amount: number;
}> = [
  { duration: 1, label: "1 Month", amount: 250 },
  { duration: 3, label: "3 Months", amount: 700 },
  { duration: 6, label: "6 Months", amount: 1000 },
];

export const sortPropertiesWithLocalSponsorship = (
  properties: Property[],
) => {
  const sponsored: Property[] = [];
  const standard: Property[] = [];

  properties.forEach((property) => {
    if (property.isSponsored === true) {
      sponsored.push(property);
      return;
    }
    standard.push(property);
  });

  return [
    ...sponsored.sort(() => Math.random() - 0.5),
    ...standard,
  ];
};

export const buildSponsorshipPaymentSuccessUrl = (propertyId: number | string) => {
  const successUrl = new URL("/payment/sponsor/success", window.location.origin);
  successUrl.searchParams.set("property_id", String(propertyId));
  successUrl.searchParams.set("source", "sponsorship");
  return successUrl.toString();
};

export const createSponsorshipCheckout = (
  propertyId: number,
  duration: SponsorshipDuration,
  redirectUrl: string,
) =>
  axios.post<{ url: string }>("/api/sponser", {
    property_id: propertyId,
    duration,
    redirect: redirectUrl,
  });
````

## File: src/types/ai.ts
````typescript
export interface AIChatResponse {
  answer?: string;
  reply?: string;
  properties?: AIChatProperty[];
}

export interface AIChatProperty {
  property_id?: number;
  id?: number;
  title?: string;
  property_name?: string;
  description?: string;
  property_desc?: string;
  location?: string;
  price?: number;
  price_value?: number;
  price_per_day?: number;
  size?: number;
  bedrooms?: number;
  bedrooms_no?: number;
  bathrooms?: number;
  bathrooms_no?: number;
  beds_no?: number;
  image_url?: string;
  images?: string[];
  url?: string;
  property_type?: string;
  recommendation_score?: number;
  is_available?: boolean;
  is_verified?: boolean;
  is_visible?: boolean;
  is_furnished?: boolean;
  is_sponsored?: boolean;
  rate?: number;
  latitude?: number;
  longitude?: number;
  pricing_unit?: string;
  listing_status?: string;
  listing_expiry?: string | null;
  owner_id?: string;
  owner_first_name?: string;
  owner_second_name?: string;
  owner_email?: string;
  ownership_proofs?: string[];
  nearby_services?: string[];
}
````

## File: src/types/index.ts
````typescript
// ─── Property ─────────────────────────────────────────────────────────────────
export type PricingUnit   = "DAY" | "MONTH";
export type property_type = "for_sale" | "for_rent";
export type SellingPlanMonths = 1 | 3 | 6;
export type PropertyListingStatus =
  | "inactive"
  | "active"
  | "under_negotiation"
  | "sold"
  | "expired";

export interface Property {
  propertyId:       number;
  ownerId:          string;
  propertyName:     string;
  propertyDesc:     string;
  location:         string;
  latitude?:        number;
  longitude?:       number;
  pricingUnit:      PricingUnit;
  priceValue:       number;   // sale price OR monthly rent
  pricePerDay:      number;   // daily rent
  size:             string;   // normalized to plain number string (e.g. "120")
  bedroomsNumber:   number;
  bedsNumber:       number;
  bathroomsNumber:  number;
  images:           string[];
  ownershipProof:   string[];
  isAvailable:      boolean;
  isVerified:       boolean;
  isVisible?:       boolean;
  is_furnished:     boolean;
  isSponsored?:     boolean;  // backend sets is_sponsored after sponsorship payment webhook
  property_type:    property_type;
  listingStatus:    PropertyListingStatus;
  listingExpiry?:   string | null;
  rate:             number;
  owner_first_name?:  string;
  owner_second_name?: string;
  owner_email?:       string;
}

export interface PropertyFormData {
  property_type:    "for_sale" | "for_rent";
  sellingPlan?:     SellingPlanMonths;
  pricingUnit?:     "DAY" | "MONTH";
  propertyName:     string;
  propertyDesc:     string;
  location:         string;
  latitude?:        number;
  longitude?:       number;
  is_furnished:     boolean;
  bedroomsNumber:   number;
  bathroomsNumber:  number;
  bedsNumber:       number;
  size:             number;
  price?:           number;
  pricePerDay?:     number;
  priceMonthly?:    number;
  images:           File[];
  ownershipProof:   File[];
}

export interface StepProps {
  formData:    PropertyFormData;
  setFormData: React.Dispatch<React.SetStateAction<PropertyFormData>>;
  errors:      Record<string, string>;
}

// ─── Rent Request ─────────────────────────────────────────────────────────────
export type RentRequestState =
  | "PENDING"
  | "ACCEPTED"
  | "REJECTED"
  | "CANCELLED"
  | "PAYMENT_PENDING"
  | "PAID"
  | "REFUNDED"
  | "REFUND_REQUESTED"
  | "REFUND_DENIED";

export interface RentRequest {
  request_id:     string;
  property_id:    number;
  renter_id:      string;
  renting_type:   "DAY" | "MONTH";
  request_state:  RentRequestState;
  total_price:    number;
  check_in_date:  string;
  check_out_date: string;
  created_at:     string;
  property_name?: string;
  owner_id?:      string;
  perspective?:   "SENT" | "RECEIVED";
}

// ─── Invoice ───────────────────────────────────────────────────────────────────
export type InvoiceStatus = "UNPAID" | "PAID" | "OVERDUE" | "VOID";

export interface Invoice {
  invoice_id:       string;
  lease_id:         string;
  renter_id:        string;
  owner_id:         string;
  amount:           number;
  due_date:         string;
  status:           InvoiceStatus;
  kashier_order_id: string | null;
  paid_at:          string | null;
  created_at:       string;
  property_id:      number;
  property_name:    string;
  location:         string;
}

export interface InvoiceStats {
  asRenter: {
    total_invoices:   number;
    unpaid_count:     number;
    overdue_count:    number;
    paid_count:       number;
    total_due:        number;
    next_due_date:    string | null;
  };
  asOwner: {
    total_invoices:     number;
    pending_count:      number;
    paid_count:         number;
    expected_income:    number;
    delinquent_tenants: number;
  };
}

// ─── Lease ────────────────────────────────────────────────────────────────────
export interface Lease {
  lease_id:          string;
  request_id:        string;
  property_id:       number;
  renter_id:         string;
  owner_id:          string;
  renting_type:      "DAY" | "MONTH";
  status:            "UPCOMING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED" | "OVERDUE";
  check_in_date:     string;
  check_out_date:    string;
  next_billing_date: string | null;
  renter_name?:      string;
  // Joined fields (available on detail endpoint)
  property_name?:    string;
  location?:         string;
  images?:           string;
  price_value?:      number;
}

// ─── Notification ─────────────────────────────────────────────────────────────
export interface Notification {
  notification_id:   string;
  sender:            string;
  receiver:          string;
  event_type:        string;   
  notification_title: string;  
  notification_body:  string;  
  metadata:          Record<string, any>;
  viewed:            boolean;
  created_at:        string;
}

// ─── Transaction / Payment Intent ─────────────────────────────────────────────
export type PaymentType = "rent" | "withdraw" | "refund";
export type PaymentStatus = "pending" | "succeeded" | "failed" | "canceled";

export interface Transaction {
  payment_id:     string;
  property_id:    number | null;
  payment_type:   PaymentType;
  value:          string;
  payment_method: string;
  status:         PaymentStatus;
  transfer_id:    string | null;
  created_at:     string;
}

// ─── User Profile ─────────────────────────────────────────────────────────────
export interface UserProfile {
  first_name:  string;
  second_name: string;
  email:       string;
  is_online:   boolean;
  is_verified: boolean;
}
````

## File: src/utils/apiError.ts
````typescript
import axios from "axios";

export const getApiErrorMessage = (
  error: unknown,
  fallback = "Service unavailable. Please try again later.",
) => {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data;

    if (typeof data === "string" && data.trim()) return data;
    if (data && typeof data === "object") {
      const record = data as Record<string, unknown>;
      const message = record.msg ?? record.message ?? record.error;
      if (typeof message === "string" && message.trim()) return message;
    }

    if (error.response?.status === 404) return "Service unavailable or not found.";
    if (error.response?.status && error.response.status >= 500) {
      return "Service unavailable. Please try again later.";
    }
    if (error.message) return error.message;
  }

  if (error instanceof Error && error.message) return error.message;
  return fallback;
};
````

## File: src/utils/authStorage.ts
````typescript
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
````

## File: src/utils/authValidator.ts
````typescript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z]+$/
const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/

export const validateName = (name: string) => {
    return nameRegex.test(name) && (name.length >= 2 && name.length <= 30);
} 

export const validateEmail = (email: string) => {
    return emailRegex.test(email);
} 

export const validatePassword = (password: string) => {
    return passwordRegex.test(password);
}
````

## File: src/utils/fixLeafletIcon.ts
````typescript
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
})
````

## File: src/utils/Icons.tsx
````typescript
// ─── Nav Icons ────────────────────────────────────────────────────────────────

export const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round"/>
  </svg>
);

export const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round"/>
  </svg>
);

export const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round"/>
  </svg>
);

export const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 14a1 1 0 100 2 1 1 0 000-2z" fill="currentColor" stroke="none"/>
    <path d="M2 10h20M6 4l4-1 8 3" strokeLinecap="round"/>
  </svg>
);

export const SignOutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Property Card Icons ──────────────────────────────────────────────────────

export const WhiteHeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="white"
    stroke="white"
    strokeWidth="1.5"
    className="w-9 h-9 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"  // ← من w-7 لـ w-9
  >
    <path d="M12 21C12 21 3 13.5 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-9 13-9 13z"/>
  </svg>
);

export const RedHeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="#ef4444"
    stroke="#ef4444"
    strokeWidth="1.5"
    className="w-9 h-9 drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]"  // ← من w-7 لـ w-9
  >
    <path d="M12 21C12 21 3 13.5 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-9 13-9 13z"/>
  </svg>
);

export const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 shrink-0">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

export const BedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M3 12V7a1 1 0 011-1h16a1 1 0 011 1v5" strokeLinecap="round"/>
    <path d="M3 12h18v5H3z"/>
    <path d="M3 17v2M21 17v2" strokeLinecap="round"/>
    <rect x="7" y="9" width="4" height="3" rx="0.5"/>
    <rect x="13" y="9" width="4" height="3" rx="0.5"/>
  </svg>
);

export const BathIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M4 12h16v3a5 5 0 01-5 5H9a5 5 0 01-5-5v-3z"/>
    <path d="M4 12V6a2 2 0 014 0v1" strokeLinecap="round"/>
    <path d="M8 21v1M16 21v1" strokeLinecap="round"/>
  </svg>
);

export const RulerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <rect x="2" y="6" width="20" height="12" rx="2"/>
    <path d="M6 6v3M10 6v2M14 6v3M18 6v2" strokeLinecap="round"/>
  </svg>
);
````

## File: src/utils/map.ts
````typescript
export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN?.trim()

export const MAPBOX_STYLE_ID = "mapbox/streets-v12"

export const MAPBOX_TILE_URL =
  `https://api.mapbox.com/styles/v1/${MAPBOX_STYLE_ID}/tiles/512/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`

export const MAPBOX_ATTRIBUTION =
  '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

export const DEFAULT_MAP_CENTER: [number, number] = [30.0444, 31.2357]

export interface MapboxFeature {
  center?: [number, number]
  place_name?: string
}

interface MapboxGeocodeResponse {
  features?: MapboxFeature[]
}

export interface GeocodeResult {
  lat: number
  lng: number
  address: string
}

export const searchLocations = async (query: string): Promise<MapboxFeature[]> => {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${MAPBOX_TOKEN}&language=ar,en&country=eg&limit=5&proximity=31.2357,30.0444`
    )

    if (!res.ok) return []

    const data = await res.json() as MapboxGeocodeResponse
    return data.features ?? []
  } catch {
    return []
  }
}

export const forwardGeocode = async (query: string): Promise<GeocodeResult | null> => {
  try {
    const matches = await searchLocations(query)
    const match = matches[0]

    if (!match?.center) return null

    return {
      lat: match.center[1],
      lng: match.center[0],
      address: match.place_name ?? query,
    }
  } catch {
    return null
  }
}

export const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAPBOX_TOKEN}&language=ar,en&limit=1`
    )

    if (!res.ok) return "Unknown location"

    const data = await res.json() as MapboxGeocodeResponse
    return data.features?.[0]?.place_name ?? "Unknown location"
  } catch {
    return "Unknown location"
  }
}
````

## File: src/utils/mapProperty.ts
````typescript
import { resolveImageUrl } from "@/services/propertyService";
import type { Property } from "@/types";

/**
 * Maps a raw API response → typed Property.
 * Single source of truth — import this everywhere, never define it locally.
 */
export const mapProperty = (prop: any): Property => ({
  propertyId:        prop.property_id,
  ownerId:           prop.owner_id,
  propertyName:      prop.property_name,
  propertyDesc:      prop.property_desc,
  location:          prop.location,
  latitude:          prop.latitude  ? Number(prop.latitude)  : undefined,
  longitude:         prop.longitude ? Number(prop.longitude) : undefined,
  pricingUnit:       prop.pricing_unit,
  priceValue:        Number(prop.price_value)   || 0,
  pricePerDay:       Number(prop.price_per_day) || Number(prop.price_value) || 0,
  size:              String(prop.size ?? ""),
  bedroomsNumber:    Number(prop.bedrooms_no)   || 0,
  bedsNumber:        Number(prop.beds_no)        || 0,
  bathroomsNumber:   Number(prop.bathrooms_no)  || 0,
  images:            (prop.images          ?? []).map(resolveImageUrl),
  ownershipProof:    (prop.ownership_proofs ?? []).map(resolveImageUrl),
  isAvailable:       !!prop.is_available,
  isVerified:        !!prop.is_verified,
  isVisible:         prop.is_visible !== false,
  is_furnished:      !!prop.is_furnished,
  isSponsored:       !!prop.is_sponsored,
  property_type:     prop.property_type,
  listingStatus:     prop.listing_status ?? "inactive",
  listingExpiry:     prop.listing_expiry ?? null,
  rate:              Number(prop.rate) || 0,
  owner_first_name:  prop.owner_first_name,
  owner_second_name: prop.owner_second_name,
  owner_email:       prop.owner_email,
});
````

## File: src/utils/notifications.ts
````typescript
import type { Notification } from "@/types";

export interface RawNotificationRecord {
  notification_id?: string | number | null;
  sender?: string | null;
  receiver?: string | null;
  event_type?: string | null;
  notification_title?: string | null;
  notification_body?: string | null;
  metadata?: Record<string, unknown> | string | null;
  viewed?: boolean | number | null;
  created_at?: string | Date | null;
  type?: string | null;
  title?: string | null;
  body?: string | null;
}

export const TYPE_ICONS: Record<string, string> = {
  RENT_REQUEST: "📨",
  RENT_REQUEST_ACCEPTED: "🎉",
  RENT_REQUEST_REJECTED: "❌",
  RENT_REQUEST_CANCELLED: "🚫",
  PAYMENT_SUCCESS: "💳",
  RENT_PAID: "💰",
  MONTHLY_RENT_PAID: "💳",
  PAYMENT_REFUNDED: "🔄",
  WITHDRAWAL_SUCCESS: "🏦",
  LISTING_FEE_PAID: "🏷️",
  LISTING_EXPIRY_WARNING: "⏳",
  LISTING_EXPIRED: "🚫",
  RENT_DUE_NOTICE: "⏳",
  PAYMENT_OVERDUE: "⚠️",
  TENANT_PAYMENT_FAILED: "🚩",
  LEASE_COMPLETED: "🏠",
  LEASE_TERMINATED: "🚫",
  BOOKING_CANCELLED: "🔄",
  PURCHASE_REQUEST: "🏡",
  REQUEST_ACCEPTED: "🤝",
  REQUEST_REJECTED: "❌",
  PROPERTY_SOLD: "🔑",
};

export const parseNotificationMetadata = (
  metadata: Notification["metadata"] | string | null | undefined,
): Record<string, unknown> => {
  if (!metadata) return {};
  if (typeof metadata === "string") {
    try {
      const parsed = JSON.parse(metadata) as Record<string, unknown>;
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }

  return metadata;
};

const toIsoDate = (value: string | Date | null | undefined) => {
  if (!value) return new Date().toISOString();
  const next = new Date(value);
  return Number.isNaN(next.getTime()) ? new Date().toISOString() : next.toISOString();
};

export const normalizeNotification = (raw: RawNotificationRecord): Notification => ({
  notification_id: String(raw.notification_id ?? Date.now()),
  sender: String(raw.sender ?? "SYSTEM"),
  receiver: String(raw.receiver ?? ""),
  event_type: String(raw.event_type ?? raw.type ?? ""),
  notification_title: String(raw.notification_title ?? raw.title ?? ""),
  notification_body: String(raw.notification_body ?? raw.body ?? ""),
  metadata: parseNotificationMetadata(raw.metadata),
  viewed: raw.viewed === true || Number(raw.viewed ?? 0) > 0,
  created_at: toIsoDate(raw.created_at),
});

export const mergeNotifications = (...collections: Notification[][]) => {
  const seen = new Set<string>();
  const merged: Notification[] = [];

  collections.flat().forEach((notification) => {
    if (!notification?.notification_id) return;
    if (seen.has(notification.notification_id)) return;
    seen.add(notification.notification_id);
    merged.push(notification);
  });

  return merged.sort(
    (left, right) =>
      new Date(right.created_at).getTime() - new Date(left.created_at).getTime(),
  );
};

export const resolveNotificationRoute = (notification: Notification): string | null => {
  const meta = parseNotificationMetadata(notification.metadata);

  switch (notification.event_type) {
    case "RENT_REQUEST":
    case "RENT_REQUEST_ACCEPTED":
    case "RENT_REQUEST_REJECTED":
    case "RENT_REQUEST_CANCELLED":
      return "/rent-requests";

    case "PAYMENT_SUCCESS":
      return meta.request_id ? `/payment/success?request_id=${meta.request_id}` : "/rent-requests";

    case "RENT_PAID":
    case "MONTHLY_RENT_PAID":
    case "PAYMENT_REFUNDED":
    case "WITHDRAWAL_SUCCESS":
    case "RENT_DUE_NOTICE":
    case "PAYMENT_OVERDUE":
    case "TENANT_PAYMENT_FAILED":
    case "LEASE_COMPLETED":
    case "LEASE_TERMINATED":
    case "BOOKING_CANCELLED":
      return "/leases";

    case "LISTING_FEE_PAID":
    case "LISTING_EXPIRY_WARNING":
    case "LISTING_EXPIRED":
      return meta.property_id ? `/property/${meta.property_id}/subscription` : "/my-properties";

    case "PURCHASE_REQUEST":
    case "REQUEST_ACCEPTED":
    case "REQUEST_REJECTED":
    case "PROPERTY_SOLD":
      return "/my-properties";

    default:
      return null;
  }
};
````

## File: src/utils/propertyListing.ts
````typescript
import type { Property, PropertyListingStatus } from "@/types";

export const isSaleListingActive = (property: Property) =>
  property.property_type !== "for_sale" || property.listingStatus === "active";

export const isPubliclyVisibleProperty = (property: Property) => {
  if (!property.isVerified || !property.isAvailable) return false;
  return isSaleListingActive(property);
};

export const getSaleListingLabel = (status: PropertyListingStatus) => {
  switch (status) {
    case "active":
      return "Active";
    case "under_negotiation":
      return "Under Negotiation";
    case "sold":
      return "Sold";
    case "expired":
      return "Expired";
    case "inactive":
    default:
      return "Inactive";
  }
};

export const getSaleListingTone = (status: PropertyListingStatus) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-700";
    case "under_negotiation":
      return "bg-amber-100 text-amber-800";
    case "sold":
      return "bg-slate-200 text-slate-700";
    case "expired":
      return "bg-red-100 text-red-700";
    case "inactive":
    default:
      return "bg-gray-100 text-gray-600";
  }
};
````

## File: src/utils/propertyValidator.ts
````typescript
import type { PropertyFormData } from "@/types";

type StepErrors = Record<string, string>;

// ─── Limits ───────────────────────────────────────────────────────────────────
const LIMITS = {
  propertyName:    { min: 5,   max: 100         },
  propertyDesc:    { min: 20,  max: 1000        },
  location:        { min: 5,   max: 255         },
  bedroomsNumber:  { min: 1,   max: 20          },
  bathroomsNumber: { min: 1,   max: 20          },
  bedsNumber:      { min: 1,   max: 30          },
  size:            { min: 1,   max: 10000       },
  price:           { min: 1,   max: 500_000_000 },
  pricePerDay:     { min: 1,   max: 100_000     },
  priceMonthly:    { min: 1,   max: 500_000     },
  images:          { min: 5                     }, // at least 5 property photos
  ownershipProof:  { min: 3                     }, // at least 3 documents
} as const;

// ─── Step 1 ───────────────────────────────────────────────────────────────────
export const validateStep1 = (formData: PropertyFormData): StepErrors => {
  const errors: StepErrors = {};

  if (!formData.propertyName.trim())
    errors.propertyName = "Property title is required.";
  else if (formData.propertyName.trim().length < LIMITS.propertyName.min)
    errors.propertyName = `Title must be at least ${LIMITS.propertyName.min} characters.`;
  else if (formData.propertyName.trim().length > LIMITS.propertyName.max)
    errors.propertyName = `Title must not exceed ${LIMITS.propertyName.max} characters.`;

  if (!formData.propertyDesc.trim())
    errors.propertyDesc = "Description is required.";
  else if (formData.propertyDesc.trim().length < LIMITS.propertyDesc.min)
    errors.propertyDesc = `Description must be at least ${LIMITS.propertyDesc.min} characters.`;
  else if (formData.propertyDesc.trim().length > LIMITS.propertyDesc.max)
    errors.propertyDesc = `Description must not exceed ${LIMITS.propertyDesc.max} characters.`;

  if (formData.property_type === "for_sale") {
    if (!formData.price || formData.price <= 0)
      errors.price = "Asking price must be greater than 0.";
    else if (formData.price > LIMITS.price.max)
      errors.price = `Price must not exceed ${LIMITS.price.max.toLocaleString()} EGP.`;

    if (!formData.sellingPlan || ![1, 3, 6].includes(formData.sellingPlan))
      errors.sellingPlan = "Please select a valid selling plan (1, 3, or 6 months).";
  }

  if (formData.property_type === "for_rent") {
    if (!formData.pricingUnit)
      errors.pricingUnit = "Please select a rent type (Daily or Monthly).";

    if (formData.pricingUnit === "DAY") {
      if (!formData.pricePerDay || formData.pricePerDay <= 0)
        errors.pricePerDay = "Daily price must be greater than 0.";
      else if (formData.pricePerDay > LIMITS.pricePerDay.max)
        errors.pricePerDay = `Daily price must not exceed ${LIMITS.pricePerDay.max.toLocaleString()} EGP.`;
    }

    if (formData.pricingUnit === "MONTH") {
      if (!formData.priceMonthly || formData.priceMonthly <= 0)
        errors.priceMonthly = "Monthly price must be greater than 0.";
      else if (formData.priceMonthly > LIMITS.priceMonthly.max)
        errors.priceMonthly = `Monthly price must not exceed ${LIMITS.priceMonthly.max.toLocaleString()} EGP.`;
    }
  }

  if (!formData.bedroomsNumber || formData.bedroomsNumber < LIMITS.bedroomsNumber.min)
    errors.bedroomsNumber = "At least 1 bedroom is required.";
  else if (formData.bedroomsNumber > LIMITS.bedroomsNumber.max)
    errors.bedroomsNumber = `Bedrooms must not exceed ${LIMITS.bedroomsNumber.max}.`;

  if (!formData.bathroomsNumber || formData.bathroomsNumber < LIMITS.bathroomsNumber.min)
    errors.bathroomsNumber = "At least 1 bathroom is required.";
  else if (formData.bathroomsNumber > LIMITS.bathroomsNumber.max)
    errors.bathroomsNumber = `Bathrooms must not exceed ${LIMITS.bathroomsNumber.max}.`;

  if (formData.is_furnished) {
    if (!formData.bedsNumber || formData.bedsNumber < LIMITS.bedsNumber.min)
      errors.bedsNumber = "Beds count is required for furnished properties.";
    else if (formData.bedsNumber > LIMITS.bedsNumber.max)
      errors.bedsNumber = `Beds must not exceed ${LIMITS.bedsNumber.max}.`;
  }

  if (!formData.size || formData.size < LIMITS.size.min)
    errors.size = "Size must be greater than 0.";
  else if (formData.size > LIMITS.size.max)
    errors.size = `Size must not exceed ${LIMITS.size.max.toLocaleString()} m².`;

  return errors;
};

// ─── Step 2 ───────────────────────────────────────────────────────────────────
export const validateStep2 = (formData: PropertyFormData): StepErrors => {
  const errors: StepErrors = {};

  if (!formData.location.trim())
    errors.location = "Location is required. Type manually or pick from map.";
  else if (formData.location.trim().length < LIMITS.location.min)
    errors.location = `Location must be at least ${LIMITS.location.min} characters.`;
  else if (formData.location.trim().length > LIMITS.location.max)
    errors.location = `Location must not exceed ${LIMITS.location.max} characters.`;

  return errors;
};

// ─── Step 3 ───────────────────────────────────────────────────────────────────
export const validateStep3 = (formData: PropertyFormData): StepErrors => {
  const errors: StepErrors = {};

  if (formData.images.length < LIMITS.images.min)
    errors.images = `Please upload at least ${LIMITS.images.min} property photos.`;

  return errors;
};

// ─── Step 4 ───────────────────────────────────────────────────────────────────
export const validateStep4 = (formData: PropertyFormData): StepErrors => {
  const errors: StepErrors = {};

  if (formData.ownershipProof.length < LIMITS.ownershipProof.min)
    errors.ownershipProof = `Please upload at least ${LIMITS.ownershipProof.min} ownership documents.`;

  return errors;
};

// ─── Router ───────────────────────────────────────────────────────────────────
export const validateStep = (step: number, formData: PropertyFormData): StepErrors => {
  switch (step) {
    case 1: return validateStep1(formData);
    case 2: return validateStep2(formData);
    case 3: return validateStep3(formData);
    case 4: return validateStep4(formData);
    default: return {};
  }
};

export const hasErrors = (errors: StepErrors): boolean =>
  Object.values(errors).some((msg) => msg !== "");
````

## File: src/utils/saleSubscriptionState.ts
````typescript
import type { ListingSubscriptionRecord } from "@/services/listingSubscriptionService";
import type { Property } from "@/types";

export type SaleSubscriptionUiState =
  | "awaiting_verification"
  | "paid_awaiting_verification"
  | "ready_to_pay"
  | "payment_pending"
  | "active"
  | "expired"
  | "missing_subscription";

export const hasExpiredSaleListing = (property: Property) => {
  if (property.property_type !== "for_sale") return false;
  if (property.listingStatus === "expired") return true;

  if (!property.listingExpiry) return false;
  return new Date(property.listingExpiry).getTime() < Date.now();
};

export const getSaleSubscriptionUiState = (
  property: Property,
  subscription: ListingSubscriptionRecord | null,
): SaleSubscriptionUiState => {
  if (hasExpiredSaleListing(property)) {
    return "expired";
  }

  if (["active", "under_negotiation", "sold"].includes(property.listingStatus)) {
    return property.isVerified ? "active" : "paid_awaiting_verification";
  }

  if (!property.isVerified) {
    return subscription?.paymentState === "PAID"
      ? "paid_awaiting_verification"
      : "awaiting_verification";
  }

  if (subscription?.paymentState === "PENDING") {
    return "payment_pending";
  }

  if (subscription?.paymentState === "UNPAID") {
    return "ready_to_pay";
  }

  if (subscription?.paymentState === "PAID") {
    return property.isVerified ? "active" : "paid_awaiting_verification";
  }

  return "missing_subscription";
};
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "paths": {
      "@/*": ["./src/*"]
    },
    "ignoreDeprecations": "5.0"
  },
  "include": ["src"]
}
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
````

## File: vercel.json
````json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
````

## File: vite.config.ts
````typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  envPrefix: ['VITE_', 'REACT_APP_'],
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
````
