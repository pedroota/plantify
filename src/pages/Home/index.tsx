import {
  ArrowRight,
  Phone,
  Mail
} from "react-feather";

import { Header } from "@/components/Header";
import { ProductsHero } from "@/components/ProductsHero";
import { SearchBar } from "@/components/SearchBar";

// Assets
import arrivalOne from "@/assets/arrivals/arrival-one.png";
import arrivalTwo from "@/assets/arrivals/arrival-two.png";
import arrivalThree from "@/assets/arrivals/arrival-three.png";
import arrivalFour from "@/assets/arrivals/arrival-four.png";
import standOne from "@/assets/plant-stands/stand-one.png";
import standTwo from "@/assets/plant-stands/stand-two.png";
import standThree from "@/assets/plant-stands/stand-three.png";

export const Home: React.FC = () => {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="limiter-space">
          <div className="hero__content">
            <h1>Happiness blooms from within</h1>
            <p>
              Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.
            </p>
            <button className="button">Shop Now</button>
            <button className="button button--explore">
              Explore plants
              <ArrowRight />
            </button>
          </div>

          <div className="hero__products">
            <ProductsHero className="product-one" />
            <ProductsHero className="product-two" />
            <ProductsHero className="product-three" />
          </div>
        </div>
      </section>

      <section className="search-flower">
        <div className="limiter-space">
          <SearchBar />
        </div>
      </section>

      <section className="arrivals">
        <div className="limiter-space">
          <div className="arrivals__header">
            <p className="header__title">Colorful New Arrivals</p>
            <p className="header__view-all">view all</p>
          </div>
          <div className="arrivals__content">
            <img src={arrivalOne} alt="" />
            <img src={arrivalTwo} alt="" />
            <img src={arrivalThree} alt="" />
            <img src={arrivalFour} alt="" />
          </div>
        </div>
      </section>

      <section className="plant-stands">
        <div className="limiter-space">
          <div className="plant-stands__header">
            <p className="header__title">Plant stands</p>
          </div>

          <div className="plant-stands__content">
            <img src={standOne} alt="" />
            <img src={standTwo} alt="" />
            <img src={standThree} alt="" />
          </div>
        </div>
      </section>

      <section className="shipping-service">
        <div className="limiter-space">
          <div className="shipping-service__content">
            <p className="content__title">Free Shipping Services</p>
            <p className="content__description">*only for the same region</p>
            <div className="content__phone">
              <Phone />
              +62 1189-2719-00
            </div>
            <div className="content__mail">
              <Mail />
              order@platify.co
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
