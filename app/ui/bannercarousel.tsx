"use client";
import React, { useState } from "react";

const slides = [
  {
    id: 1,
    src: "/banner1.png",
    title: "",
    desc: "",
    link: "/about",
  },
  {
    id: 2,
    src: "/banner2.png",
    title: "",
    desc: "",
    link: "/events",
  },
];

function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = (idx) => {
    setCurrent((idx + slides.length) % slides.length);
  };

  return (
    <div
      // style={{
      //   position: "relative",
      //   // width: 800,
      //   height: 600,
      //   overflow: "hidden",
      //   borderRadius: "1rem",
      // }}
      className="relative h-[600px] overflow-hidden rounded-xl w-full mb-0"
    >
      {slides.map((slide, idx) => (
        <a href={slide.link}>
          <div
            key={idx}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: current === idx ? 1 : 0,
              transition: "opacity 0.5s",
              zIndex: current === idx ? 1 : 0,
            }}
          >
            <img
              src={slide.src}
              alt={slide.title}
              style={{ width: "100%", height: "100%", objectFit: "scale-down" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                color: "white",
                textAlign: "left",
                padding: "0 8rem",
              }}
            >
              <h1 className="w-1/2 mb-4 text-4xl font-bold">{slide.title}</h1>
              <p className="w-1/2 pb-4">{slide.desc}</p>
              {/* <div>
              <button
                style={{
                  margin: "0 0.5rem",
                  padding: "0.75rem 1.5rem",
                  background: "#fff",
                  color: "#222",
                  border: "none",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Explore
              </button>
              <button
                style={{
                  margin: "0 0.5rem",
                  padding: "0.75rem 1.5rem",
                  background: "transparent",
                  color: "#fff",
                  border: "2px solid #fff",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Gallery
              </button>
            </div> */}
            </div>
          </div>
        </a>
      ))}

      <button
        onClick={() => goTo(current - 1)}
        style={{
          position: "absolute",
          left: 12,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          fontSize: "2rem",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 2,
        }}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={() => goTo(current + 1)}
        style={{
          position: "absolute",
          right: 12,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          fontSize: "2rem",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 2,
        }}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
}

export default BannerCarousel;
