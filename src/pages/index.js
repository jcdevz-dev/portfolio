import React from "react";
import {
  ProjectsSection,
  ContactSection,
  HeroSection,
  Animation,
  Section,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import "../../styles/app.css";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Seo title="John Carlo Pontanes Devera" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="about" />
        <Animation type="fadeUp" delay={1000}>
          <Section>
            <div
              style={{
                display: "flex",
                gap: 50,
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: -10,
              }}
            >
              <StaticImage
                src="../images/html.png"
                alt="Javascript"
                height={30}
              />
              <StaticImage
                src="../images/css.png"
                alt="Javascript"
                height={30}
                style={{ filter: "invert(1)" }}
              />
              <StaticImage
                src="../images/js.png"
                alt="Javascript"
                height={30}
              />
              <StaticImage
                src="../images/ts.png"
                alt="TypeScript"
                height={30}
              />
              <StaticImage
                src="../images/react.png"
                alt="React"
                height={30}
              />
              <StaticImage
                src="../images/vue.png"
                alt="Vue"
                height={30}
              />
              <StaticImage
                src="../images/next.png"
                alt="Next js"
                height={30}
              />
              <StaticImage
                src="../images/gatsby.png"
                alt="Gatsby js"
                height={30}
              />
              <StaticImage
                src="../images/node.png"
                alt="Node js" height={30}
              />
              <StaticImage
                src="../images/firebase.png"
                alt="Firebase"
                height={30}
              />
              <StaticImage
                src="../images/laravel.png"
                alt="Laravel"
                height={30}
              />
              <StaticImage
                src="../images/mongo.png"
                alt="MongoDB"
                height={30}
              />
            </div>
          </Section>
        </Animation>
        <ProjectsSection sectionId="projects" heading="Featured Projects" />
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
