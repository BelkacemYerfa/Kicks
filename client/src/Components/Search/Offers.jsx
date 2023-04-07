export const Offers = () => {
  return (
    <section className="flex h-96 w-full items-end rounded-[48px] bg-black">
      <div className="m-auto max-w-[85%] space-y-2 sm:min-w-[90%]">
        <p className="text-sm font-normal text-FooterTitle sm:text-2xl/[33px]">
          Limited Time Only
        </p>
        <h2 className=" text-xl/[24px] font-semibold text-FooterTitle sm:text-[4.625rem]/[88px]">
          Get 30% Off
        </h2>
        <p className=" w-[80%] text-xs font-normal text-FooterTitle sm:w-[40%] sm:text-xl/[27px]">
          Sneakers made with your comfort in mind so you can put all of your
          focus into your next session.
        </p>
      </div>
    </section>
  );
};
