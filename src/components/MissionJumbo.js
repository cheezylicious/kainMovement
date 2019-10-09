import React from "react";
import { Jumbotron as Jumbo, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

const Styles = styled.div`
  .title {
    padding-bottom: 18px;
  }

  .des {
    padding-bottom: 30px;
  }

  .indFeature {
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    justify-content: center;
  }

  .jumbo {
    display: flex;
    flex-direction: column;

    align-items: center;
  }

  form {
    padding-top: 40px;
  }
`;

export const MissionJumbo = () => (
  <Styles>
    <Jumbo fluid>
      <Container className="jumbo">
        <h1 className="title">Our Mission</h1>
        <p className="des">Uplifting by recycling</p>
        <div className="indFeature">
          <FontAwesomeIcon icon={faHeart} />
          <h5>Made with love</h5>
        </div>
        <div className="indFeature">
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          <h5>Made with high precision</h5>
        </div>
        <form action="http://localhost:3000/mission">
          <button type="submit">Learn More</button>
        </form>
      </Container>
    </Jumbo>
  </Styles>
);
