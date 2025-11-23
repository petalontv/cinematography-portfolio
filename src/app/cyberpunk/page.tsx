import { FilmPageLayout } from "@/components/FilmPageLayout";

export default function CyberpunkPage() {
    return (
        <FilmPageLayout
            title="CYBERPUNK"
            producer={<>Written, filmed and edited by P<i>TV</i></>}
            videoId="1134298540"
            photos={[
                "/photos/cyberpunk/Screenshot 2025-11-06 at 17.03.34.png",
                "/photos/cyberpunk/Screenshot 2025-11-06 at 17.15.46.png",
                "/photos/cyberpunk/Screenshot 2025-11-06 at 17.16.04.png",
                "/photos/cyberpunk/Screenshot 2025-11-06 at 17.16.22.png",
                "/photos/cyberpunk/Screenshot 2025-11-06 at 17.17.13.png",
                "/photos/cyberpunk/Screenshot 2025-11-06 at 17.38.41.png",
            ]}
        />
    );
}
