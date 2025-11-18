"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Loader2,
  AlertCircle,
  CheckCircle2,
  Truck,
  Package,
  MapPin,
  Check,
  ShoppingBag,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { trackOrder } from "@/apiServices/order";

const allStatuses = [
  "Order Placed",
  "Pending",
  "Picked Up",
  "In Transit",
  "Delivered",
] as const;

const statusIcons: Record<string, React.ReactNode> = {
  "Order Placed": <ShoppingBag className="w-6 h-6" />,
  Pending: <Package className="w-6 h-6" />,
  "Picked Up": <Truck className="w-6 h-6" />,
  "In Transit": <Truck className="w-6 h-6" />,
  Delivered: <CheckCircle2 className="w-6 h-6" />,
};

const statusDescriptions: Record<string, string> = {
  "Order Placed": "Your order has been placed successfully",
  Pending: "Your order is being prepared",
  "Picked Up": "Your order has been picked up",
  "In Transit": "Your order is on the way",
  Delivered: "Your order has been delivered",
};

const statusColors: Record<string, string> = {
  "Order Placed": "bg-purple-100 text-purple-700 border-purple-300",
  Pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
  "Picked Up": "bg-blue-100 text-blue-700 border-blue-300",
  "In Transit": "bg-blue-100 text-blue-700 border-blue-300",
  Delivered: "bg-green-100 text-green-700 border-green-300",
};

interface OrderTrackerProps {
  orderId: string;
}

export function OrderTracker({ orderId }: OrderTrackerProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => trackOrder(orderId),
    enabled: !!orderId,
    // Don't retry if the error is ORDER_NOT_FOUND
    retry: (failureCount, error) => {
      if (error.message === "ORDER_NOT_FOUND") return false;
      return failureCount < 1;
    },
  });

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    const message =
      error.message === "ORDER_NOT_FOUND"
        ? "No order found with this ID. Please check and try again."
        : error.message || "Failed to fetch order details.";

    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    );
  }

  if (!data) return null;

  const order = data.data;

  type OrderStatus =
    | "Order Placed"
    | "Pending"
    | "Picked Up"
    | "In Transit"
    | "Delivered";

  type StatusUpdate = {
    order_status: OrderStatus;
    updated_time: string;
  };

  const statusUpdates: StatusUpdate[] = order.status_updates || [];

  const completedStatuses = new Set<OrderStatus>(
    statusUpdates.map((update) => update.order_status)
  );
  completedStatuses.add("Order Placed");

  return (
    <div className="space-y-6">
      {/* Order Details Card */}
      <Card>
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
          <CardDescription className="flex gap-1">
            Order ID: <p className="uppercase">{order.documentId}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Status */}
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">Current Status</p>
              <p className="text-2xl font-bold text-foreground">
                {order.order_status}
              </p>
            </div>
            <div
              className={`p-3 rounded-full ${
                statusColors[order.order_status] || "bg-gray-100"
              }`}
            >
              {statusIcons[order.order_status] || (
                <Package className="w-6 h-6" />
              )}
            </div>
          </div>

          {/* Item and Shipping Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">
                Item Information
              </h3>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground capitalize">
                  Description:
                </span>{" "}
                {order.item_description}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Weight:</span>{" "}
                {order.weight} kg
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Delivery Charge</h3>
              <p className="text-sm text-muted-foreground">
                {order.delivery_charge
                  ? `$${order.delivery_charge}`
                  : "Not Set"}
              </p>
            </div>
          </div>

          {/* Pickup and Delivery Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">Pickup</h3>
              </div>
              <p className="text-sm font-medium text-foreground capitalize">
                {order.pickup.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {order.pickup.phone}
              </p>
              <p className="text-xs text-muted-foreground capitalize">
                {order.pickup.address}
              </p>
            </div>

            <div className="space-y-2 p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">Delivery</h3>
              </div>
              <p className="text-sm font-medium text-foreground capitalize">
                {order.delivery.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {order.delivery.phone}
              </p>
              <p className="text-xs text-muted-foreground capitalize">
                {order.delivery.address}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Card */}
      <Card>
        <CardHeader>
          <CardTitle>Tracking Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-6">
            {allStatuses.map((status, index) => {
              const isCompleted = completedStatuses.has(status);
              const statusUpdate = statusUpdates.find(
                (update) => update.order_status === status
              );

              return (
                <div key={status} className="flex gap-4">
                  {/* Timeline Line and Icon */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                        isCompleted
                          ? "bg-green-100 text-green-700 border-green-300"
                          : "bg-gray-100 text-gray-400 border-gray-300"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        statusIcons[status] || <Package className="w-6 h-6" />
                      )}
                    </div>
                    {index !== allStatuses.length - 1 && (
                      <div
                        className={`w-0.5 h-16 my-2 ${
                          isCompleted ? "bg-green-300" : "bg-gray-300"
                        }`}
                      />
                    )}
                  </div>

                  {/* Timeline Content */}
                  <div className="pt-1 flex-1">
                    <p
                      className={`font-semibold ${
                        isCompleted ? "text-foreground" : "text-gray-400"
                      }`}
                    >
                      {status}
                    </p>
                    <p
                      className={`text-sm ${
                        isCompleted ? "text-muted-foreground" : "text-gray-400"
                      }`}
                    >
                      {statusDescriptions[status]}
                    </p>
                    {statusUpdate ? (
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(statusUpdate.updated_time).toLocaleString()}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-400 mt-1">Pending</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
