import { prisma } from "@/libs/prisma"

export const listCarreras = async () => { 
    const carreras = await prisma.carrera.findMany()
    return carreras
}