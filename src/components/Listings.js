import data from "../data";

export default function Listings() {
  return (
    <div className="listings-container">
      <h2>{data.idxTilesTitle}</h2>
      <h3>{data.idxTilesSubTitle}</h3>
      <div className="listings-box">
        <img src={data.settingsIdxPlaceholderImage} alt="Secondary" />
        {/* I wasn't sure how to use the data source below, 
        so I added this placeholder image. */}
        {/* {data.settingsIdxShortcode} */}
      </div>
    </div>
  );
}
