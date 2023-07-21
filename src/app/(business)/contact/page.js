'use client'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"

function Contact() {
  return (
    <Box className="">
      <Container
      sx ={{
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      alignContent: "center"
    }}
      >
        <h1>Contact form to come!</h1>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Message" variant="outlined" />
        <Button variant="outlined">Submit</Button>
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
