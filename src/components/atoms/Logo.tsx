"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "dark" | "white";
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const variants = {
    default: "text-neutral-900",
    dark: "text-neutral-900",
    white: "text-white"
  };

  return (
    <Link href="/" className={cn("flex items-center gap-2 font-bold text-xl", variants[variant], className)}>
      <div className="w-8 h-8 bg-primary-green rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">I</span>
      </div>
      <span>Inventure</span>
    </Link>
  );
}