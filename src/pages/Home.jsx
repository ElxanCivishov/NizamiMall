import { Meta } from "../components/layout";
import {
  HomeCategories,
  HomeInformation,
  HomeSlider,
  HomeLatestBlogs,
} from "../components/home";

const Home = () => {
  return (
    <main className="flex flex-col gap-14 pb-10">
      <Meta title="Nizami mall" />
      <HomeSlider />
      <HomeCategories />
      <HomeInformation />
      <HomeLatestBlogs />
    </main>
  );
};

export default Home;
