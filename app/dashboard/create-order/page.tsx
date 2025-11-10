"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { orderFormSchema, OrderFormValues } from "./createOrderSchema";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "@/apiServices/order";
import { Loader2 } from "lucide-react";
import { AxiosError } from "axios";

export default function OrderForm() {
  const { data: session } = useSession();

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      pickupContactName: "",
      pickupContactPhone: "",
      pickupAddress: "",
      deliveryContactName: "",
      deliveryContactPhone: "",
      deliveryAddress: "",
      itemDescription: "",
      weight: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      form.reset();
      toast.success("Order created successfully!");
    },
    onError: (error: AxiosError<{ error: { message: string } }>) => {
      const message =
        error?.response?.data?.error?.message ||
        error?.message ||
        "Failed to create order";
      toast.error(message);
    },
  });

  async function onSubmit(data: OrderFormValues) {
    const payload = {
      data: {
        users_permissions_user: Number(session?.user?.id),
        item_description: data.itemDescription,
        weight: Number(data.weight),
        pickup: {
          name: data.pickupContactName,
          phone: data.pickupContactPhone,
          address: data.pickupAddress,
        },
        delivery: {
          name: data.deliveryContactName,
          phone: data.deliveryContactPhone,
          address: data.deliveryAddress,
        },
      },
    };

    mutate(payload);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-foreground">Create Order</h1>
      <div className="mt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Pickup Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  Pickup Details
                </h2>
                <p className="text-sm text-muted-foreground">
                  Where the parcel will be collected
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="pickupContactName"
                  render={({
                    field: { value, onChange, onBlur, name, ref },
                  }) => (
                    <FormItem>
                      <FormLabel>Contact Person Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          name={name}
                          ref={ref}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pickupContactPhone"
                  render={({
                    field: { value, onChange, onBlur, name, ref },
                  }) => (
                    <FormItem>
                      <FormLabel>Contact Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="9842XXXXXX "
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          name={name}
                          ref={ref}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="pickupAddress"
                render={({ field: { value, onChange, onBlur, name, ref } }) => (
                  <FormItem>
                    <FormLabel>Pickup Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Maitidevi, Kathmandu"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        ref={ref}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Delivery Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  Delivery Details
                </h2>
                <p className="text-sm text-muted-foreground">
                  Where the parcel will be delivered
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="deliveryContactName"
                  render={({
                    field: { value, onChange, onBlur, name, ref },
                  }) => (
                    <FormItem>
                      <FormLabel>Contact Person Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Jane Smith"
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          name={name}
                          ref={ref}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="deliveryContactPhone"
                  render={({
                    field: { value, onChange, onBlur, name, ref },
                  }) => (
                    <FormItem>
                      <FormLabel>Contact Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="9842XXXXXX"
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          name={name}
                          ref={ref}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="deliveryAddress"
                render={({ field: { value, onChange, onBlur, name, ref } }) => (
                  <FormItem>
                    <FormLabel>Delivery Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Maitidevi, Kathmandu"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        ref={ref}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Item Details Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-1">
                  Item Details
                </h2>
                <p className="text-sm text-muted-foreground">
                  Information about what is being delivered
                </p>
              </div>

              <FormField
                control={form.control}
                name="itemDescription"
                render={({ field: { value, onChange, onBlur, name, ref } }) => (
                  <FormItem>
                    <FormLabel>Item Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Electronic device, fragile items, etc."
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        ref={ref}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="weight"
                render={({ field: { value, onChange, onBlur, name, ref } }) => (
                  <FormItem>
                    <FormLabel>Weight (kg)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="2.5"
                        step="0.01"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        ref={ref}
                      />
                    </FormControl>
                    <FormDescription>
                      Approximate weight of the item
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-11 text-base font-medium"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Order...
                </>
              ) : (
                "Create Order"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
