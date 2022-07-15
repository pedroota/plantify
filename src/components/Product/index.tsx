import { ProductProps } from "./interface";

export const Product = ({ name, price, image }: ProductProps): JSX.Element => {
  return (
    <div className="product">
      {image} {/** Eu sei que isso é errado */}
      <div className="product__header">
        <p>{ name }</p>
        <p>{ "$" + price }</p>
      </div>
      <div className="product__body">
        <button className="button button--green">Buy</button>
      </div>
    </div>
  );
}
