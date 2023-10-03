import React, { useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const Contact = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    defaultValues: { user_name: "", user_email: "", message: "" },
  });
  const form = useRef();

  const sendEmail = () => {
    console.log("enviadoooo");
    emailjs
      .sendForm(
        "service_s4b07bk",
        "template_oodqtac",
        form.current,
        "vXAUUmpz6l9u8YCSB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      sendEmail();
      console.log(data);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ user_name: "", user_email: "", message: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className='container contact-page'>
      <div className='text-zone-contact'>
        <h2>CONTACT ME</h2>
        <p>
          I am interested in freelance opportunities and job openings. However,
          if you have other request or question, don't hesitate to contact me
          using the form or sending a message directly to my email.
        </p>
        <a
          href='mailto:ticianodev@gmail.com?subject=Interested%20in%20your%20services&body=Hello%20Ticiano,%20...'
          className='contact-email-link'
        >
          <FontAwesomeIcon icon={faEnvelope} color='#FCAA4A' />
          ticianodev@gmail.com
        </a>
      </div>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label>Name</label>
          <Controller
            name='user_name'
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type='text'
                  className={errors.user_name ? "error" : ""}
                />
                {errors.user_name && (
                  <p className='error'>{errors.user_name.message}</p>
                )}
              </div>
            )}
          />
        </div>

        <div className='form-group'>
          <label>Email</label>
          <Controller
            name='user_email'
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            }}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type='email'
                  name='user_email'
                  className={errors.user_email ? "error" : ""}
                />
                {errors.user_email && (
                  <p className='error'>{errors.user_email.message}</p>
                )}
              </div>
            )}
          />
        </div>
        <div className='form-group'>
          <label>Message</label>
          <Controller
            name='message'
            control={control}
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <div>
                <textarea
                  {...field}
                  className={errors.message ? "error" : ""}
                ></textarea>
                {errors.message && (
                  <p className='error'>{errors.message.message}</p>
                )}
              </div>
            )}
          />
        </div>
        <input type='submit' value='SEND' />
      </form>
    </div>
  );
};

export default Contact;
