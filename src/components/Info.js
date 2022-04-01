import data from "../data";

export default function Info() {
  return (
    <div className="info-container">
      <div className="info-block">
        <h3 className="info-title sub-title-text">
          {data.eap_01_circle_title}
        </h3>
        <img
          className="info-image"
          src={data.eap_01_circle_image}
          alt="Map Pin"
        />
        <h4 className="info-text">{data.eap_01_circle_text}</h4>
        <button className="info-btn lrg-white-btn">
          {data.eap_01_circle_btn_text}
        </button>
      </div>
      <div className="info-block">
        <h3 className="info-title sub-title-text">
          {data.eap_02_circle_title}
        </h3>
        <img
          className="info-image"
          src={data.eap_02_circle_image}
          alt="Map Pin"
        />
        <h4 className="info-text">{data.eap_02_circle_text}</h4>
        <button className="info-btn lrg-white-btn">
          {data.eap_02_circle_btn_text}
        </button>
      </div>
      <div className="info-block">
        <h3 className="info-title sub-title-text">
          {data.eap_03_circle_title}
        </h3>
        <img
          className="info-image"
          src={data.eap_03_circle_image}
          alt="Map Pin"
        />
        <h4 className="info-text">{data.eap_03_circle_text}</h4>
        <button className="info-btn lrg-white-btn">
          {data.eap_03_circle_btn_text}
        </button>
      </div>
    </div>
  );
}
