import React, { useState, useRef, useEffect } from 'react';
import { Bot, Briefcase, FileText, Send, Clock, CheckCircle, XCircle, AlertCircle, Sparkles, PenTool, Search } from 'lucide-react';

const ManageApplicants = () => {
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
    const applications = [
        {
            id: 1,
            jobTitle: "Senior React Developer",
            company: "TechFlow Solutions",
            appliedDate: "2 days ago",
            status: "Under Review",
            statusType: "pending"
        },
        {
            id: 2,
            jobTitle: "Full Stack Engineer",
            company: "Innovate AI",
            appliedDate: "5 days ago",
            status: "Interview Scheduled",
            statusType: "active"
        },
        {
            id: 3,
            jobTitle: "Frontend Developer",
            company: "WebCraft Agency",
            appliedDate: "1 week ago",
            status: "Rejected",
            statusType: "rejected"
        },
        {
            id: 4,
            jobTitle: "UI/UX Designer",
            company: "Creative Minds Studio",
            appliedDate: "3 days ago",
            status: "Under Review",
            statusType: "pending"
        }
    ];

    const proposals = [
        {
            id: 1,
            jobTitle: "React Native Developer",
            company: "Mobile First Inc",
            receivedDate: "1 day ago",
            budget: "$5,000 - $8,000",
            status: "New",
            statusType: "new"
        },
        {
            id: 2,
            jobTitle: "Backend API Development",
            company: "DataFlow Systems",
            receivedDate: "3 days ago",
            budget: "$4,500 - $6,500",
            status: "Reviewed",
            statusType: "reviewed"
        },
        {
            id: 3,
            jobTitle: "E-commerce Platform",
            company: "ShopEasy",
            receivedDate: "1 week ago",
            budget: "$10,000 - $15,000",
            status: "Declined",
            statusType: "declined"
        }
    ];

    const getStatusColor = (statusType) => {
        switch (statusType) {
            case 'active':
            case 'new':
                return 'bg-green-100 text-green-800';
            case 'pending':
            case 'reviewed':
                return 'bg-indigo-100 text-indigo-800';
            case 'rejected':
            case 'declined':
                return 'bg-red-50 text-red-700';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (statusType) => {
        switch (statusType) {
            case 'active':
            case 'new':
                return <CheckCircle size={16} />;
            case 'pending':
            case 'reviewed':
                return <AlertCircle size={16} />;
            case 'rejected':
            case 'declined':
                return <XCircle size={16} />;
            default:
                return <Clock size={16} />;
        }
    };

    return (
        <div className="min-h-screen bg-indigo-100">
            {/* Navigation Bar */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                    <Bot color="white" size={20} />
                                </div>
                                <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Pacifico, serif' }}>
                                    AutoHire AI
                                </span>
                            </a>
                        </div>

                        <div className="flex items-center">
                            <div className="hidden md:flex ml-10 space-x-8">
                                <a href="business" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <Briefcase className="mr-2" size={18} />
                                    Post Jobs
                                </a>
                                <a href="/manage-applicants" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <FileText className="mr-2" size={18} />
                                    Manage Applicants
                                </a>
                                <div
                                    className="relative"
                                    ref={aiToolsRef}
                                >
                                    <button
                                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-gray-800 transition-colors focus:outline-none shadow-sm"
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
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">My Applications & Proposals</h1>
                    <p className="mt-1 text-sm text-gray-500">Track your job applications and received proposals</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-80pct">
                    {/* Applications Card */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">My Applications</h2>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                {applications.length} Total
                            </span>
                        </div>
                        <div className="space-y-4">
                            {applications.map((app) => (
                                <div key={app.id} className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">{app.jobTitle}</h3>
                                            <p className="text-sm text-gray-600 mt-1">{app.company}</p>
                                        </div>
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(app.statusType)}`} style={{ fontSize: '0.7rem' }}>
                                            <span className="mr-2" style={{ display: 'flex', alignItems: 'center' }}>{getStatusIcon(app.statusType)}</span>
                                            {app.status}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="flex items-center text-sm text-gray-500 mb-2">
                                            <Clock size={14} className="mr-2" />
                                            Applied {app.appliedDate}
                                        </div>
                                        <button className="inline-flex items-center px-4 py-2 border border-indigo-600 rounded-md text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 transition-colors">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Proposals Card */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Proposals Received</h2>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {proposals.length} Total
                            </span>
                        </div>
                        <div className="space-y-4">
                            {proposals.map((proposal) => (
                                <div key={proposal.id} className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">{proposal.jobTitle}</h3>
                                            <p className="text-sm text-gray-600 mt-1">{proposal.company}</p>
                                            <p className="text-sm font-medium text-indigo-600 mt-1">{proposal.budget}</p>
                                        </div>
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(proposal.statusType)}`} style={{ fontSize: '0.7rem' }}>
                                            <span className="mr-2" style={{ display: 'flex', alignItems: 'center' }}>{getStatusIcon(proposal.statusType)}</span>
                                            {proposal.status}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="flex items-center text-sm text-gray-500 mb-2">
                                            <Clock size={14} className="mr-2" />
                                            Received {proposal.receivedDate}
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                                <Send size={14} className="mr-2" />
                                                Respond
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ManageApplicants;