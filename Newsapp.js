import React, { useEffect, useState } from 'react';
import Card from './Card';

function Newsapp() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");  
  const API_KEY = "f9e802fc03c14e59a74b97a69683cddf";

  const getData = async (query = search) => {
    if (!query) return; // Avoid empty searches
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      setArticles(jsonData.articles || []);
      console.log(jsonData.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData("latest"); // initial load with a default topic
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryClick = (e) => {
    const category = e.target.value;
    setSearch(category);
    getData(category);
  };

  return (
    <div>
      <nav className='nav'>
        <h1>Trendy News</h1>
        <ul>
          <li><button onClick={() => getData("all")}>All News</button></li>
          <li><button onClick={() => getData("trending")}>Trending News</button></li>
        </ul>
        <div className='searchBar'>
          <input 
            type="text" 
            placeholder='Search news' 
            value={search} 
            onChange={handleInput} 
          />
          <button onClick={() => getData(search)}>Search</button>
        </div>
      </nav>

      <p className='head'>Stay Updated with Trending News</p>
      <div className='cat'>
        <button onClick={handleCategoryClick} value="sports">Sports</button>
        <button onClick={handleCategoryClick} value="politics">Politics</button>
        <button onClick={handleCategoryClick} value="entertainment">Entertainment</button>
        <button onClick={handleCategoryClick} value="health">Health</button>
        <button onClick={handleCategoryClick} value="fitness">Fitness</button>
      </div>

      <div>
        {articles && articles.length > 0 ? <Card data={articles} /> : null}
      </div>
    </div>
  );
}

export default Newsapp;