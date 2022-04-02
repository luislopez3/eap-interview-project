import data from "../data";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-left-side">
        <h2>{data.settingsAboutTitle}</h2>
        <h4>{data.settingsAboutDesc}</h4>
        <br />
      </div>
      <div className="about-right-side">
        <button className="about-btn">{data.settingsAboutBtnTxt}</button>
      </div>
      <br />
      <br />
    </div>
  );
}
