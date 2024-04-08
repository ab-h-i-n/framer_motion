import React from "react";
import Heading from "../Components/Heading";
import ImageGallery from "../Components/ImageGallery";

const Section2 = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2  place-items-center ">

      <ImageGallery things={'motor bike'} className={'order-2'} />

      <Heading title={"Bikes"} />
    </div>
  );
};

export default Section2;
