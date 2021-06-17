export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Digital Marketing Strategy And Projects</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {" "}
                  <a
                    href="https://docs.google.com/presentation/d/1rEAsTzVI1744S35sKSL3wtgpdkvEbZaE2G_jdnslQvw/edit#slide=id.gdce0a102fc_0_18"
                    title="Project Title"
                    rel="nofollow"
                    target="_blank"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Team Vincent Final Project </h4>
                    </div>
                    <img
                      src="img/portfolio/01-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
