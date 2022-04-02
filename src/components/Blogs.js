import data from "../data";

export default function Blogs() {
  return (
    <div className="blogs-container">
      <h2 className="blog-title">{data.blogTitle}</h2>
      <h3 className="blog-sub-title">{data.blogSubTitle}</h3>
      <div className="blog-posts">
        <div className="blog">
          <img
            className="blog-image"
            src={data.kitchen_image_01}
            alt="Kitchen Remodel"
          />
          <h3 className="blog-link-text">Kitchen Remodel Project</h3>
        </div>
        <div className="blog">
          <img
            className="blog-image"
            src={data.featured_01_img}
            alt="Kitchen Remodel"
          />
          <h3 className="blog-link-text">First-Time Buyer Advice</h3>
        </div>
        <div className="blog">
          <img
            className="blog-image"
            src={data.featured_03_img}
            alt="Kitchen Remodel"
          />
          <h3 className="blog-link-text">Family Friendly Cities</h3>
        </div>
      </div>
      <button className="blog-btn">{data.blogBtnText}</button>
    </div>
  );
}
