import { useState } from "react";
import Header1 from "./MobileHeaderPages/Header1";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import Create from "@/components/login-sinup/login/create";

function Header2() {
  const [togle, setTogle] = useState(false);
  const { loginPopup } = useCarPopupContext();

  return (
    <>
      {loginPopup && <Create />}
      {togle ? (
        <Header1 setTogle={setTogle} togle={togle} />
      ) : (
        <div
          className="text-2xl -my-4 text-white flex justify-end items-center  cursor-pointer"
          onClick={() => {
            setTogle(true);
          }}>
          <div>
            <FontAwesomeIcon icon={faBars} className='font1' />
          </div>
        </div>
      )}
    </>
  );
}

export default Header2;
