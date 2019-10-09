import React, { Component } from "react";
import { Jumbotron as Jumbo, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Styles = styled.div`
  ul {
    list-style-type: none;
    padding-left: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    text-decoration: none;
  }

  .smLogo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
  }

  .indLogo {
    cursor: pointer;
  }

  .foot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin: auto;
    border-top: 2px solid #d3d3d3;
  }

  .brandLogo {
    position: relative;
    top: 50px;
  }

  .rights {
    display: flex;
    justify-content: center;
  }
`;

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClickFb = e => {
    e.preventDefault();
    window.open("https://www.facebook.com", "_blank");
  };

  handleClickInsta = e => {
    e.preventDefault();
    window.open("https://www.instagram.com", "_blank");
  };

  render() {
    return (
      <Styles>
        <Container>
          <div className="foot">
            <img
              src="../assets/kainMovementLogo.jpg"
              height="100"
              width="100"
              className="brandLogo"
            />
            <div className="nav">
              <div className="customerCare">
                <h6>Customer Care</h6>
                <ul>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/shipping">Shipping & Returns</a>
                  </li>
                  <li>
                    <a href="/sitemap">Sitemap</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/termsUse">Terms of Use</a>
                  </li>
                </ul>
              </div>
              <div className="products">
                <h6>Products</h6>
                <ul>
                  <li>
                    <a href="/buy1">Tote Bag A</a>
                  </li>
                  <li>
                    <a href="/buy2">Tote Bag B</a>
                  </li>
                  <li>
                    <a href="/buy3">Tote Bag C</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="connect">
              <div className="socialMedia">
                <h6>Connect With Us</h6>
                <div className="smLogo">
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    size="2x"
                    className="indLogo"
                    onClick={this.handleClickFb}
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    className="indLogo"
                    onClick={this.handleClickInsta}
                  />
                </div>
              </div>
              <div className="contact"></div>
            </div>
          </div>
          <p className="rights">© 2019 Kain Movement</p>
        </Container>
      </Styles>
    );
  }
}
