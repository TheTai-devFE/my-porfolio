import { motion } from 'framer-motion';
import {
    SiCss3,
    SiExpress,
    SiFigma,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiTailwindcss
} from 'react-icons/si';

// Tech icons for the grid - with brand colors
const techIcons = [
    { icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
    { icon: SiCss3, color: '#1572B6', name: 'CSS3' },
    { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
    { icon: SiReact, color: '#61DAFB', name: 'React' },
    { icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
    { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
    { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
    { icon: SiExpress, color: '#000000', name: 'Express' },
    { icon: SiPython, color: '#3776AB', name: 'Python' },
    { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
    { icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
    { icon: SiGit, color: '#F05032', name: 'Git' },
    { icon: SiFigma, color: '#F24E1E', name: 'Figma' },
];

// Skill categories for right side list
const skillList = [
    {
        category: 'Front-End',
        skills: 'HTML, CSS, JavaScript, React, Next.js, Tailwind CSS',
    },
    {
        category: 'Back-End',
        skills: 'Node.js, Express, Python, FastAPI',
    },
    {
        category: 'Databases',
        skills: 'MySQL, PostgreSQL, MongoDB',
    },
    {
        category: 'Tools & Platforms',
        skills: 'Git, Figma, VSCode, Vercel, Render',
    },
    {
        category: 'Others',
        skills: 'RESTful APIs',
    },
];

function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span className="text-sm font-medium text-emerald-600 uppercase tracking-wider">
                            Skills
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">My Skills</h2>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left - Tech Icons Grid with Animation */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="grid grid-cols-5 gap-4"
                    >
                        {techIcons.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [0, -5, 5, 0],
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group aspect-square bg-white rounded-2xl border border-gray-200 flex items-center justify-center hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-default"
                                    title={tech.name}
                                >
                                    <Icon
                                        size={32}
                                        style={{ color: tech.color }}
                                        className="group-hover:scale-110 transition-transform"
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Right - Skill Categories List */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="space-y-6 pt-4"
                    >
                        {skillList.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, x: 20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50/50 transition-all duration-300"
                            >
                                <span className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 shrink-0"></span>
                                <div className="space-y-1">
                                    <h4 className="font-semibold text-gray-900">
                                        {item.category}
                                    </h4>
                                    <p className="font-mono text-sm text-gray-600 leading-relaxed">
                                        {item.skills}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
