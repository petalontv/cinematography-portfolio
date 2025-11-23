import { FilmPageLayout } from "@/components/FilmPageLayout";

export default function AutumnPage() {
    return (
        <FilmPageLayout
            title="AUTUMN"
            producer={<>Written, filmed and edited by P<i>TV</i></>}
            videoId="1132043431"
            photos={[
                "/photos/Screenshot 2025-10-30 at 19.53.26.png",
                "/photos/Screenshot 2025-10-30 at 19.54.18.png",
                "/photos/Screenshot 2025-10-30 at 19.54.51.png",
                "/photos/Screenshot 2025-10-30 at 19.55.32.png",
                "/photos/Screenshot 2025-10-30 at 19.56.12.png",
                "/photos/autumn film thubnail.png",
            ]}
        />
    );
}
