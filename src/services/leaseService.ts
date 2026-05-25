import axios from "@/api/axiosInstance";

export const getLeasesAsRenter = () =>
  axios.get("/leases/renter");

export const getLeasesAsOwner = () =>
  axios.get("/leases/owner");

export const getLeaseById = (leaseId: string) =>
  axios.get(`/leases/${leaseId}`);