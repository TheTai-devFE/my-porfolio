import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '../data';
import HeroCard from './HeroCard';
import WelcomeModal from './WelcomeModal';

// Tech stack names for marquee
const techStack = [
    'ReactJS',
    'NextJS',
    'Html/Css',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'Python',
    'FastAPI',
    'PostgreSQL',
    'MongoDB',
];

function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="min-h-screen flex flex-col relative overflow-hidden">
            <WelcomeModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

            {/* Main Hero Content */}
            <div className="flex-1 pt-32 pb-20 px-6 flex items-center relative z-10">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* HeroCard with float animation - First on mobile */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="order-1 flex justify-center lg:justify-start"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <HeroCard
                                    name={personalInfo.displayName}
                                    title={personalInfo.title}
                                    experience={personalInfo.experience}
                                    status={personalInfo.status}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Content - Second on mobile, Centered on mobile */}
                        <div className="order-2 text-center lg:text-left flex flex-col items-center lg:items-start">
                            {/* Greeting */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-gray-500 text-lg mb-4"
                            >
                                Hey, I'm <span className="text-gray-900 font-medium">{personalInfo.name}</span> 👋
                            </motion.p>

                            {/* Main Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
                            >
                                <span className="text-gray-900">Web Developer</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg"
                            >
                                {personalInfo.shortBio}
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                            >
                                <a
                                    href="/CV-LUONG-THE-TAI.pdf"
                                    download
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gray-200"
                                >
                                    <Download size={18} />
                                    Download my CV
                                </a>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-gray-900 transition-all hover:scale-105 active:scale-95 shadow-sm"
                                >
                                    <Mail size={18} />
                                    Message for HR
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="py-6 bg-gray-900 overflow-hidden"
            >
                <div
                    className="flex"
                    style={{
                        animation: 'marquee 25s linear infinite',
                        width: 'max-content'
                    }}
                >
                    {techStack.concat(techStack).map((tech, index) => (
                        <span key={index} className="flex items-center px-4 md:px-6">
                            <span className="text-white mr-4 md:mr-6 opacity-50">•</span>
                            <span className="text-lg md:text-2xl font-bold text-white uppercase tracking-widest hover:text-emerald-500 transition-colors cursor-default">
                                {tech}
                            </span>
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;
