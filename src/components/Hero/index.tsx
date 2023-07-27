import Button from "../Button";
import SlideLogos from "../SlideLogos";

export default function Hero() {
   return (
      <div className='bg-black w-full mt-[-128px]'>
         <div className='h-screen w-full flex flex-col'>
            <div className='max-w-[1400px] flex-1 w-full mx-auto flex-col flex items-start justify-center hero-bg gap-6 px-6'>
               <h1 className='font-sans text-white font-bold text-5xl max-w-[594px] leading-[72px]'>
                  Construa aplicações & experiências inovadoras.
               </h1>
               <p className='text-left max-w-[574px] text-white font-mono leading-[32px] font-normal tracking-widest'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error, nam
                  possimus odio.
               </p>
               <Button>VEJA OS NOVOS PROJETOS</Button>
            </div>
            <SlideLogos />
         </div>
      </div>
   );
}
