import data from "../data";

export default function Listings() {
  return (
    <div className="listings-container">
      <h2 className="listings-title title-text">{data.idxTilesTitle}</h2>
      <h3 className="listings-sub-title sub-title-text">
        {data.idxTilesSubTitle}
      </h3>
      <div className="listings-box">
        <img src={data.settingsIdxPlaceholderImage} alt="Secondary" />
        {data.settingsIdxShortcode}
      </div>
    </div>
  );
}
