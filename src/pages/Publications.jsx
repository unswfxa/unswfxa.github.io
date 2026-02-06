import { blogs, newsletters, VOLUME_IMAGE_COUNTS } from "../data/publicationsinfo";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

function PublicationsPage() {
  const volumes = Object.keys(VOLUME_IMAGE_COUNTS);
  const totalVolumes = volumes.length;

  const [volume, setVolume] = useState(volumes[volumes.length - 1]);
  const [imageIndex, setImageIndex] = useState(1);

  const totalImagesThisVolume = VOLUME_IMAGE_COUNTS[volume];
  const imageSrc = `/publications/${volume}/${imageIndex}.png`;

  // image left and right
  const nextImage = () => {
    setImageIndex((prev) => (prev < totalImagesThisVolume ? prev + 1 : 1));
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev > 1 ? prev - 1 : totalImagesThisVolume));
  };

  // volume up down
  const nextVolume = () => {
    const currentIndex = volumes.indexOf(volume);
    const nextIndex = (currentIndex + 1) % totalVolumes;
    setVolume(volumes[nextIndex]);
    setImageIndex(1);
  };

  const prevVolume = () => {
    const currentIndex = volumes.indexOf(volume);
    const prevIndex = (currentIndex - 1 + totalVolumes) % totalVolumes;
    setVolume(volumes[prevIndex]);
    setImageIndex(1);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
      <Header />
      <div className="mt-32 px-10 md:px-20 flex flex-col items-center space-y-12">
        <h1 className="text-6xl font-semibold mb-8 bg-gradient-to-r from-[#014EB1] to-[#31C6E1] bg-clip-text text-transparent">
          Publications
        </h1>

        <div className="relative w-full max-w-5xl h-[900px] md:h-[1000px] flex items-center justify-center pt-16 pb-24">
          {/* Image */}
          <img
            src={imageSrc}
            alt={`${volume} image ${imageIndex}`}
            className="w-full h-full object-contain rounded-2xl shadow-lg"
          />

          {/* Page indicator in bottom-right */}
          <p className="absolute bottom-4 right-4 text-sm text-white bg-black/50 px-3 py-1 rounded-md">
            Page {imageIndex} / {totalImagesThisVolume}
          </p>

          {/* Left / Right Image Controls */}
          <button
            onClick={prevImage}
            className="absolute left-[-90px] p-3 rounded-full bg-white shadow hover:scale-110 transition"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-[-90px] p-3 rounded-full bg-white shadow hover:scale-110 transition"
          >
            <ChevronRight size={32} />
          </button>

          {/* Top / Bottom Volume Controls */}
          <button
            onClick={nextVolume}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white shadow hover:scale-110 transition"
          >
            <ChevronUp size={32} />
          </button>

          <button
            onClick={prevVolume}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white shadow hover:scale-110 transition"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PublicationsPage;
