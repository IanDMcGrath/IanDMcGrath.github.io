import React from 'react';
import imgMachBlitz from '../../../assets/images/portfolio/machblitzThumbnail.png';
import imgArtCoag from '../../../assets/images/portfolio/artCoagThumbnail.png';
import imgHotSpot from '../../../assets/images/portfolio/hotSpotThumbnail.png';
import imgVrProtein from '../../../assets/images/portfolio/vrprotein_screenshot.jpeg';
import PfItem from './pfItem';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section class="page-section portfolio" id="portfolio">
        <div class="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
          {/* <!-- Icon Divider--> */}
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div class="row justify-content-center">
            {/* <!-- Portfolio Item 1--> */}
            <div class="col-md-6 col-lg-4 mb-5">
              <div id="portfolioModal1-btn-open" class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src={imgMachBlitz} alt="screenshot of my JavaScript project, racing game, Machblitz" />
              </div>
            </div>
            {/* <!-- Portfolio Item 2--> */}
            <div class="col-md-6 col-lg-4 mb-5">
              <div id="portfolioModal2-btn-open" class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src={imgArtCoag} alt="screenshot of my Ruby on Rails & AWS project, Artcoag" />
              </div>
            </div>
            {/* <!-- Portfolio Item 3--> */}
            <div class="col-md-6 col-lg-4 mb-5">
              <div id="portfolioModal3-btn-open" class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src={imgHotSpot} alt="screenshot of a team's MERN project, HotSpot" />
              </div>
            </div>
            {/* <!-- Portfolio Item 4--> */}
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div id="portfolioModal4-btn-open" class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src={imgVrProtein} alt="screenshot of Dynamic Virtual Protein Project as presented at SIGGRAPH Asia 2019's Real-time Live event" />
              </div>
            </div>
            <PfItem altText="hello lol" thumbnail={imgMachBlitz}/>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;