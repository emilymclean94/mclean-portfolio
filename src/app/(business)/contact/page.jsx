"use client";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

function Contact() {
    const {
      register,
      handleSubmit,
      reset,
      watch,
      control,
      setValue,
      formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
      mode: "onTouched",
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState(false);
  
    // Please update the Access Key in the .env
    const apiKey = "e8a43124-80fd-4734-bcdb-d3917d21e4fe";
    // process.env.PUBLIC_ACCESS_KEY ||
  
    const { submit: onSubmit } = useWeb3Forms({
      access_key: apiKey,
      settings: {
        from_name: "Portfolio Message",
        subject: "New Contact Message from your Portfolio Website",
      },
      onSuccess: (msg, data) => {
        setIsSuccess(true);
        setMessage(msg);
        reset();
      },
      onError: (msg, data) => {
        setIsSuccess(false);
        setMessage(msg);
      },
    });
  
    return (
      <Box>
        <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignContent: "center",
        }}>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}></input>
  
          <div className="">
            <TextField
              type="text"
              placeholder="Full Name"
              label="Name"
              autoComplete="false"
              className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                errors.name
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              {...register("name", {
                required: "Full name is required",
                maxLength: 80,
              })}
            />
            {errors.name && (
              <div className="mt-1 text-red-600">
                <small>{errors.name.message}</small>
              </div>
            )}
          </div>
  
          <div className="mb-5">
            <TextField
              id="email_address"
              type="email"
              placeholder="Email Address"
              label="Email"
              name="email"
              autoComplete="false"
              className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                errors.email
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <div className="mt-1 text-red-600">
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>
  
          <div className="mb-3">
            <TextField
              name="message"
              placeholder="Your Message"
              label="Message"
              className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
                errors.message
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              {...register("message", {
                required: "Enter your Message",
              })}
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                {" "}
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>
  
          <button
            type="submit"
            className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black ">
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
  
        {isSubmitSuccessful && isSuccess && (
          <div className="mt-3 text-sm text-center text-green-500">
            {message || "Success. Message sent successfully"}
          </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <div className="mt-3 text-sm text-center text-red-500">
            {message || "Something went wrong. Please try later."}
          </div>
        )}
        </Container>
      </Box>
  );
}

export default Contact;

// ! Welcome to the Pseudo Code!

// TODO: Contact Form
// ? container <div>
// ? div for contents so that it can be flexed
// ? heading for form
// ? <form> container
// ? <div> for form group
// ? form <label>
// ? form <input>

// TODO: Form Title
// ? <h1>

// TODO: Input for name
// ? form group <div>
// ? label
// ? input
// ? onMouseOver change cursor
// ? onFocus - how does the input box change when clicked on

// TODO: Input for email
// ? form group <div>
// ? label
// ? input
// ? onMouseOver change cursor
// ? onFocus - how does the input box change when clicked on

// TODO: Input for message
// ? form group <div>
// ? label
// ? input
// ? character limit?
// ? larger size box
// ? onMouseOver change cursor
// ? onFocus - how does the input box change when clicked on

// TODO: Submit button
// ? onHover slight change to button
// * onSubmit - when form is "submitted" send to email
// * refresh page when form is submitted

{/* <Box className="">
<Container
  sx={{
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
  }}
>
  <h1>Contact form to come!</h1>
  <TextField id="outlined-basic" label="Name" variant="outlined" />
  <TextField id="outlined-basic" label="Email" variant="outlined" />
  <TextField id="outlined-basic" label="Message" variant="outlined" />
  <Button variant="outlined">Submit</Button>
</Container>
</Box> */}