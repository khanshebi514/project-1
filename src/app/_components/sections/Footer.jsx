import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer>
        <div className="container py-10">
        <div className="flex justify-between items-start flex-col md:flex-row gap-5 md:gap-0">
            <div>
                <Image src={'/navbar/foodieland logo.png'} alt="foodiland logo" width={100} height={50}/>
                <p className="mt-5">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            </div>
            <div className="">
                <ul className="flex justify-center items-center gap-5">
                    <Link className="intro-heading hover:border-b" href={'/recipes'}>Recipes</Link>
                    <Link className="intro-heading hover:border-b" href={'/blog'}>Blog</Link>
                    <Link className="intro-heading hover:border-b" href={'/about'}>About</Link>
                    <Link className="intro-heading hover:border-b" href={'/contact-us'}>Contact us</Link>
                </ul>
            </div>
        </div>

        <div className="w-full h-[1px] bg-[#0000002a] my-8"></div>
        <div className="flex justify-items-end items-start">

            <p className="w-[60%] text-start md:text-end">@2020 flowbase, Powered by <span className="text-[red]">Webflow</span></p>
            <div className="social-icons flex justify-end items-center gap-10 w-[40%]">
                <FaFacebookF/>
                <FaXTwitter/>
                <FaInstagram/> 
            </div>
        </div>
        </div>
        
    </footer>
  )
}
