import { BreadCrumb, Meta } from "../components/layout";
import { HelpText } from "../components";

const Help = () => {
  return (
    <div>
      <Meta title="Yardım" />
      <BreadCrumb title="Yardım" />
      <section className="container p-5 mb-5">
        <h3 className="font-semibold text-xl tracking-wide mb-3 ">Yardım</h3>
        <HelpText />
      </section>
    </div>
  );
};

export default Help;
