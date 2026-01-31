import { Link } from "wouter";

export default function BackButton() {
    return (
        <Link href="/">
            <button className="ptv-sub-button" style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 100 }}>
                BACK
            </button>
        </Link>
    );
}
