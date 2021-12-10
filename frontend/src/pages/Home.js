import Featured from "../sections/Featured";
import RecentPosts from "../sections/RecentPosts";
import Hero from "../components/Hero";

function Home({ userArticles, articles, search }) {
  let displayedContacts = articles.filter(function (el) {
    let searchValue = el.title.toLowerCase();
    return searchValue.indexOf(search) !== -1;
  });

  return (
    <div>
      <Hero />
      <Featured articles={userArticles} />
      <RecentPosts articles={displayedContacts} />
    </div>
  );
}

export default Home;
