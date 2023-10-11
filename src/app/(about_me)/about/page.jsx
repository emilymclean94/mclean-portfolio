"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Image from "next/image";
import "./about.css";

function About() {
  return (
    <Grid container className="about-container">
        <Grid item className="image-container">
          <Image 
          className="headshot"
          src="/headshot.jpg"
          width={500}
          height={400}
          alt="Headshot of Emily"></Image>
        </Grid>
        <Grid item 
        direction="column"
        className="about-me"
        style={{ textAlign: "left" }}>
          <h1 style={{marginBottom: "3px"}}>Hi! I'm Emily McLean.</h1>
          
          <h3 style={{marginTop: "3px"}}>Fullstack Developer</h3>
          <p>
          I'm a versatile web developer with a passion for reading, video games, making art, and traveling. Inspired by my experiences as an Archeological Technician for the National Park Service, I bring attention to detail, communication skills, and adaptability to my web projects. My love for exploration and creative expression fuels my curiosity in crafting user-friendly websites that leave a positive impact and overcoming challenges with innovative solutions.
          </p>
          <h3 style={{marginBottom: "0px"}}>Technologies I Use:</h3>
          <p style={{marginTop: "3px"}}>HTML, CSS, JavaScript, jQuery, Express.js, React.js, Next.js, Node.js, Bootstrap, Bulma, Material UI, Vercel, Heroku</p>
        </Grid>
    </Grid>
  );
}

export default About;

// ! Welcome to the Pseudo Code!

// This will use the main layout that has the navbar and footer

// TODO: Main <div> with head shot and about me containers
// ! Not sure if I want these as cards or other

// TODO: Head shot <img>

// TODO: About me <div>
// ? <div> for heading and paragraphs
// ? Heading <h1>
// ? 1-2 <p>
// ? <div> for technologies
// ? <div> for tools

// TODO: Technologies used icons
// ? <div> for icons
// ? <ul> ? <ol> ?
// ? columns/rows?
// ? table?

// TODO: Tools used icons
// ? <div> for icons
// ? <ul> ? <ol> ?
// ? columns/rows?
// ? table?
