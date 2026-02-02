import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo, socialLinks } from '../data';

// Icon mapping for social links
const iconMap = {
    Mail: Mail,
    Github: Github,
    Linkedin: Linkedin,
    Phone: Phone,
};

function Connect() {
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
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="connect" className="py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left - Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
                            Connect
                        </p>
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                            Let&apos;s work together
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            I&apos;m always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision. Feel free to reach out!
                        </p>

                        {/* CTA */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all"
                            >
                                Connect me
                                <ArrowRight size={18} />
                            </a>
                        </motion.div>

                        {/* Availability */}
                        <div className="mt-8">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full"
                            >
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-sm text-green-700 font-medium">
                                    Available for freelance work
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Social Links */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                        className="grid sm:grid-cols-2 gap-4"
                    >
                        {socialLinks.map((link, index) => {
                            const Icon = iconMap[link.icon];
                            return (
                                <motion.a
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                                    href={link.href}
                                    target={link.name !== 'Email' && link.name !== 'SĐT' ? '_blank' : undefined}
                                    rel={link.name !== 'Email' && link.name !== 'SĐT' ? 'noopener noreferrer' : undefined}
                                    className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                                            {Icon && <Icon size={24} />}
                                        </div>
                                        <ArrowUpRight
                                            size={18}
                                            className="text-gray-300 group-hover:text-gray-600 transition-colors"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {link.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2">{link.description}</p>
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                                        {link.handle}
                                    </p>
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Connect;
