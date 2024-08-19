import Image from 'next/image';
import { PiDotsThreeBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { RiChat3Line } from "react-icons/ri";
import { LiaTelegram } from "react-icons/lia";
import { GoDot, GoDotFill } from "react-icons/go";

const InstagramPostCard = ({data}) => {
  const {image:imageURL, userName, userLocation} = data
  return (
    <div className='max-w-[290px] bg-white rounded-md'>
      {/* user detail area */}
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center gap-3 p-2'>
          <div className='w-[55px] h-[55px] rounded-full border-2 p-1'>
          <Image src={'/navbar/Oval.png'} alt='instaGram Post' width={50} height={50} className='rounded-full'/>
          </div>
        
        <div>
        <h3 className='text-[14.5px] font-semibold'>{userName}</h3>
        <p className='text-[12.5px]'>{userLocation}</p>
        </div>
  
        </div>
        <div className='w-[50px]'>
        <PiDotsThreeBold size={25}/>
        </div>
        
      </div>

      {/* post image section */}
      <div className=''>
      <Image src={imageURL} alt='instaGram Post' width={290} height={290}/>
      </div>

      {/* like and Share section */}
      <div className='p-3'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center gap-2'>
            <CiHeart/>
            <RiChat3Line className='rotate-[270deg]'/>
            <LiaTelegram/>
          </div>
          <div className='flex justify-center items-center'>
            <GoDotFill className='text-blue-800'/>
            <GoDot/>
            <GoDot/>
          </div>
          <div className='w-[50px]'>
            <Image src={'/home/save-shape.png'} alt='insa save shape' width={20} height={20} className='bg-transparent'/>
          </div>
        </div>
        {/* like by useers */}

        <div className='flex items-center gap-2'>
        <div className='w-[30px] h-[30px] rounded-full border-2 p-1'>
          <Image src={'/home/portrait-happy-male-chef-dressed-uniform 1.png'} alt='instaGram Post' width={30} height={30} className='rounded-full'/>
        </div>
        
        <div>
           <p className='text-[9px] font-light'>Liked by <span className='font-semibold'> shoaib </span> and <span className='font-semibold'>444</span> others</p>
        </div>
        </div>
        {/* description section */}
        <div>
          <p className='text-[10px]'><span className='font-semibold'>Foodielan. </span> The vegitable Dishes needs to have certain Vitamens for those peoples</p>
        </div>
      </div>
    </div>
  );
};

export default InstagramPostCard;
