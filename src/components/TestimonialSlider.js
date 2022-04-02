import quotes from "../images/quotes.svg";

export default function TestimonialSlider() {
  return (
    <>
      <h2 className="testimonial-title">Testimonials</h2>
      <h3 className="testimonial-sub-title">
        See what recent homebuyers are saying about us!
      </h3>
      <div className="testimonial-slider">
        <div className="testimonial-card">
          <div className="testimonial-icon">
            <img src={quotes} alt="Quotes Symbols" />
          </div>
          <div className="testimonial-text">
            <p>
              John Doe Realty is the real deal! John Doe Realty is awesome! I
              STRONGLY recommend John Doe Realty to EVERYONE interested buying a
              home!
            </p>
          </div>
          <div className="testimonial-image">
            <img
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="Random Person"
            />
          </div>
          <div className="testimonial-name">
            <p>John</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-icon">
            <img src={quotes} alt="Quotes Symbols" />
          </div>
          <div className="testimonial-text">
            <p>
              We can't understand how we've been living without John Doe Realty.
              I couldn't have asked for more than this. It's really wonderful.
            </p>
          </div>
          <div className="testimonial-image">
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="Random Person"
            />
          </div>
          <div className="testimonial-name">
            <p>Anne</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-icon">
            <img src={quotes} alt="Quotes Symbols" />
          </div>
          <div className="testimonial-text">
            <p>
              I would be lost without John Doe Realty. I couldn't have asked for
              more than this. Wow what great service, I love it!
            </p>
          </div>
          <div className="testimonial-image">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Random Person"
            />
          </div>
          <div className="testimonial-name">
            <p>Stephanie</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-icon">
            <img src={quotes} alt="Quotes Symbols" />
          </div>
          <div className="testimonial-text">
            <p>
              You guys rock! I just can't get enough of John Doe Realty. I want
              to get a T-Shirt with John Doe Realty on it so I can show it off
              to everyone.
            </p>
          </div>
          <div className="testimonial-image">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Random Person"
            />
          </div>
          <div className="testimonial-name">
            <p>Allen</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-icon">
            <img src={quotes} alt="Quotes Symbols" />
          </div>
          <div className="testimonial-text">
            <p>
              I will recommend you to my colleagues. Thanks for the great
              service.
            </p>
          </div>
          <div className="testimonial-image">
            <img
              src="https://randomuser.me/api/portraits/women/7.jpg"
              alt="Random Person"
            />
          </div>
          <div className="testimonial-name">
            <p>Caroline</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-icon">
            <img src={quotes} alt="Quotes Symbols" />
          </div>
          <div className="testimonial-text">
            <p>
              I love John Doe Realty. They really saves me time and effort. John
              Doe Realty is exactly what our business has been lacking.
            </p>
          </div>
          <div className="testimonial-image">
            <img
              src="https://randomuser.me/api/portraits/men/7.jpg"
              alt="Random Person"
            />
          </div>
          <div className="testimonial-name">
            <p>Ali</p>
          </div>
        </div>
      </div>
    </>
  );
}
