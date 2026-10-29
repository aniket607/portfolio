import { FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { socialLinks } from "@/data/socialLinks";

interface RealEstateContactProps {
  heading?: string;
  className?: string;
}

export default function RealEstateContact({
  heading = "Have a project in mind? Let's talk.",
  className = "",
}: RealEstateContactProps) {
  return (
    <div className={className}>
      <p className="opacity-50 font-[family-name:var(--font-instrument-serif)] text-xl mb-4">
        {heading}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] text-black font-medium text-sm sm:text-base px-4 py-2.5 hover:opacity-90 transition-opacity"
        >
          <FaWhatsapp size={18} />
          Chat on WhatsApp
        </a>
        <a
          href={socialLinks.mail}
          className="flex items-center justify-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-sm sm:text-base px-4 py-2.5 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
        >
          <IoMdMail size={18} />
          aniketgoyal607@gmail.com
        </a>
      </div>
    </div>
  );
}
