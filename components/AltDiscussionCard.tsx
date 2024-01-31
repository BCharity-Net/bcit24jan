import React from "react";
import { useTranslation } from 'next-i18next';
import '../app/globals.css';

interface DiscussionCardProps {
  title: string;
  desc: string;
  cat: string;
}

const AltDIscussionCard: React.FC<DiscussionCardProps> = ({ title, desc, cat }) => {
  const { t } = useTranslation('common');

  const titleId = `title-${title.replace(/\s+/g, '-')}`;

  return (
    <div className="discussion-card max-w-sm p-6 pr-75 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-purple-700">{cat}</h5>
      <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">{title}</h6>
      <p className="font-normal text-gray-700 dark:text-gray-400 pb-10">{desc}</p>
    </div>
  );
};

export default AltDIscussionCard;
