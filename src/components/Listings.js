import data from "../data";

export default function Listings() {
  return (
    <div class="listings-container">
      <h2 class="listings-title title-text">{data.idxTilesTitle}</h2>
      <h3 class="listings-sub-title sub-title-text">{data.idxTilesSubTitle}</h3>
      <div class="listings-box">
        <img src={data.settingsIdxPlaceholderImage} alt="Secondary" />
        {data.settingsIdxShortcode}
      </div>
    </div>
  );
}
