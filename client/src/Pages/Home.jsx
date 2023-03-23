import { CategorySection } from "../Components/Home/CategorySection";
import { MainSection } from "../Components/Home/MainSection";
import { NewProductSection } from "../Components/Home/NewProductSection";
import { Reviews } from "../Components/Home/Reviews";
const Home = () => {
  return (
    <>
      <section className="w-[95%] 2xl:w-[85vw]">
        <MainSection />
        <br />
        <NewProductSection />
        <br />
      </section>
      <br />
      <section className="w-full 2xl:w-[85vw]">
        <CategorySection />
      </section>
      <br />
      <section className="w-[95%] 2xl:w-[85vw] ">
        <Reviews />
      </section>
    </>
  );
};

export default Home;
