import {z} from 'zod'

export const registerSchema = z.object({
    email: z.string().email(),
    name: z.string().min(5, {message: "adınızı ve soyadınızı en az bir karakter boşluk bırakarak giriniz!" }).max(255),
    studentId: z.string().min(7).max(7).refine((val) => !isNaN(val as unknown as number), {message: "lütfen yalnızca sayı giriniz"}),
    year: z.string().min(2).max(10),
    password: z.string().min(6).max(10),
    confirmPassword: z.string().min(6).max(10),
})