"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { OrdersTable } from "./ordersTable";
import { getOrders } from "@/apiServices/order";
import { useSession } from "next-auth/react";
import { getOrdersColumns } from "./columns";
import { Pagination } from "@/components/shared/pagination";

export default function OrdersPage() {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [currentPage, setCurrentPage] = useState(1);

  const columns = getOrdersColumns();

  const {
    data: ordersResponse = {
      data: [],
      meta: { pagination: { page: 1, pageSize: 10, total: 0, pageCount: 0 } },
    },
    isLoading,
    error,
  } = useQuery({
    queryKey: ["get-orders", userId, currentPage],
    queryFn: () =>
      getOrders(userId!, {
        page: currentPage,
        pageSize: 5,
      }),
    enabled: !!userId,
  });

  const { data: orders = [], meta } = ordersResponse;
  const pagination = meta?.pagination;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Orders</h1>
          <p className="text-muted-foreground">
            Manage and track all your orders
          </p>
        </div>

        <div className="p-0 overflow-hidden">
          {isLoading ? (
            <div className="">
              <div className="p-8 text-center">Loading orders...</div>
            </div>
          ) : error ? (
            <div className="p-8 text-center text-destructive">
              Failed to load orders. Please try again.
            </div>
          ) : orders.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No orders found. Start creating orders to see them here.
            </div>
          ) : (
            <>
              <OrdersTable orders={orders} columns={columns} />

              {pagination && pagination.pageCount > 1 && (
                <div className="flex justify-end">
                  <Pagination
                    currentPage={pagination.page}
                    totalPages={pagination.pageCount}
                    onPageChange={handlePageChange}
                    isLoading={isLoading}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
