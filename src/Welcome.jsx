import React from 'react';
import { Bot, Building2, User, ShieldCheck, CreditCard, Clock, Check, Brain, FileText } from 'lucide-react';

const Welcome = () => {
    const features = [
        {
            title: "AI Skill Matching",
            description: "Intelligent algorithms match your needs with verified skill sets",
            icon: <Brain size={24} color="#4f46e5" />,
            bg: '#e0e7ff', // indigo-100
        },
        {
            title: "Profile Verification",
            description: "AI-powered fake profile detection and skill validation",
            icon: <ShieldCheck size={24} color="#16a34a" />,
            bg: '#dcfce7', // green-100
        },
        {
            title: "Smart Screening",
            description: "Auto-generated tests tailored for each specific job",
            icon: <FileText size={24} color="#9333ea" />,
            bg: '#f3e8ff', // purple-100
        },
        {
            title: "Secure Payments",
            description: "Transparent escrow system with blockchain security",
            icon: <CreditCard size={24} color="#ea580c" />,
            bg: '#ffedd5', // orange-100
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header style={{ padding: '16px 24px', borderBottom: '1px solid #f3f4f6', background: 'white' }}>
                <div className="container flex items-center justify-between" style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div className="flex items-center" style={{ gap: '0.5rem' }}>
                        <div style={{
                            width: '2rem',
                            height: '2rem',
                            backgroundColor: '#4f46e5',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Bot color="white" size={18} />
                        </div>
                        <span style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: '#111827',
                            fontFamily: 'Pacifico, serif'
                        }}>
                            AutoHire AI
                        </span>
                    </div>
                    <a
                        href="/signin"
                        data-discover="true"
                        style={{
                            color: '#4f46e5',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'color 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#4338ca'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#4f46e5'}
                    >
                        Sign In
                    </a>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero */}
                <div className="px-6 py-20" style={{ background: 'linear-gradient(to bottom right, #f0f9ff, #e0e7ff)' }}>
                    <div className="max-w-7xl mx-auto container">
                        <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <h1 className="text-5xl font-bold text-gray-900 leading-tight" style={{ fontSize: '3rem', fontWeight: 700, color: '#111827', lineHeight: 1.25 }}>
                                        Find Perfect <span className="text-indigo-600" style={{ color: '#4f46e5' }}>Freelancers</span> with AI
                                    </h1>
                                    <p className="text-xl text-gray-600 leading-relaxed" style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.625 }}>
                                        AutoHire AI instantly matches businesses with verified freelancers using intelligent skill analysis, AI-driven screening, and smart project tracking.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4" style={{ display: 'flex', gap: '1rem' }}>
                                    <a className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-center whitespace-nowrap cursor-pointer"
                                        href="/signup?type=business"
                                        data-discover="true"
                                        style={{
                                            backgroundColor: '#4f46e5',
                                            color: 'white',
                                            padding: '1rem 2rem',
                                            borderRadius: '0.75rem',
                                            fontWeight: 600,
                                            textAlign: 'center',
                                            whiteSpace: 'nowrap',
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center'
                                        }}>
                                        <Building2 size={20} style={{ marginRight: '0.5rem' }} />
                                        Join as Business
                                    </a>
                                    <a className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-center whitespace-nowrap cursor-pointer"
                                        href="/signup?type=freelancer"
                                        data-discover="true"
                                        style={{
                                            backgroundColor: 'white',
                                            color: '#4f46e5',
                                            border: '2px solid #4f46e5',
                                            padding: '1rem 2rem',
                                            borderRadius: '0.75rem',
                                            fontWeight: 600,
                                            textAlign: 'center',
                                            whiteSpace: 'nowrap',
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center'
                                        }}>
                                        <User size={20} style={{ marginRight: '0.5rem' }} />
                                        Join as Freelancer
                                    </a>
                                </div>
                                <div className="flex items-center space-x-8 text-sm text-gray-500" style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', color: '#6b7280' }}>
                                    <div className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <ShieldCheck size={20} color="#22c55e" />
                                        <span>AI Verified Profiles</span>
                                    </div>
                                    <div className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <CreditCard size={20} color="#22c55e" />
                                        <span>Secure Payments</span>
                                    </div>
                                    <div className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={20} color="#22c55e" />
                                        <span>Instant Matching</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative" style={{ position: 'relative' }}>
                                <img alt="AutoHire AI Platform" className="w-full h-auto rounded-2xl shadow-2xl object-top"
                                    src="https://readdy.ai/api/search-image?query=Modern%20AI%20technology%20interface%20showing%20freelancer%20profiles%20and%20business%20connections%2C%20clean%20professional%20design%20with%20blue%20and%20white%20color%20scheme%2C%20futuristic%20dashboard%20with%20user%20avatars%20and%20skill%20matching%20visualization%2C%20minimalist%20background&width=600&height=500&seq=hero1&orientation=landscape"
                                    style={{ width: '100%', height: 'auto', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', objectPosition: 'top' }} />
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
                                    style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', backgroundColor: 'white', padding: '1rem', borderRadius: '0.75rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                                    <div className="flex items-center space-x-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"
                                            style={{ width: '3rem', height: '3rem', backgroundColor: '#dcfce7', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Check size={20} color="#16a34a" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900" style={{ fontWeight: 600, color: '#111827', margin: 0 }}>98% Match Rate</p>
                                            <p className="text-sm text-gray-500" style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>AI-Powered Matching</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="px-6 py-20 bg-white">
                    <div className="max-w-7xl mx-auto container">
                        <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
                                Why Choose AutoHire AI?
                            </h2>
                            <p className="text-xl text-gray-600" style={{ fontSize: '1.25rem', color: '#4b5563' }}>
                                Advanced AI technology meets professional freelancing
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {features.map((feature, index) => (
                                <div key={index} className="text-center space-y-4" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
                                        style={{ width: '4rem', height: '4rem', backgroundColor: feature.bg, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900" style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600" style={{ color: '#4b5563' }}>
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="px-6 py-20 bg-gray-50" style={{ backgroundColor: '#f9fafb' }}>
                    <div className="max-w-7xl mx-auto container">
                        <div className="grid md:grid-cols-4 gap-8 text-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                            <div>
                                <div className="text-4xl font-bold text-indigo-600 mb-2" style={{ fontSize: '2.25rem', fontWeight: 700, color: '#4f46e5', marginBottom: '0.5rem' }}>50K+</div>
                                <div className="text-gray-600" style={{ color: '#4b5563' }}>Verified Freelancers</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-indigo-600 mb-2" style={{ fontSize: '2.25rem', fontWeight: 700, color: '#4f46e5', marginBottom: '0.5rem' }}>10K+</div>
                                <div className="text-gray-600" style={{ color: '#4b5563' }}>Happy Businesses</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-indigo-600 mb-2" style={{ fontSize: '2.25rem', fontWeight: 700, color: '#4f46e5', marginBottom: '0.5rem' }}>98%</div>
                                <div className="text-gray-600" style={{ color: '#4b5563' }}>Success Rate</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-indigo-600 mb-2" style={{ fontSize: '2.25rem', fontWeight: 700, color: '#4f46e5', marginBottom: '0.5rem' }}>24/7</div>
                                <div className="text-gray-600" style={{ color: '#4b5563' }}>AI Support</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="px-6 py-20 bg-indigo-600" style={{ backgroundColor: '#4f46e5' }}>
                    <div className="max-w-4xl mx-auto text-center container" style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontSize: '1.875rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                            Ready to Transform Your Hiring?
                        </h2>
                        <p className="text-xl text-indigo-100 mb-8" style={{ fontSize: '1.25rem', color: '#e0e7ff', marginBottom: '2rem' }}>
                            Join thousands of businesses already using AutoHire AI
                        </p>
                        <a className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-block whitespace-nowrap cursor-pointer"
                            href="/signup"
                            data-discover="true"
                            style={{
                                backgroundColor: 'white',
                                color: '#4f46e5',
                                padding: '1rem 2rem',
                                borderRadius: '0.75rem',
                                fontWeight: 600,
                                display: 'inline-block',
                                whiteSpace: 'nowrap',
                                cursor: 'pointer',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                        >
                            Get Started Free
                        </a>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="px-6 py-8 bg-gray-900" style={{ backgroundColor: '#111827', padding: '2rem 1.5rem' }}>
                <div className="max-w-7xl mx-auto container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div className="flex flex-col md:flex-row justify-between items-center" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                        <div className="flex items-center space-x-2 mb-4 md:mb-0" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center"
                                style={{ width: '2rem', height: '2rem', backgroundColor: '#4f46e5', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Bot color="white" size={18} />
                            </div>
                            <span className="text-xl font-bold text-white" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', fontFamily: 'Pacifico, serif' }}>
                                AutoHire AI
                            </span>
                        </div>
                        <div className="text-gray-400 text-sm" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                            © 2024 AutoHire AI. All rights reserved. |
                            <a href="https://readdy.ai/?origin=logo" className="hover:text-white ml-1 cursor-pointer" style={{ color: 'inherit', marginLeft: '0.25rem', textDecoration: 'none' }}>
                                Powered by Readdy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Welcome;
