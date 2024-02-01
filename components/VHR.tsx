import React from 'react';
import { useTranslation } from 'next-i18next';
import { FiArrowRightCircle } from 'react-icons/fi';

const VHRSection: React.FC = () => {
  const { t } = useTranslation();

  const Card: React.FC = () => {
    return (
      // Adjust the width and height classes to increase the card size
      <div className="w-full max-w-md mx-auto bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg p-5 flex flex-col justify-between min-h-[300px]">
        <div>
          <h5 className="text-xs font-bold text-purple-600 uppercase">{t('CATEGORY')}</h5>
          <h4 className="text-xl font-bold text-white">{t('Title')}</h4>
          <p className="text-md text-gray-400">{t('Description')}</p>
        </div>
        <a href="#" className="flex items-center text-purple-600">
          {t('learnMore')} <FiArrowRightCircle size={24} className="ml-2 text-purple-600" />
        </a>
      </div>
    );
  };

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-bold mb-8">{t('mostInterestingDiscussion')}</h2>
        <p className="text-gray-400 mb-6">{t('discussionDescription')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render a few cards for demonstration */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default VHRSection;
