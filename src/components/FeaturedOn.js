import React from "react";
import { Jumbotron as Jumbo, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  h4 {
    font-family: Georgia;
    color: #add8e6;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }

  .logo {
    display: flex;
    justify-content: space-between;

    width: 50%;
    margin: auto;
  }

  img {
    opacity: 0.35;
    filter: grayscale(100%);
  }

  .cont {
    height: 200px;
  }
`;

export const FeaturedOn = () => (
  <Styles>
    <Container className="cont">
      <h4>As Featured In</h4>

      <div className="logo">
        <a href="http://www.malaysiakini.com" target="_blank">
          <img src="../assets/malaysiakiniCrop.png" width="196" height="50" />
        </a>
        <a href="https://www.thestar.com.my/" target="_blank">
          <img src="../assets/theStarOnline.png" width="188" height="50" />
        </a>
        <a href="https://www.bfm.my/" target="_blank">
          <img src="../assets/bfm.png" width="50" height="50" />
        </a>
      </div>
    </Container>
  </Styles>
);
