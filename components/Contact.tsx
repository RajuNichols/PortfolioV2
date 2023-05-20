"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [done, setDone] = useState(false);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
  e.preventDefault();
  const { user_name, user_subject, user_email, message } = formValues;
  let user_nameError = "",
    user_subjectError = "",
    user_emailError = "",
    messageError = "";

  if (!user_name.trim()) user_nameError = "Name is required";
  if (!user_subject.trim()) user_subjectError = "Subject is required";
  if (!user_email.trim()) user_emailError = "Email is required";
  if (!message.trim()) messageError = "Message is required";

  if (user_nameError || user_subjectError || user_emailError || messageError) {
    setFormErrors({
      user_name: user_nameError,
      user_subject: user_subjectError,
      user_email: user_emailError,
      message: messageError,
    });
    return;
  }

  // If no errors, send the form
  emailjs
    .sendForm(
      "service_6m931l5",
      "template_577mhcq",
      e.target,
      "user_7FKxRbVjhO5dMLDii7HBW"
    )
    .then(
      (result) => {
        console.log(result.text);
        setDone(true);
        // Reset form values and errors
        setFormValues({
          user_name: "",
          user_subject: "",
          user_email: "",
          message: "",
        });
        setFormErrors({
          user_name: "",
          user_subject: "",
          user_email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
};

  return (
    <div
      id="contact"
      className="w-screen h-auto py-20 flex flex-col justify-center items-center text-center overflow-x-hidden bg-gray-100 px-8 md:px-16"
    >
      <h2 className="text-4xl md:text-5xl text-blue-600 font-bold w-full text-center md:text-left mb-4">
        Contact
      </h2>
      <div className=" md:w-1/3 mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl text-blue-600 font-bold mb-6">
          Let&apos;s Talk! 👇
        </h2>
        <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 w-full"
    >
      <input
        type="text"
        placeholder="Name"
        name="user_name"
        value={formValues.user_name}
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray-300 rounded w-full"
      />
      {formErrors.user_name && <p className="text-red-500">{formErrors.user_name}</p>}
      <input
        type="text"
        placeholder="Subject"
        name="user_subject"
        value={formValues.user_subject}
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray-300 rounded w-full"
      />
      {formErrors.user_subject && <p className="text-red-500">{formErrors.user_subject}</p>}
      <input
        type="email"
        placeholder="Email"
        name="user_email"
        value={formValues.user_email}
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray-300 rounded w-full"
      />
      {formErrors.user_email && <p className="text-red-500">{formErrors.user_email}</p>}
      <textarea
        rows={5}
        placeholder="Message"
        name="message"
        value={formValues.message}
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray-300 rounded w-full"
      ></textarea>
      {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
      >
        Submit
      </button>
      {done && <p className="text-blue-600">Thank you...</p>}
    </form>
      </div>
    </div>
  );
};

export default Contact;
