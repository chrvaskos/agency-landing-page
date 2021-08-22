import React from "react";
import workhard from "../images/workhard.jpg";
import { Icon } from "react-icons-kit";
import { circle } from "react-icons-kit/fa/circle";

export default function Tabs() {
  return (
    <section id="tabs-section" className="mt-3">
      <div className="container mt-5">
        <nav className="nav nav-tabs nav-justified justify-content-center">
          <a
            className="nav-item nav-link active"
            data-toggle="tab"
            href="#mobile-app"
          >
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Mobile App</span>
            </div>
          </a>
          <a className="nav-item nav-link" data-toggle="tab" href="#web">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Web &amp; Custom Application</span>
            </div>
          </a>
          <a className="nav-item nav-link" data-toggle="tab" href="#offshore">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Offshore development</span>
            </div>
          </a>
          <a className="nav-item nav-link" data-toggle="tab" href="#design">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Web design</span>
            </div>
          </a>
        </nav>
        <div class="tab-content">
          <div id="mobile-app" class="tab-pane fade show active">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={workhard}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                  Mobile App
                </div>
                <div className="p mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                  suscipit nam, accusantium modi maxime assumenda labore totam
                  est velit.
                </div>
                <button
                  type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div id="web" class="tab-pane fade">
            <div className="row mt-5 justify-content-start">
              <div className="col-lg-5 ml-2">
                <img
                  src={workhard}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                  Web &amp; Custom Application
                </div>
                <div className="p mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                  suscipit nam, accusantium modi maxime assumenda labore totam
                  est velit.
                </div>
                <button
                  type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div id="offshore" class="tab-pane fade">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={workhard}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                  Offshore Development
                </div>
                <div className="p mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                  suscipit nam, accusantium modi maxime assumenda labore totam
                  est velit.
                </div>
                <button
                  type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div id="design" class="tab-pane fade">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={workhard}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                  Web Design
                </div>
                <div className="p mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                  suscipit nam, accusantium modi maxime assumenda labore totam
                  est velit.
                </div>
                <button
                  type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
