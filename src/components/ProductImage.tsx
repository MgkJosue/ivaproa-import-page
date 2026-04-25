"use client";

import { useState } from "react";
import Image from "next/image";
import { Smartphone } from "lucide-react";

interface ProductImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export default function ProductImage({ src, alt, fill, sizes, priority, className }: ProductImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2" style={{ color: "var(--blue)", opacity: 0.35 }}>
        <Smartphone size={44} strokeWidth={1.2} />
        <span className="text-[10px] font-medium text-center px-2 leading-snug" style={{ color: "var(--muted-foreground)" }}>
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setError(true)}
      unoptimized
    />
  );
}
