import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Sale</h1>
          <p>
          It’s time to upgrade your shopping experience
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2"><a href="#category" className="shop-now" >Shop Now</a></div>
          </div>
        </div>
        <img src={BannerImg} alt="" className="banner-img"/>
      </div>
    </div>
  );
};

export default Banner;
