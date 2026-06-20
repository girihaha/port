"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Skills({ name, icon, index }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 16,
    mass: 0.2,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 16,
    mass: 0.2,
  });

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (mouseX - centerX) * 0.22;
    const moveY = (mouseY - centerY) * 0.22;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const imageSource =
    typeof icon === "string" ? icon : icon?.src;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.08, 0.6)}
      className="flex items-center justify-center"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex h-28 w-28 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg backdrop-blur-xl transition-colors duration-300 hover:border-violet-400/40 hover:bg-white/[0.08]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/5 to-cyan-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute -inset-10 rounded-full bg-violet-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          className="relative z-10 flex flex-col items-center justify-center gap-2"
        >
          <img
            src={imageSource}
            alt={`${name} skill icon`}
            title={name}
            width={64}
            height={64}
            loading="lazy"
            draggable={false}
            className="h-14 w-14 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.45)] sm:h-16 sm:w-16"
          />

          <span className="pointer-events-none absolute top-full mt-3 whitespace-nowrap rounded-md border border-white/10 bg-black/80 px-2.5 py-1 text-xs text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:translate-y-1 group-hover:opacity-100">
            {name}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
