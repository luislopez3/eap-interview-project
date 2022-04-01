import data from "../data";

export default function CallToAction() {
  return (
    <div className="cta-container">
      <h2 className="cta-title sub-title-text">{data.settingsCtaTitle}</h2>
      <h4>{data.settingsCtaText}</h4>
    </div>
  );
}