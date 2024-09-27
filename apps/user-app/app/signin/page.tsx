"use client"
// pages/signin.tsx
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type SignInType = {
    number: string;
    password: string;
}
export default function SignIn() {
    const [formData, setFormData] = useState<SignInType>({
        number: '',
        password: ''
    })

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.type]: e.target.value
        })
    }

    const handleSignInWithEmail = async () => {
        const response = await signIn('credentials', {
            phone: formData.number,
            password: formData.password,
            redirect: false,
            callbackUrl: '/dashboard'
        })
        if (response?.error) {
            console.log(response.error)
        }
        router.push('/dashboard');
    }

    return <>
        <input onChange={handleInputChange} type="number" placeholder='Enter Your Phone number' />
        <input onChange={handleInputChange} type="password" placeholder='Enter Your Password' />
        <button className='p-10' onClick={handleSignInWithEmail}></button>
    </>
}