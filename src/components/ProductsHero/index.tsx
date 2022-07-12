import { useState } from "react";
import { IProductsHeroProps } from "./interface";

export const ProductsHero = ({ className }: IProductsHeroProps): JSX.Element => {
  const [isMouseIn, setIsMouseIn] = useState(false)

  return (
    <div 
      className={className + " products-hero"}
      onMouseEnter={() => setIsMouseIn(true)} 
      onMouseLeave={() => setIsMouseIn(false)}
    >
      <p className={(isMouseIn && "products-hero__title--show products-hero__title") || "products-hero__title"}>
        Anthurium Flower
      </p>
      <p className={(isMouseIn && "products-hero__description--show products-hero__description") || "products-hero__description"}>
        The flower of human being. It has meaningful of fact that the plant always grow whatever season and weather...
      </p>
      <button className={(isMouseIn && "button button__read-more button__read-more--show") || "button button__read-more"}>Read More</button>
    </div>
  );
}
