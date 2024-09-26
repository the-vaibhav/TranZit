import { z } from 'zod';

export const SignUpSchema = z.object({
    name: z.string().min(3, { message: 'Name must be 3 or more characterj ' }),
    email: z.string().email(),
    number: z.string().length(10, { message: 'Phone Number must be of 10 digits' }),
    password: z.string().min(6, { message: 'Password must be of 6 or more characters' }),
});

export const SignInSchema = z.object({
    number: z.string().length(10, { message: 'Phone number must be of 10 digits' }),
    password: z.string().min(6, { message: 'Password must be 6 or more characters long' })
});

export type SignUpType = z.infer<typeof SignUpSchema>;
export type SignInType = z.infer<typeof SignInSchema>;