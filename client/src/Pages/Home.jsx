import { CategorySection } from "../Components/CategorySection";
import { MainSection } from "../Components/MainSection";
import { NewProductSection } from "../Components/NewProductSection";
import { Reviews } from "../Components/Reviews";
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
