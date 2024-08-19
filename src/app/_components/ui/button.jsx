export default function Button({children, className}) {
  return (
    <button className={`text-[12px] sm:text-[14px] md:text-[16px] w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] md:w-[170px] md:h-[55px] lg:w-[200px] lg:h-[60px]  flex justify-center items-center gap-3 ${className}`}>
        {children}
    </button>
  )
}
