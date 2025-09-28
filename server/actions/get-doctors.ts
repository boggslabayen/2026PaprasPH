'use server'

import { eq } from "drizzle-orm"
import { db } from ".."
import { doctors } from "../schema"

export async function getDoctor(id:number) {
    try{
        const doctor = await db.query.doctors.findFirst({
            where: eq(doctors.id,id),
        })
        if(!doctor) throw new Error("Doctor not found")
        return {success: doctor}
    }catch(error){
        return {error: "Failed to find Doctor"}
    }
}