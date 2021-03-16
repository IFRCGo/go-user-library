import React, { useRef } from "react";
import prettier from "prettier/standalone";
import babylon from "prettier/parser-babel";

export default function Code(props) {
  const [code, setCode] = React.useState(props.source);
  const textAreaRef = useRef(null);

  const formatCode = () => {
    const formattedCode = prettier.format(code, {
      parser: "babel",
      plugins: [babylon],
    });

    setCode(formattedCode.replace(/;\s*$/, "")); //removes the extra semicolon
  };

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
  }

  return (
    <code>
      <textarea readOnly value={code} ref={textAreaRef} />
      <button
        tabIndex="0"
        className="button button--small button--primary-filled"
        onClick={formatCode}
      >
        Format Code
      </button>

      <button
        tabIndex="0"
        className="button button--small button--primary-bounded"
        onClick={copyToClipboard}
      >
        Copy
      </button>
    </code>
  );
}
