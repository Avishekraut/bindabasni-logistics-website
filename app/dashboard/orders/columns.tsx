"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";

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

const formatCurrency = (value: number | null) => {
  if (value === null || value === undefined) return "Not set";
  return `$${value.toFixed(2)}`;
};

export const getOrdersColumns = (): ColumnDef<Order>[] => {
  const router = useRouter();

  const handleEdit = (orderId: string) => {
    router.push(`/orders/${orderId}/edit`);
  };

  return [
        {
      accessorKey: "documentId",
      header: "Order ID",
      cell: ({ row }) => (
        <div className="font-medium uppercase">{row.getValue("documentId")}</div>
      ),
    },
    {
      accessorKey: "item_description",
      header: "Description",
      cell: ({ row }) => (
        <div className="font-medium capitalize">{row.getValue("item_description")}</div>
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
