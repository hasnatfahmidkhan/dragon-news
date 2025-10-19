import { use } from "react";
import Addvertise from "../Addvertise/Addvertise";
import FindUs from "../FindUs/FindUs";
import QZone from "../QZone/QZone";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../../../Context/AuthContext";

const RightAside = () => {
  const { user } = use(AuthContext);
  return (
    <div className="space-y-7">
      {!user && <SocialLogin />}
      <FindUs />
      <QZone />
      <Addvertise />
    </div>
  );
};

export default RightAside;
