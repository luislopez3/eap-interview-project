import data from "../data";

export default function About() {
  return (
    <div className="about-container">
      <h3 className="about-title-text sub-title-text">
        {data.settingsAboutTitle}
      </h3>
      <h4 className="about-text">{data.settingsAboutDesc}</h4>
      <button className="about-btn lrg-white-btn">
        {data.settingsAboutBtnTxt}
      </button>
    </div>
  );
}
