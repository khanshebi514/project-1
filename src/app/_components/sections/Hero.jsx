import Image from "next/image";
import { PiTimerFill } from "react-icons/pi";
import { MdDinnerDining } from "react-icons/md";
import Button from "../ui/button";
import { CgPlayButtonO } from "react-icons/cg";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="container">
        <div className="bg-[#E7FAFE] rounded-3xl flex justify-between items-center">
          <div className="left-section w-full md:w-[50%] px-10 ">
            <div className=" flex items-center gap-2 bg-slate-50 rounded-full p-2 w-[150px]">
              <Image
                src="/home/image 14.png"
                alt="foodie menu icon"
                width={25}
                height={20}
              />
              <p className="text-intro">Hot Recipes</p>
            </div>

            <div className="">
              <h1 className="large-heading">Spicy delicious chicken wings</h1>
              <p className="text-paragraph md:leading-7 my-5">
               We have
                something for everyone. Explore our wide variety of chicken
                recipes and find the perfect dish to suit your taste and
                occasion. Don't miss out—check out our selection today!
              </p>

              <div className="flex items-center gap-5 mt-5">
                <div className=" flex justify-center items-center gap-2 bg-blue-100 rounded-full p-2 w-[150px]">
                  <PiTimerFill size={20} />
                  <p className="text-paragraph">30 minutes</p>
                </div>

                <div className=" flex justify-center items-center gap-2  bg-blue-100 rounded-full p-2 w-[150px]">
                  <MdDinnerDining size={20} />
                  <p className="text-paragraph">Chicken</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 mt-7 md:mt-14">

                <div className="flex justify-start items-start gap-3">
                <div className="w-[50px] h-[50px] rounded-full p-1">
                  <Image
                    src="/home/Ellipse 2.png"
                    width={50}
                    height={50}
                    alt="avtar pic"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-intro">John Smith</h1>
                  <p className="text-paragraph">15 March 2022</p>
                </div>
                </div>
    
                <div>
                  <Button className="text-white rounded-xl text-[14px] font-semibold hover:bg-blue-200 hover:text-black bg-black dark:bg-white">
                    View Recipes
                    <CgPlayButtonO size={20}/>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="right-section w-full md:w-[50%]">
            <Image
              src="/home/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png"
              width={600}
              height={600}
              alt="This an image of Dish"
              className="rounded-r-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
