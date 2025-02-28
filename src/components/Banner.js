import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
const Banner = () => {
  const bannerData = [
    {
      title: "IPL CRICKET",
      subtitle: "SEASON 2025",
      date: "22ND MAR, 2025", 
      bgImage: "https://ipladvertising.com/ipladvertising/img/ipl-banner-12.jpg",
    },
    {
      title: "UEFA CHAMPIONS",
      subtitle: "ROUND OF 16",
      date: "13TH FEB, 2025",
      bgImage: "https://canadasoccer.com/wp-content/uploads/2022/09/UEFA_UCL_www.jpg",
    },
    {
      title: "PRO KABADDI",
      subtitle: "Coming Soon",
      date: "18TH FEB, 2025",
      bgImage: "https://media.sportstiger.com/media/pro-kabaddi-league-sportstiger-1688380325489-large.jpg"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
          autoplaySpeed: 2000
        }
      }
    ]
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {bannerData.map((banner, index) => (
          <div key={index}>
            <div 
              className="banner-slide"
              style={{ 
                background: `url(${banner.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
