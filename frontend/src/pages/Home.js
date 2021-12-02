import Featured from "../sections/Featured";
import RecentPosts from "../sections/RecentPosts";
import Hero from "../components/Hero";

function Home({ articles }) {
  return (
    <div>
      <Hero />
      <Featured articles={articles} />
      <RecentPosts articles={articles} />
    </div>
  );
}

export default Home;
