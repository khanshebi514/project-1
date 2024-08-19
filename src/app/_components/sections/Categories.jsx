import { CATEGORIES } from "@/app/constant";
import Button from "../ui/button";
import CategoriesCard from "../ui/Categories-card";

export default function Categories() {
    const categoriesItem = CATEGORIES
  return (
    <section className="w-full">
        <div className="container">
            <div className="flex justify-between items-center">
                <h1 className="medium-heading">Categories</h1>
                <Button className='text-paragraph rounded-xl bg-[#E7FAFE]'>
                    View all categories
                </Button>
            </div>

            <div className="flex justify-center flex-wrap items-center gap-2 mt-5">
                {categoriesItem.map((item)=>
                    <CategoriesCard key={item.key} iconUrl={item.iconURL} title={item.title} background={item.background}/>
                )}
            </div>
        </div>
    </section>
  )
}
