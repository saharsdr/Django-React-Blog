import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import RecentPosts from "../sections/RecentPosts";
import Hero from "../components/Hero";

function CategoryBase() {
  const history = useHistory();
  const url = history.location.pathname;
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function fetchCategory() {
      const { data } = await axios.get(`/api${url}/`);
      setCategory(data);
    }
    fetchCategory();
  }, []);
  return (
    <div>
      <Hero />
      <RecentPosts articles={category} />
    </div>
  );
}

export default CategoryBase;
