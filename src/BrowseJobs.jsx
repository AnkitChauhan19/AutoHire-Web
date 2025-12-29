import React, { useState, useRef, useEffect } from 'react';
import { Bot, Briefcase, FileText, MapPin, DollarSign, Clock, Search, Filter, X, Sparkles, PenTool } from 'lucide-react';
import MultiRangeSlider from './components/MultiRangeSlider';

const BrowseJobs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState([]);
    const [salaryRange, setSalaryRange] = useState([0, 150000]);
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
            location: "Remote",
            salary: "$60k - $80k",
            type: "Remote",
            experience: "Senior",
            posted: "2 days ago",
            skills: ["React", "Node.js", "TypeScript"]
        },
        {
            id: 2,
            title: "UI/UX Designer",
            company: "Creative Minds Studio",
            location: "New York, NY",
            salary: "$45k - $65k",
            type: "Hybrid",
            experience: "Mid",
            posted: "5 hours ago",
            skills: ["Figma", "Adobe XD", "Prototyping"]
        },
        {
            id: 3,
            title: "Full Stack Engineer",
            company: "Innovate AI",
            location: "San Francisco, CA",
            salary: "$70k - $95k",
            type: "On-site",
            experience: "Senior",
            posted: "1 day ago",
            skills: ["Python", "React", "AWS"]
        },
        {
            id: 4,
            title: "Frontend Developer",
            company: "WebCraft Agency",
            location: "Remote",
            salary: "$50k - $70k",
            type: "Remote",
            experience: "Mid",
            posted: "3 days ago",
            skills: ["Vue.js", "Tailwind", "JavaScript"]
        },
        {
            id: 5,
            title: "Mobile App Developer",
            company: "AppWorks",
            location: "Remote",
            salary: "$55k - $85k",
            type: "Remote",
            experience: "Mid",
            posted: "1 week ago",
            skills: ["React Native", "iOS", "Android"]
        },
        {
            id: 6,
            title: "DevOps Engineer",
            company: "CloudSystems",
            location: "Austin, TX",
            salary: "$80k - $110k",
            type: "Hybrid",
            experience: "Senior",
            posted: "4 days ago",
            skills: ["Docker", "Kubernetes", "CI/CD"]
        },
        {
            id: 7,
            title: "Junior Frontend Developer",
            company: "StartupHub",
            location: "Remote",
            salary: "$35k - $50k",
            type: "Remote",
            experience: "Entry",
            posted: "2 days ago",
            skills: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 8,
            title: "Backend Developer",
            company: "DataCore Inc",
            location: "Seattle, WA",
            salary: "$65k - $90k",
            type: "On-site",
            experience: "Mid",
            posted: "6 days ago",
            skills: ["Java", "Spring", "PostgreSQL"]
        }
    ];

    const jobTypes = ["Remote", "Hybrid", "On-site"];
    const experienceLevels = ["Entry", "Mid", "Senior"];

    const toggleFilter = (filterArray, setFilterArray, value) => {
        if (filterArray.includes(value)) {
            setFilterArray(filterArray.filter(item => item !== value));
        } else {
            setFilterArray([...filterArray, value]);
        }
    };

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.company.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.type);
        const matchesExperience = selectedExperience.length === 0 || selectedExperience.includes(job.experience);

        // Extract salary numbers from the job.salary string (e.g., "$60k - $80k")
        const salaryMatch = job.salary.match(/\$(\d+)k\s*-\s*\$(\d+)k/);
        const jobMinSalary = salaryMatch ? parseInt(salaryMatch[1]) * 1000 : 0;
        const jobMaxSalary = salaryMatch ? parseInt(salaryMatch[2]) * 1000 : 200000;
        const matchesSalary = jobMaxSalary >= salaryRange[0] && jobMinSalary <= salaryRange[1];

        return matchesSearch && matchesJobType && matchesExperience && matchesSalary;
    });

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
                                <a href="/freelancer" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <Briefcase className="mr-2" size={18} />
                                    Browse Jobs
                                </a>
                                <a href="/applications" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
                <div className="lg:w-80pct">
                    {/* Header with Search */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Jobs</h1>
                        <div className="flex-1 max-w-6xl">
                            <form
                                className="search-form"
                                onSubmit={(e) => e.preventDefault()}
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingLeft: '1rem',
                                    paddingRight: '1rem',
                                    height: '50px',
                                    borderRadius: '25px',
                                    background: '#fff',
                                    border: '2px solid #e5e7eb',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                <button
                                    type="button"
                                    style={{
                                        border: 'none',
                                        background: 'none',
                                        color: '#9ca3af',
                                        padding: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        cursor: 'default'
                                    }}
                                >
                                    <Search size={20} />
                                </button>
                                <input
                                    type="text"
                                    placeholder="Search by job title, company, or keywords..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        fontSize: '1rem',
                                        backgroundColor: 'transparent',
                                        width: '100%',
                                        height: '100%',
                                        paddingLeft: '0.75rem',
                                        paddingRight: '0.75rem',
                                        border: 'none',
                                        outline: 'none'
                                    }}
                                />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery('')}
                                        style={{
                                            border: 'none',
                                            background: 'none',
                                            color: '#9ca3af',
                                            padding: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            transition: 'color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#6b7280'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                                    >
                                        <X size={18} />
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        {/* Filters Sidebar */}
                        <div className="w-64 flex-shrink-0">
                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="mb-4">
                                    <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                                </div>

                                {/* Job Type Filter */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-900 mb-3">Job Type</h3>
                                    <div className="space-y-2">
                                        {jobTypes.map(type => (
                                            <label key={type} className="flex items-center custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedJobTypes.includes(type)}
                                                    onChange={() => toggleFilter(selectedJobTypes, setSelectedJobTypes, type)}
                                                />
                                                <div className="checkmark"></div>
                                                <span className="ml-2 text-sm text-gray-700">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Experience Level Filter */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-900 mb-3">Experience Level</h3>
                                    <div className="space-y-2">
                                        {experienceLevels.map(level => (
                                            <label key={level} className="flex items-center custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedExperience.includes(level)}
                                                    onChange={() => toggleFilter(selectedExperience, setSelectedExperience, level)}
                                                />
                                                <div className="checkmark"></div>
                                                <span className="ml-2 text-sm text-gray-700">{level}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Salary Range Filter */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-900 mb-3">Salary Range</h3>
                                    <div className="px-2 py-2">
                                        <MultiRangeSlider
                                            min={0}
                                            max={150000}
                                            onChange={({ min, max }) => setSalaryRange([min, max])}
                                        />
                                    </div>
                                </div>

                                {/* Clear Filters */}
                                <button
                                    onClick={() => {
                                        setSelectedJobTypes([]);
                                        setSelectedExperience([]);
                                        setSalaryRange([0, 150000]);
                                    }}
                                    style={{
                                        fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
                                        fontSize: '0.875rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '48px',
                                        borderRadius: '0.5rem',
                                        fontWeight: '600',
                                        padding: '0 1.2rem',
                                        color: '#ffffff',
                                        border: 'none',
                                        cursor: 'pointer',
                                        boxShadow: '0 0.5rem 1rem rgba(79, 70, 229, 0.15)',
                                        background: '#4f46e5',
                                        width: '100%',
                                        transition: 'background 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = '#4338ca'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = '#4f46e5'}
                                >
                                    Clear Filters
                                    <span style={{ fontSize: '0.8rem', color: '#c7d2fe', marginLeft: '0.5rem' }}>
                                        {selectedJobTypes.length + selectedExperience.length > 0 ?
                                            `(${selectedJobTypes.length + selectedExperience.length})` : ''}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Job Cards */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredJobs.map(job => (
                                    <div key={job.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow border border-gray-300">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                                                <p className="text-sm text-gray-600 mt-1">{job.company}</p>
                                            </div>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                                {job.type}
                                            </span>
                                        </div>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <MapPin size={16} className="mr-2 text-gray-400" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <DollarSign size={16} className="mr-2 text-gray-400" />
                                                {job.salary}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Clock size={16} className="mr-2 text-gray-400" />
                                                Posted {job.posted}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {job.skills.map((skill, index) => (
                                                <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                                            Apply Now
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {filteredJobs.length === 0 && (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">No jobs found matching your criteria.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BrowseJobs;
