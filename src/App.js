import "./App.css";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import DemoTwo from "./components/DemoTwo";
import SearchVideoContainer from "./components/SearchVideoContainer";
import SuggestVideoContainer from "./components/SuggestVideoContainer";
import MyContext from "./components/utils/searchTextContext";
import { useState } from "react";

function App() {
  const [text, setText] = useState("Home");
  console.log(text)

  return (
    <MyContext.Provider value={{text, setText}}>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Head />

          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<MainContainer />} />
              <Route path="watch" element={<WatchPage />} />

              <Route
                path="demo"
                element={
                  <>
                    <Demo />
                    <DemoTwo />
                  </>
                }
              />
            </Route>

            <Route
              path="/search/:searchTerm"
              element={<SearchVideoContainer />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
    </MyContext.Provider>
  );
}

export default App;
