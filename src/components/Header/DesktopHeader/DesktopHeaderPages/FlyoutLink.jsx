import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  // console.log("FlyoutContent",children);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <p className="relative text-black">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-[3px] origin-left scale-x-0 rounded-full bg-navyblack transition-transform duration-300 ease-out"
        />
      </p>
      <AnimatePresence >
        {children === "Destination"  && showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-30%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className=" absolute left-60 top-5  text-black"
          >
            <div />
            <div />
            <FlyoutContent />
          </motion.div>
        )}
        {children === "Holiday"  && showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-30%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className=" absolute left-16 top-5  text-black"
          >
            <div />
            <div />
            <FlyoutContent />
          </motion.div>
        )}
        {children === "Travel" && showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-30%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className=" absolute left-5 top-5  text-black"
          >
            <div />
            <div />
            <FlyoutContent />
          </motion.div>
        )}
        {children === "Spaciality Tour"  && showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-30%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className=" absolute left-24 top-5  text-black"
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
export default FlyoutLink;