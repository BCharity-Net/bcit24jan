import '../app/globals.css';
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function GoToResourceSection() {
    return (
        <main className="relative overflow-hidden"> 
            {/* BackGround color */}
            <div className='max-w-screen mx-auto mb-10 items-center justify-center
                            bg-gradient-to-b from-gray-800 to-black via-gray-900 pt-8'> 
                <div className='max-w-screen-xl mx-auto'>
                    <h1 className='text-4xl text-left'>Go To The Sources</h1>
                    <p className='text-left mb-11'>Read the documentation for BCharity and popular tools</p>

                    <div className='grid grid-cols-2 gap-32'>
                        <div>
                            <div className='flex justify-between'>
                                <p className="text-4xl mr-24">BCharity PPT</p>
                                <button className="bg-black text-white px-4 py-2 rounded-full border-2 border-white hover:bg-white hover:text-black hover:border-purple-400">VIEW ALL</button>
                            </div>  
                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <p>Learn how BCharity works and get a high-level understanding of BCharity's architecture</p>
                        </div>
                      
                        <div>
                            <div className='flex justify-between'>
                                <p className="text-4xl mr-24">BCharity PPT</p>
                                <button className="bg-black text-white px-4 py-2 rounded-full border-2 border-white hover:bg-white hover:text-black hover:border-purple-400">VIEW ALL</button>
                            </div>  
                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <p>Learn how BCharity works and get a high-level understanding of BCharity's architecture</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div className='mt-8 bg-gray-800 rounded-xl p-5'>
                            <div className='text-4xl mb-4'><h1>BCharity News</h1></div>
                            <div className='mb-8'><p>Sign up for newsletter and learn about new resources. new commits, new proposals, and more</p></div>
                            <div className='flex justify-center'>
                            <div className="relative">
                                <input
                                    className="rounded-full bg-black text-white placeholder-white placeholder-opacity-50 w-64 h-14 pl-4 pr-8"
                                    type="text"
                                    placeholder="Email"
                                />

                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-black px-4 py-2 rounded-full border-2 border-black hover:bg-white hover:text-black">
                                    <b>SIGN UP</b>
                                </button>
                            </div>
                        </div>
                        </div>
                        <div className='mt-8 bg-gray-800 rounded-xl p-5'>
                            <div className='text-4xl mb-4'><h1>Even More Resources</h1></div>
                            <div className='mb-8'><p>More videos, more episodes. Discussions between industry leaders in both blockchain and technology, our teamm and community developers.</p></div>
                            <div className='flex justify-center'>
                            <a href="http://www.youtube.com/@bcharity514" className="flex items-center mr-2 bg-inherit text-white px-4 py-2 rounded-full border-2 border-white hover:bg-red-600 hover:text-white hover:border-white">
                                YOUTUBE 
                                <FaYoutube className='ml-2'/>
                            </a>
                            <a href="https://discord.gg/NyHQuR8m" className="flex items-center ml-2 bg-inherit text-white px-4 py-2 rounded-full border-2 border-white hover:bg-violet-500 hover:text-white hover:border-black">
                                DISCORD 
                                <FaDiscord className='ml-2'/>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
/**
 * "Go to source lable"h1
 * "Read the documentation for BCharity and popular tools"p
 * 
 * 2 cards, each with:
 * "BCharity PPT"h1     "View all" button
 * "Setparator"
 * "Learn how BCharity works and get a high-level 
 *  understanding of BCharity's architecture" p
 * 
 * 2 cards:
 * Card left:
 * "BCharity news" h1
 * "Sign up for newsletter and learn about new
 *  resources. new commits, new proposals, and more" p
 * Text area with a button 
 * 
 * Card Right:
 * "Even more resources" h1
 * "More videos, more episodes. Discussions 
 *  between industry leaders in both blockchain and 
 *  technology, our teamm and community developers." p
 * 
 * button<youtube logo>             button<discord logo>
 *
 */