export default function Button({children, className}) {
  return (
    <button className={`w-[200px] h-[60px] flex justify-center items-center gap-3 ${className}`}>
        {children}
    </button>
  )
}
