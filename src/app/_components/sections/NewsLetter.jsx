import Button from "../ui/button";

export default function NewsLetter() {
  return (
    <section className="">
      <div className="container">
        <div className="bg-[#E7F9FD] rounded-3xl flex justify-center items-center flex-col p-5">
          <div className="w-full md:w-[50%] flex justify-center items-center flex-col gap-5 my-10">
            <h1 className="medium-heading">Deliciousness to your inbox</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>

            <div className="flex justify-between items-center gap-2 rounded-3xl bg-white p-2 ">
              <input
                type="email"
                placeholder="Your Email address ..."
                className="w-[200px] border-none outline-none"
              />
              <Button
                className={"text-white bg-primary-black rounded-3xl h-14"}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
