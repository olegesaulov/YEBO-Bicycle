import * as commonFunctions from "./modules/functions.js";
import "./modules/burger.js";
import { Carousel } from "./modules/carousel/carousel.js";

commonFunctions.isWebp();
const carousel = new Carousel({
    prefix: "slider",
    showArrows: false,
    autoplaySpeed: 8000,
});