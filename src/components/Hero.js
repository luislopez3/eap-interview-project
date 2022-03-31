import data from "../data";

export default function Hero() {
  return (
    <div className="hero-container">
      <img
        src={data.settingsMediaPrimaryImage}
        alt="Hero Section Background"
      ></img>
      <h1 className="hero-title-text title-text">{data.settingsTitle}</h1>
      <h2 className="hero-sub-title-text sub-title-text">{data.settingsSubTitle}</h2>
      <iframe
        className="hero-video"
        src={data.settingsAgentVideo}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
