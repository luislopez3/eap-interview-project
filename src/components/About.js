import data from "../data";

export default function About() {
  return (
    <div className="about-container">
      <h2>{data.settingsAboutTitle}</h2>
      <h4>{data.settingsAboutDesc}</h4>
      <br />
      <button className="about-btn">{data.settingsAboutBtnTxt}</button>
      <br />
      <br />
    </div>
  );
}
