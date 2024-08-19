import Image from "next/image";
import Button from "../ui/button";

export default function HappyChef() {
  return (
    <section className="container flex justify-between items-center">
        <div className="w-full md:w-[50%]">
            <div className="w-[80%] flex flex-col gap-10 ">
            <h1 className="medium-heading font-semibold text-[20px] sm:text-[28px] md:text-[38px] ">
            Everyone can be a
            chef in their own kitchen
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
            </p>
            <Button className={'bg-primary-black text-white rounded-xl mt-5'}>
                Learn More
            </Button>
            </div>
        </div>

        <div className="w-full md:w-[50%] relative">
            <div className="bg-lily-white w-full h-[80%] absolute -z-10 top-[20%] rounded-3xl">

            </div>
            <Image src="/home/categories/image 21.png" alt="meat"  className="absolute left-[15%] top-[15%]" width={50} height={50}/>
            <Image src="/home/categories/image 20.png" alt="vegitable"  className="absolute left-[95%] top-[30%]" width={50} height={50}/>
            <Image src="/home/categories/image 27.png" alt="tamato"  className="absolute -left-[5%] top-[70%]" width={50} height={50}/>
            <Image src="/home/categories/image 28.png" alt="an-onion"  className="absolute left-[75%] top-[15%]" width={50} height={50}/>
            <Image src="/home/portrait-happy-male-chef-dressed-uniform 1.png" alt="portrait-happy-male-chef-dressed" width={660} height={597}/>
        </div>
    </section>
  )
}
