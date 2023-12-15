import React, { useEffect, useRef } from "react";

const PagesWrapper = ({ children }: { children: JSX.Element }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="container ml-[0px] mr-[50px] md:mx-auto w-[84%] md:w-[70vw] opacity-0"
    >
      {children}
    </div>
  );
};

export default PagesWrapper;
