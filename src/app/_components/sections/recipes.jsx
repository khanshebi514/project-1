import { RECEPIS } from "@/app/constant";
import RecipesCard from "../ui/recipes-card";
import Link from "next/link";

export default function Recipes() {
  const recipesItem = RECEPIS;
  return (
    <section className="w-full">
      <div className="container mt-5">
        <div className="text-center mt-5 w-full md:w-[700px] m-auto">
          <h1 className="medium-heading">Simple and tasty recipes</h1>
          <p className="text-paragraph mt-3">
            We have a huge set of Healthy and tasty recipes check out these
            yummy recipes...
          </p>
        </div>
        <div className="flex justify-between flex-wrap gap-10 mt-10">
          {recipesItem.map((item) => (
            <Link
              key={item.key}
              href={item.title}
              className="hover:scale-y-105 transition-all"
            >
              <RecipesCard
                title={item.title}
                status={item.status}
                iconUrl={item.iconURL}
                ad={item.Ad}
                web={item.web}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
