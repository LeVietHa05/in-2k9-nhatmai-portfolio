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
    <div className="stack ">
      {items.map((it, i) => {
        const isHovered = hovered === i;
        const liftDistance = OVERLAP / 2 - LIFT_GAP; // Khoảng cách bay lên (khoảng 160px)

        const style: TabStyle = {
          "--notch-x": `${it.notchX}%`,
          "--notch-w": `${it.notchW}px`,
        };

        // Style điều khiển vị trí và hiệu ứng dịch chuyển của cả cụm (gồm cả bóng và tab)
        const wrapperStyle: CSSProperties = {
          marginTop: i === 0 ? 0 : `-${OVERLAP}px`,
          zIndex: isHovered ? items.length + 1 : i + 1,
          transition: "transform 0.3s ease", // Giúp hiệu ứng bay mượt mà hơn nếu chưa có trong CSS
          transform: isHovered
            ? `translateY(-${liftDistance}px)`
            : "translateY(0)",
          filter:
            "drop-shadow(rgba(0, 0, 0, 0.15) 0px -4px 4px) drop-shadow(rgba(0, 0, 0, 0.15) 0px 4px 4px)",
          // Quan trọng: Tăng rìa phía trên (-200px) để chứa không gian khi tab bay lên cao
          clipPath: `inset(-${liftDistance + 20}px 0px -20px 0px)`,
        };

        return (
          <div
            key={i}
            style={wrapperStyle}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link href={it.link} className={`tab ${it.variant}`} style={style}>
              {it.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
