"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Skills({
  name,
  icon,
  image,
  img,
  logo,
  iconUrl,
  index = 0,
}) {
  const cardRef = useRef(null);

  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);

  const springX = useSpring(motionX, {
    stiffness: 180,
    damping: 14,
    mass: 0.2,
  });

  const springY = useSpring(motionY, {
    stiffness: 180,
    damping: 14,
    mass: 0.2,
  });

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    motionX.set(x * 0.18);
    motionY.set(y * 0.18);
  };

  const handleMouseLeave = () => {
    motionX.set(0);
    motionY.set(0);
  };

  const receivedIcon = icon || image || img || logo || iconUrl;

  const imageSource =
    typeof receivedIcon === "string"
      ? receivedIcon
      : receivedIcon?.src ||
        receivedIcon?.default?.src ||
        receivedIcon?.default;

  const isReactElement = React.isValidElement(receivedIcon);

  const isReactComponent =
    typeof receivedIcon === "function" ||
    (typeof receivedIcon === "object" &&
      receivedIcon !== null &&
      receivedIcon.$$typeof &&
      !imageSource);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.08, 0.6)}
      className="flex items-center justify-center"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex h-[140px] w-[140px] cursor-pointer items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          className="relative z-10 flex h-full w-full items-center justify-center"
        >
          {isReactElement ? (
            <div
              title={name}
              className="flex h-[85px] w-[85px] items-center justify-center text-7xl"
            >
              {receivedIcon}
            </div>
          ) : isReactComponent ? (
            React.createElement(receivedIcon, {
              title: name,
              className: "h-[85px] w-[85px]",
            })
          ) : imageSource ? (
            <img
              src={imageSource}
              alt={name || "Skill"}
              title={name}
              width={85}
              height={85}
              loading="lazy"
              draggable={false}
              className="block h-[85px] w-[85px] object-contain opacity-100"
            />
          ) : (
            <span className="text-center text-sm text-red-400">
              Missing: {name}
            </span>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
