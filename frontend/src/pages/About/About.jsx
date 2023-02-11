import React from 'react';
import "./About.css"

const About = () => {
  return (
    <div className="aboutus-section">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus">
                        <h2 className="aboutus-title">About Us</h2>
                        <p className="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                        <p className="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                        <a className="aboutus-more" href="/">read more</a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus-banner">
                        <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-md-5 col-sm-6 col-xs-12">
                    <div className="feature">
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div className="feature-content">
                                    <h4>Work with heart</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div className="feature-content">
                                    <h4>Reliable services</h4>
                                    <p>Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt</p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div className="feature-content">
                                    <h4>Great support</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <div className="main-container">
    //   <div className="heading">
    //     <h1>About Us</h1>
    //   </div>
      
    //   <div className='layer-1'>
    //     <div className="layer-1.1">
    //       <div className="layer-1-image">
    //         <img src="assets/Department.jpeg" alt="" />
    //       </div>
    //       <div className="description-1">
    //         ;kjsadf;dsaljf;lkdasfjds;lkfj
    //       </div>
    //     </div>
    //     <div className="layer1 2">
    //       <div className="description-2">
    //         ;kjsadf;dsaljf;lkdasfjds;lkfj
    //       </div>
    //       <div className='layer-2-image'>
    //         <img src="assets/Department.jpeg" alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
   );
}

export default About;