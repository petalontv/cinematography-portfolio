import { Link } from "wouter";

export default function Contact() {
  return (
    <div className="ptv-contact-page">
      <div className="ptv-scanlines" />
      <div className="ptv-vignette" />
      
      <Link href="/">
        <button className="ptv-sub-button" style={{ position: 'absolute', top: '2rem', left: '2rem' }}>
          BACK
        </button>
      </Link>

      <div className="ptv-email-container">
        <div className="ptv-email-fit">
          CONTACT@PETALONTV.COM
        </div>
      </div>
    </div>
  );
}
