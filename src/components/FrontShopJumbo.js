import React from "react";
import { Jumbotron as Jumbo, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .jumboNew {
    text-align: center;
  }
  .usy {
    text-align: center;
  }
  .bagImg {
    display: flex;
    justify-content: space-between;
  }
`;

export const FrontShopJumbo = () => (
  <Styles>
    <Jumbo fluid className="jumboNew">
      <div className="usy">
        <h1>Kain Movie</h1>
        <p>Uplifting by recycling</p>
      </div>
      <Container className="bagImg">
        <a href="/buy1">
          <img src="../assets/duckBag.jpg" height="400px" width="320px" />
        </a>
        <a href="/buy2">
          <img src="../assets/bananaBag.jpg" height="400px" width="320px" />
        </a>
        <a href="/buy3">
          <img src="../assets/aloneBag.jpg" height="400px" width="320px" />
        </a>
      </Container>
    </Jumbo>
  </Styles>
);
