import DiscussionCard from "../components/AltDiscussionCard";
import DiscussionHeaderCard from "../components/DiscussionHeaderCard";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useTranslation } from 'next-i18next';
import '../app/globals.css';


interface DiscussionSectionProps {
  numberOfComments?: number;
}

export default function DiscussionSection() {
  const { t } = useTranslation('home');

    // Function to open PDF in a child window
    const openPDFInChildWindow = (pdfLink: string) => {
      window.open(pdfLink, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=800,height=600");
    };

  return (
    <main className={`relative overflow-hidden mx-10`}>
      <div className="mx-4">
      <div className="max-w-screen-xl mx-auto mb-10 items-center justify-center">
          <h2 id="discussionTitle" className="text-4xl font-bold mb-3 text-left">
            {t('home-page-alt-discussion-title')}
          </h2>
          <p id="discussionDescription" className="text-left mb-5">
            <span style={{ display: 'inline-block' }}>{t('home-page-alt-discussion-subtitle')}</span>
            <MdOutlineArrowOutward
              className="ml-2 w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-500 inline-block"
              onClick={() => openPDFInChildWindow('/PPT_Images/Bcharity-2023-Donor.pdf')}
              aria-label="Open PDF"
            />
          </p>
        </div>
      
        
        <div className="grid grid-cols-3 gap-2 justify-items-center max-w-screen-xl mx-auto"> 
            <div className = "items-center justify-center mb-10">
              <DiscussionCard
               cat ={t('cat-Informative')}
               title={t('title-Problem')}
               link="/PPT_Images/TheProblem.pdf"
                desc= {t('desc-Problem')}
                />
            </div>
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard 
               cat ={t('cat-Informative')}
               title={t('title-Solution')}
              link="/PPT_Images/OurSolution.pdf"
              desc= {t('desc-Solution')}
              />
              </div>
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard 
               cat ={t('cat-Informative')}
               title={t('title-Competition')}
              link="/PPT_Images/CompetitionAlt.pdf"
              desc= {t('desc-Competition')}
              />
            </div>

            <div className="items-center justify-center mb-10"> 
              <DiscussionCard 
              cat ={t('cat-Crypto')}
              title={t('title-VHRTokens')}
              link="/PPT_Images/VHRTokens.pdf"
              desc= {t('desc-VHRTokens')}
              />
            </div>
            
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard 
              cat ={t('cat-Goals')} 
              title={t('title-Goals')}
              link="/PPT_Images/Goals.pdf"
              desc= {t('desc-Goals')}
              />
            </div>
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard 
               cat ={t('cat-Planning')} 
               title={t('title-Roadmap')}
              link="/PPT_Images/Roadmap.pdf"
              desc= {t('desc-Roadmap')}
              />
            </div>
          
   
          
        </div>
      </div>
    </main>
  );
}
