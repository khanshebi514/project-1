import Button from "../../ui/button";
import Label from "../../ui/Label";
import TextInput from "../../ui/TextInput";

export default function Form() {
  return (
    <form>
      <div className="container flex flex-col justify-center gap-3">
        <div className="flex w-full justify-between items-center flex-wrap md:flex-nowrap">
          <div className="flex w-full flex-col gap-2">
            <Label>Name</Label>
            <TextInput type={"text"} placeholder={"Enter Your Name ..."} />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <Label>Email address</Label>
            <TextInput type={"email"} placeholder={"Enter Your Email address ..."} />
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap md:flex-nowrap w-full">
          <div className="flex flex-col gap-2 w-full">
            <Label>Subject</Label>
            <TextInput type={"text"} placeholder={"Enter Subject..."} />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <Label>Enquary Type</Label>
            <TextInput type={"text"} placeholder={"advertising..."} />
          </div>
        </div>

        <div className="flex w-full md:w-[95%] justify-between items-center flex-wrap md:flex-nowrap">
          <div className="flex w-full  flex-col gap-2">
            <Label>Subject</Label>
            <textarea placeholder="Enter your Message ..." className=" p-3 border-[#E4E6F1] border-2 outline-none rounded-xl text-[#0000008c] text-[14px] h-[180px]"/>
          </div>
        </div>
        <Button className={'bg-black text-white rounded-2xl'}>
        Submit
      </Button> 
      </div>

      
    </form>
  );
}
