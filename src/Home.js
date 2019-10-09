import React from "react";
import { IntroJumbo } from "./components/IntroJumbo";
import { FrontShopJumbo } from "./components/FrontShopJumbo";
import { MissionJumbo } from "./components/MissionJumbo"
import { FeaturedOn } from "./components/FeaturedOn"

export const Home = () => (
  <div>
    <IntroJumbo />
    <FrontShopJumbo />
    <MissionJumbo />
    <FeaturedOn />
  </div>
);
