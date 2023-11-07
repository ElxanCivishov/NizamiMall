import { Meta } from "../components/layout";
import { HomeAccardion } from "../components/home";

const Home = () => {
  return (
    <main className="flex flex-col gap-5 pb-10">
      <Meta title="Site" />
      <HomeAccardion />
    </main>
  );
};

export default Home;
