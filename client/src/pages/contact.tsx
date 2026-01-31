import BackButton from "@/components/BackButton";

export default function Contact() {
  return (
    <div className="ptv-contact-page">
      <div className="ptv-scanlines" />
      <div className="ptv-vignette" />

      <BackButton />

      <div className="ptv-email-container">
        <div className="ptv-email-fit">
          CONTACT@PETALONTV.COM
        </div>
      </div>
    </div>
  );
}
