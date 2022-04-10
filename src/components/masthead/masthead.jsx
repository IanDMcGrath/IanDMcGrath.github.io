import React from "react";
import imgMugshot from "../../assets/images/mugshot.png";

class MastHead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          {/* <!-- Masthead Avatar Image--> */}
          <img className="masthead-avatar mb-5" src={imgMugshot} alt="A mugshot of Ian" />
          {/* <!-- Masthead Heading--> */}
          <h1 className="masthead-heading text-uppercase mb-0">Ian McGrath</h1>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Masthead Subheading--> */}
          <p className="masthead-subheading font-weight-light mb-0">
            Fullstack Engineer - Unreal Engine Developer -
            <a href="https://www.youtube.com/watch?v=wWjfy-oRDzA" className="basic-link">
              SIGGRAPH Asia 2019 Real-time Live Presenter
            </a>
          </p>
        </div>
      </header>
    )
  }
}

export default MastHead;