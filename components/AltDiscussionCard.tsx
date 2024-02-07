import React from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { MdOutlineArrowOutward } from "react-icons/md";
import '../app/globals.css';

interface DiscussionCardProps {
  title: string;
  desc: string;
  cat: string;
}

const AltDiscussionCard: React.FC<DiscussionCardProps> = ({ title, desc, cat }) => {
  const { t } = useTranslation('home');

  return (
    <div className="discussion-card max-w-md max-h-full rounded overflow-hidden shadow-lg dark">
      <div className="relative">
        <div className="max-w-md p-6 pr-64 bg-gray-900 border border-gray-900 rounded-lg shadow dark:bg-gray-900">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-purple-600">{cat}</h5>
          <h6 className="mb-2 text-xl font-semibold tracking-tight text-white">{title}</h6>
          <p className="font-normal text-white pb-36">{desc}</p>
          
          <div className="font-normal text-white flex items-center">
            <span className="items-right mr-2 ol-96">{t('home-page-alt-discussion-learnmore')}</span>
            <Link href={`/discussion/${title}`} aria-labelledby={title}>
              <MdOutlineArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltDiscussionCard;
