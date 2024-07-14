import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import Header1 from "./MobileHeaderPages/Header1";


function Header2() {
  const [togle, setTogle] = useState(false);
  return (
    <>
      {togle ? (
        <Header1 setTogle={setTogle} togle={togle} />
      ) : (
        <IoReorderThreeOutline
          className=" text-2xl -my-4 text-white md:-ml-10"
          onClick={() => {
            setTogle(true);
          }}
        />
      )}
     
    </>
  );
}

export default Header2;