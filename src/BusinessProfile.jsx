import React, { useState, useRef, useEffect } from 'react';
import { Bot, MapPin, Mail, Phone, Briefcase, FileText, Link as LinkIcon, DollarSign, Calendar, Edit, Search, Globe, Users, Building, Linkedin, Twitter, Facebook, CheckCircle } from 'lucide-react';

const BusinessProfile = () => {
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

    const companyProfile = {
        name: "Tech Solutions",
        industry: "Information Technology & Services",
        location: "San Francisco, CA (HQ)",
        website: "www.tech.example.com",
        email: "careers@tech.example.com",
        phone: "+1 (555) 123-4567",
        founded: "2015",
        employees: "200-500",
        about: "Tech Solutions is a leading provider of innovative cloud-based software solutions. We specialize in helping enterprises accelerate their digital transformation through our cutting-edge AI-driven platforms. Our mission is to empower businesses with technology that is scalable, secure, and intuitive.",
        culture: "We believe in a culture of innovation, collaboration, and continuous learning. At Tech Solutions, every voice counts. We foster an environment where diversity is celebrated, and employees are encouraged to take ownership of their work. We work hard, play hard, and value work-life balance.",
        specialties: [
            "Cloud Computing", "Artificial Intelligence", "Enterprise Software", "Cybersecurity", "DevOps", "Data Analytics"
        ],
        benefits: [
            "Comprehensive Health Insurance",
            "Remote-First Work Policy",
            "Unlimited Paid Time Off",
            "401(k) Matching",
            "Professional Development Budget",
            "Home Office Stipend"
        ],
        socials: {
            linkedin: "linkedin.com/company/tech",
            twitter: "twitter.com/tech",
            facebook: "facebook.com/tech"
        },
        activeJobs: [
            {
                id: 1,
                title: "Senior React Developer",
                type: "Remote",
                salary: "$120k - $150k",
                posted: "2 days ago"
            },
            {
                id: 2,
                title: "DevOps Engineer",
                type: "Hybrid - SF",
                salary: "$130k - $160k",
                posted: "5 days ago"
            },
            {
                id: 3,
                title: "Product Manager",
                type: "Remote",
                salary: "$110k - $140k",
                posted: "1 week ago"
            }
        ]
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
                                <a href="/business" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <Briefcase className="mr-2" size={18} />
                                    Post Jobs
                                </a>
                                <a href="/manage-applicants" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <FileText className="mr-2" size={18} />
                                    Manage Applicants
                                </a>
                                <div
                                    className="relative"
                                    ref={aiToolsRef}
                                >
                                    <button
                                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors focus:outline-none shadow-sm"
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
                                                    AI Job Search
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
                {/* Company Header */}
                <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
                    <div className="p-6">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-6">
                                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-2xl">
                                    TF
                                </div>
                            </div>
                            <div className="ml-1 mb-1 flex-1">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-2xl px-2 font-bold text-gray-900">{companyProfile.name}</h1>
                                        <p className="text-gray-600 text-lg flex items-center mt-1">
                                            <Building size={18} className="mr-2" />
                                            {companyProfile.industry}
                                        </p>
                                    </div>
                                    <button className="inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                                        <Edit size={16} className="mr-2" />
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap mt-4 ml-11 gap-6 border-t border-gray-200 pt-4">
                            <div className="flex items-center text-gray-600">
                                <MapPin size={18} className="mr-2 text-gray-400" />
                                {companyProfile.location}
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Globe size={18} className="mr-2 text-gray-400" />
                                <a href={`https://${companyProfile.website}`} className="hover:text-indigo-600 transition-colors">{companyProfile.website}</a>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Users size={18} className="mr-2 text-gray-400" />
                                {companyProfile.employees} Employees
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Calendar size={18} className="mr-2 text-gray-400" />
                                Founded {companyProfile.founded}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column (Main) */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* About Section */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">About the Company</h2>
                            <p className="text-gray-600 leading-relaxed text-justify">{companyProfile.about}</p>
                        </div>

                        {/* Culture & Benefits */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-2">Our Culture</h3>
                                <p className="text-gray-600 leading-relaxed">{companyProfile.culture}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Key Benefits</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {companyProfile.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center text-gray-700">
                                            <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                            <span className="text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Active Jobs */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-900">Active Job Openings</h2>
                                <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">View All</a>
                            </div>
                            <div className="space-y-4">
                                {companyProfile.activeJobs.map((job) => (
                                    <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors flex justify-between items-center group">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                                            <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4">
                                                <span className="flex items-center"><MapPin size={14} className="mr-1" /> {job.type}</span>
                                                <span className="flex items-center"><DollarSign size={14} className="mr-1 ml-2" /> {job.salary}</span>
                                                <span className="flex items-center"><Calendar size={14} className="mr-1 ml-2" /> {job.posted}</span>
                                            </div>
                                        </div>
                                        <button className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-md text-sm font-medium hover:bg-indigo-100 transition-colors cursor-pointer border border-indigo-600">
                                            View
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="space-y-6">
                        {/* Contact Info */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-600">
                                    <Mail size={18} className="mr-2 text-gray-400" />
                                    <a href={`mailto:${companyProfile.email}`} className="hover:text-indigo-600">{companyProfile.email}</a>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Phone size={18} className="mr-2 text-gray-400" />
                                    <span>{companyProfile.phone}</span>
                                </div>
                                <div className="flex items-start text-gray-600">
                                    <MapPin size={18} className="mr-2 text-gray-400 mt-1" />
                                    <span>{companyProfile.location}</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href={`https://${companyProfile.socials.linkedin}`} className="text-gray-400 mr-4 hover:text-indigo-600 transition-colors">
                                        <Linkedin size={24} />
                                    </a>
                                    <a href={`https://${companyProfile.socials.twitter}`} className="text-gray-400 mr-4 hover:text-blue-400 transition-colors">
                                        <Twitter size={24} />
                                    </a>
                                    <a href={`https://${companyProfile.socials.facebook}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                                        <Facebook size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Specialties */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Specialties</h2>
                            <div className="flex flex-wrap gap-2">
                                {companyProfile.specialties.map((item, index) => (
                                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BusinessProfile;
