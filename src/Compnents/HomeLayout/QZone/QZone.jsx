import swimmingImage from "../../../assets/swimming.png";
import classImage from "../../../assets/class.png";
import playImage from "../../../assets/playground.png";
const QZone = () => {
  return (
    <div className="bg-base-200 rounded-md p-5 ">
      <h2 className="font-semibold text-xl mb-5">Q-Zone</h2>
      <div className="space-y-6">
        <img className="w-full object-cover" src={swimmingImage} alt="" />
        <img className="w-full object-cover" src={classImage} alt="" />
        <img className="w-full object-cover" src={playImage} alt="" />
      </div>
    </div>
  );
};

export default QZone;
