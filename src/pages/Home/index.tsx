import { useEffect } from "react";
import {
  ArrowRight,
  Phone,
  Mail
} from "react-feather";

// Swiper Lib
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

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

import productImage from "@/assets/products/product-one.png";

// Products
import { products } from "@/data/products";
import { Product } from "@/components/Product";

export const Home: React.FC = () => {

  useEffect(() => {
    products && products.map((product, index) => {console.log(`produto ${index}`, product)})
  }, [])

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

      <section className="featured-products">
        <div className="limiter-space">
          <div className="featured-products__header">
            <p>Featured</p>
          </div>

          <div className="featured-products__products">
            <Swiper
              spaceBetween={20}
              slidesPerView={3.5}
            >
              {products && products.map((product, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Product id={product.id} name={product.name} price={product.price} image={<img src={productImage} alt=""/>}/> {/** Eu sei que isso é errado (Passar um elemento como prop) */}
                  </SwiperSlide>
                )
              })}
            </Swiper>
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


      <section className="maps-location">
        <div className="limiter-space">
          <div className="maps-location__content">
            <h4 className="content__visit-us">Visit Us</h4>
            <p>
              Gekikara Street 16, Atalanta <br />
              1327 Block M <br />
              Mardial, Sigure <br />
              T2G 0T2
            </p>
            <button className="button button--green">Get Directions</button>
          </div>
        </div>
      </section>
    </>
  );
}
