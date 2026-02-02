import { AnimatePresence, motion } from 'framer-motion';
import { Send, X } from 'lucide-react';
import { useEffect } from 'react';

function WelcomeModal({ isOpen, setIsOpen }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            const lastSeen = localStorage.getItem('lastSeenWelcomeModal');
            const now = Date.now();
            const FIFTEEN_MINUTES = 15 * 60 * 1000;

            if (!lastSeen || now - parseInt(lastSeen) > FIFTEEN_MINUTES) {
                setIsOpen(true);
                localStorage.setItem('lastSeenWelcomeModal', now.toString());
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [setIsOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-10"
                    >
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-gray-100 rounded-full blur-3xl" />

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-2xl mb-6">
                                <Send size={24} />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Dear Recruiter 👋
                            </h2>

                            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                                <p>
                                    Thank you for taking the time to visit my portfolio.
                                </p>
                                <p>
                                    I'm <strong>Tai</strong>, a Software Engineer passionate about solving problems and building polished, maintainable user interfaces with high stability.
                                </p>
                                <p>
                                    Instead of generic introductions, I hope the real-world projects showcased below will speak for my skills and dedication.
                                </p>
                                <p>
                                    I look forward to the possibility of contributing value to your team's growth and success.
                                </p>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-gray-200"
                            >
                                Start Exploring
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default WelcomeModal;
