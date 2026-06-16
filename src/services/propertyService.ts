import axios, { BASE_URL } from "@/api/axiosInstance";
import type { PropertyFormData } from "@/types";

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
