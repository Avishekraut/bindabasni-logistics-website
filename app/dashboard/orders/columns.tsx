"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Check, Copy, Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Order {
  id: number;
  documentId: string;
  item_description: string;
  weight: number;
  delivery_charge: number | null;
  pickup: {
    id: number;
    name: string;
    phone: string;
    address: string;
  };
  delivery: {
    id: number;
    name: string;
    phone: string;
    address: string;
  };
}

const formatCurrency = (value: number | string | null) => {
  if (value === null || value === undefined) return "Not set";

  const num = Number(value);
  if (isNaN(num)) return "Not set";

  return `Rs. ${num.toFixed(2)}`;
};

export const getOrdersColumns = (): ColumnDef<Order>[] => {
  const router = useRouter();

  const handleEdit = (orderId: string) => {
    router.push(`/orders/${orderId}/edit`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Picked Up":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "In Transit":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return [
    {
      accessorKey: "documentId",
      header: "Order ID",
      cell: ({ row }) => {
        const [copied, setCopied] = useState(false);
        const documentId = row.getValue("documentId") as string;

        const handleCopy = async () => {
          await navigator.clipboard.writeText(documentId);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        };

        return (
          <div className="flex items-center gap-2 uppercase">
            <span>{documentId}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              className="h-4 w-4 p-0"
            >
              {copied ? (
                <Check className="h-2 w-2 text-green-500" />
              ) : (
                <Copy className="h-2 w-2 text-muted-foreground hover:text-foreground" />
              )}
            </Button>
          </div>
        );
      },
    },
    {
      accessorKey: "item_description",
      header: "Description",
      cell: ({ row }) => (
        <div className="font-medium capitalize">
          {row.getValue("item_description")}
        </div>
      ),
    },
    {
      accessorKey: "weight",
      header: "Weight (kg)",
      cell: ({ row }) => <div>{row.getValue("weight")} kg</div>,
    },
    {
      accessorKey: "pickup",
      header: "Pickup Details",
      cell: ({ row }) => {
        const pickup = row.getValue("pickup") as Order["pickup"];
        return (
          <div className="flex flex-col gap-1 text-sm">
            <span className="font-semibold capitalize">{pickup.name}</span>
            <span className="text-muted-foreground">{pickup.phone}</span>
            <span className="text-muted-foreground text-xs capitalize">
              {pickup.address}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "delivery",
      header: "Delivery Details",
      cell: ({ row }) => {
        const delivery = row.getValue("delivery") as Order["delivery"];
        return (
          <div className="flex flex-col gap-1 text-sm">
            <span className="font-semibold capitalize">{delivery.name}</span>
            <span className="text-muted-foreground">{delivery.phone}</span>
            <span className="text-muted-foreground text-xs capitalize">
              {delivery.address}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "order_status",
      header: "Order Status",
      cell: ({ row }) => {
        const status = row.getValue("order_status") as string;
        return (
          <Badge
            variant="outline"
            className={`${getStatusColor(
              status
            )} px-3 py-1 rounded-full font-medium`}
          >
            {status}
          </Badge>
        );
      },
    },
    {
      accessorKey: "delivery_charge",
      header: "Delivery Charge",
      cell: ({ row }) => (
        <div className="font-medium">
          {formatCurrency(row.getValue("delivery_charge"))}
        </div>
      ),
    },
    {
      id: "actions",
      header: "Action",
      cell: ({ row }) => {
        const order = row.original;
        return (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleEdit(order.documentId)}
            className="flex items-center gap-2"
          >
            <Edit className="h-4 w-4" />
            <span>Edit</span>
          </Button>
        );
      },
    },
  ];
};
