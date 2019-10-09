import React from "react";
import { Jumbotron as Jumbo, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import sewing from "../assets/sewMeh.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${sewing});
    background-size: cover;

    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
  }
`;

export const IntroJumbo = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <h1>Kain Movement</h1>
      <p>Uplifting by recycling</p>
    </Jumbo>
  </Styles>
);
