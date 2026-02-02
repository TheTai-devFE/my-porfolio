import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { education, experience } from '../data';

/**
 * Timeline Item Component
 */
function TimelineItem({ item, type }) {
    const isEducation = type === 'education';
    const Icon = isEducation ? GraduationCap : Briefcase;

    return (
        <div className="relative pl-8 pb-10 last:pb-0 group">
            {/* Timeline Line */}
            <div className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-100 group-last:hidden" />

            {/* Timeline Dot */}
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-white transition-colors" />
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                            {isEducation ? item.institution : item.company}
                        </p>
                    </div>
                    {/* Icon Badge */}
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500">
                        <Icon size={20} />
                    </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                        <Calendar size={14} />
                        {item.startDate} — {item.endDate}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} />
                        {item.location}
                    </span>
                    {item.type && (
                        <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                            {item.type}
                        </span>
                    )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                </p>

                {/* Achievements/Responsibilities */}
                {(item.achievements || item.responsibilities) && (
                    <ul className="space-y-2 mb-4">
                        {(item.achievements || item.responsibilities).map(
                            (point, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-2 text-sm text-gray-600"
                                >
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                                    {point}
                                </li>
                            )
                        )}
                    </ul>
                )}

                {/* Technologies Tags */}
                {item.technologies && (
                    <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

/**
 * Timeline Column Component
 */
function TimelineColumn({ title, subtitle, items, type, icon: Icon }) {
    return (
        <div>
            {/* Column Header */}
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center text-white">
                    <Icon size={24} />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500">{subtitle}</p>
                </div>
            </div>

            {/* Timeline Items */}
            <div>
                {items.map((item) => (
                    <TimelineItem key={item.id} item={item} type={type} />
                ))}
            </div>
        </div>
    );
}

/**
 * Main Timeline Section Component
 */
function Timeline() {
    return (
        <section id="timeline" className="py-24 px-6 bg-gray-50/50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
                        My Journey
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
                        Education & Experience
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A timeline of my academic background and professional
                        experience that shaped my skills and expertise.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Experience Column */}
                    <TimelineColumn
                        title="Experience"
                        subtitle="Professional journey"
                        items={experience}
                        type="experience"
                        icon={Briefcase}
                    />

                    {/* Education Column */}
                    <TimelineColumn
                        title="Education"
                        subtitle="Academic background"
                        items={education}
                        type="education"
                        icon={GraduationCap}
                    />
                </div>
            </div>
        </section>
    );
}

export default Timeline;
