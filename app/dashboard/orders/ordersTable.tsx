"use client";

import { DataTable } from "@/components/shared/data-table";
import { ColumnDef } from "@tanstack/react-table";

interface Order {
  id: number;
  documentId: string;
  item_description: string;
  weight: number;
  delivery_charge: number | null;
  order_status: string;
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

interface OrdersTableProps {
  orders: Order[];
  columns: ColumnDef<Order>[];
}

export function OrdersTable({ orders, columns }: OrdersTableProps) {
  return <DataTable columns={columns} data={orders} />;
}
