import { useEffect } from "react";

import {
  isHeadingElement,
  isListElement,
  isParagrapElement,
  applyClassName,
} from "../../utils/helpers";

function useAccordionBodyClassNames(accordionBodyRef, styles) {
  useEffect(
    function () {
      const accordionItemBodyNodes = Array.from(
        accordionBodyRef.current.firstElementChild.children
      );

      accordionItemBodyNodes.forEach((nodeElement) => {
        if (isHeadingElement(nodeElement)) {
          applyClassName(nodeElement, styles.accordionItemBodyTitle);
        }

        if (isListElement(nodeElement)) {
          applyClassName(nodeElement, styles.accordionItemBodyList);
        }

        if (isParagrapElement(nodeElement)) {
          applyClassName(nodeElement, styles.accordionItemBodyText);
        }
      });
    },
    [styles, accordionBodyRef]
  );

  return null;
}

export default useAccordionBodyClassNames;
