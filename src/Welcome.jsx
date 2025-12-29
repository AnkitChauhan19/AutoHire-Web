import React from 'react';
import { Bot, Building2, User, ShieldCheck, CreditCard, Clock, Check, Brain, FileText, ArrowRight, Play, Star, Sparkles, Zap, Globe } from 'lucide-react';

const Welcome = () => {
    const features = [
        {
            title: "AI-Powered Matching",
            description: "Our smart algorithms analyze skills, experience, and preferences to find perfect matches in seconds.",
            icon: <Sparkles size={24} color="#9333ea" />,
            bg: '#f3e8ff', // purple-100
            iconColor: '#9333ea'
        },
        {
            title: "Verified Talent",
            description: "Every freelancer goes through skill verification and identity checks for your peace of mind.",
            icon: <ShieldCheck size={24} color="#16a34a" />,
            bg: '#dcfce7', // green-100
            iconColor: '#16a34a'
        },
        {
            title: "Instant Hiring",
            description: "From job posting to signed contract in hours, not weeks. Streamlined workflow saves time.",
            icon: <Zap size={24} color="#f59e0b" />,
            bg: '#fef3c7', // yellow-100
            iconColor: '#f59e0b'
        },
        {
            title: "Global Talent Pool",
            description: "Access top professionals from around the world, across 100+ skill categories.",
            icon: <Globe size={24} color="#3b82f6" />,
            bg: '#dbeafe', // blue-100
            iconColor: '#3b82f6'
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header style={{ padding: '16px 24px', borderBottom: '1px solid rgb(195, 195, 195)', background: 'white' }}>
                <div className="container flex items-center justify-between" style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div className="flex items-center" style={{ gap: '0.5rem' }}>
                        <div style={{
                            width: '2rem',
                            height: '2rem',
                            backgroundColor: '#6240EA',
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
                            fontFamily: 'Inter, sans-serif'
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
                <div className="px-6 py-20">
                    <div className="max-w-7xl mx-auto container">
                        <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <h1 className="text-5xl font-bold text-gray-900 leading-tight" style={{ fontSize: '3rem', fontWeight: 700, color: '#111827', lineHeight: 1.25 }}>
                                        Hire the <span className="text-indigo-600" style={{ color: '#4f46e5' }}>perfect talent</span> with AI precision
                                    </h1>
                                    <p className="text-xl text-gray-600 leading-relaxed" style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.625 }}>
                                        AutoHire uses advanced AI to match businesses with top freelancers instantly. Post a job, get matched in seconds, and start working together seamlessly.
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
                                            borderRadius: '0.5rem',
                                            fontWeight: 700,
                                            textAlign: 'center',
                                            whiteSpace: 'nowrap',
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center'
                                        }}>
                                        Start Hiring Free
                                        <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                                    </a>
                                    <a className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-center whitespace-nowrap cursor-pointer"
                                        href="/"
                                        data-discover="true"
                                        style={{
                                            backgroundColor: 'white',
                                            color: '#4f46e5',
                                            border: '2px solid #4f46e5',
                                            padding: '1rem 2rem',
                                            borderRadius: '0.5rem',
                                            fontWeight: 700,
                                            textAlign: 'center',
                                            whiteSpace: 'nowrap',
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center'
                                        }}>
                                        Watch Demo
                                        <Play size={20} style={{ marginLeft: '0.5rem' }} />
                                    </a>
                                </div>
                            </div>
                            <div className="relative" style={{ position: 'relative' }}>
                                <img alt="AutoHire AI Platform" className="w-full h-auto rounded-2xl shadow-2xl object-top"
                                    src="https://readdy.ai/api/search-image?query=Modern%20AI%20technology%20interface%20showing%20freelancer%20profiles%20and%20business%20connections%2C%20clean%20professional%20design%20with%20blue%20and%20white%20color%20scheme%2C%20futuristic%20dashboard%20with%20user%20avatars%20and%20skill%20matching%20visualization%2C%20minimalist%20background&width=600&height=500&seq=hero1&orientation=landscape"
                                    style={{ width: '100%', height: 'auto', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', objectPosition: 'top' }} />

                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Proof */}
                <div className="px-6 py-12 bg-white">
                    <div className="max-w-7xl mx-auto container">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
                            {/* Review Section */}
                            <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                    {[0, 1, 2, 3, 4].map((index) => (
                                        <div
                                            key={index}
                                            style={{
                                                width: '2.5rem',
                                                height: '2.5rem',
                                                borderRadius: '50%',
                                                backgroundColor: '#e5e7eb',
                                                border: '2px solid white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginLeft: index > 0 ? '-0.75rem' : '0',
                                                zIndex: 5 - index
                                            }}
                                        >
                                            <User size={18} color="#6b7280" />
                                        </div>
                                    ))}
                                </div>
                                {/* Rating */}
                                <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                    <div className="flex items-center gap-1" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        {[0, 1, 2, 3, 4].map((index) => (
                                            <Star key={index} size={16} color="#fbbf24" fill="#fbbf24" />
                                        ))}
                                    </div>
                                    <span style={{ fontSize: '0.875rem', color: '#4b5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                                        4.9/5 from 2,000+ reviews
                                    </span>
                                </div>
                            </div>

                            {/* Trusted By Section */}
                            <div className="flex flex-col items-center justify-center gap-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                                <p style={{ fontSize: '0.875rem', color: '#4b5563', fontFamily: 'Inter, sans-serif', fontWeight: 400, margin: 0, textAlign: 'center' }}>
                                    Trusted by innovative companies worldwide
                                </p>
                                {/* Company Logos */}
                                <div className="flex flex-col items-center gap-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                                    <div className="flex items-center justify-center gap-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
                                        {['Google', 'Microsoft', 'indeed'].map((company, index) => (
                                            <span
                                                key={index}
                                                style={{
                                                    fontSize: '1.25rem',
                                                    color: '#d1d5db',
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 500,
                                                    textTransform: 'capitalize',
                                                    letterSpacing: '0.025em'
                                                }}
                                            >
                                                {company}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-center gap-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
                                        {['amazon', 'stripe', 'slack'].map((company, index) => (
                                            <span
                                                key={index}
                                                style={{
                                                    fontSize: '1.25rem',
                                                    color: '#d1d5db',
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 500,
                                                    textTransform: 'capitalize',
                                                    letterSpacing: '0.025em'
                                                }}
                                            >
                                                {company}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
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
                                <div className="text-4xl font-bold text-indigo-600 mb-2" style={{ fontSize: '2.25rem', fontWeight: 700, color: '#4f46e5', marginBottom: '0.5rem' }}>12K+</div>
                                <div className="text-gray-600" style={{ color: '#4b5563' }}>Companies Hiring</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-indigo-600 mb-2" style={{ fontSize: '2.25rem', fontWeight: 700, color: '#4f46e5', marginBottom: '0.5rem' }}>$24M +</div>
                                <div className="text-gray-600" style={{ color: '#4b5563' }}>Paid to Talent</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-indigo-600 mb-2" style={{ fontSize: '2.25rem', fontWeight: 700, color: '#4f46e5', marginBottom: '0.5rem' }}>98%</div>
                                <div className="text-gray-600" style={{ color: '#4b5563' }}>Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="px-6 py-20 bg-white">
                    <div className="max-w-7xl mx-auto container">
                        <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <div style={{
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                backgroundColor: '#f3e8ff',
                                color: '#7c3aed',
                                borderRadius: '9999px',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                fontFamily: 'Inter, sans-serif',
                                marginBottom: '1rem'
                            }}>
                                Features
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
                                Why Choose AutoHire AI?
                            </h2>
                            <p className="text-xl text-gray-600" style={{ fontSize: '1.25rem', color: '#4b5563' }}>
                                Advanced AI technology meets professional freelancing
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                            {features.map((feature, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-lg shadow-sm p-6"
                                    style={{ 
                                        backgroundColor: 'white',
                                        borderRadius: '0.75rem',
                                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1rem'
                                    }}
                                >
                                    <div 
                                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                                        style={{ 
                                            width: '3rem', 
                                            height: '3rem', 
                                            backgroundColor: feature.bg, 
                                            borderRadius: '0.5rem', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed" style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.625, fontFamily: 'Inter, sans-serif', margin: 0 }}>
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="px-2 py-8" style={{ background: 'linear-gradient(to bottom, #4f46e5, #7F78F8)', borderRadius: '1.25rem', width: '85%', marginLeft: '7.5%', marginRight: '7.5%', marginBottom: '5%' }}>
                    <div className="max-w-4xl mx-auto container" style={{ maxWidth: '56rem', margin: '0 auto' }}>
                        <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontSize: '1.875rem', fontWeight: 700, color: 'white', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>
                                Ready to transform your hiring?
                            </h2>
                            <p className="text-xl text-white mb-8" style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                                Join thousands of companies finding top talent with AI-powered matching. Start your free trial today.
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <a className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-block whitespace-nowrap cursor-pointer shadow-lg"
                                href="/signup"
                                data-discover="true"
                                style={{
                                    backgroundColor: 'white',
                                    color: '#111827',
                                    padding: '1rem 2rem',
                                    borderRadius: '0.75rem',
                                    fontWeight: 700,
                                    display: 'inline-block',
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.2s',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                    fontFamily: 'Inter, sans-serif'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                            >
                                Get Started Free
                            </a>
                            <a href="/learn-more" 
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                            >
                                Learn More
                                <ArrowRight size={16} />
                            </a>
                        </div>
                        {/* Value Proposition Section */}
                        <div style={{
                            backgroundColor: '#ffffff14',
                            borderRadius: '1.25rem',
                            padding: '1.5rem',
                            display: 'flex',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            {/* Left Half - Free */}
                            <div style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingRight: '1rem',
                                borderRight: '1px solid rgba(255, 255, 255, 0.3)'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 700,
                                    color: 'white',
                                    fontFamily: 'Inter, sans-serif',
                                    marginBottom: '0.5rem'
                                }}>
                                    Free
                                </div>
                                <div style={{
                                    fontSize: '0.875rem',
                                    fontWeight: 400,
                                    color: 'white',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    to start
                                </div>
                            </div>
                            {/* Right Half - 0% Platform Fee */}
                            <div style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: '1rem'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 700,
                                    color: 'white',
                                    fontFamily: 'Inter, sans-serif',
                                    marginBottom: '0.5rem'
                                }}>
                                    0%
                                </div>
                                <div style={{
                                    fontSize: '0.875rem',
                                    fontWeight: 400,
                                    color: 'white',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    platform fee
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="px-6 py-12 bg-gray-900" style={{ backgroundColor: '#111827', padding: '3rem 1.5rem' }}>
                <div className="max-w-7xl mx-auto container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div className="flex flex-col gap-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {/* Brand Identity Section */}
                        <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className="flex items-center space-x-2 mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <div className="w-10 h-10 bg-indigo-800 rounded-lg flex items-center justify-center"
                                    style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Bot color="white" size={20} />
                                </div>
                            </div>
                            <p style={{ 
                                color: '#9ca3af', 
                                fontSize: '0.875rem', 
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: 1.5,
                                margin: 0
                            }}>
                                AI-powered hiring platform connecting businesses with verified freelancers worldwide.
                            </p>
                        </div>

                        {/* Navigation Columns */}
                        <div className="flex flex-row gap-12" style={{ display: 'flex', flexDirection: 'row', gap: '5rem', alignItems: 'flex-start' }}>
                            {/* Product Column */}
                            <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <h3 style={{ 
                                    color: 'white', 
                                    fontSize: '1.25rem', 
                                    fontWeight: 700, 
                                    fontFamily: 'Inter, sans-serif',
                                    margin: 0,
                                    marginBottom: '0.5rem'
                                }}>
                                    Product
                                </h3>
                                <div className="flex flex-col gap-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {['How It Works', 'Find Talent', 'Find Jobs', 'Pricing'].map((link, index) => (
                                        <a 
                                            key={index}
                                            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                                            style={{ 
                                                color: '#9ca3af', 
                                                fontSize: '0.875rem', 
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                textDecoration: 'none',
                                                transition: 'color 0.2s'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                                            onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Company Column */}
                            <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <h3 style={{ 
                                    color: 'white', 
                                    fontSize: '1.25rem', 
                                    fontWeight: 700, 
                                    fontFamily: 'Inter, sans-serif',
                                    margin: 0,
                                    marginBottom: '0.5rem'
                                }}>
                                    Company
                                </h3>
                                <div className="flex flex-col gap-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {['About Us', 'Careers', 'Blog', 'Press'].map((link, index) => (
                                        <a 
                                            key={index}
                                            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                                            style={{ 
                                                color: '#9ca3af', 
                                                fontSize: '0.875rem', 
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                textDecoration: 'none',
                                                transition: 'color 0.2s'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                                            onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Support Column */}
                            <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <h3 style={{ 
                                    color: 'white', 
                                    fontSize: '1.25rem', 
                                    fontWeight: 700, 
                                    fontFamily: 'Inter, sans-serif',
                                    margin: 0,
                                    marginBottom: '0.5rem'
                                }}>
                                    Support
                                </h3>
                                <div className="flex flex-col gap-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {['Help Center', 'Contact Us', 'Privacy', 'Terms'].map((link, index) => (
                                        <a 
                                            key={index}
                                            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                                            style={{ 
                                                color: '#9ca3af', 
                                                fontSize: '0.875rem', 
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                textDecoration: 'none',
                                                transition: 'color 0.2s'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                                            onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Welcome;
