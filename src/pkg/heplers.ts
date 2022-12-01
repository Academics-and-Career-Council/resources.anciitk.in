import { scroller } from "react-scroll";

export const scrollToSection = (callTo: string) => {
  scroller.scrollTo(callTo, {
    duration: 2000,
    delay: 0,
    smooth: "easeInOutQuad",
  });
};

export const getID = (url: string) => {
  try {
    return url.split("#")[1];
  } catch {
    return "";
  }
};

export const copyToClipboard = (text:string) => {
  navigator.clipboard.writeText(text)
}