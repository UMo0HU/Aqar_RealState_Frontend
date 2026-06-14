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
