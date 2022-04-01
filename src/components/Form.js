import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isRenting: false,
    employment: "",
    purchaseIntentions: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <>
      <h2 className="form-title title-text">Sign up Form</h2>
      <h3 className="form-sub-title sub-title-text">
        Please let me know how I can help!
      </h3>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="form-name"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          className="form-name"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          className="form-email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <textarea
          className="form-comments"
          value={formData.comments}
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
        />
        <input
          className="form-checkbox"
          type="checkbox"
          id="isRenting"
          checked={formData.isRenting}
          onChange={handleChange}
          name="isRenting"
        />
        <label className="form-checkbox" htmlFor="isRenting">
          Are you currently renting?
        </label>
        <br />
        <br />

        <fieldset className="fieldset-content">
          <legend>Current employment status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />

          <input
            type="radio"
            id="self-employed"
            name="employment"
            value="self-employed"
            checked={formData.employment === "self-employed"}
            onChange={handleChange}
          />
          <label htmlFor="self-employed">Self Employed</label>
          <br />

          <input
            type="radio"
            id="retired"
            name="employment"
            value="retired"
            checked={formData.employment === "retired"}
            onChange={handleChange}
          />
          <label htmlFor="retired">Retired</label>
          <br />
        </fieldset>
        <br />

        <label className="dropdown-content" htmlFor="purchaseIntentions">
          Why are you looking to purchase?
        </label>
        <br />
        <select
          className="dropdown-content"
          id="purchaseIntentions"
          value={formData.purchaseIntentions}
          onChange={handleChange}
          name="purchaseIntentions"
        >
          <option value="primary-residence">Primary Residence</option>
          <option value="investment-property">Investment Property</option>
          <option value="relocating">Relocating</option>
          <option value="downsizing">Downsizing</option>
          <option value="need-more-space">Need More Space</option>
          <option value="second-home">Second Home</option>
          <option value="vacation-home">Vacation Home</option>
        </select>
        <br />
        <button className="form-submit-btn lrg-white-btn">Submit</button>
      </form>
    </>
  );
}
