import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Stocks from "./Components/Stocks";

export const routes = [
  { path: "", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/stocks", component: Stocks }
];
