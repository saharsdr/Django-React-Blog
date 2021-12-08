import Featured from "../sections/Featured";
import RecentPosts from "../sections/RecentPosts";
import Hero from "../components/Hero";

function Home({ articles, search }) {
  let displayedContacts = articles.filter(function (el) {
    let searchValue = el.title.toLowerCase();
    return searchValue.indexOf(search) !== -1;
  });

  return (
    <div>
      <Hero />
      <Featured articles={displayedContacts} />
      <RecentPosts articles={displayedContacts} />
    </div>
  );
}

export default Home;
