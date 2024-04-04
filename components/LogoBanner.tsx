import '../app/globals.css';
import '../app/LogoBanner.css';


export default function LogoBanner() {
    return (
        // <main className="relative overflow-hidden"> 
        //     <div className='max-w-screen mx-auto mb-10'> 
        //         <div className='max-w-screen-xl mx-auto'>
                    <div className='logos'>
                        <div className='logos-slide'>
                            <img src="/canada_gov.png" alt="" /> 
                            <img src="/Ecssen_logo.png" alt="" />
                            <img src="/SignalHire_logo_logo.png " alt="" />
                            <img src="/UBC_logo.png" alt="" />
                            <img src="/BCIT_logo.png" alt="" />
                            <img src="/Founder_logo_copy.png" alt="" />
                        </div>

                        <div className='logos-slide'>
                            <img src="/Ecssen_logo.png" alt="" />
                            <img src="/canada_gov.png" alt="" /> 
                            <img src="/SignalHire_logo_logo.png " alt="" />
                            <img src="/UBC_logo.png" alt="" />
                            <img src="/BCIT_logo.png" alt="" />
                            <img src="/Founder_logo_copy.png" alt="" />
                        </div>
                    </div>
        //         </div>    
        //     </div>
        // </main>                
    );
}