import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import * as DefaultFunctions from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DefaultFunctions.App />
    <DefaultFunctions.messagDisply />
  </StrictMode>
);
