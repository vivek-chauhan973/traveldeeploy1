import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const DFlyoutLink = ({ children, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  // console.log("FlyoutContent",children);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <p className="relative group text-gray-500 hover:text-blue-500">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-[3px] origin-left scale-x-0 rounded-full  bg-blue-500 transition-transform duration-300 ease-out"
        />
      </p>
      <AnimatePresence >
        { showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            // style={{ translateX: "-30%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className=" absolute left-17 top-10 z-50  text-gray-500"
          >
            <div />
            <div />
            <FlyoutContent />
          </motion.div>
        )}
        

      </AnimatePresence>
    </div>
  );
};
export default DFlyoutLink;