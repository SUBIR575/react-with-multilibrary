import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SliderImage from "react-zoom-slider";
import axios from "axios";
import api from "./Baseurl/Api";
import {useSelector,useDispatch} from 'react-redux'
import {addtocart,decrementproduct} from '../Store/Action'
const SingleProduct = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cartReducer)
  const params = useParams();
  const [productdata, setProductData] = useState();
  const [quantity,setQuantity] = useState(0);
  const loadData = async () => {
    const data = await api
      .get(`/products/${params?.id}`)
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadData();
  }, []);
  if(cart){
  var quan = cart?.find((item)=>item.id === productdata?.id)
  }
  const imageData = productdata?.images.map((i,index) => {return {
    image: i,
    text: index,
};});
 const handlesub = (data)=>{
  dispatch(decrementproduct(data))
 }
 const handleadd = (data)=>{
  dispatch(addtocart(data))
 }
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <div className="pro-img-details">
                {imageData?<SliderImage
                data={imageData}
                width="450px"
                showDescription={false}
                direction="right"
              />:null}
            </div>
          </Col>
          <Col sm={6}>
            <h6 className="pro-d-title">
              {productdata?.title}
            </h6>
            <p>
             {productdata?.description}
            </p>
            <div className="product_meta">
              <span className="posted_in">
                <strong>Categories:</strong>
                <p>{productdata?.category}</p>
              </span>
            </div>
            <div className="m-bot15">
              <strong>Price : </strong>
              <span className="pro-price"> ${productdata?.price}</span>
            </div>
            <div className="m-bot15">
              <strong>Stock : </strong>
              <span className="pro-price"> ${productdata?.stock}</span>
            </div>
            <div className="cart-btn">
                <p className="cart-sub" onClick={()=>handlesub(productdata)}>-</p>
              <p className="cart-input">{quan?.quantity || 0}</p>
              <p className="cart-add" onClick={()=>handleadd(productdata)}>+</p>
            </div>
            <p>
              <button className="btn btn-round btn-danger" type="button" onClick={()=>dispatch(addtocart(productdata))}>
                <i className="fa fa-shopping-cart" /> Add to Cart
              </button>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleProduct;
