import React from "react";

import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import Layout from "./Component/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

import { Provider } from "react-redux";
import Store, { persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import AnimatedRoute from "./Component/AnimatedRoute";
const App = () => {
  return (
    <>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Layout>
            <AnimatedRoute/>
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
