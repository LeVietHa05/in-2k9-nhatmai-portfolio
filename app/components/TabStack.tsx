"use client";

import { useState, CSSProperties } from "react";
import Link from "next/link";

export type TabItem = {
  title: string;
  variant: "dark" | "light";
  notchX: number;
  notchW: number;
  link: string;
};

const OVERLAP = 400;
const LIFT_GAP = 40;

type TabStyle = CSSProperties & {
  "--notch-x"?: string;
  "--notch-w"?: string;
};

export default function TabStack({ items }: { items: TabItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="stack  ">
      {items.map((it, i) => {
        const isHovered = hovered === i;

        const style: TabStyle = {
          "--notch-x": `${it.notchX}%`,
          "--notch-w": `${it.notchW}px`,
          marginTop: i === 0 ? 0 : `-${OVERLAP}px`,
          zIndex: isHovered ? i + 1 : i + 1,
          transform: isHovered
            ? `translateY(-${OVERLAP / 2 - LIFT_GAP}px)`
            : "translateY(0)",
        };

        return (
          <div
            key={i}
            style={{
              filter: "drop-shadow(rgb(0, 0, 0.15) 0px -4px 4px )",
              clipPath: " inset(-20px 0px -20px 0px)",
            }}
          >
            <Link
              href={it.link}
              className={`tab ${it.variant}  `}
              style={style}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {it.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
