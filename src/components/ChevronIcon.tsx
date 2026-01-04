import { motion } from "motion/react";

interface ChevronIconProps {
  isExpanded?: boolean;
}

export default function ChevronIcon({ isExpanded = false }: ChevronIconProps) {
  const rightArrowPath = "M6 4L10 8L6 12";
  const downArrowPath = "M4 6L8 10L12 6";

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={isExpanded ? downArrowPath : rightArrowPath}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ d: isExpanded ? downArrowPath : rightArrowPath }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </svg>
  );
}
