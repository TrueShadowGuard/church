import {useLayoutEffect} from "react";

export default function useScrollRestoration() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
