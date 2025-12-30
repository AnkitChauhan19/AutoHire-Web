import React, { useState } from 'react';
import { Bot, Sparkles, FileText, Handshake, CheckCircle, Building2, User, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const Demo = () => {
    const [selectedTab, setSelectedTab] = useState('business');

    const businessSteps = [
        {
            step: "Step 1",
            title: "Post Your Job",
            icon: <FileText size={24} color="#9333ea" />,
            description: "Describe your project requirements. Our AI helps you write the perfect job description with smart suggestions.",
            features: [
                "AI-powered job description generator",
                "Smart skill recommendations",
                "Automatic budget suggestions",
                "Custom screening questions"
            ],
            chipColor: '#f3e8ff',
            chipTextColor: '#9333ea'
        },
        {
            step: "Step 2",
            title: "Get AI Matches",
            icon: <Sparkles size={24} color="#9333ea" />,
            description: "Our algorithm analyzes thousands of profiles to find freelancers perfectly matched to your needs.",
            features: [
                "Match score based on 50+ factors",
                "Verified skills & experience",
                "Secure milestone payments",
                "Project tracking tools"
            ],
            chipColor: '#f3e8ff',
            chipTextColor: '#9333ea'
        },
        {
            step: "Step 3",
            title: "Hire & Collaborate",
            icon: <Handshake size={24} color="#16a34a" />,
            description: "Review profiles, chat with candidates, send contracts, and start working together seamlessly.",
            features: [
                "Built-in messaging system",
                "One-click contract creation",
                "Availability checking",
                "Past project success rate"
            ],
            chipColor: '#dcfce7',
            chipTextColor: '#16a34a'
        }
    ];

    const freelancerSteps = [
        {
            step: "Step 1",
            title: "Build Your Profile",
            icon: <FileText size={24} color="#9333ea" />,
            description: "Create a standout profile showcasing your skills, portfolio, and experience. Get verified to boost visibility.",
            features: [
                "Skill verification tests",
                "Portfolio showcase",
                "Video introduction",
                "Work history import"
            ],
            chipColor: '#f3e8ff',
            chipTextColor: '#9333ea'
        },
        {
            step: "Step 2",
            title: "Get Matched to Jobs",
            icon: <Sparkles size={24} color="#9333ea" />,
            description: "Receive personalized job recommendations based on your skills, preferences, and availability.",
            features: [
                "Daily job alerts",
                "Match score visibility",
                "Salary range insights",
                "Company information"
            ],
            chipColor: '#f3e8ff',
            chipTextColor: '#9333ea'
        },
        {
            step: "Step 3",
            title: "Apply & Get Hired",
            icon: <Handshake size={24} color="#16a34a" />,
            description: "Apply to matched jobs with one click. Chat with clients and sign contracts directly on the platform.",
            features: [
                "One-click applications",
                "Direct client messaging",
                "Contract management",
                "Secure payments"
            ],
            chipColor: '#dcfce7',
            chipTextColor: '#16a34a'
        }
    ];

    const steps = selectedTab === 'business' ? businessSteps : freelancerSteps;

    return (
        <div className="min-h-screen flex flex-col bg-white">
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
                        href="/signup"
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
                        Sign Up
                    </a>
                </div>
            </header>

            <main className="flex-1">
                {/* How AutoHire Works Section */}
                <div className="px-6 pt-20 pb-8 bg-white">
                    <div className="max-w-7xl mx-auto container">
                        {/* Header Section */}
                        <div className="text-center mb-12" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            {/* Simple & Powerful Chip */}
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                backgroundColor: '#f3e8ff',
                                color: '#9333ea',
                                borderRadius: '9999px',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                fontFamily: 'Inter, sans-serif',
                                marginBottom: '1rem'
                            }}>
                                <Sparkles size={16} color="#9333ea" />
                                Simple & Powerful
                            </div>
                            
                            <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ 
                                fontSize: '2.25rem', 
                                fontWeight: 700, 
                                color: '#111827', 
                                marginBottom: '1rem',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                How AutoHire Works
                            </h1>
                            
                            <p className="text-xl text-gray-600 mb-8" style={{ 
                                fontSize: '1.25rem', 
                                color: '#4b5563',
                                marginBottom: '2rem',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400
                            }}>
                                Whether you're hiring talent or looking for opportunities, our AI-powered platform makes it effortless.
                            </p>

                            {/* Toggle Buttons */}
                            <div className="flex items-center justify-center" style={{ 
                                display: 'inline-flex', 
                                alignItems: 'center',
                                padding: '0.25rem',
                                backgroundColor: '#f3f4f6',
                                borderRadius: '0.75rem',
                                position: 'relative'
                            }}>
                                <button
                                    onClick={() => setSelectedTab('business')}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        padding: '0 1.25rem',
                                        height: '4rem',
                                        width: '12rem',
                                        borderRadius: '0.5rem',
                                        border: 'none',
                                        backgroundColor: selectedTab === 'business' ? '#ffffff' : 'transparent',
                                        color: selectedTab === 'business' ? '#1f2937' : '#4b5563',
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '0.875rem',
                                        fontWeight: selectedTab === 'business' ? 700 : 400,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        boxShadow: selectedTab === 'business' ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : 'none'
                                    }}
                                >
                                    <Building2 size={16} color={selectedTab === 'business' ? '#1f2937' : '#4b5563'} />
                                    For Business
                                </button>
                                <button
                                    onClick={() => setSelectedTab('freelancer')}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        padding: '0 1.25rem',
                                        height: '4rem',
                                        width: '12rem',
                                        borderRadius: '0.5rem',
                                        border: 'none',
                                        backgroundColor: selectedTab === 'freelancer' ? '#ffffff' : 'transparent',
                                        color: selectedTab === 'freelancer' ? '#1f2937' : '#4b5563',
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '0.875rem',
                                        fontWeight: selectedTab === 'freelancer' ? 700 : 400,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        boxShadow: selectedTab === 'freelancer' ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : 'none'
                                    }}
                                >
                                    <User size={16} color={selectedTab === 'freelancer' ? '#1f2937' : '#4b5563'} />
                                    For Freelancers
                                </button>
                            </div>
                        </div>

                        {/* Steps - Side by Side */}
                        <div className="grid md:grid-cols-3 gap-8" style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(3, 1fr)', 
                            gap: '2rem' 
                        }}>
                            {steps.map((step, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-lg p-6"
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: '0.5rem',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1rem'
                                    }}
                                >
                                    {/* Step Chip */}
                                    <div style={{
                                        display: 'inline-flex',
                                        padding: '0.375rem 0.75rem',
                                        backgroundColor: step.chipColor,
                                        color: step.chipTextColor,
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        fontFamily: 'Inter, sans-serif',
                                        width: 'fit-content'
                                    }}>
                                        {step.step}
                                    </div>

                                    {/* Title with Icon */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{
                                            width: '2.5rem',
                                            height: '2.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {step.icon}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.25rem',
                                            fontWeight: 700,
                                            color: '#111827',
                                            fontFamily: 'Inter, sans-serif',
                                            margin: 0
                                        }}>
                                            {step.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p style={{
                                        fontSize: '0.875rem',
                                        color: '#4b5563',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: 1.625,
                                        margin: 0
                                    }}>
                                        {step.description}
                                    </p>

                                    {/* Features List */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                                        {step.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                                <CheckCircle size={18} color="#16a34a" fill="#ffffff" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                                                <span style={{
                                                    fontSize: '0.875rem',
                                                    color: '#4b5563',
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 400,
                                                    lineHeight: 1.5
                                                }}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose AutoHire Section */}
                <div className="px-6 pt-12 pb-20 bg-white" style={{ paddingTop: '1rem', paddingBottom: '5rem' }}>
                    <div className="max-w-7xl mx-auto container">
                        {/* Header */}
                        <div className="text-center mb-12" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ 
                                fontSize: '2.25rem', 
                                fontWeight: 700, 
                                color: '#111827', 
                                marginBottom: '1rem',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                Why Choose AutoHire
                            </h2>
                            <p className="text-xl text-gray-600" style={{ 
                                fontSize: '1.25rem', 
                                color: '#4b5563',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400
                            }}>
                                Benefits that make a real difference
                            </p>
                        </div>

                        {/* Feature Cards - Side by Side */}
                        <div className="grid md:grid-cols-3 gap-6" style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(3, 1fr)', 
                            gap: '1.5rem',
                            marginBottom: '4rem'
                        }}>
                            {/* Card 1: Faster Hiring */}
                            <div className="bg-white rounded-lg shadow-sm p-6" style={{
                                backgroundColor: 'white',
                                borderRadius: '0.75rem',
                                padding: '1.5rem',
                                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    width: '3rem',
                                    height: '3rem',
                                    backgroundColor: '#ffedd5',
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Clock size={24} color="#ea580c" />
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: '#111827',
                                    fontFamily: 'Inter, sans-serif',
                                    margin: 0
                                }}>
                                    80% Faster Hiring
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: '#4b5563',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: 1.625,
                                    margin: 0
                                }}>
                                    AI matching reduces time-to-hire from weeks to hours.
                                </p>
                            </div>

                            {/* Card 2: Verified Talent */}
                            <div className="bg-white rounded-lg shadow-sm p-6" style={{
                                backgroundColor: 'white',
                                borderRadius: '0.75rem',
                                padding: '1.5rem',
                                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    width: '3rem',
                                    height: '3rem',
                                    backgroundColor: '#dcfce7',
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <ShieldCheck size={24} color="#16a34a" />
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: '#111827',
                                    fontFamily: 'Inter, sans-serif',
                                    margin: 0
                                }}>
                                    100% Verified Talent
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: '#4b5563',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: 1.625,
                                    margin: 0
                                }}>
                                    Every freelancer passes skill tests and identity verification.
                                </p>
                            </div>

                            {/* Card 3: Match Accuracy */}
                            <div className="bg-white rounded-lg shadow-sm p-6" style={{
                                backgroundColor: 'white',
                                borderRadius: '0.75rem',
                                padding: '1.5rem',
                                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    width: '3rem',
                                    height: '3rem',
                                    backgroundColor: '#f3e8ff',
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Sparkles size={24} color="#9333ea" />
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: '#111827',
                                    fontFamily: 'Inter, sans-serif',
                                    margin: 0
                                }}>
                                    95% Match Accuracy
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: '#4b5563',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: 1.625,
                                    margin: 0
                                }}>
                                    Our AI learns and improves with every successful hire.
                                </p>
                            </div>
                        </div>

                        {/* Call to Action Section */}
                        <div className="text-center" style={{ textAlign: 'center' }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ 
                                fontSize: '1.875rem', 
                                fontWeight: 700, 
                                color: '#111827', 
                                marginBottom: '1rem',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                Ready to get started?
                            </h2>
                            <p className="text-xl text-gray-600 mb-8" style={{ 
                                fontSize: '1.25rem', 
                                color: '#4b5563',
                                marginBottom: '2rem',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400
                            }}>
                                Join thousands of businesses and freelancers already using AutoHire.
                            </p>
                            <a 
                                href="/signup"
                                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center whitespace-nowrap cursor-pointer"
                                style={{
                                    backgroundColor: '#4f46e5',
                                    color: 'white',
                                    padding: '1rem 2rem',
                                    borderRadius: '0.75rem',
                                    fontWeight: 600,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.2s',
                                    fontFamily: 'Inter, sans-serif'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
                            >
                                Create Free Account
                                <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                            </a>
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
                                            href={link === 'How It Works' ? '/demo' : `#${link.toLowerCase().replace(/\s+/g, '-')}`}
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

export default Demo;

