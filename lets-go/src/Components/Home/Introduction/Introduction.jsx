import React from "react";
import "./introduction.scss";
import Img1 from "../Introduction/introImg1.jpg"
import Img2 from "../Introduction/introImg2.jpg"
import Img3 from "../Introduction/introImg3.jpg"
import Img4 from "../Introduction/introImg4.jpg"
import Img5 from "../Introduction/introImg5.jpg"
import Img6 from "../Introduction/introImg6.jpg"




const Introduction = () => {
    return (
        <div className="introduction">
            <div className="intro_rows">
                <div className="intro_row1">
                    <p className="intro_para">
                        We <b>Lets-Go</b> are going to travel with you , Haha!! not like that .
                        Wanna Travel ?? &nbsp; Don't Know where to start ?? &nbsp; Don't know much about place where you wanna travel ?? &nbsp; Well
                        Don't Worry , We will help you in exploring the places no matter where-ever you wanna go. We are trusted authority to help people in their
                        journey,traveling and making fun to explore new places all over India . India is full of fun, Culture, adventures, holy places,
                        lovely spots. Some are hidden and some are well known , we provide you all the details about the places as well as we help you find hidden
                        ones to make your moments lovely .
                    </p>
                </div>
                <div className="intro_row2">
                    <img src={Img1} alt="spiti-valley" className="img1 img-fluid" height="200px" width="200px" />
                    <img src={Img2} alt="Forests" className="img2" height="200px" width="200px" />
                    <img src={Img3} alt="West-Bengal" className="img3 img-fluid" height="200px" width="200px" />
                    <img src={Img4} alt="Rishikesh" className="img4 img-fluid" height="200px" width="200px" />
                    <img src={Img5} alt="Rishikesh" className="img5" height="200px" width="200px" />
                    <img src={Img6} alt="Ayodhya" className="img6 img-fluid" height="200px" width="200px" />
                </div>
            </div>
        </div>

    )
}







export default Introduction;