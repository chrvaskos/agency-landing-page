import React from "react";
import coding from "../images/coding.jpg";

export default function ContactForm() {
  return (
    <section id="contact-form" className="mt-5 mb-5">
      <div className="container mt-4 mb-5 contact-form-container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="text-center">
              <div className="h3">Contact Us</div>
              <hr className="hr-3" />
              <div className="p mb-5">
                Our team is happy to answer all of your questions. Fill out the
                form and we'll get in touch with you as soon as possible.
              </div>
            </div>
            <div className="card">
              <div className="card-body row justify-content-center">
                <form className="text-center">
                  <div>
                    <label for="name-input">Your name</label>
                    <input
                      id="name-input"
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label for="email-input">Your email adress</label>
                    <input
                      type="email"
                      className="form-control d-block"
                      id="email-input"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label for="text-area">Your message</label>
                    <textarea
                      className="form-control"
                      id="text-area"
                      rows="3"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-quaternary mb-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-4 ml-5 mt-4 mt-md-0 d-flex align-items-center">
            <img
              src={coding}
              width="350em"
              alt="Contact-Image"
              className="ml-md-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
