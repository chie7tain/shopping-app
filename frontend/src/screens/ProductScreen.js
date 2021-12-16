import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  return (
    <>
      <Link className="btn btn-dark my-3">Go back </Link>
    </>
  );
};

export default ProductScreen;
