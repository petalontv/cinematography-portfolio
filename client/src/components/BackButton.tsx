import { Link } from "wouter";

export default function BackButton() {
    return (
        <Link href="/">
            <button className="ptv-sub-button absolute top-4 left-4 md:top-8 md:left-8 z-[9999]">
                BACK
            </button>
        </Link>
    );
}
