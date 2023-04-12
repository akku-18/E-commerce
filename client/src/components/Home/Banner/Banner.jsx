import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi culpa
            labore cum voluptates earum quidem, error ipsam ea, reprehenderit
            vitae vero similique ipsa excepturi vel iste magnam. Quaerat,
            eligendi eum!
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img src={BannerImg} alt="" className="banner-img"/>
      </div>
    </div>
  );
};

export default Banner;
