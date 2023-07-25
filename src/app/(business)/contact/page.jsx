"use client";
import React from "react";
import { styled } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#423f32',
    fontWeight: "bold",
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#423f32',
    },
    '&:hover fieldset': {
      borderColor: 'rgb(66, 63, 50, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#423f32',
    },
  },
});

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputs: {
    margin: "5px",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  success: {
    color: "#423f32",
    fontWeight: "bold",
    textAlign: "center",
  }
};

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
    <Grid
    container
      height="100vh"
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={11} s={6} md={5}>
        <form
          style={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          className=""
        >
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input>

          <CustomTextField
            fullWidth
            style={styles.inputs}
            id="outlined-basic"
            type="text"
            required
            name="name"
            label="Full Name"
            autoComplete="false"
            // {...register("name", {
            //   required: "Full name is required",
            //   maxLength: 80,
            // })}
          />
          {/* {errors.name && (
            <div style={styles.error}>
              <small>{errors.name.message}</small>
            </div>
          )} */}

          <CustomTextField
            fullWidth
            style={styles.inputs}
            id="outlined-basic"
            type="email"
            required
            label="Email Address"
            name="email"
            autoComplete="false"
            // {...register("email", {
            //   required: "Enter your email",
            //   pattern: {
            //     value: /^\S+@\S+$/i,
            //     message: "Please enter a valid email",
            //   },
            // })}
          />
          {/* {errors.email && (
            <div style={styles.error}>
              <small>{errors.email.message}</small>
            </div>
          )} */}

          <CustomTextField
            fullWidth
            style={styles.inputs}
            id="outlined-multiline-static"
            multiline
            required
            rows={4}
            name="message"
            label="Your Message"
            // {...register("message", {
            //   required: "Enter your Message",
            // })}
          />
          {/* {errors.message && (
            <div style={styles.error}>
              {" "}
              <small>{errors.message.message}</small>
            </div>
          )} */}

          <button
            type="submit"
            className=""
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {isSubmitSuccessful && isSuccess && (
          <div style={styles.success}>
            {message || "Success. Message sent successfully"}
          </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <div style={styles.error}>
            {message || "Something went wrong. Please try later."}
          </div>
        )}
      </Grid>
    </Grid>
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

{
  /* <Box className="">
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
</Box> */
}
