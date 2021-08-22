import React from "react";
import { Icon } from "react-icons-kit";
import { quoteLeft } from "react-icons-kit/fa/quoteLeft";
import { quoteRight } from "react-icons-kit/fa/quoteRight";

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="testimonials-container">
      <div className="container mt-5" style={{marginBottom: "4.5em"}}>
        <div className="col text-center">
          <div className="h4 mt-4 mb-4">Testimonials</div>
          <hr className="hr-2" />
          <div className="h2 mt-4 mb-4">Clients feedback</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <div
              id="cardIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators card-indicators">
                <li
                  data-target="#cardIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#cardIndicators" data-slide-to="1"></li>
                <li data-target="#cardIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card">
                    <Icon size="24" icon={quoteLeft} className="quote-left" />
                    <div className="card-body">
                      <p className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolores ex rerum omnis minima. Alias earum, porro
                        consequatur cum at excepturi dignissimos! Qui reiciendis
                        illum architecto dicta laudantium fugit, tempora ullam?
                      </p>
                      <h5 className="card-title mb-1">Mark Zuckerberg</h5>
                      <p className="mb-4">CEO of Facebook</p>
                      <Icon
                        size="24"
                        icon={quoteRight}
                        className="quote-right"
                      />
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="card">
                    <Icon size="24" icon={quoteLeft} className="quote-left" />
                    <div className="card-body">
                      <p className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolores ex rerum omnis minima. Alias earum, porro
                        consequatur cum at excepturi dignissimos! Qui reiciendis
                        illum architecto dicta laudantium fugit, tempora ullam?
                      </p>
                      <h5 className="card-title mb-1">Sundar Pichai</h5>
                      <p className="mb-4">CEO of Google</p>
                      <Icon
                        size="24"
                        icon={quoteRight}
                        className="quote-right"
                      />
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="card">
                    <Icon size="24" icon={quoteLeft} className="quote-left" />
                    <div className="card-body">
                      <p className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolores ex rerum omnis minima. Alias earum, porro
                        consequatur cum at excepturi dignissimos! Qui reiciendis
                        illum architecto dicta laudantium fugit, tempora ullam?
                      </p>
                      <h5 className="card-title mb-1">Satya Nadella</h5>
                      <p className="mb-4">CEO of Microsoft</p>
                      <Icon
                        size="24"
                        icon={quoteRight}
                        className="quote-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
