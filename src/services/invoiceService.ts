import axios from "@/api/axiosInstance";
import type { Invoice, InvoiceStats } from "@/types";

export const getRenterInvoices = () =>
  axios.get<{ success: boolean; data: Invoice[] }>("/api/invoices/renter");

export const getOwnerInvoices = () =>
  axios.get<{ success: boolean; data: Invoice[] }>("/api/invoices/owner");

export const getInvoiceStats = () =>
  axios.get<{ success: boolean; data: InvoiceStats }>("/api/invoices/stats");
