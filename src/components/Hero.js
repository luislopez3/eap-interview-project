import data from "../data";

export default function Hero() {
  return (
    <div className="hero-container">
      <img
        src={data.settingsMediaPrimaryImage}
        alt="Hero Section Background"
      ></img>
      <h2 className="hero-title-text">{data.settingsTitle}</h2>
      <h3 className="hero-sub-title-text">{data.settingsSubTitle}</h3>
      <iframe
        className="hero-video"
        src={data.settingsAgentVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
