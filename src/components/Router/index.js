import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";
import Toggles from "../Examples/Toggles";
import DragAndDropList from "../Examples/DragAndDropList";
import DraggableDrawer from "../Examples/DraggableDrawer";
import FlipCard from "../Examples/FlipCards";
import Header from "../Header";
import LoadingScreen from "../LoadingScreen";
import AnimatedSwitch from "./AnimatedSwitch";
import Route from "./TransitionRoute";
import { useComponentLogic } from "./hooks";

export const Router = () => {
  const { loading, fakeLoad } = useComponentLogic();
  return (
    <BrowserRouter>
      <AnimateSharedLayout>
        <Header />
        <LoadingScreen {...{ loading }} />
      </AnimateSharedLayout>
      <main className="layout">
        <AnimatedSwitch>
          <Route path="/about">
            <h3>Who we are</h3>
          </Route>
          <Route path="/contact">
            <h3>Positive Contact!</h3>
          </Route>
          <Route path="/drawer">
            <DraggableDrawer />
          </Route>
          <Route path="/drag-and-drop">
            <DragAndDropList />
          </Route>
          <Route path="/flip-card">
            <FlipCard />
          </Route>
          <Route path="/toggles">
            <Toggles />
          </Route>
          <Route path="/">
            <div>Home</div>
            <button onClick={fakeLoad}>"Load"</button>
          </Route>
        </AnimatedSwitch>
      </main>
    </BrowserRouter>
  );
};

export default Router;
