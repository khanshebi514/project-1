export default function TextInput({type, placeholder,handleChange, className }) {
  return (
    <input type={type} placeholder={placeholder} onChange={handleChange} className={`w-full md:w-[200px] h-[60px] lg:w-[350px] border-[#E4E6F1] border-2 outline-none rounded-xl px-3 text-[#0000008c] text-[14px] ${className}`}/>
  )
}
