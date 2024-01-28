import DiscussionCard from "../components/DiscussionCard";
import DiscussionHeaderCard from "../components/DiscussionHeaderCard";
import '../app/globals.css';

interface DiscussionSectionProps {
  numberOfComments?: number;
}

export default function DiscussionSection() {
  return (
    <main className={`relative overflow-hidden mx-10`}>
      <div className="mx-4">
      <div id="headerDiscussion" className=" max-w-screen-xl mx-auto mb-10 items-center justify-center">
            <DiscussionHeaderCard imageSrc="/cardImages/banner.png" title="Header Discussion" numberOfComments={8} /> 
          </div>
        <div className="grid grid-cols-3 gap-2 justify-items-center max-w-screen-xl mx-auto"> 
          <div id="discussion1" className="items-center justify-center mb-10"> 
            <DiscussionCard imageSrc="/cardImages/cube.png" title="Discussion Title 1" numberOfComments={3} />
          </div>
          <div id="discussion2" className="items-center justify-center mb-10"> 
            <DiscussionCard imageSrc="/cardImages/cube2.png" title="Discussion Title 2" numberOfComments={5} />
          </div>
          <div id="discussion3" className="items-center justify-center mb-10"> 
            <DiscussionCard imageSrc="/cardImages/cylinder.png" title="Discussion Title 3" numberOfComments={2} />
          </div>
          <div id="discussion4" className="items-center justify-center mb-10">
            <DiscussionCard imageSrc="/cardImages/rectangle.png" title="Discussion Title 4" numberOfComments={4} />
          </div>
          <div id="discussion5" className="items-center justify-center mb-10"> 
            <DiscussionCard imageSrc="/cardImages/squares.png" title="Discussion Title 5" numberOfComments={6} />
          </div>
          <div id="discussion6" className="items-center justify-center mb-10"> 
            <DiscussionCard imageSrc="/cardImages/triangles.png" title="Discussion Title 6" numberOfComments={1} />
          </div>
        </div>
      </div>
    </main>
  );
}
