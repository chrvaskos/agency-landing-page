import React, { Component, setState } from "react";
import { Icon } from "react-icons-kit";
import { arrowUp } from "react-icons-kit/fa/arrowUp";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Tabs from "../components/Tabs";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: window.pageYOffset,
      class: "",
    };
    this.getPosition = this.getPosition.bind(this);
  }
  getPosition() {
    this.setState({ position: window.pageYOffset });
    if (this.state.position >= 700) {
      this.setState({ class: "btn-entrance" });
    } else {
      this.setState({ class: "btn-exit" });
    }
  }
  componentDidMount() {
    setInterval(this.getPosition, 1000);
  }
  render() {
    const executeScroll = () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    return (
      <div className="d-flex flex-column">
        <Nav />
        <Hero />
        <Tabs />
        <Testimonials />
        <ContactForm />
        <Footer />
        <Icon
          as="button"
          size="32"
          icon={arrowUp}
          id="back-to-top"
          class={this.state.class}
          onClick={executeScroll}
        />
      </div>
    );
  }
}

export default Main;
