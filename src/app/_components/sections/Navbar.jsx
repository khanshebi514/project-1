import Image from "next/image";
import Link from "next/link";
import { FaFacebookF,  FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="w-full h-[70px] shadow-md">
        <nav className="container h-full flex justify-between items-center">
            <div id="logo">
               <Link href='/'> <Image src="/navbar/foodieland logo.png" alt="foodieland logo image" width={100} height={50}/></Link>
            </div>

            <ul className="hidden md:flex justify-center items-center gap-8">
                <Link className="link-text" href="/">Home</Link>
                <Link className="link-text" href="/recipes">Recipes</Link>
                <Link className="link-text" href="/blog">Blog</Link>
                <Link className="link-text" href="/contact">contact</Link>
                <Link className="link-text" href="/about-us">About us</Link>
            </ul>

            <div className="flex justify-center items-center gap-5">
                <FaFacebookF/>
                <FaXTwitter/>
                <FaInstagram/>
            </div>
        </nav>
    </header>
  )
}
