import React from 'react'
import RightArrow from "../assets/arrowright.png"
import LeftArrow from "../assets/arrowleft.png"
import "./styles/_SlickSliderStyle.css";
import { ArrowBarRight, Icon0Circle } from "react-bootstrap-icons"
import { Icon } from "react-bootstrap-icons"

const NextArrowPromo = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="prevArrow" {...props} style={{ width: 100, height: 100, marginRight: -70 }} />
);

const PrevArrowPromo = ({ currentSlide, slideCount, ...props }) => (

    <img src={LeftArrow} alt="prevArrow" {...props} style={{ width: 100, height: 100, marginLeft: -70 }} />
);

const SettingsPromo = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dotsClass: "slick-dots slick-thumb",
    responsive: [
        {
            breakpoint: 3000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
    nextArrow: <NextArrowPromo />,
    prevArrow: <PrevArrowPromo />
};

const SettingsSpSell = {
    speed: 500,
    infinite: false,
    swipe: true,
    responsive: [
        {
            breakpoint: 3000,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                slidesPerRow: 1,
                rows: 1
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                slidesPerRow: 1,
                rows: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                slidesPerRow: 1,
                rows: 1
            }
        }
    ]
}

export {
    SettingsPromo,
    SettingsSpSell
};
