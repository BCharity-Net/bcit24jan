// Footer.tsx
import React from 'react';
import { useTranslation } from 'next-i18next';
// Import icons here, if using specific icon components

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white p-5 pb-20">
        <hr className="border-gray-800" />
        <br></br>
        <br></br>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
          {/* Replace src with actual logo image */}
          <img src="/logo.png" alt="Logo" className="w-12 h-12 mb-2" />
          <span className="mb-2">{t('managedBy')}</span>
          {/* Social Media icons */}
          <div className="flex">
            {/* Replace these placeholders with actual icon components */}
            <a href="#" className="mr-2">YT</a>
            <a href="#" className="mr-2">TW</a>
            <a href="#" className="mr-2">IG</a>
            <a href="#" className="mr-2">FB</a>
            <a href="#" className="mr-2">LI</a>
          </div>
          <div>
            <p className="text-gray-500 hover:text-white">© 2023 BCharity Baas. All rights reserved.</p>
          </div>
        </div>

        <div className="lg:flex lg:gap-12">
          {/* BCharity column */}
          <div className="mb-4 lg:mb-0">
            <h6 className="font-bold mb-1">{t('BCharity')}</h6>
            <ul>
                <li><a href="#" className="text-gray-500 hover:text-white">{t('VHRs')}</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white">{t('Break BCharity')}</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white">{t('Groups')}</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white">{t('Careers')}</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white">{t('Disclaimer')}</a></li>
            </ul>
          </div>

          {/* GET CONNECTED column */}
          <div>
            <h6 className="font-bold mb-1">{t('GET CONNECTED')}</h6>
            <ul>
              <li><a href="#" className="text-gray-500 hover:text-white">{t('Discord')}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white">{t('Blog')}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white">{t('Newsletter')}</a></li>
            </ul>
          </div>
        

        <div className="flex flex-col items-center lg:items-end">
          <div className="mb-2">
            {/* Language selector can be a custom component or a simple select element */}
            <select className="bg-transparent text-white">
              <option value="en">{t('EN')}</option>
              {/* Add more language options here */}
            </select>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
