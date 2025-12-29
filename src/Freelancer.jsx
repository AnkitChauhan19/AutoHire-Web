import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Briefcase, FileText, MapPin, Clock, DollarSign, Sparkles, PenTool, Search } from 'lucide-react';

const Freelancer = () => {
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
                                <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    AutoHire AI
                                </span>
                            </a>
                        </div>

                        <div className="flex items-center">
                            <div className="hidden md:flex ml-10 space-x-8">
                                <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <Briefcase className="mr-2" size={18} />
                                    Browse Jobs
                                </a>
                                <a href="/applications" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <FileText className="mr-2" size={18} />
                                    Applications
                                </a>
                                <div
                                    className="relative"
                                    ref={aiToolsRef}
                                >
                                    <button
                                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-gray-800 transition-colors focus:outline-none shadow-sm"
                                        style={{ border: 'none' }}
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
                                                <a href="/ai-search" className="flex items-center px-4 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100">
                                                    <Search size={18} className="mr-3 text-gray-500" />
                                                    AI Job Search
                                                </a>
                                                <a href="/ai-more" className="flex items-center px-4 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors">

                                                    More
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <a href="/freelancer-profile" className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                    JD
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Recommended Jobs</h1>
                    <p className="mt-1 text-sm text-gray-500">Jobs tailored to your skills and preferences</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-300">
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{job.company}</p>
                                    </div>
                                    <div className="p-2 bg-indigo-50 rounded-lg flex items-center justify-center">
                                        <Briefcase size={20} className="text-indigo-600" />
                                    </div>
                                </div>

                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <MapPin size={16} className="mr-2 text-gray-400" />
                                        {job.type}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <DollarSign size={16} className="mr-2 text-gray-400" />
                                        {job.salary}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Clock size={16} className="mr-2 text-gray-400" />
                                        {job.posted}
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {job.tags.map((tag, index) => (
                                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6">
                                    <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer transition-colors">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Freelancer;
