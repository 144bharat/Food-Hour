import { motion } from "framer-motion";
// import logo from "../assets/logo.png";
import { LOGOWithoutBg_URL } from "../utils/constants";


const Loading = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-r from-fuchsia-200 via-orange-300 to-blue-300"
      exit={{
        opacity: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      }}
    >
      <div className="flex flex-col items-center">

        {/* Loading... */}
        <motion.div
          className="flex items-center text-lg font-medium tracking-wide text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span>Loading</span>

          <span className="ml-1 flex w-6">
            {[0, 1, 2, 3, 4].map((dot) => (
              <motion.span
                key={dot}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: dot * 0.15,
                  ease: "easeInOut",
                }}
              >
                .
              </motion.span>
            ))}
          </span>
        </motion.div>

        {/* Logo + name */}
        <motion.div
          className="mt-8 flex flex-col items-center"
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 1.4,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
           onAnimationComplete={() => {
            setTimeout(onComplete, 1000);
          }}
        >
          <img
            src= {LOGOWithoutBg_URL}
            alt="FoodHour Logo"
            className="h-32 w-32 object-contain"
          />

          <motion.h1
            className="mt-3 text-2xl font-bold tracking-wide text-white"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.8,
              duration: 0.5,
            }}
          >
            Food Hour
          </motion.h1>
          
          <motion.p
            className="mt-3 text-2xl font-bold tracking-wide text-white"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.9,
              duration: 0.8,
            }}
          >
            Your Ultimate Food Delivery Experience....
          </motion.p>

        </motion.div>

      </div>
    </motion.div>
  );
};

export default Loading;