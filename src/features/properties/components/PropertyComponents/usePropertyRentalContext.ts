import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

import { getLeasesAsOwner, getLeasesAsRenter } from "@/services/leaseService";
import { getRentRequests } from "@/services/rentRequestService";
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
  REJECTED: 5,
  CANCELLED: 6,
};

const LEASE_PRIORITY: Record<Lease["status"], number> = {
  OVERDUE: 0,
  IN_PROGRESS: 1,
  UPCOMING: 2,
  COMPLETED: 3,
  CANCELLED: 4,
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
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

    if (requestsResult.status === "rejected" && leasesResult.status === "rejected") {
      const requestsError = axios.isAxiosError(requestsResult.reason)
        ? requestsResult.reason.response?.data?.msg
        : null;
      const leasesError = axios.isAxiosError(leasesResult.reason)
        ? leasesResult.reason.response?.data?.msg
        : null;

      setError(requestsError || leasesError || "Could not load booking status.");
    }

    setLoading(false);
  }, [enabled, role]);

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
  };
}
