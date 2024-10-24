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

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <input
                onChange={handleInputChange}
                type="number"
                placeholder="Enter Your Phone number"
                className="mb-4 p-3 w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }} // Custom CSS to hide spinners
            />
            <input
                onChange={handleInputChange}
                type="password"
                placeholder="Enter Your Password"
                className="mb-4 p-3 w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleSignInWithEmail}
            >
                Sign In
            </button>
        </div>
    )
}