"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const styles = {
  container: {
    color: "#423f32",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    height: "100vh",
    // alignContent: "center",
    maxHeight: "80%",
  },
  aboutContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "auto",
    width: "auto",
  },
};

function About() {
  return (
    <Box>
      <Grid container className="about-container" style={styles.container}>
        <Grid item xs={5} sm={9} md={4} style={styles.aboutContainer}>
          <Image 
          className="headshot"
          src="/headshot.jpg"
          style={{objectFit: "cover", border: "solid rgb(66, 63, 50, 0.5) 20px"}}
          width={500}
          height={400}
          alt="Headshot of Emily"></Image>
        </Grid>
        <Grid 
        className="about-me"
        item xs={9} sm={9} md={4} style={{ textAlign: "left" }}>
          <h1 style={{marginBottom: "3px"}}>Hi! I'm Emily McLean.</h1>
          <h3 style={{marginTop: "3px"}}>Fullstack Developer</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quae
            et quaerat, iusto soluta corporis nostrum saepe fuga impedit ab a
            voluptate dolor laboriosam inventore cumque vel obcaecati atque.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            tempora totam tenetur harum voluptatem dolore libero facere commodi
            a, consectetur nihil ut quas, ratione porro, natus unde accusamus
            quibusdam expedita? Repellendus magnam quo blanditiis repudiandae
            perspiciatis neque asperiores nihil nesciunt totam. Numquam placeat
            doloribus fuga ipsam, et odio, cum laborum reiciendis modi atque,
            quod itaque nam dicta distinctio ipsa quas?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quae
            et quaerat, iusto soluta corporis nostrum saepe fuga impedit ab a
            voluptate dolor laboriosam inventore cumque vel obcaecati atque.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            tempora totam tenetur harum voluptatem dolore libero facere commodi
            a, consectetur nihil ut quas, ratione porro, natus unde accusamus
            quibusdam expedita? Repellendus magnam quo blanditiis repudiandae
            perspiciatis neque asperiores nihil nesciunt totam. Numquam placeat
            doloribus fuga ipsam, et odio, cum laborum reiciendis modi atque,
            quod itaque nam dicta distinctio ipsa quas?
          </p>
        </Grid>
      </Grid>
    </Box>
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
