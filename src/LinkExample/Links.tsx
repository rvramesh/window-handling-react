import React, { useState, useEffect } from "react";
import "./Links.css";

export default function () {
  const [searchTerm, setSearchTerm] = useState("");
  const [link, setLink] = useState("");
  const [windowOpen, setWindowOpen] = useState(false);
  useEffect(() => {
    const winFeatures =
      "";
    const winName = "window";
    const winReplace = true;
    const winObj =
      windowOpen && link
        ? window.open(link, winName, winFeatures, winReplace)
        : null;
    window.onunload = function () {
      if (!winObj?.closed) {
        winObj?.close();
      }
    };
    return () => {
      winObj?.close();
      window.onunload = null;
    };
  }, [windowOpen, link]);
  return (
    <React.Fragment>
      <h2>Links!</h2>
      <div className="container">
        <div className="input">
          <form
            onSubmit={(ev) => {
              setLink(
                `https://www.google.com/search?q=${encodeURI(searchTerm)}`
              );
              setWindowOpen(false);
              ev.preventDefault();
            }}
          >
            <label>
              Name:
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setLink("");
                }}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          {link && (
            <button
              onClick={() => {
                setWindowOpen(true);
              }}
              className="link"
            >
              Link
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
