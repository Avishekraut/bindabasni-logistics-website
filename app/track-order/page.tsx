"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OrderTracker } from "./components/order-tacker";
import PageHeading from "@/components/shared/page-heading";

export default function Home() {
  const [orderId, setOrderId] = useState("");
  const [trackedOrderId, setTrackedOrderId] = useState<string | null>(null);

  const handleTrack = () => {
    if (orderId.trim()) {
      setTrackedOrderId(orderId);
    }
  };

  return (
    <main>
      <PageHeading
        title="Track Order"
        breadcrumb={["Home", "Track Order"]}
        backgroundImage="/hero-section-bg.png"
      />
      <div className="mx-auto max-w-2xl space-y-8 py-12 px-4 md:px-0">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Track Your Order
          </h1>
          <p className="text-muted-foreground">
            Enter your order ID to see the latest updates
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order ID</CardTitle>
            <CardDescription>Enter your order ID to track</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Enter order ID (e.g. OT1JXPD0W1HX)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
            <Button onClick={handleTrack} className="w-full">
              Track Order
            </Button>
          </CardContent>
        </Card>

        {trackedOrderId && <OrderTracker orderId={trackedOrderId} />}
      </div>
    </main>
  );
}
