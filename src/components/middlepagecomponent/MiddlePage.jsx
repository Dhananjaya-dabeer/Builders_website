import React from "react";
import BuilderCard from "../BuilderCard";
function MiddlePage() {
  const array1 = [
    "Builder 1",
    " WixPro 72-Inch Responsive Website Builder- ",
    " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    9.8,
    "Exceptional",
    1,
    "Best Choice",
    "https://i.ibb.co/Cv7SB5F/image.png",
  ];

  const array2 = [
    "Biulder",
    "SiteCraft 68-Inch Ultimate Web Design Studio- ",
    "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    9.5,
    "Excellent",
    2,
    "Best Value",
    "https://i.ibb.co/SKJpfSS/image.png",
  ];
  const array3 = [
    "Builder 1",
    "WixPro 72-Inch Responsive Website Builder- ",
    "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    9.3,
    "Exceptional",
    3,
  ];

  return (
    <div>
      <BuilderCard values={array1} />
      <BuilderCard values={array2} />
      <BuilderCard values={array3} />
      <BuilderCard />
    </div>
  );
}

export default MiddlePage;
