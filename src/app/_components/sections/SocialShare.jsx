import { INSTAPOST } from "@/app/constant";
import InstagramPostCard from "../ui/InstagramPostCard";
import Button from "../ui/button";
import { IoLogoInstagram } from "react-icons/io";

export default function SocialShare() {
  const instaPostaData = INSTAPOST

  return (
    <section className="bg-gradient-to-b from-white to-lily-white py-5">
      <div className="container">
      <div className="text-center">
        <h1 className="medium-heading">Check out @foodieland on Instagram</h1>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqut enim ad minim </p>
      </div>

      <div className="mt-[50px] flex justify-between flex-wrap lg:flex-nowrap items-center gap-10 p-3">
        {
          instaPostaData.map((item)=>
            <InstagramPostCard key={item.key} data={item}/>
          )
        }
      </div>

      <div className="w-full flex justify-center items-center my-5 md:my-10">
      <Button className={'bg-black text-white rounded-2xl relative '}>
        Visit our Instagram {" "} <IoLogoInstagram/>
      </Button>
      </div>
      
      </div>
     
      
    </section>
  )
}
