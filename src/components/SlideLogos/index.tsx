import "./style.css";

import Logo1 from "../../assets/logos/3m.svg";
import Logo2 from "../../assets/logos/barstool-store.svg";
import Logo3 from "../../assets/logos/budweiser.svg";
import Logo4 from "../../assets/logos/buzzfeed.svg";
import Logo5 from "../../assets/logos/forbes.svg";
import Logo6 from "../../assets/logos/macys.svg";
import Logo7 from "../../assets/logos/menshealth.svg";
import Logo8 from "../../assets/logos/mrbeast.svg";

export default function SlideLogos() {
   return (
      <>
         <div className='logos'>
            <div className='logos-slide'>
               <img src={Logo1} />
               <img src={Logo2} />
               <img src={Logo3} />
               <img src={Logo4} />
               <img src={Logo5} />
               <img src={Logo6} />
               <img src={Logo7} />
               <img src={Logo8} />
            </div>
            <div className='logos-slide'>
               <img src={Logo1} />
               <img src={Logo2} />
               <img src={Logo3} />
               <img src={Logo4} />
               <img src={Logo5} />
               <img src={Logo6} />
               <img src={Logo7} />
               <img src={Logo8} />
            </div>
         </div>
      </>
   );
}
