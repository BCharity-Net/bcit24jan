import DiscussionCard from "../components/AltDiscussionCard";
import DiscussionHeaderCard from "../components/DiscussionHeaderCard";
import { useTranslation } from 'next-i18next';
import '../app/globals.css';


interface DiscussionSectionProps {
  numberOfComments?: number;
}

export default function DiscussionSection() {
  const { t } = useTranslation('home');
  return (
    <main className={`relative overflow-hidden mx-10`}>
      <div className="mx-4">
      <div className="max-w-screen-xl mx-auto mb-10 items-center justify-center">
          <h2 id="discussionTitle" className="text-4xl font-bold mb-3 text-left">
            {t('home-page-alt-discussion-title')}
          </h2>
          <p id="discussionDescription" className="text-left mb-5">
            {t('home-page-discussion-subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 justify-items-center max-w-screen-xl mx-auto"> 
            <div className = "items-center justify-center mb-10">
              <DiscussionCard cat = "Category 1" title="Title 1"  desc="Description"/>
            </div>
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard cat = "Category 1"title="Title 2" desc="Description"/>
            </div>
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard cat = "Category 1"title="Title 3"desc="Description"/>
            </div>
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard cat = "Category 1" title="Title 4" desc="Description"/>
            </div>
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard cat = "Category 1" title="Title 5" desc="Description"/>
            </div>
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard cat = "Category 1"title="Title 6"desc="Description"/>
            </div>
        </div>
      </div>
    </main>
  );
}
