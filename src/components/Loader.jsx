import React from "react";
import { motion } from "framer-motion";

const Loader = () => (
  <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.7 }}
  >
    <motion.div
      className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  </motion.div>
);

export default Loader;
