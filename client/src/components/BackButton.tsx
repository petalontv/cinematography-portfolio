import { Link } from "wouter";

export default function BackButton() {
    return (
        <Link href="/">
            <button className="ptv-sub-button" style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 9999 }}>
                BACK
            </button>
        </Link>
    );
}
