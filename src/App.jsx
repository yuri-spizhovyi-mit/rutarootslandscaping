import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./sections/Header/Header";
import Main from "./sections/Main/Main";
import Footer from "./sections/Footer/Footer";

import PageTitleListener from "./pages/PageTitleListener/PageTitleListener";
import PageLoader from "./pages/PageLoader/PageLoader";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const Home = lazy(() => import("./pages/Home/Home"));
const Services = lazy(() => import("./pages/Services/Services"));
const About = lazy(() => import("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou/ThankYou"));

function App() {
  useSmoothScroll();

  return (
    <>
      <BrowserRouter>
        <Header />
        <PageTitleListener>
          <Main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route
                  path="*"
                  element={<Navigate replace to="/page-not-found" />}
                />
                <Route path="/page-not-found" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </Main>
        </PageTitleListener>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
