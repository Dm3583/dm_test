// import React from 'react';
import './style.scss';

const item = [{
  itemName : "drill",
  itemInformation: "Black & Decer LDX1200C 20V",
  itemDescription: 'Like new one!!!!!!!',
  itemAdress: 'Geroev Stalingrada 17',
  itemPrice: '15$'
}
]

class ProductCard extends React.Component {
  render() {
      return ( <div style='CardWrapper'>
        <img style='CardIMGStyle'/>
        <div style='ItemInfoWrapper'>
        <h2 style='CardHeader'><span>{item[0].itemName}.</span><span>{item[0].itemInformation}</span></h2>;
            <p style='InfoStr'>{item[0].itemDescription}</p>
                <div>
                <div style='LocatIcon'></div>;
                <span style='AdressWrapper'>{item[0].itemAdress}</span>
                <span style='PriceItem'>{item[0].itemPrice}/day</span>
                </div>
        </div>
    </div>)   
  }
}

export default ProductCard;
