import { useParams, Link } from "wouter";

const FILM_DATA: Record<string, { title: string }> = {
  autumn: { title: "Autumn" },
  cyberpunk: { title: "Cyberpunk" },
  fog: { title: "Fog" },
};

export default function FilmDetail() {
  const { id } = useParams();
  const film = FILM_DATA[id as string];

  if (!film) return <div>Film not found</div>;

  return (
    <div className="ptv-film-detail">
      <div className="ptv-scanlines" />
      <div className="ptv-vignette" />

      <Link href="/">
        <button className="ptv-sub-button" style={{ position: 'absolute', top: '2rem', left: '2rem' }}>
          BACK
        </button>
      </Link>

      <h1 className="ptv-film-title">{film.title}</h1>

      <div className="ptv-placeholder-box">
        VIMEO EMBED PLACEHOLDER
      </div>

      <div className="ptv-snippets-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="ptv-coming-soon-img">
            COMING SOON
          </div>
        ))}
      </div>
    </div>
  );
}
