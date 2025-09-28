'use server'

import { DoctorsSchema } from "@/types/doctors-schema";
import { createSafeActionClient } from "next-safe-action";
import { db } from "..";
import { eq } from "drizzle-orm";
import { doctors } from "../schema";
import { revalidatePath } from "next/cache";

const action = createSafeActionClient();

export const addDoctor = action
.inputSchema(DoctorsSchema)
.action(async({ parsedInput }) => {
    const { id,name, email,number,streetAddress,province, city, baranggay,region } = parsedInput;
    if(id){
        const currentDoctor = await db.query.doctors.findFirst({
            where: eq(doctors.id,id),
        })
        if(!currentDoctor) return {error: 'Doctor not found'}
        const editedDoctor = await db
        .update(doctors)
        .set({name, email,number,streetAddress,province, city, baranggay, region})
        .where(eq(doctors.id,id))
        .returning();
        revalidatePath("/dashboard/doctors")
        return { success: `Doctor details ${editedDoctor[0].name} has been updated`}
    } 
    if(!id){
        const newDoctor =await db
        .insert(doctors)
        .values({name, email,number,streetAddress,province, city, baranggay, region})
        .returning();
        revalidatePath("/dashboard/doctors")
        return { success: `Doctor ${newDoctor[0].name} has been created`}
    }

    
})