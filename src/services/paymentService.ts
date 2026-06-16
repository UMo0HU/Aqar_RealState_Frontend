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
  currency: string;
}

export const getBalance = () =>
  axios.get<BalanceResponse>("/api/balance");

export const requestWithdrawal = (amount: number, method: string, receiverData: string) =>
  axios.post("/api/payment/request-withdrawal", { amount, method, receiverData });
