import { FilmPageLayout } from "@/components/FilmPageLayout";

export default function AutumnPage() {
    return (
        <FilmPageLayout
            title="AUTUMN"
            producer={<>Written, filmed and edited by P<i>TV</i></>}
            videoId="1132043431"
            photos={[
                `${import.meta.env.BASE_URL}photos/Screenshot 2025-10-30 at 19.53.26.png`,
                `${import.meta.env.BASE_URL}photos/Screenshot 2025-10-30 at 19.54.18.png`,
                `${import.meta.env.BASE_URL}photos/Screenshot 2025-10-30 at 19.54.51.png`,
                `${import.meta.env.BASE_URL}photos/Screenshot 2025-10-30 at 19.55.32.png`,
                `${import.meta.env.BASE_URL}photos/Screenshot 2025-10-30 at 19.56.12.png`,
                `${import.meta.env.BASE_URL}photos/autumn film thubnail.png`,
            ]}
        />
    );
}
