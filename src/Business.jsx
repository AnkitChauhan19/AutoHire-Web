import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Briefcase, FileText, MapPin, Clock, DollarSign, Sparkles, PenTool, Search, MessageCircle, TrendingUp, Minus, Plus, Zap, Star, ArrowRight, Bookmark, Users } from 'lucide-react';

const Business = () => {
    const [isAiToolsOpen, setIsAiToolsOpen] = useState(false);
    const aiToolsRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (aiToolsRef.current && !aiToolsRef.current.contains(event.target)) {
                setIsAiToolsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const jobs = [
        {
            id: 1,
            title: "Senior React Developer",
            company: "TechFlow Solutions",
            type: "Remote",
            salary: "$60k - $80k",
            posted: "2 days ago",
            tags: ["React", "Node.js", "TypeScript"]
        },
        {
            id: 2,
            title: "UI/UX Designer",
            company: "Creative Minds Studio",
            type: "Remote",
            salary: "$45k - $65k",
            posted: "5 hours ago",
            tags: ["Figma", "Adobe XD", "Prototyping"]
        },
        {
            id: 3,
            title: "Full Stack Engineer",
            company: "Innovate AI",
            type: "Hybrid",
            salary: "$70k - $95k",
            posted: "1 day ago",
            tags: ["Python", "React", "AWS"]
        },
        {
            id: 4,
            title: "Frontend Developer",
            company: "WebCraft Agency",
            type: "Remote",
            salary: "$50k - $70k",
            posted: "3 days ago",
            tags: ["Vue.js", "Tailwind", "JavaScript"]
        },
        {
            id: 5,
            title: "Mobile App Developer",
            company: "AppWorks",
            type: "Remote",
            salary: "$55k - $85k",
            posted: "1 week ago",
            tags: ["React Native", "iOS", "Android"]
        },
        {
            id: 6,
            title: "DevOps Engineer",
            company: "CloudSystems",
            type: "Remote",
            salary: "$80k - $110k",
            posted: "4 days ago",
            tags: ["Docker", "Kubernetes", "CI/CD"]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Navigation Bar */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-indigo-800 rounded-lg flex items-center justify-center">
                                    <Bot color="white" size={20} />
                                </div>
                                <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    AutoHire AI
                                </span>
                            </a>
                        </div>

                        <div className="flex items-center">
                            <div className="hidden md:flex ml-10 space-x-8">
                                <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <Briefcase className="mr-2" size={18} />
                                    Post Jobs
                                </a>
                                <a href="/manage-applicants" className="border-indigo-500 text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <FileText className="mr-2" size={18} />
                                    Manage Applicants
                                </a>
                                <div
                                    className="relative"
                                    ref={aiToolsRef}
                                >
                                    <button
                                        className="flex items-center px-4 py-2 bg-indigo-800 text-white rounded-md hover:bg-indigo-700 transition-colors focus:outline-none shadow-sm"
                                        style={{ border: 'none', cursor: 'pointer' }}
                                        onClick={() => setIsAiToolsOpen(!isAiToolsOpen)}
                                    >
                                        <Bot className="mr-2" size={18} />
                                        <span className="font-medium">AI Tools</span>
                                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Dropdown */}
                                    {isAiToolsOpen && (
                                        <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-xl z-50 overflow-hidden">
                                            <div className="py-2">
                                                <a href="/ai-search" className="flex items-center px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100">
                                                    <Search size={18} className="mr-3 text-gray-500" />
                                                    AI Search
                                                </a>
                                                <a href="/ai-more" className="flex items-center px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 transition-colors">

                                                    More
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <a href="/business-profile" className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                    TF
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '0.5rem' }}>
                        Welcome back, Techflow Solutions 👋
                    </h1>
                    <p className="text-lg text-gray-600" style={{ fontSize: '1rem', color: '#4b5563', fontFamily: 'Inter, sans-serif' }}>
                        Here's what's happening with your hiring today.
                    </p>
                </div>

                {/* Post Job Button */}
                <div className="mb-8">
                    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center" style={{
                        background: 'linear-gradient(to left, #3a6ff7, #7c3aed)',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.75rem',
                        fontWeight: 600,
                        fontFamily: 'Inter, sans-serif',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        <Plus size={20} />
                        Post a job
                    </button>
                </div>

                {/* Metric Cards Container */}
                <div className="rounded-xl p-6 mb-8" style={{
                    background: 'linear-gradient(to bottom, #f8f7f7, #e4e4fc,rgba(119, 110, 241, 0.17))',
                    borderRadius: '0.75rem',
                    padding: '1.5rem'
                }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1rem'
                    }}>
                        {/* Active Jobs Card */}
                        <div className="bg-white rounded-lg p-6 shadow-sm" style={{
                            backgroundColor: 'white',
                            borderRadius: '1.25rem',
                            border: '2px solid rgb(219, 219, 219)',
                            padding: '1.5rem',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                        }}>
                            <div className="flex items-center justify-between mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '0.875rem', color: '#4b5563', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Active Jobs</span>
                                <div style={{
                                    width: '2rem',
                                    height: '2rem',
                                    backgroundColor: '#e0e7ff',
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Briefcase size={18} color="#524ae6" />
                                </div>
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '0.5rem' }}>12</div>
                            <div className="flex items-center gap-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', width: '100px', backgroundColor: '#ECFDF5', borderRadius: '0.25rem' }}>
                                <TrendingUp size={14} color="#16a34a" />
                                <span style={{ fontSize: '0.75rem', color: '#16a34a', fontFamily: 'Inter, sans-serif' }}>+3 this week</span>
                            </div>
                        </div>

                        {/* Messages Card */}
                        <div className="bg-white rounded-lg p-6 shadow-sm" style={{
                            backgroundColor: 'white',
                            borderRadius: '1.25rem',
                            border: '2px solid rgb(219, 219, 219)',
                            padding: '1.5rem',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                        }}>
                            <div className="flex items-center justify-between mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '0.875rem', color: '#4b5563', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Messages</span>
                                <div style={{
                                    width: '2rem',
                                    height: '2rem',
                                    backgroundColor: '#CFFAFE',
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <MessageCircle size={18} color="#0891B2" />
                                </div>
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '0.5rem' }}>28</div>
                            <div className="flex items-center gap-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', width: '75px', backgroundColor: '#EDEDED', borderRadius: '0.25rem' }}>
                                <Minus size={14} color="#6b7280" />
                                <span style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>5 unread</span>
                            </div>
                        </div>

                        {/* AI Matches Card */}
                        <div className="bg-white rounded-lg p-6 shadow-sm" style={{
                            backgroundColor: 'white',
                            borderRadius: '1.25rem',
                            border: '2px solid rgb(219, 219, 219)',
                            padding: '1.5rem',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                        }}>
                            <div className="flex items-center justify-between mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '0.875rem', color: '#4b5563', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>AI Matches</span>
                                <div style={{
                                    width: '2rem',
                                    height: '2rem',
                                    backgroundColor: '#F3E8FF',
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Zap size={18} color="#9333ea" />
                                </div>
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '0.5rem' }}>156</div>
                            <div className="flex items-center gap-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', width: '80px', backgroundColor: '#ECFDF5', borderRadius: '0.25rem' }}>
                                <TrendingUp size={14} color="#16a34a" />
                                <span style={{ fontSize: '0.75rem', color: '#16a34a', fontFamily: 'Inter, sans-serif' }}>+24 new</span>
                            </div>
                        </div>

                        {/* Total Spent Card */}
                        <div className="bg-white rounded-lg p-6 shadow-sm" style={{
                            backgroundColor: 'white',
                            borderRadius: '1.25rem',
                            border: '2px solid rgb(219, 219, 219)',
                            padding: '1.5rem',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                        }}>
                            <div className="flex items-center justify-between mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '0.875rem', color: '#4b5563', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Total spent</span>
                                <div style={{
                                    width: '2rem',
                                    height: '2rem',
                                    backgroundColor: '#D1FAE5',
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <DollarSign size={18} color="#059669" />
                                </div>
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '0.5rem' }}>$45.2K</div>
                            <div className="flex items-center gap-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', width: '95px', backgroundColor: '#EDEDED', borderRadius: '0.25rem' }}>
                                <Minus size={14} color="#6b7280" />
                                <span style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>This month</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Match Feed Section */}
                <div className="mb-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '3rem',
                                height: '3rem',
                                background: 'linear-gradient(to left, #3a6ff7, #7c3aed)',
                                borderRadius: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Sparkles size={24} color="white" />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '0.25rem' }}>
                                    AI Match feed
                                </h2>
                                <p style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                    Top talent matched to your jobs
                                </p>
                            </div>
                        </div>
                        <button style={{
                            backgroundColor: '#f3e8ff',
                            color: '#9333ea',
                            padding: '0.5rem 1rem',
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            fontFamily: 'Inter, sans-serif',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            3 new matches
                        </button>
                    </div>

                    {/* Profile Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.5rem',
                        marginBottom: '1.5rem'
                    }}>
                        {/* Sarah Chen Card */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            padding: '1.5rem',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                backgroundColor: '#f3e8ff',
                                color: '#9333ea',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                98%
                            </div>
                            <div className="flex items-center gap-4 mb-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{
                                    width: '4rem',
                                    height: '4rem',
                                    borderRadius: '50%',
                                    backgroundColor: '#f3f4f6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <User size={32} color="#6b7280" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '0.25rem' }}>
                                        Sarah Chen
                                    </h3>
                                    <p style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                        Senior React Developer
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 mb-3" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.75rem' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} color="#fbbf24" fill="#fbbf24" />
                                ))}
                                <span style={{ fontSize: '0.875rem', color: '#111827', fontFamily: 'Inter, sans-serif', marginLeft: '0.5rem' }}>
                                    4.9 (47)
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <MapPin size={16} color="#6b7280" />
                                <span style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                    San Francisco, CA
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mb-3" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                <Briefcase size={16} color="#6b7280" />
                                <span style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                    32 Projects
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                {['React', 'TypeScript', 'Node.js', 'GraphQL'].map((skill) => (
                                    <span key={skill} style={{
                                        backgroundColor: '#f3f4f6',
                                        color: '#4b5563',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontFamily: 'Inter, sans-serif'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div style={{
                                backgroundColor: '#f3e8ff',
                                padding: '0.75rem',
                                borderRadius: '0.5rem',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <Sparkles size={16} color="#fbbf24" fill="#fbbf24" />
                                <span style={{ fontSize: '0.75rem', color: '#9333ea', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                                    Perfect skill match for React Developer role
                                </span>
                            </div>
                            <hr style={{
                                border: 'none',
                                borderTop: '1px solid #e5e7eb',
                                margin: '0 0 1rem 0'
                            }} />
                            <div className="flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                                        $85/hr
                                    </span>
                                </div>
                                <button style={{
                                    backgroundColor: '#f97316',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    fontFamily: 'Inter, sans-serif',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <User size={14} color="white" />
                                    Top Talent
                                </button>
                            </div>
                        </div>

                        {/* Marcus Johnson Card */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            padding: '1.5rem',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                backgroundColor: '#f3e8ff',
                                color: '#9333ea',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                95%
                            </div>
                            <div className="flex items-center gap-4 mb-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{
                                    width: '4rem',
                                    height: '4rem',
                                    borderRadius: '50%',
                                    backgroundColor: '#f3f4f6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <User size={32} color="#6b7280" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '0.25rem' }}>
                                        Marcus Johnson
                                    </h3>
                                    <p style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                        Full Stack Engineer
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 mb-3" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.75rem' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} color="#fbbf24" fill="#fbbf24" />
                                ))}
                                <span style={{ fontSize: '0.875rem', color: '#111827', fontFamily: 'Inter, sans-serif', marginLeft: '0.5rem' }}>
                                    4.8 (49)
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <MapPin size={16} color="#6b7280" />
                                <span style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                    Austin, TX
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mb-3" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                <Briefcase size={16} color="#6b7280" />
                                <span style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                    18 Projects
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                {['Python', 'Django', 'React', 'AWS'].map((skill) => (
                                    <span key={skill} style={{
                                        backgroundColor: '#f3f4f6',
                                        color: '#4b5563',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontFamily: 'Inter, sans-serif'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div style={{
                                backgroundColor: '#f3e8ff',
                                padding: '0.75rem',
                                borderRadius: '0.5rem',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <Sparkles size={16} color="#fbbf24" fill="#fbbf24" />
                                <span style={{ fontSize: '0.75rem', color: '#9333ea', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                                    Perfect skill match for React Developer role
                                </span>
                            </div>
                            <hr style={{
                                border: 'none',
                                borderTop: '1px solid #e5e7eb',
                                margin: '0 0 1rem 0'
                            }} />
                            <div className="flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                                        $75/hr
                                    </span>
                                </div>
                                <button style={{
                                    backgroundColor: '#f97316',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    fontFamily: 'Inter, sans-serif',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <User size={14} color="white" />
                                    Top Talent
                                </button>
                            </div>
                        </div>

                        {/* Elena Rodriguez Card */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            padding: '1.5rem',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                backgroundColor: '#f3e8ff',
                                color: '#9333ea',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                92%
                            </div>
                            <div className="flex items-center gap-4 mb-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{
                                    width: '4rem',
                                    height: '4rem',
                                    borderRadius: '50%',
                                    backgroundColor: '#f3f4f6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <User size={32} color="#6b7280" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '0.25rem' }}>
                                        Elena Rodriguez
                                    </h3>
                                    <p style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                        UI/UX Designer
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 mb-3" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.75rem' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} color="#fbbf24" fill="#fbbf24" />
                                ))}
                                <span style={{ fontSize: '0.875rem', color: '#111827', fontFamily: 'Inter, sans-serif', marginLeft: '0.5rem' }}>
                                    5.0 (62)
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <MapPin size={16} color="#6b7280" />
                                <span style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                    New York, NY
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mb-3" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                <Briefcase size={16} color="#6b7280" />
                                <span style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                    32 Projects
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                {['Figma', 'UI Design', 'User Research', 'Prototyping'].map((skill) => (
                                    <span key={skill} style={{
                                        backgroundColor: '#f3f4f6',
                                        color: '#4b5563',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontFamily: 'Inter, sans-serif'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div style={{
                                backgroundColor: '#f3e8ff',
                                padding: '0.75rem',
                                borderRadius: '0.5rem',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <Sparkles size={16} color="#fbbf24" fill="#fbbf24" />
                                <span style={{ fontSize: '0.75rem', color: '#9333ea', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                                    Perfect skill match for React Developer role
                                </span>
                            </div>
                            <hr style={{
                                border: 'none',
                                borderTop: '1px solid #e5e7eb',
                                margin: '0 0 1rem 0'
                            }} />
                            <div className="flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                                        $90/hr
                                    </span>
                                </div>
                                <button style={{
                                    backgroundColor: '#f97316',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    fontFamily: 'Inter, sans-serif',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <User size={14} color="white" />
                                    Top Talent
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer Button */}
                    <div className="flex justify-center" style={{ display: 'flex', justifyContent: 'center' }}>
                        <button style={{
                            backgroundColor: 'white',
                            color: '#8940d9',
                            padding: '0.75rem 2rem',
                            borderRadius: '0 0 0.75rem 0.75rem',
                            fontSize: '1rem',
                            fontWeight: 500,
                            fontFamily: 'Inter, sans-serif',
                            border: ' 2px solid rgb(224, 224, 224)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            View All Matches
                            <ArrowRight size={16} color="#8940d9" />
                        </button>
                    </div>
                </div>

                {/* Active Jobs Section */}
                <div className="mb-8" style={{
                    backgroundColor: '#f9fafb',
                    borderRadius: '0.75rem',
                    padding: '1.5rem'
                }}>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                            Active Jobs
                        </h2>
                        <a href="#" style={{
                            fontSize: '1rem',
                            color: '#111827',
                            fontFamily: 'Inter, sans-serif',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}>
                            View All
                        </a>
                                    </div>
                    <hr style={{
                        border: 'none',
                        borderTop: '1px solid #e5e7eb',
                        margin: '0 0 1.5rem 0'
                    }} />

                    {/* Job Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1.5rem'
                    }}>
                        {/* Job Card 1 */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            padding: '1.5rem',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                        }}>
                        {/* Top Row */}
                        <div className="flex items-start justify-between mb-4" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                                <div style={{
                                    width: '3rem',
                                    height: '3rem',
                                    borderRadius: '25%',
                                    backgroundColor: '#f3f4f6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#4b5563', fontFamily: 'Inter, sans-serif' }}>
                                        T
                                    </span>
                                    </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '0.25rem' }}>
                                        Senior React Developer
                                    </h3>
                                    <p style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                        TechCorp Inc.
                                    </p>
                                </div>
                            </div>
                            <Bookmark size={24} color="#6b7280" style={{ cursor: 'pointer' }} />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span style={{
                                backgroundColor: '#f3e8ff',
                                color: '#9333ea',
                                padding: '0.375rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.875rem',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500
                            }}>
                                Contract
                            </span>
                            <span style={{
                                backgroundColor: '#f3f4f6',
                                color: '#4b5563',
                                padding: '0.375rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.875rem',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500
                            }}>
                                Senior
                            </span>
                            <span style={{
                                backgroundColor: '#dbeafe',
                                color: '#3b82f6',
                                padding: '0.375rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.875rem',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500
                            }}>
                                Remote
                            </span>
                            <span style={{
                                backgroundColor: '#f3f4f6',
                                color: '#4b5563',
                                padding: '0.375rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.875rem',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500
                            }}>
                                React
                            </span>
                            <span style={{
                                backgroundColor: '#f3f4f6',
                                color: '#4b5563',
                                padding: '0.375rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.875rem',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500
                            }}>
                                TypeScript
                            </span>
                            <span style={{
                                backgroundColor: '#f3f4f6',
                                color: '#4b5563',
                                padding: '0.375rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.875rem',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500
                            }}>
                                Node.js
                            </span>
                                </div>

                        {/* Bottom Row */}
                        <div className="flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <DollarSign size={20} color="#111827" />
                                <span style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                                    $80-120/hr
                                </span>
                            </div>
                            <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Users size={18} color="#6b7280" />
                                <span style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                    24 applications
                                </span>
                            </div>
                        </div>
                                    </div>

                        {/* Job Card 2 */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            padding: '1.5rem',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                        }}>
                            {/* Top Row */}
                            <div className="flex items-start justify-between mb-4" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                                    <div style={{
                                        width: '3rem',
                                        height: '3rem',
                                        borderRadius: '25%',
                                        backgroundColor: '#f3f4f6',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#4b5563', fontFamily: 'Inter, sans-serif' }}>
                                            D
                                        </span>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '0.25rem' }}>
                                            Full Stack Engineer
                                        </h3>
                                        <p style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                            DataFlow Systems
                                        </p>
                                    </div>
                                </div>
                                <Bookmark size={24} color="#6b7280" style={{ cursor: 'pointer' }} />
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                <span style={{
                                    backgroundColor: '#f3e8ff',
                                    color: '#9333ea',
                                    padding: '0.375rem 0.75rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500
                                }}>
                                    Full-time
                                </span>
                                <span style={{
                                    backgroundColor: '#f3f4f6',
                                    color: '#4b5563',
                                    padding: '0.375rem 0.75rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500
                                }}>
                                    Mid-level
                                </span>
                                <span style={{
                                    backgroundColor: '#dbeafe',
                                    color: '#3b82f6',
                                    padding: '0.375rem 0.75rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500
                                }}>
                                    Hybrid
                                </span>
                                <span style={{
                                    backgroundColor: '#f3f4f6',
                                    color: '#4b5563',
                                    padding: '0.375rem 0.75rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500
                                }}>
                                    Python
                                </span>
                                <span style={{
                                    backgroundColor: '#f3f4f6',
                                    color: '#4b5563',
                                    padding: '0.375rem 0.75rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500
                                }}>
                                    Django
                                </span>
                                <span style={{
                                    backgroundColor: '#f3f4f6',
                                    color: '#4b5563',
                                    padding: '0.375rem 0.75rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500
                                }}>
                                    PostgreSQL
                                </span>
                                </div>

                            {/* Bottom Row */}
                            <div className="flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <DollarSign size={20} color="#111827" />
                                    <span style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                                        $90-130/hr
                                        </span>
                                </div>
                                <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Users size={18} color="#6b7280" />
                                    <span style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                                        18 applications
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Business;