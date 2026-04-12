import { useEffect } from "react";
import { useLocation } from "react-router";

function PageTitleListener({ children }) {
  const { pathname } = useLocation();
  const pageTitle = getPageTitle(pathname);

  useEffect(
    function () {
      document.title = pageTitle;
    },
    [pageTitle]
  );

  return children;
}

const NOT_FOUND_TITLE = "404 | Page Not Found";
const DEFAULT_TITLE_PREFIX = "Ruta Roots Landscaping //";

function getPageTitle(pathname) {
  if (pathname === "/") return;
  const formatTitle = (pathname) =>
    `${DEFAULT_TITLE_PREFIX} ${
      pathname[1].toUpperCase() + pathname.slice(2)
    } page`;

  if (pathname === "/page-not-found") {
    return NOT_FOUND_TITLE;
  }

  return formatTitle(pathname);
}

export default PageTitleListener;
