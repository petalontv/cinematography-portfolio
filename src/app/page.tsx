import { FilmItem } from "@/components/FilmItem";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 px-8 py-16 max-w-[1800px] mx-auto w-full">
      <FilmItem
        href="/autumn"
        imageSrc="/photos/autumn film thubnail.png"
        title="AUTUMN"
        delay={0}
      />
      <FilmItem
        href="/cyberpunk"
        imageSrc="/photos/cyberpunk/Screenshot 2025-11-06 at 17.03.34.png"
        title="CYBERPUNK"
        delay={0.05}
      />
      <FilmItem
        href="/fog"
        imageSrc="/photos/fog/Screenshot 2025-11-24 at 12.26.28.png"
        title="FOG"
        delay={0.1}
      />
      <FilmItem title="COMING SOON..." delay={0.15} />
      <FilmItem title="COMING SOON..." delay={0.2} />
      <FilmItem title="COMING SOON..." delay={0.25} />
    </main>
  );
}
