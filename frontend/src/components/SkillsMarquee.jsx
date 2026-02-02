import { marqueeSkills } from '../data';

function SkillsMarquee() {
    return (
        <div className="py-8 bg-gray-900 overflow-hidden">
            <div className="relative flex">
                <div className="animate-marquee whitespace-nowrap flex gap-8">
                    {marqueeSkills.map((skill, index) => (
                        <span key={index} className="text-2xl font-semibold text-white/30 uppercase">
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="animate-marquee whitespace-nowrap flex gap-8 absolute left-full">
                    {marqueeSkills.map((skill, index) => (
                        <span key={index} className="text-2xl font-semibold text-white/30 uppercase">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillsMarquee;
