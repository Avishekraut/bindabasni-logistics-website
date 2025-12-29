"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrders } from "@/apiServices/order";
import { toast } from "sonner";
import { AxiosError } from "axios";

const editOrderSchema = z.object({
  item_description: z
    .string()
    .min(1, "Item description is required")
    .min(3, "Item description must be at least 3 characters"),
  weight: z
    .number()
    .positive("Weight must be a positive number")
    .min(0.1, "Weight must be at least 0.1 kg"),
  pickup: z.object({
    id: z.number(),
    name: z.string().min(1, "Pickup name is required"),
    phone: z.string().min(1, "Pickup phone is required"),
    address: z.string().min(1, "Pickup address is required"),
  }),
  delivery: z.object({
    id: z.number(),
    name: z.string().min(1, "Delivery name is required"),
    phone: z.string().min(1, "Delivery phone is required"),
    address: z.string().min(1, "Delivery address is required"),
  }),
});

type EditOrderFormValues = z.infer<typeof editOrderSchema>;

interface EditOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: {
    documentId: string;
    item_description: string;
    weight: number;
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
  };
}

export function EditOrderDialog({
  open,
  onOpenChange,
  order,
}: EditOrderDialogProps) {
  const queryClient = useQueryClient();

  const form = useForm<EditOrderFormValues>({
    resolver: zodResolver(editOrderSchema),
    defaultValues: {
      item_description: order.item_description,
      weight: order.weight,
      pickup: order.pickup,
      delivery: order.delivery,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: EditOrderFormValues) => {
      const payload = {
        data: {
          item_description: values.item_description,
          weight: values.weight,
          pickup: {
            name: values.pickup.name,
            phone: values.pickup.phone,
            address: values.pickup.address,
          },
          delivery: {
            name: values.delivery.name,
            phone: values.delivery.phone,
            address: values.delivery.address,
          },
        },
      };

      return updateOrders(order.documentId, payload);
    },

    onSuccess: () => {
      toast.success("Order updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["get-orders"] });
      onOpenChange(false);
      form.reset();
    },

    onError: (error: AxiosError<{ message?: string }>) => {
      const msg =
        error?.response?.data?.message ??
        (typeof error?.message === "string" ? error.message : null) ??
        "Failed to update order. Please try again.";

      toast.error(msg);
    },
  });

  const onSubmit = (data: EditOrderFormValues) => {
    mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Order</DialogTitle>
          <DialogDescription>
            Update order details. Only editable fields are shown.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Item Description */}
            <FormField
              control={form.control}
              name="item_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter item description"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Weight */}
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight (kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      placeholder="Enter weight"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Pickup Section */}
            <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
              <h3 className="font-semibold">Pickup Details</h3>

              <FormField
                control={form.control}
                name="pickup.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Pickup contact name"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pickup.phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Pickup phone number"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pickup.address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Pickup address"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Delivery Section */}
            <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
              <h3 className="font-semibold">Delivery Details</h3>

              <FormField
                control={form.control}
                name="delivery.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Delivery contact name"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="delivery.phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Delivery phone number"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="delivery.address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Delivery address"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Saving..." : "Save Changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
