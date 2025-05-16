
import image from '../assets/news.jpg';
const NewsItems = ({ title, description, src, url }) => {

  return (
    <div
      className="card bg-white text-dark"
      style={{
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      }}
    >
      <img
        src={src?src:image}
        className="card-img-top"
        alt="news"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column" style={{ flex: '1' }}>
        <h5 className="card-title" style={{ fontSize: '1.1rem' }}>
          {title ? title.slice(0, 60) : "Untitled"}
        </h5>
        <p className="card-text" style={{ fontSize: '0.95rem' }}>
          {description ? description.slice(0, 100) : "Description not available. Click below to read the full article."}
        </p>
        <div style={{ textAlign: 'center', marginTop: 'auto' }}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              borderRadius: '20px',
              padding: '6px 20px',
              fontSize: '0.9rem',
              marginTop: '10px',
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
