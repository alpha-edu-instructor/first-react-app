export default function SongCard({ title, author, image }) {
  return (
    <div className="song">
      <img src={image} alt={title} className="song-image" />
      <div className="song-content">
        <div>
          <h2 className="song-title">{title}</h2>
          <p className="song-author">{author}</p>
        </div>
        <div className="song-btn">| |</div>
      </div>
    </div>
  );
}
