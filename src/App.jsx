// import { lazy, Suspense } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

import Header from "./sections/Header/Header";
import Main from "./sections/Main/Main";
import Footer from "./sections/Footer/Footer";

// import PageTitleListener from "./pages/PageTitleListener/PageTitleListener";
// import PageLoader from "./pages/PageLoader/PageLoader";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

// const Home = lazy(() => import("./pages/Home/Home"));

import Home from "./pages/Home/Home";

function App() {
  useSmoothScroll();

  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <PageTitleListener> */}
          <Main>
            {/* <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="/home" element={<Home />} />
                <Route
                  path="*"
                  element={<Navigate replace to="/page-not-found" />}
                />
                <Route path="/page-not-found" element={<PageNotFound />} />
              </Routes>
            </Suspense> */}
            <Home />
          </Main>
        {/* </PageTitleListener> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
