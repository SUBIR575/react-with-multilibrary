import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import {
  searchproducts,
  categoryproducts,
  allproducts,
  addtocart,
} from "../Store/Action";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import api from "./Baseurl/Api";
import { motion } from "framer-motion";
const Shop = () => {
  const dispatch = useDispatch();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  const afterSearch = useSelector((state) => state.SearchReducer.products);
  const cart = useSelector((state) => state.cartReducer);
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [search, setSearch] = useState();
  const LoadProducts = async () => {
    var res = await api
      .get(`/products`)
      .then((res) => {
        if (afterSearch) {
          setData(afterSearch);
        } else {
          setData(res?.data.products);
        }
      })
      .catch((err) => console.log(err));
  };
  const LoadCategory = async () => {
    var res = await api
      .get("/products/categories")
      .then((res) => setCategory(res?.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    LoadProducts();
    LoadCategory();
  }, [afterSearch]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchproducts(e.target.value));
  };
  const categoryHandle = (item) => {
    dispatch(categoryproducts(item));
  };
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const reset = () => {
    dispatch(allproducts());
  };
  console.log({ cart });

  return (
    <>
      <motion.div
       initial={{ opacity: 1 }}
       animate={{ width: "100%" }}
       exit={{ x: window.innerWidth, transition:{duration:0.1}}}
       className='main'>
        <Container>
        <Row>
          <Col sm={4}>
            <section className="panel" style={{textAlign:'center'}}>
              <header
                style={{ margin: "10px", fontSize: "25px", color: "red" }}
              >
                Category
              </header>
              <Button variant='outline-success' onClick={() => reset()} className='all-btn'>All Items</Button>
              <div className="panel-body">
                {category
                  ? category.map((item, index) => (
                      <ListGroup.Item onClick={() => categoryHandle(item)}>
                        {item}
                      </ListGroup.Item>
                    ))
                  : null}
              </div>
            </section>
            <section className="panel">
              <div className="panel-body">
                <form role="form product-form">
                  <div className="form-search">
                    <input
                      className="search-input"
                      type="text"
                      value={search}
                      onChange={handleSearch}
                      style={{
                        width: 231,
                        // position: "absolute",
                        // opacity: 0,
                        height: 34,
                        fontSize: 12,
                      }}
                    />
                  </div>
                </form>
              </div>
            </section>
          </Col>
          <Col sm={8}>
            <div className="row product-list">
              {data
                ? currentItems?.map((item) => (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="col-md-4"
                    >
                      <section className="panel">
                        <div className="pro-img-box">
                          <Link to={`/shop/${item?.id}`}>
                            <img src={item?.thumbnail} alt="" />
                          </Link>
                          <Button
                            className="adtocart"
                            onClick={() => dispatch(addtocart(item))}
                          >
                            <i className="fa fa-shopping-cart" />
                          </Button>
                        </div>
                        <div className="panel-body text-center">
                          <h6 className="pro-title">{item?.title}</h6>
                          <p className="price">${item.price}</p>
                        </div>
                      </section>
                    </motion.div>
                  ))
                : null}
            </div>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </Col>
        </Row>
        </Container>
      </motion.div>
    </>
  );
};

export default Shop;
