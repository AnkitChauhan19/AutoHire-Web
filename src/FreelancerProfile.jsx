import React from 'react';
import { Bot, MapPin, Mail, Phone, Briefcase, FileText, GraduationCap, Award, Link as LinkIcon, Calendar, Edit } from 'lucide-react';

const FreelancerProfile = () => {
    const profile = {
        name: "John Doe",
        title: "Senior Full Stack Developer",
        location: "Delhi, India",
        email: "john.doe@example.com",
        phone: "+91-9876543210",
        about: "Passionate full-stack developer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. I love solving complex problems and creating intuitive user experiences.",
        skills: [
            "React", "Node.js", "TypeScript", "Python", "AWS", "Docker",
            "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "Git", "CI/CD"
        ],
        experience: [
            {
                title: "Senior Full Stack Developer",
                company: "TechCorp Inc.",
                location: "New Delhi, DL",
                duration: "Jan 2020 - Present",
                description: "Led development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines."
            },
            {
                title: "Full Stack Developer",
                company: "StartupXYZ",
                location: "Remote",
                duration: "Jun 2017 - Dec 2019",
                description: "Built and maintained multiple client-facing applications using React and Node.js. Improved application performance by 40%."
            },
            {
                title: "Frontend Developer",
                company: "WebSolutions LLC",
                location: "Mumbai, MH",
                duration: "Jan 2016 - May 2017",
                description: "Developed responsive web applications and collaborated with design team to implement pixel-perfect UIs."
            }
        ],
        education: [
            {
                degree: "Bachelor of Science in Computer Science",
                school: "University of Delhi, Delhi",
                year: "2012 - 2016"
            }
        ],
        projects: [
            {
                name: "E-Commerce Platform",
                description: "Built a full-featured e-commerce platform with React, Node.js, and Stripe integration",
                link: "github.com/johndoe/ecommerce"
            },
            {
                name: "Task Management App",
                description: "Real-time collaborative task management application using React and Firebase",
                link: "github.com/johndoe/taskapp"
            },
            {
                name: "Analytics Dashboard",
                description: "Data visualization dashboard with interactive charts and real-time updates",
                link: "github.com/johndoe/analytics"
            }
        ],
        certifications: [
            "AWS Certified Solutions Architect",
            "MongoDB Certified Developer",
            "Google Cloud Professional"
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50">
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
                                <a href="/freelancer" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <Briefcase className="mr-2" size={18} />
                                    Browse Jobs
                                </a>
                                <a href="/applications" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <FileText className="mr-2" size={18} />
                                    Applications
                                </a>
                                <a href="#" className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                    JD
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Profile Header */}
                <div className="bg-white lg:w-60pct rounded-lg shadow mb-6">
                    <div className="p-6">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-6">
                                <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-2xl">
                                    JD
                                </div>
                                <div>
                                    <h1 className="text-2xl px-2 font-bold text-gray-900">{profile.name}</h1>
                                    <p className="text-lg text-gray-600 mt-1">{profile.title}</p>
                                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                        <div className="flex items-center mr-2">
                                            <MapPin size={16} className="mr-2" />
                                            {profile.location}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                        <div className="flex items-center mr-2">
                                            <Mail size={16} className="mr-2" />
                                            {profile.email}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                        <div className="flex items-center mr-2">
                                            <Phone size={16} className="mr-2" />
                                            {profile.phone}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                                <Edit size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-1 lg:w-60pct gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* About Section */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
                            <p className="text-gray-600 leading-relaxed">{profile.about}</p>
                        </div>

                        {/* Experience Section */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Work Experience</h2>
                            <div className="space-y-6">
                                {profile.experience.map((exp, index) => (
                                    <div key={index} className="border-l-2 border-indigo-500 pl-4">
                                        <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                                        <p className="text-indigo-600 font-medium">{exp.company}</p>
                                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                            <div className="flex items-center mr-2">
                                                <Calendar size={14} className="mr-1" />
                                                {exp.duration}
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin size={14} className="mr-1" />
                                                {exp.location}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mt-2">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
                            <div className="space-y-4">
                                {profile.education.map((edu, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex justify-center items-center p-2 bg-indigo-50 rounded-lg mr-4">
                                            <GraduationCap size={24} className="text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
                                            <p className="text-gray-600">{edu.school}</p>
                                            <p className="text-sm text-gray-500">{edu.year}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Projects Section */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Projects</h2>
                            <div className="space-y-4">
                                {profile.projects.map((project, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                                        <p className="text-gray-600 mt-1">{project.description}</p>
                                        <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500 mt-2">
                                            <LinkIcon size={14} className="mr-1" />
                                            {project.link}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Skills Section */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {profile.skills.map((skill, index) => (
                                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Certifications Section */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Certifications</h2>
                            <div className="space-y-3">
                                {profile.certifications.map((cert, index) => (
                                    <div key={index} className="flex items-start">
                                        <Award size={18} className="text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-700">{cert}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FreelancerProfile;
