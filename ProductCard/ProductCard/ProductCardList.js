import React from 'react';
import Button from '../../elements/Button/Button';
import ItemList from './ItemListFile.JSON';
import './style.scss';

const itemList = ItemList.list;

// eslint-disable-next-line consistent-return
// <div>{items.map(item => <div>{item}</div>)}</div>)
const ProductCardList = () => (
  <div className="CardWrapper">
    <img className="CardIMGStyle" src={itemList[0].itemImage} alt="" />
    <div className="ItemInfoWrapper">
      <h2 className="CardHeader"><span>{itemList[0].itemName}.</span><span>{itemList[0].itemInformation}</span></h2>
      <p className="InfoStr">{itemList[0].itemDescription}</p>
      <div>
        <div className="LocatIcon"></div>
        <span className="AdressWrapper">{itemList[0].itemAdress}</span>
        <span className="PriceItem">{itemList[0].itemPrice}<span>{itemList[0].itemPriceCurrency}</span>/day</span>
        <Button />
      </div>
    </div>
  </div>);
// const ProductCard = () => (
//   <div className="CardWrapper">
//     <img className="CardIMGStyle" src={item[0].itemImage} alt="" />
//     <div className="ItemInfoWrapper">
//       <h2 className="CardHeader"><span>{item[0].itemName}.</span><span>{item[0].itemInformation}</span></h2>
//       <p className="InfoStr">{item[0].itemDescription}</p>
//       <div>
//         <div className="LocatIcon"></div>
//         <span className="AdressWrapper">{item[0].itemAdress}</span>
//         <span className="PriceItem">{item[0].itemPrice}/day</span>
//         <Button />
//       </div>
//     </div>
//   </div>);
export default ProductCardList;
