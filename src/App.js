import React, { Suspense } from "react";
import routes from "./routes";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/video-react/dist/video-react.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const App = (props) => {
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <React.Fragment>
      <Suspense>
        <div className="bg-white">
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={
                    <route.layout {...props} title={route.title}>
                      <route.component
                        {...props}
                        navigation={navigation}
                        location={location}
                      />
                    </route.layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default App;
