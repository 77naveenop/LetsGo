import React from 'react';
import Introduction from './Introduction/Introduction';
import "./Home.scss";
import MImg from "../Home/Mountains_home.jpg";
import MImg2 from "../Home/Mountains_home2.jpg";
import FImg from "../Home/Forests_home.jpg"
import FImg2 from "../Home/Forests_home2.jpg"
import PImg from "../Home/pilgrimage_home.jpg";
import PImg2 from "../Home/pilgrimage_home2.jpg";


const Home = () => {
    return (

        <div className="homepage">
            <div className="home">
                <div className="home_title">
                    <h1 className="home_heading">Lets Go</h1>
                    <p className="home_tagline">We are with you</p>
                </div>
            </div>
            <Introduction />
            <div className="home_mountains">
                <h1 className="mountains_heading">Mountains</h1>
                <div className="column1">
                    <div className="left_col">
                        <img src={MImg} alt="" className="img_mountains" />
                    </div>
                    <div className="right_col">
                        <p className="right_para">
                            Mountains are the true beauty
                        </p>
                    </div>
                </div>
                <div className="column1">
                    <div className="right_col">
                        <p className="right_para">
                            Mountains are the true beauty
                        </p>
                    </div>
                    <div className="left_col">
                        <img src={MImg2} alt="" className="img_mountains2" />
                    </div>
                </div>
            </div>

<div className="home_forests">

                <h1 className="forests_heading">Forests</h1>
                <div className="column1">
                    <div className="left_col">
                        <img src={FImg} alt="" className="img_forests" />
                    </div>
                    <div className="right_col">
                        <p className="right_para">
                            Forests are the best global leader of nature
                        </p>
                    </div>
                </div>
                <div className="column1">
                    <div className="right_col">
                        <p className="right_para">
                        Forests are the best global leader of nature
                        </p>
                    </div>
                    <div className="left_col">
                        <img src={FImg2} alt="" className="img_forests2" />
                    </div>
                </div>
            </div>

            <div className="home_pilgrimages">

                <h1 className="pilgrimage_heading">
                    Pilgrimages
                </h1>

                <div className="column1">
                    <div className="left_col">
                        <img src={PImg} alt="" className='img_pilgrimage' width="490px" />
                    </div>
                    <div className="left_col">
                        <p className="right_para">Incredible India</p>
                    </div>
                </div>
              <div className="column1">
                  <div className="right_col">
                      <p className="right_para">Incredible India</p>
                  </div>
                  <div className="left_col">
                      <img src={PImg2} alt="" className="img_pilgrimage2" height="350px" width="480px" />
                  </div>
              </div>
            </div>
</div>

           
    )
}

export default Home;
