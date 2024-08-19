import Categories from "./_components/sections/Categories";
import HappyChef from "./_components/sections/HappyChef";
import Hero from "./_components/sections/Hero";
import MoreSpecialRecipes from "./_components/sections/MoreSpecialRecipes";
import Navbar from "./_components/sections/Navbar";
import NewsLetter from "./_components/sections/NewsLetter";
import Recipes from "./_components/sections/recipes";
import SocialShare from "./_components/sections/SocialShare";

export default function Home() {
  return (
    <main className="space-y-[60px]">
      <Navbar/>
      <Hero/>
      <Categories/>
      <Recipes/>
      <HappyChef/>
      <SocialShare/>
      <MoreSpecialRecipes/>
      <NewsLetter/>
    </main>
  );
}
