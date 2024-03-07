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
            {t('home-page-alt-discussion-subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 justify-items-center max-w-screen-xl mx-auto"> 
            <div className = "items-center justify-center mb-10">
              <DiscussionCard
               cat ={t('cat-Informative')}
               title="The Problem" 
               link="https://drive.google.com/file/d/1vNDVDD2RggsNtH-QI8IW8oBfqeGv4dD1/view"
                desc="Distrust with charity. 
                1/3 Americans do not trust charities. 
                Only 48% of canadians express trust in nonprofits and charities.
                Leading to $100 billion shortage of impact in North America annually
                "/>
            </div>
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard 
               cat ={t('cat-Informative')}
               title="Our Solution" 
              link="https://drive.google.com/file/d/1vNDVDD2RggsNtH-QI8IW8oBfqeGv4dD1/view"
              desc="BCharity will solve this with One Open Ledger with Three Tokens.
              Giving user's full transparency with where there donations went and what impact they had."/>
            </div>
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard 
               cat ={t('cat-Informative')}
               title="Competition/Alternatives"
              link="https://drive.google.com/file/d/1vNDVDD2RggsNtH-QI8IW8oBfqeGv4dD1/view"
              desc="While platforms such as GoFundMe, Connector, and GivingBlock focus 
              solely on fundraising or volunteering, BCharity distinguishes itself by offering 
              a comprehensive suite of services including fundraising, ledgering, tracking, 
              and volunteering."/>
            </div>

            <div className="items-center justify-center mb-10"> 
              <DiscussionCard 
              cat ={t('cat-Crypto')}
              title="VHR Tokens"
              link="https://drive.google.com/file/d/1vNDVDD2RggsNtH-QI8IW8oBfqeGv4dD1/view"
              desc="Explore the VHR token, a digital asset incentivizing volunteerism with two soulbound
               tokens: RPT for accumulated goodwill and VHR for actual volunteer hours. 
               Utilizing a utility token for transparency and sustainability, 
               VHR revolutionizes community engagement through blockchain technology."/>
            </div>
            
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard 
              cat ={t('cat-Goals')} 
              title="Short/Long Term Strategy" 
              link="https://drive.google.com/file/d/1vNDVDD2RggsNtH-QI8IW8oBfqeGv4dD1/view"
              desc="BCharity plans to issue 21 million VHR tokens in 3 years
                    and aims to sell 21 Billion VHR tokens in the next 10 years."/>
            </div>
            <div className="items-center justify-center mb-10"> 
              <DiscussionCard 
               cat ={t('cat-Planning')} 
              title="Our Roadmap" 
              link="https://drive.google.com/file/d/1vNDVDD2RggsNtH-QI8IW8oBfqeGv4dD1/view"
              desc="Click 'Learn More' to explore our roadmap, detailing key milestones 
              and initiatives for 2020 - 2024 and beyond "/>
            </div>
          
   
          
        </div>
      </div>
    </main>
  );
}
