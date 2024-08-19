import { MORE_RECIPES } from "@/app/constant";
import RecipesCard from "../ui/recipes-card";
import Link from "next/link";

export default function MoreSpecialRecipes() {
  const moreRecipes = MORE_RECIPES;
  return (
    <section className="">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-5 my-5 mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-inter">
            Try this delicious recipe to make your day
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-7 my-10 justify-items-center">
          {moreRecipes.map((item) => (
            <Link
              href={item.title}
              key={item.key}
              className="hover:scale-y-110 transition-all"
            >
              <RecipesCard
                title={item.title}
                iconUrl={item.iconURL}
                isLike={item.isLike}
                status={item.status}
                shrink={true}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
