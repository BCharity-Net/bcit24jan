import React from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { MdOutlineArrowOutward } from "react-icons/md";
import '../app/globals.css';

interface DiscussionCardProps {
  title: string;
  desc: string;
  cat: string;
  link?: string; 
}

const AltDiscussionCard: React.FC<DiscussionCardProps> = ({ title, desc, cat, link }) => {
  const { t } = useTranslation('home');

  // Function to open PDF in a child window
  const openPDFInChildWindow = (pdfLink: string) => {
    window.open(pdfLink, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=800,height=600");
  };

  return (
    <div className="discussion-card max-w-md max-h-full rounded overflow-hidden shadow-lg dark">
      <div className="relative">
        <div className="max-w-md p-6 bg-gray-900 border border-gray-900 rounded-lg shadow dark:bg-gray-900">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-purple-600">{cat}</h5>
          <h6 className="mb-2 text-xl font-semibold tracking-tight text-white">{title}</h6>
          <p className="font-normal text-white pb-36" style={{ height: "15em" }}>{desc}</p>
          
          <div className="font-normal text-white flex items-center">
            <span className="mr-2">{t('home-page-alt-discussion-learnmore')}</span>
            {link && ( 
              <button onClick={() => openPDFInChildWindow(link)} aria-labelledby={title}>
                <MdOutlineArrowOutward />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltDiscussionCard;
