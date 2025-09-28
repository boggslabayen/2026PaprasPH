import * as z from "zod";

export const DoctorsSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(5,{
        message: "name must be at least 5 characters long"
    }),
    email: z.string().email({ message: "Invalid email address" }),
    number: z.string().min(5,{
        message: "number must be at least 1 digits long"
    }),
    streetAddress: z.string().min(10,{
        message: "Street address must be at least 10 characters long"
    }),
    province: z.string().optional(),
    city: z.string().min(5,{
        message: "City must be at least 10 characters long"
    }),
    baranggay: z.string().min(5,{
        message: "Baranggay must be at least 10 characters long"
    }),
    region: z.string().min(5,{
        message: "Region must be at least 10 characters long"
    }),
}) 

export type zDoctorsSchema = z.infer<typeof DoctorsSchema> 