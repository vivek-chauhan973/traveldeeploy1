import React, { useEffect, useMemo, useState } from "react";
const fetchBanner=async ()=>{
  const res = await fetch("/api/home");
  return await res.json();
}
const HeroSection = () => {

  const [banner,setBanner]=useState();
  const [video,setVideo]=useState("");
  const [currentText, setCurrentText] = useState("");
  const [upperText, setUpperText] = useState("");
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  useEffect(()=>{
    fetchBanner().then(res=>{setBanner(res?.data||[]);setVideo(res?.data?.[0]?.videoPath||"")})
  },[])
  const textsUpper = useMemo(
    () => ["Put The World", "Escape the Ordinary", "Wander Often ", "Adventure Awaits ", "Travel Smart ","Wherever You Go ","Your Dream Destinations ","Pack Your Bags "],
    []
  );
  const textsLower = useMemo(
    () => ["In Your Hands", "Embrace the Journey", " Wonder Always", " Just One Click Away", "Live Fully"," Make It Memorable","Start Here","Let’s Go!"],
    []
  );
  useEffect(() => {
    if (letterIndex < textsLower[index].length) {
      setUpperText(textsUpper[index])
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + textsLower[index][letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const delayTimeout = setTimeout(() => {
        setUpperText("")
        setCurrentText("");
        setLetterIndex(0);
        setIndex((prevIndex) => (prevIndex + 1) % textsLower.length);
      }, 1000);
      return () => clearTimeout(delayTimeout);
    }
  }, [letterIndex, index, textsLower]);
  // console.log("res of banner ---- >",banner?.[0]?.videoPath)
  // console.log("banner",banner);
  
  return (
    <div>
      <div className="relative md:h-[84vh] h-[65vh] flex items-center justify-center">
        {banner?.[0]?.videoPath &&<video autoPlay muted loop
          className="absolute  inset-0 z-0 w-full h-full object-cover"
          >
          <source src="/Video.mp4" type="video/mp4" />
        </video>}
        <div className="absolute inset-0 z-1 bg-black opacity-10"></div>
        <div className="z-20 text-white text-center relative  xl:w-[50vw] w-[80vw]">
          <h1 className="md:text-[32px] text-2xl leading-normal font-semibold md:font-semibold uppercase">
            {upperText}
          </h1>
          <h1 className="md:text-[32px] text-2xl leading-normal font-semibold md:font-semibold uppercase text-orange-600 ">
          {currentText} 
          </h1>
          <p className="mt-3">{banner?.[0]?.description}
          </p>
        </div>
        {/* <!-- scroll arrow sign --> */}
        <div className="absolute bottom-0 md:bottom-10 z-30 animate-bounce items-center flex flex-col">
          <p className="text-white">scroll down</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-6 w-6 mt-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
