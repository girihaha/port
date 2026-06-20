"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Skills({ name, icon, index = 0 }) {
  const ref = useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    if (!ref.current) return;

    const { clientX, clientY } = event;
    const { width, height, left, top } =
      ref.current.getBoundingClientRect();

    setPosition({
      x: (clientX - (left + width / 2)) * 0.2,
      y: (clientY - (top + height / 2)) * 0.2,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const imageSource =
    typeof icon === "string"
      ? icon
      : icon?.src || icon?.default?.src || icon?.default;

  const isReactElement = React.isValidElement(icon);

  const isReactComponent =
    typeof icon === "function" ||
    (typeof icon === "object" && icon?.$$typeof);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
      className="flex items-center justify-center"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 190,
          damping: 12,
          mass: 0.2,
        }}
        className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4"
      >
        {isReactElement ? (
          <div
            title={name}
            className="flex h-[75px] w-[75px] items-center justify-center text-6xl"
          >
            {icon}
          </div>
        ) : isReactComponent && !imageSource ? (
          React.createElement(icon, {
            title: name,
            className: "h-[75px] w-[75px]",
          })
        ) : imageSource ? (
          <img
            title={name}
            alt={name || "Skill"}
            src={imageSource}
            width={75}
            height={75}
            draggable={false}
            className="block h-[75px] w-[75px] object-contain opacity-100"
          />
        ) : (
          <p className="text-xs text-red-400">
            Missing: {name}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
