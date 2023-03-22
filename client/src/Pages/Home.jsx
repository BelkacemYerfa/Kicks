import { CategorySection } from "../Components/CategorySection";
import { MainSection } from "../Components/MainSection";
import { NewProductSection } from "../Components/NewProductSection";
export const Home = () => {
  return (
    <>
      <section className="w-[95%] md:w-[95%] ">
        <MainSection />
        <br />
        <NewProductSection />
        <br />
      </section>
      <br />
      <CategorySection />
    </>
  );
};
