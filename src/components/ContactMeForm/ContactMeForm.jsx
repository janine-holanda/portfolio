import { useState } from "react";
import axios from "axios";
import ContactMeFormPopupModal from "../ContactMeFormPopupModal/ContactMeFormPopupModal";

const initFormData = {
  name: "",
  email: "",
  linkedin: "",
  message: "",
};
const initFormError = {
  name: "",
  email: "",
  linkedin: "",
  message: "",
};

export default function ContactMeForm() {
  const [formData, setFormData] = useState(initFormData);
  const [formError, setFormError] = useState(initFormError);
  const [postError, setPostError] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  const postForm = async (data) => {
    try {
      // axios.defaults.headers.post["Content-Type"] = "application/json";
      // await axios.post("https://formsubmit.co/ajax/janine.holanda@gmail.com", {
      //   name: data.name,
      //   message: `E-mail: ${data.email} \n LinkedIn: ${data.linkedin} \n Message: ${data.message}`,
      // });
      setOpenPopup(true);
      setFormData(initFormData);
      setFormError(initFormError);
      setPostError("");
    } catch (error) {
      setPostError(error.message);
    }
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    if (name === "name" || name === "message") {
      if (!value.trim()) {
        setFormError({ ...formError, [name]: "This field is required." });
      } else {
        setFormError({ ...formError, [name]: "" });
      }
    }
    if (name === "email") {
      if (!isEmailValid(value)) {
        setFormError({ ...formError, [name]: "Invalid e-mail format." });
      } else {
        setFormError({ ...formError, [name]: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formError.name &&
      !formError.email &&
      !formError.linkedin &&
      !formError.message &&
      formData.name &&
      formData.email
    ) {
      postForm(formData);
    } else {
      setPostError("Please fill in the required fields.");
      setFormError((prev) => ({
        ...prev,
        name: "This field is required.",
        email: "This field is required.",
        message: "This field is required.",
      }));
    }
  };

  return (
    <>
      <ContactMeFormPopupModal open={openPopup} setOpen={setOpenPopup} />
      <form
        onSubmit={handleSubmit}
        className="ring-1 ring-m-light-blue p-4 rounded-lg w-full max-w-2xl"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col w-auto gap-2 font-semibold mb-4 md:w-[40%]">
            <label htmlFor="Name" className=" text-m-light-blue">
              {" "}
              Name*:
            </label>
            <input
              id="Name"
              name="name"
              type="text"
              className={`h-8 rounded-md ring-1 ring-m-light-blue border-m-light-blue p-2 focus:outline-none focus:ring-4 focus:ring-m-light-blue ${
                formError.name ? "ring-2 ring-m-red focus:ring-m-red" : ""
              }`}
              onChange={handleChange}
              value={formData.name}
            ></input>
            {formError.name && (
              <p className="text-red-500 text-sm font-semibold">
                {formError.name}
              </p>
            )}
          </div>
          <div className="flex flex-col w-auto gap-2 font-semibold mb-4 md:w-[55%]">
            <label htmlFor="email" className=" text-m-light-blue">
              {" "}
              E-mail*:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`h-8 rounded-md ring-1 ring-m-light-blue border-m-light-blue p-2 focus:outline-none focus:ring-4 focus:ring-m-light-blue ${
                formError.email ? "ring-2 ring-m-red focus:ring-m-red" : ""
              }`}
              onChange={handleChange}
              value={formData.email}
            ></input>
            {formError.email && (
              <p className="text-red-500 text-sm font-semibold">
                {formError.email}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col w-auto gap-2 font-semibold mb-4">
          <label htmlFor="linkedin" className=" text-m-light-blue">
            {" "}
            LinkedIn:
          </label>
          <input
            id="linkedin"
            type="website"
            name="linkedin"
            className="h-8 rounded-md ring-1 ring-m-light-blue border-m-light-blue p-2 focus:outline-none focus:ring-4 focus:ring-m-light-blue"
            onChange={handleChange}
            value={formData.linkedin}
          ></input>
        </div>
        <div className="flex flex-col w-auto gap-2 font-semibold mb-4">
          <label htmlFor="message" className=" text-m-light-blue">
            {" "}
            Message*:
          </label>
          <textarea
            id="message"
            type="textarea"
            name="message"
            className={`h-60 rounded-md ring-1 ring-m-light-blue border-m-light-blue p-2 focus:outline-none focus:ring-4 focus:ring-m-light-blue ${
              formError.message ? "ring-2 ring-m-red focus:ring-m-red" : ""
            }`}
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          {formError.message && (
            <p className="text-red-500 text-sm font-semibold">
              {formError.message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-m-light-blue text-white rounded-md text-center font-semibold p-2 w-full hover:bg-opacity-85 max-w-48"
          >
            Send Message
          </button>
        </div>
        {postError && (
          <p className="text-red-500 text-sm font-semibold mt-4 text-center">
            {postError}
          </p>
        )}
      </form>
    </>
  );
}
