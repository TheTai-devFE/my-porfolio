import { personalInfo } from '../data';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-gray-100 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" alt="TheTai Logo" className="w-8 h-8 rounded-lg" />
                    <span className="text-xl font-semibold tracking-tight text-gray-900">
                        taithe<span className="text-gray-400">.</span><span className="font-bold">dev</span>
                    </span>
                </div>

                {/* Info Text */}
                <div className="flex flex-col items-center gap-2 text-sm text-gray-500">
                    <p>{personalInfo.experience} - Ho Chi Minh City</p>
                    <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
