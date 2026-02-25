import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import Button from './Button'
import Input from './input'
import Logo from './Logo'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center w-full min-h-[80vh] bg-white px-4">
            <div className='w-full max-w-md'>
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <Logo width="64px" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link to="/login" className="text-black font-medium underline underline-offset-2 hover:no-underline">
                            Sign in
                        </Link>
                    </p>
                </div>

                {/* Card */}
                <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-sm">
                    {error && (
                        <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit(create)} className='space-y-5'>
                        <Input
                            label="Full Name"
                            placeholder="John Doe"
                            {...register("name", { required: true })}
                        />
                        <Input
                            label="Email"
                            placeholder="you@example.com"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Enter a valid email address",
                                }
                            })}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            {...register("password", { required: true })}
                        />
                        <Button type="submit" className="w-full justify-center">
                            Create Account
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
