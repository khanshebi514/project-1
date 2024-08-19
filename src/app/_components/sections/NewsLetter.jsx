import Image from "next/image";
import Button from "../ui/button";

export default function NewsLetter() {
  return (
    <section className="">
      <div className="container overflow-hidden">
        <div className="bg-[#E7F9FD] rounded-3xl flex justify-center items-center flex-col relative">
          <div className="w-full md:w-[50%] flex justify-center items-center flex-col gap-5 my-[100px]">
            <h1 className="medium-heading text-center">Deliciousness to your inbox</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>

            <div className="flex justify-between items-center gap-2 rounded-3xl bg-white p-2">
              <input
                type="email"
                placeholder="Your Email address ..."
                className="w-[150px] sm:w-[200px] border-none outline-none mx-2 sm:mx-0"
              />
              <Button
                className={"text-white bg-primary-black rounded-3xl h-14"}
              >
                Subscribe
              </Button>
            </div>
          </div>
          
          <div className="w-full hidden lg:flex justify-between items-center absolute top-[52%]">
          <Image src="/home/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png" alt="this is side image" width={200} height={200}/>
          <Image src="/home/Photo-plate.png" alt="this is side image" width={200} height={200} />
          </div>
          

        </div>
      </div>
    </section>
  );
}
