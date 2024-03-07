import React from 'react';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white p-5 pb-20">
        <hr className="border-gray-800" />
        <br></br>
        <br></br>
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row justify-center items-center lg:justify-between">
        <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 mb-2" />
          <span className="mb-2">{t('managedBy')}</span>
          <div className="flex">
            {/* Social Media icons */}
            <a href="#" className="mr-2"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" className="mr-2"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="mr-2"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="mr-2"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="mr-2"><FontAwesomeIcon icon={faLinkedin} /></a>
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
    </footer>
  );
};

export default Footer;
