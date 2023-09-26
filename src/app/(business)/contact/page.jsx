"use client";
import React from "react";
import { styled } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import "./contact.css";


const CustomTextField = styled(TextField)({
  // '& .MuiInputBase-input': {
  //   backgroundColor: "rgb(66, 63, 50, 0.5)",
  // },
  '& label.Mui-focused': {
    color: '#423f32',
    fontWeight: "bold",
    // backgroundColor: "#423f32",
    // padding: "0px 10px",
    // borderRadius: "2px",
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
  },
  submitBtn: {
    color: "#c8c2a7",
    backgroundColor: "#423f32",
    borderRadius: "4px",
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
    direction="column"
    container
    className="contact-container"
      height="100vh"
    >
      <Grid item>
      <h1 className="contact-title">Feel free to contact me below!</h1>
      </Grid>
      <Grid item className="contact-form">
        <form
          style={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="checkbox"
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
            {...register("name", {
              maxLength: 80,
            })}
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
            {...register("email", {
              pattern: {
                value: /^\S+@\S+$/i,
              },
            })}
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
            {...register("message", {
              maxLength: 240,
            })}
          />
          {/* {errors.message && (
            <div style={styles.error}>
              {" "}
              <small>{errors.message.message}</small>
            </div>
          )} */}

          <Button
            className="submit-btn"
            type="submit"
            style={styles.submitBtn}
            variant="contained"
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
          </Button>
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
