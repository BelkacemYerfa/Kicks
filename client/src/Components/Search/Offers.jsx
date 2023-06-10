export const Offers = () => {
  return (
    <section className="flex h-[250px] w-full items-end rounded-[48px] bg-black md:h-96 md:items-center">
      <div className="mx-auto max-w-[85%] py-8 sm:min-w-[90%]">
        <p className="text-[3vw] font-normal text-FooterTitle sm:text-[2vw]">
          Limited Time Only
        </p>
        <h2 className=" text-[10vw] font-semibold text-FooterTitle sm:text-[7vw]">
          Get 30% Off
        </h2>
        <p className=" w-[80%] text-xs font-normal text-FooterTitle sm:w-[40%] sm:text-[1.5vw] md:leading-6">
          Sneakers made with your comfort in mind so you can put all of your
          focus into your next session.
        </p>
      </div>
    </section>
  );
};
