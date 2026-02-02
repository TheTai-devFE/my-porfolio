import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Cloud, Monitor, Palette, Server } from 'lucide-react';
import { useState } from 'react';
import { aboutAccordions, personalInfo, skillAreas } from '../data';

// Icon mapping for skill areas
const iconMap = {
    Monitor: Monitor,
    Server: Server,
    Cloud: Cloud,
    Palette: Palette,
};

function About() {
    const [openIndex, setOpenIndex] = useState(0); // Open first by default

    // Only show Current Focus accordion (index 1)
    const currentFocusAccordion = aboutAccordions.find(
        (item) => item.question === 'Current Focus'
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="about" className="py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left - About Me + Current Focus */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.p variants={itemVariants} className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
                            About Me
                        </motion.p>
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                            I'm a Software Engineer
                        </motion.h2>

                        {/* Short Intro */}
                        <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed mb-8">
                            {personalInfo.shortBio} <br />
                            I am currently enrolled in a university program specializing in artificial intelligence at UIT.
                        </motion.p>

                        {/* Current Focus Accordion */}
                        {currentFocusAccordion && (
                            <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300 mb-6">
                                <button
                                    className="w-full p-5 flex items-center justify-between text-left"
                                    onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                                >
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {currentFocusAccordion.question}
                                    </h3>
                                    <ChevronDown
                                        size={20}
                                        className={`text-gray-400 transition-transform duration-300 ${openIndex === 0 ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openIndex === 0 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                                                <ul className="space-y-3">
                                                    {currentFocusAccordion.items.map((point, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                                                            <span className="text-gray-600">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}

                        {/* Open to opportunities */}
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-sm text-green-700 font-medium">
                                Open to remote opportunities worldwide
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right - How I Work + 4 Skill Cards */}
                    <div className="pt-8 lg:pt-10">
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-semibold text-gray-900 mb-6"
                        >
                            How I Work
                        </motion.h3>

                        {/* 4 Skill Area Cards */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                            className="grid sm:grid-cols-2 gap-4"
                        >
                            {skillAreas.map((item, index) => {
                                const Icon = iconMap[item.icon];
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                                        className="group p-5 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 mb-3 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                                            {Icon && <Icon size={20} />}
                                        </div>
                                        <h4 className="text-base font-semibold text-gray-900 mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
