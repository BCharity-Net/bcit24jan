import DiscussionCard from "../components/DiscussionCard";
import '../app/globals.css';

interface DiscussionSectionProps {
  numberOfComments?: number;
}

export default function DiscussionSection() {
  return (
    <main className={`relative overflow-hidden mx-10`}>
      <div className="mx-4"> {/* Added mx-4 for horizontal margin */}
        <div className="grid grid-cols-3 gap-2 justify-items-center max-w-screen-xl mx-auto"> {/* Added max-w-screen-xl and mx-auto for centered and limited width */}
          <div id="discussion1" className="items-center justify-center mb-10"> {/* Added mb-2 for margin-bottom */}
            <DiscussionCard imageSrc="/logo.jpg" title="Discussion Title 1" numberOfComments={3} />
          </div>
          <div id="discussion2" className="items-center justify-center mb-10"> {/* Added mb-2 for margin-bottom */}
            <DiscussionCard imageSrc="/logo.jpg" title="Discussion Title 2" numberOfComments={5} />
          </div>
          <div id="discussion3" className="items-center justify-center mb-10"> {/* Added mb-2 for margin-bottom */}
            <DiscussionCard imageSrc="/logo.jpg" title="Discussion Title 3" numberOfComments={2} />
          </div>
          <div id="discussion4" className="items-center justify-center mb-10"> {/* Added mb-2 for margin-bottom */}
            <DiscussionCard imageSrc="/logo.jpg" title="Discussion Title 4" numberOfComments={4} />
          </div>
          <div id="discussion5" className="items-center justify-center mb-10"> {/* Added mb-2 for margin-bottom */}
            <DiscussionCard imageSrc="/logo.jpg" title="Discussion Title 5" numberOfComments={6} />
          </div>
          <div id="discussion6" className="items-center justify-center mb-10"> {/* Added mb-2 for margin-bottom */}
            <DiscussionCard imageSrc="/logo.jpg" title="Discussion Title 6" numberOfComments={1} />
          </div>
        </div>
      </div>
    </main>
  );
}
