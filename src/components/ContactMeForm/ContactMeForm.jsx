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
  const [requestError, setRequestError] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const postForm = async (data) => {
    try {
      axios.defaults.headers.post["Content-Type"] = "application/json";
      await axios.post("https://formsubmit.co/ajax/janine.holanda@gmail.com", {
        name: data.name,
        message: `E-mail: ${data.email} \n LinkedIn: ${data.linkedin} \n Message: ${data.message}`,
      });
      setOpenPopup(true);
      setisLoading(false);
      setFormData(initFormData);
      setFormError(initFormError);
      setRequestError("");
    } catch (error) {
      setRequestError(error.message);
      setisLoading(false);
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
      setisLoading(true);
      postForm(formData);
    } else {
      setRequestError("Please fill in the required fields.");
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
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
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

        <div className="flex justify-end items-center gap-4">
          {isLoading && (
            <svg
              className="text-gray-300 animate-spin"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-m-navy"
              ></path>
            </svg>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-m-light-blue text-white rounded-md text-center font-semibold p-2 w-full hover:bg-opacity-95 max-w-48 ${
              isLoading
                ? "cursor-not-allowed bg-blue-gray-700 hover:bg-opacity-100 text-blue-gray-300"
                : "cursor-pointer"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
        {requestError && (
          <p className="text-red-500 text-sm font-semibold mt-4 text-center">
            {requestError}
          </p>
        )}
      </form>
    </>
  );
}
