export const ReviewCard = ({
  userProfilePic,
  userReview,
  userName,
  productReviewed,
}) => {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden">
      <div className="p-4 flex items-center justify-between text-ViewDetails">
        <div className="">
          <h3 className="text-2xl font-semibold">{userName || "belkacem"}</h3>
          <p className="font-normal text-base">
            {userReview || "it's a really good product"}
          </p>
        </div>
        <img
          src={
            userProfilePic ||
            "https://www.fredzone.org/wp-content/uploads/2022/02/firefox_IxLgenEuFw-1000x1000.jpg"
          }
          className="rounded-[32px] h-16 w-16"
          alt="user profile picture"
        />
      </div>
      <div className="w-full h-auto">
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
