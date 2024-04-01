"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactFormUISection from "./ContactFormUISection";
import NavMobile from "./NavMobile/NavMobile";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (form.current === null) {
      return;
    }

    emailjs
      .sendForm("service_k4ijfrq", "template_6cu7t3j", form.current, {
        publicKey: "6mMLJJUzkP7lq3rbP",
      })
      .then(
        () => {
          setSuccessMsg(
            `Thank you for your message, ${formValues.firstName}. I will get back to you shortly.`
          );
        },
        (error) => {
          console.log("Failed...", error.text);
          setErrMsg("Something went wrong...please try again.");
        }
      );
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="fixed top-0 right-0 p-1">
        <NavMobile />
      </div>
      <ContactFormUISection
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        successMsg={successMsg}
        errMsg={errMsg}
        form={form}
      />
    </>
  );
};

export default ContactForm;
