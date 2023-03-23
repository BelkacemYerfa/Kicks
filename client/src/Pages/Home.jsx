import { CategorySection } from "../Components/Home/CategorySection";
import { MainSection } from "../Components/Home/MainSection";
import { NewProductSection } from "../Components/Home/NewProductSection";
import { Reviews } from "../Components/Home/Reviews";
export const Home = () => {
  return (
    <>
      <section className="w-[95%]">
        <MainSection />
        <br />
        <NewProductSection />
        <br />
      </section>
      <br />
      <CategorySection />
      <br />
      <section className="w-[95%] ">
        <Reviews />
      </section>
    </>
  );
};
