import React from "react";
import _cs from "classnames";

function Backdrop(p) {
  React.useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    const prevValue = html.style.overflow;
    html.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevValue;
    };
  });

  return <div className={_cs(p.className, "tc-backdrop")}>{p.children}</div>;
}

export default Backdrop;
