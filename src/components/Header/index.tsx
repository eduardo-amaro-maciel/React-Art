import logo from "../../assets/img/logo.png";

export default function Header() {
   return (
      <div className='flex h-32 max-w-[1400px] mx-auto text-white py-7 px-6'>
         <img src={logo} alt='' className='max-w-sm' />
      </div>
   );
}
