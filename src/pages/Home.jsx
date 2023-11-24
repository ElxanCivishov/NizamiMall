import { Meta } from "../components/layout";
import {
  HomeCategories,
  HomeInformation,
  HomeSlider,
  HomeBlogInfo,
} from "../components/home";

const Home = () => {
  return (
    <main className="flex flex-col gap-14 pb-10">
      <Meta title="Nizami mall" />
      <HomeSlider />
      <HomeCategories />
      <HomeInformation />
      <HomeBlogInfo />
    </main>
  );
};

export default Home;
