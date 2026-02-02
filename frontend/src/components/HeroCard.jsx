import { Fingerprint } from 'lucide-react';

function HeroCard({ name, title, experience, status }) {
    return (
        <div className="w-72 md:w-80 lg:w-[340px] aspect-[3/4] bg-[#1a1a1a] rounded-3xl p-6 flex flex-col relative overflow-hidden shadow-2xl border-2 border-emerald-500/30">
            {/* Top Section */}
            <div className="flex items-start justify-between mb-4">
                {/* Status Badge - Open to Work */}
                <div className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-xs font-semibold tracking-wide text-emerald-400">
                        {status}
                    </span>
                </div>
                {/* Pulse Icon */}
                <div className="text-gray-400">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M2 12h4l3-9 4 18 3-9h6" />
                    </svg>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-700 mb-4"></div>

            {/* Photo Area */}
            <div className="flex-1 relative -mx-6 overflow-hidden">
                <img
                    src="/avatar.jpg"
                    alt="Lương Thế Tài"
                    className="w-full h-full object-cover object-top"
                />
            </div>

            {/* Bottom Section */}
            <div className="mt-auto">
                {/* Divider */}
                <div className="h-px bg-gray-700 mb-4"></div>

                {/* Experience & Fingerprint */}
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-1">
                            Experience
                        </p>
                        <p className="text-xl font-semibold text-white tracking-wider">
                            {experience}
                        </p>
                    </div>
                    <Fingerprint size={40} className="text-gray-500" />
                </div>
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none rounded-3xl"></div>

            {/* Emerald glow effect */}
            <div className="absolute -inset-1 bg-emerald-500/10 rounded-3xl blur-xl -z-10"></div>
        </div>
    );
}

export default HeroCard;
