import { format } from "date-fns";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <section className="flex flex-col gap-2 items-center justify-center pt-8">
      <img className="pb-3" src={logo} alt="" />
      <p className="text-accent-content text-lg">
        Journalism Without Fear or Favour
      </p>
      <p className="text-accent-content text-xl font-medium">
        {format(new Date(), "eeee, MMMM dd, yyyy")}
      </p>
    </section>
  );
};

export default Header;
