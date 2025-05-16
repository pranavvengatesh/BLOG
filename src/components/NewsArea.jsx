import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import logo from "../assets/logo.svg";

const NewsArea = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!data.articles) {
          throw new Error("No articles found in response");
        }
        setArticles(data.articles);
        setError(null);
      })
      .catch((err) => {
        console.error("Fetching news failed:", err);
        setArticles([]); // clear articles
        setError(err.message);
      });
  }, [category]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #e4f0f8 0%, #f0e6fb 100%)",
        padding: "30px 5%",
        color: "#222",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 className="text-center mb-4">
        <span className="badge text-white">
          <img src={logo} alt="Logo" style={{ height: "32px" }} />
        </span>
      </h2>

      {error ? (
        <p style={{ color: "red", textAlign: "center" }}>
          Error loading news: {error}
        </p>
      ) : articles.length === 0 ? (
        <p style={{ textAlign: "center" }}>No news available.</p>
      ) : (
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
      )}
    </div>
  );
};

export default NewsArea;
