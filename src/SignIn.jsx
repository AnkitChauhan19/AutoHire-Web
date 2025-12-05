import React from 'react';
import { Bot } from 'lucide-react';

const SignIn = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <a className="flex items-center justify-center space-x-2 mb-8" href="/">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <Bot color="white" size={24} />
                    </div>
                    <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Pacifico, serif' }}>
                        AutoHire AI
                    </span>
                </a>
                <h2 className="text-center text-3xl font-bold text-gray-900">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or <a className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer" href="/signup">create a new account</a>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                autoComplete="email"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                                placeholder="Enter your email"
                                type="email"
                                name="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                autoComplete="current-password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                                placeholder="Enter your password"
                                type="password"
                                name="password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    type="checkbox"
                                    name="rememberMe"
                                />
                                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer"
                            >
                                Sign in
                            </button>
                        </div>
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 whitespace-nowrap cursor-pointer items-center"
                                >
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                                        <path
                                            d="M12.0003 20.45c4.6667 0 8.45-3.7833 8.45-8.45 0-.4167-.0334-.8167-.1-1.2h-8.35v2.4h4.8c-.2 1.1333-1.2167 3.25-4.8 3.25-2.8834 0-5.2334-2.35-5.2334-5.2333 0-2.8834 2.35-5.2334 5.2334-5.2334 1.25 0 2.3833.4333 3.2666 1.2667l1.8-1.8c-1.35-1.25-3.1-2.0167-5.0666-2.0167-4.6667 0-8.45 3.7833-8.45 8.45 0 4.6667 3.7833 8.45 8.45 8.45z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    <span className="ml-2">Google</span>
                                </button>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 whitespace-nowrap cursor-pointer items-center"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M13.0729 1.95833C13.6354 1.26042 14.0104 0.291667 13.9063 0C13.0625 0.03125 12.0417 0.5625 11.4375 1.26042C10.9062 1.86458 10.4375 2.82292 10.5625 3.77083C11.5 3.84375 12.5104 3.29167 13.0729 1.95833ZM16.8438 12.8646C16.875 16.3229 19.9271 17.4792 19.9688 17.5C19.9375 17.6042 19.4583 19.2604 18.2917 20.9688C17.2812 22.4375 16.2292 23.8958 14.6146 23.9271C13.0417 23.9271 12.5312 22.9896 10.6875 22.9896C8.83333 22.9896 8.28125 23.8958 6.78125 23.9583C5.22917 24.0208 4.04167 22.4688 2.97917 20.9375C0.8125 17.8021 -0.84375 12.0521 1.34375 8.26042C2.42708 6.38542 4.36458 5.19792 6.54167 5.16667C8.07292 5.13542 9.51042 6.20833 10.4583 6.20833C11.3958 6.20833 13.1562 4.9375 14.9688 5.13542C15.7292 5.16667 17.8646 5.4375 19.2396 7.44792C19.125 7.51042 16.8958 8.8125 16.8438 12.8646Z"
                                        />
                                    </svg>
                                    <span className="ml-2">Apple</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
