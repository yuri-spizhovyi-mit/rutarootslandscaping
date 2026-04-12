import { useEffect } from "react";
import { useLocation } from "react-router";

function PageNavigationListener({ children }) {
  const { pathname } = useLocation();

  useEffect(
    function () {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    },
    [pathname]
  );

  return children;
}

export default PageNavigationListener;
