import { FilmPageLayout } from "@/components/FilmPageLayout";

export default function FogPage() {
    return (
        <FilmPageLayout
            title="FOG"
            producer={<>Written, filmed and edited by P<i>TV</i></>}
            videoId="1139782018"
            photos={[
                `${import.meta.env.BASE_URL}photos/fog/Screenshot 2025-11-24 at 12.26.28.png`,
                `${import.meta.env.BASE_URL}photos/fog/Screenshot 2025-11-24 at 12.26.58.png`,
                `${import.meta.env.BASE_URL}photos/fog/Screenshot 2025-11-24 at 12.27.28.png`,
                `${import.meta.env.BASE_URL}photos/fog/Screenshot 2025-11-24 at 12.27.56.png`,
                `${import.meta.env.BASE_URL}photos/fog/Screenshot 2025-11-24 at 12.28.26.png`,
                `${import.meta.env.BASE_URL}photos/fog/Screenshot 2025-11-24 at 12.28.50.png`,
            ]}
        />
    );
}
