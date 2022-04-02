import data from "../data";

export default function CallToAction() {
  return (
    <div className="cta-container">
      <h2>{data.settingsCtaTitle}</h2>
      <h4>{data.settingsCtaText}</h4>
      <button className="cta-btn">Get In Touch Now</button>
    </div>
  );
}
