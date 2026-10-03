"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"div"> & { delay?: number; direction?: "up" | "left" | "right" | "none" };

const offsets = { up: { y: 40 }, left: { x: -40 }, right: { x: 40 }, none: {} };

export default function AnimatedSection({ delay = 0, direction = "up", children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
