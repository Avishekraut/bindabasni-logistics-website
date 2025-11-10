import z from "zod";

export const orderFormSchema = z.object({
  pickupContactName: z
    .string()
    .min(2, "Pickup contact name must be at least 2 characters"),
  pickupContactPhone: z
    .string()
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number format"),
  pickupAddress: z
    .string()
    .min(5, "Pickup address must be at least 5 characters"),
  deliveryContactName: z
    .string()
    .min(2, "Delivery contact name must be at least 2 characters"),
  deliveryContactPhone: z
    .string()
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number format"),
  deliveryAddress: z
    .string()
    .min(5, "Delivery address must be at least 5 characters"),
  itemDescription: z
    .string()
    .min(5, "Item description must be at least 5 characters"),
  weight: z.string().refine((val) => {
    const num = Number.parseFloat(val);
    return !isNaN(num) && num > 0;
  }, "Weight must be a valid positive number"),
});

export type OrderFormValues = z.infer<typeof orderFormSchema>;
