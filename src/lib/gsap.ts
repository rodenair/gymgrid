"use client";

// Central GSAP setup for the site. Everything animated imports from here so
// plugins are registered exactly once, on the client, before first use.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText, useGSAP);
}

// Shared "engineered" easing — a touch of overshoot-free precision.
export const ENGINEERED_EASE = "power3.out";

export { gsap, ScrollTrigger, DrawSVGPlugin, SplitText, useGSAP };
