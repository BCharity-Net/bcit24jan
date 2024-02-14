import DiscussionCard from "../components/DiscussionCard";
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
            {t('home-page-discussion-title')}
          </h2>
          <p id="discussionDescription" className="text-left mb-5">
            {t('home-page-discussion-subtitle')}
          </p>
        </div>
        <div id="headerDiscussion" className=" max-w-screen-xl mx-auto mb-10 items-center justify-center">
            <DiscussionHeaderCard 
            imageSrc="/cardImages/banner.png" 
            title="Discover BCharity's Mission and Goals"
            link="https://giveth.io/project/bcharity-good-dao"
             mins={5} /> 
          </div>
        <div className="grid grid-cols-3 gap-2 justify-items-center max-w-screen-xl mx-auto"> 
          <div id="discussion1" className="items-center justify-center mb-10"> 
            <DiscussionCard 
            imageSrc="/cardImages/cube.png"
             title="Updates and Project Timeline"
             link="https://giveth.io/project/bcharity-good-dao?tab=updates"
             mins={2} />
          </div>
          <div id="discussion2" className="items-center justify-center mb-10"> 
            <DiscussionCard 
            imageSrc="/cardImages/cube2.png" 
            title="Overview of Donations Received" 
            link="https://giveth.io/project/bcharity-good-dao?tab=donations"
            mins={3} />
          </div>
          <div id="discussion3" className="items-center justify-center mb-10"> 
            <DiscussionCard
             imageSrc="/cardImages/cylinder.png"
              title="Donate Now!" 
              link="https://giveth.io/donate/bcharity-good-dao"
              mins={1} />
          </div> 
 
        </div>
      </div>
    </main>
  );
}
