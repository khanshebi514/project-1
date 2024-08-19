import Image from "next/image";
import Form from "./Form";

export default function ContactForm() {
  return (
    <section className="mt-5">
        <div className="container">
            <div className="flex justify-between items-center gap-2 flex-1">
                <div className="w-[400px] bg-gradient-to-b from-white to-[#E7F9FD] align-middle hidden md:flex justify-center rounded-3xl">
                    <Image src={"/home/Layer 11.png"} alt="" width={250} height={250}/>
                </div>
                <div className="w-full md:w-[500px] lg:w-[840px]">
                    <Form/>
                </div>
            </div>
        </div>
    </section>
    
  )
}
