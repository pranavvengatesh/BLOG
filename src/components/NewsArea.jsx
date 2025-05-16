import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import logo from "../assets/logo.svg";

const NewsArea = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #e4f0f8 0%, #f0e6fb 100%)", // pastel aqua to purple
        padding: "30px 5%",
        color: "#222",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 className="text-center mb-4">
        <span className="badge  text-white" >
                      <img src={logo} alt="Logo" style={{ height: "32px" }} />

        </span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {articles.map((news, index) => (
          <NewsItems
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsArea;
