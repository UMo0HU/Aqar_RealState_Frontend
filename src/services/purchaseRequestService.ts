import axios from '@/api/axiosInstance';

export const purchaseRequestService = {
  sendRequest: (property_id: number, message: string) =>
    axios.post('/purchase-requests', { property_id, message }),

  getMyRequests: () =>
    axios.get('/purchase-requests/my'),

  getReceivedRequests: () =>
    axios.get('/purchase-requests/received'),

  updateStatus: (id: string, status: 'ACCEPTED' | 'REJECTED') =>
    axios.put(`/purchase-requests/${id}`, { status }),

  cancelRequest: (id: string) =>
    axios.put(`/purchase-requests/${id}/cancel`),

  markAsSold: (property_id: number) =>
    axios.post(`/purchase-requests/property/${property_id}/sold`)
};
