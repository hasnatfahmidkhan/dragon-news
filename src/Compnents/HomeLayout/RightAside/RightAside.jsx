import Addvertise from "../Addvertise/Addvertise";
import FindUs from "../FindUs/FindUs";
import QZone from "../QZone/QZone";
import SocialLogin from "../SocialLogin/SocialLogin";

const RightAside = () => {
  return (
    <div className="space-y-7">
      <SocialLogin />
      <FindUs />
      <QZone />
      <Addvertise />
    </div>
  );
};

export default RightAside;
