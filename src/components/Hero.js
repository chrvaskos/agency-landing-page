import React from "react";
import coding from "../images/coding.jpg";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { instagram } from "react-icons-kit/fa/instagram";
import { pinterestP } from "react-icons-kit/fa/pinterestP";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { angleDoubleDown } from "react-icons-kit/fa/angleDoubleDown";

export default function Hero() {
  const executeScroll = () =>
    window.scrollTo({
      top: 928,
      left: 0,
      behavior: "smooth",
    });
  return (
    <section id="hero-section" className="hero-container text-light">
      <div className="container justify-content-center align-items-center">
        <div className="row" style={{ marginTop: "6em" }}>
          <div className="col-12 col-md-6 ml-sm-5">
            <div className="h4 mt-md-5">Best Design Agency</div>
            <hr className="hr" />
            <div
              className="h1 mt-md-5 mb-md-4"
              style={{ lineHeight: "1.45em", wordSpacing: "0.1em" }}
            >
              We design to help your{" "}
              <span style={{ fontWeight: "bold" }}>Brand and Ideas</span>
            </div>
            <div className="p mt-3 mb-md-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              illum fugit et pariatur doloribus perspiciatis porro veniam.
            </div>
            <button
              type="button"
              class="btn btn-primaryy mt-4 mt-md-2 mr-3 ml-1"
            >
              Learn More
            </button>
            <button type="button" class="btn btn-secondaryy mt-4 mt-md-2 ml-1">
              Get Started
            </button>
          </div>
          <div className="col-10 col-sm-12 col-md-5 mt-5 mt-md-0 text-center">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={coding} alt="Hero Image" width="400rem" />
                </div>
                <div className="carousel-item">
                  <img src={coding} alt="Hero Image" width="400rem" />
                </div>
                <div className="carousel-item">
                  <img src={coding} alt="Hero Image" width="400rem" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-block icons-container"
            style={{ marginTop: "-25em" }}
          >
            <a href="https://facebook.com" target="_blank">
              <Icon size={32} icon={facebook} className="d-block mt-4" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <Icon size={32} icon={instagram} className="d-block mt-4" />
            </a>
            <a href="https://pinterest.com" target="_blank">
              <Icon size={32} icon={pinterestP} className="d-block mt-4" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <Icon size={32} icon={linkedin} className="d-block mt-4" />
            </a>
          </div>
        </div>
        <div className="row justify-content-center scroll-down-container">
          <div className="col text-center">
            <div>Scroll Down</div>
            <Icon
              as="button"
              size="32"
              icon={angleDoubleDown}
              className="double-down-arrow"
              onClick={executeScroll}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
