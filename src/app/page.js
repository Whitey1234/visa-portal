import FadeIn from '@/components/FadeIn';
import ServiceDescription from "@/components/ServiceDescription";
import VisaSlider from "@/components/VisaHeroSlider";
import Image from "next/image";
import AboutUsPage from "./aboutus/page";



;

export default function Home() {
  return (
    <div className="font-sans  max-w-7xl mx-auto  mt-10">
    
<VisaSlider />
<FadeIn>
<ServiceDescription/>
</FadeIn>
<FadeIn>
<AboutUsPage/>
</FadeIn>
 


      
       
       
      
    </div>
  );
}
