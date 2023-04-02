export const ReviewCard = ({
  userProfilePic,
  userReview,
  userName,
  productReviewed,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white md:rounded-[32px]">
      <div className="flex items-center justify-between p-4 text-ViewDetails">
        <div className="">
          <h3 className="text-2xl font-semibold">{userName || "belkacem"}</h3>
          <p className="text-base font-normal">
            {userReview || "it's a really good product"}
          </p>
        </div>
        <img
          src={
            userProfilePic ||
            "https://www.fredzone.org/wp-content/uploads/2022/02/firefox_IxLgenEuFw-1000x1000.jpg"
          }
          className="h-16 w-16 rounded-[32px]"
          alt="user profile picture"
        />
      </div>
      <div className="h-auto w-full">
        <img
          src={
            productReviewed ||
            "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          className=""
          alt=""
        />
      </div>
    </div>
  );
};
