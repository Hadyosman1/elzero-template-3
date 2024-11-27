"use client";

import { useEffect, useRef } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTopBtn = () => {
  const btnRef = useRef<null | HTMLButtonElement>(null);

  useEffect(() => {
    const handleShowBtn = () => {
      btnRef.current?.classList.toggle("show", window.scrollY > 200);
    };
    window.addEventListener("scrollend", handleShowBtn);

    return () => {
      window.removeEventListener("scrollend", handleShowBtn);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      ref={btnRef}
      className="scroll-to-top-btn"
    >
      <FaArrowUpLong />
    </button>
  );
};

export default ScrollToTopBtn;
