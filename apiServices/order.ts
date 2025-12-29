import api from "@/lib/axiosInstance";

export interface CreateOrderPayload {
  data: {
    users_permissions_user: number;
    item_description: string;
    weight: number;
    pickup: {
      name: string;
      phone: string;
      address: string;
    };
    delivery: {
      name: string;
      phone: string;
      address: string;
    };
  };
}
interface UpdateOrderPayload {
  data: {
    item_description?: string;
    weight?: number;
    pickup?: {
      name?: string;
      phone?: string;
      address?: string;
    };
    delivery?: {
      name?: string;
      phone?: string;
      address?: string;
    };
  };
}

export const createOrder = async (data: CreateOrderPayload) => {
  const response = await api.post("/api/orders", data);
  return response.data;
};

export const getOrders = async (
  userId: string,
  params = { page: 1, pageSize: 5 }
) => {
  const res = await api.get(`/api/orders/user/${userId}`, { params });
  return res.data;
};

export const updateOrders = async (
  orderId: string,
  orderData: UpdateOrderPayload
) => {
  const res = await api.put(`/api/orders/${orderId}`, orderData);
  return res.data;
};

export const trackOrder = async (orderId: string) => {
  try {
    const res = await api.get(`/api/orders/${orderId}?populate=*`);
    return res.data;
  } catch (error: any) {
    const err = error?.response?.data?.error;

    throw new Error(
      err?.name === "NotFoundError"
        ? "ORDER_NOT_FOUND"
        : err?.message || "Something went wrong"
    );
  }
};
