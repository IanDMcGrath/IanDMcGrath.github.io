import React from 'react';
import imgMachBlitz from '../../../assets/images/portfolio/machblitzThumbnail.png';
import imgArtCoag from '../../../assets/images/portfolio/artCoagThumbnail.png';
import imgHotSpot from '../../../assets/images/portfolio/hotSpotThumbnail.png';
import imgVrProtein from '../../../assets/images/portfolio/vrprotein_screenshot.jpeg';
import PfItem from './pfItem';
import { VscDebugBreakpointLog } from 'react-icons/vsc'

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><VscDebugBreakpointLog/></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-center">
            <PfItem altText="MachBlitz - A high-speed racing game - built on JavaScript, three.js, Blender3d, Substance Painter." thumbnail={imgMachBlitz} />
            <PfItem altText="ArtCoag - Art share and hosting - built on Ruby on Rails, SQL, S3, JavaScript, React, Redux, and hosted on Heroku." thumbnail={imgArtCoag} />
            <PfItem altText="HotSpot - Party organizer, public and private, share your events with everyone in your area or with your group - Built on MERN tech stack, MongoDB, Express, React, Node." thumbnail={imgHotSpot} />
            <PfItem altText="Virtual Protein Builder - A teaching tool for fundementals of protein structures and behaviors - presented at SIGGRAPH Asia 2019's Realtime Live event." thumbnail={imgVrProtein} />
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;