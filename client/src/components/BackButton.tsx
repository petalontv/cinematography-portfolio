import { Link } from "wouter";

export default function BackButton() {
    return (
        <Link href="/">
            <button className="ptv-sub-button z-[9999]">
                BACK
            </button>
        </Link>
    );
}
