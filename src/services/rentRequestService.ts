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