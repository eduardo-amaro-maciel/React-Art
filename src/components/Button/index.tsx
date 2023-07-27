type ButtonProps = { children: React.ReactNode };

export default function Button({ children }: ButtonProps) {
   return (
      <div className='flex mt-10'>
         <div className='w-16 h-16 bg-zinc-700 rounded-full'></div>
         <button className='text-white font-sans tracking-widest text-base ml-[-30px] font-semibold'>
            {children}
         </button>
         ;
      </div>
   );
}
