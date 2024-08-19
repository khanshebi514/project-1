import Image from "next/image";

export default function CategoriesCard({iconUrl, title, background}) {
  return (
    <div className={`w-[140px] h-[180px] flex justify-center items-center flex-col gap-5 rounded-lg shadow-xl bg-${background}`}>
        <Image src={iconUrl} alt={title} width={100} height={100}/>
        <h3 className="heading-intro">
            {title}
        </h3>
    </div>
  )
}
