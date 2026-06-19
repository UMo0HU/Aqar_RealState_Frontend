import axios from '@/api/axiosInstance';

export const saleService = {
  markAsSold: (property_id: number) =>
    axios.post(`/property/${property_id}/sold`),
};
