
import { useState } from "react";
import Header1 from "./MobileHeaderPages/Header1";
import {
  BarIcon
} from "@/components/icons/index"


function Header2() {
  const [togle, setTogle] = useState(false);
  return (
    <>
      {togle ? (
        <Header1 setTogle={setTogle} togle={togle} />
      ) : (

        <div className=" text-2xl -my-4 text-white md:-ml-10"
          onClick={() => {
            setTogle(true);
          }}>
          <BarIcon />
        </div>

      )}

    </>
  );
}

export default Header2;