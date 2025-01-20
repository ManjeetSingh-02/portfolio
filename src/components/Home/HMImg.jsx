import ProfileImg from "../../assets/images/profile.png";

const HMImg = () => {
  return (
    <img
      src={ProfileImg}
      alt="Manjeet Singh"
      className="w-80 rounded-md border-none duration-100 animate-iteration-once hover:animate-wiggle"
    />
  );
};

export default HMImg;
