export function isHeadingElement(element) {
  return element instanceof HTMLHeadingElement;
}

export function isParagrapElement(element) {
  return element instanceof HTMLParagraphElement;
}

export function isListElement(element) {
  return (
    element instanceof HTMLUListElement || element instanceof HTMLOListElement
  );
}

export function formatTwoDigitNum(num) {
  const isDigit = num < 10;
  return isDigit ? num.toString().padStart(2, 0) : num;
}

export function applyClassName(nodeElement, className){
    nodeElement.classList.add(className);
}

export function isPhoneOrEmail(contactHref) {
  return contactHref.startsWith("tel:") || contactHref.startsWith("mailto:");
}

export function isMobileNavActive() {
  return window.innerWidth < 768;
}
