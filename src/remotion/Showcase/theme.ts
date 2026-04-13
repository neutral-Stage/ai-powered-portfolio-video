import { loadFont as loadHeadingFont } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadBodyFont } from "@remotion/google-fonts/Manrope";
import { loadFont as loadMonoFont } from "@remotion/google-fonts/MartianMono";

const { fontFamily: heading } = loadHeadingFont("normal", {
  weights: ["500", "700"],
  subsets: ["latin"],
});

const { fontFamily: body } = loadBodyFont("normal", {
  weights: ["400", "500", "700"],
  subsets: ["latin"],
});

const { fontFamily: mono } = loadMonoFont("normal", {
  weights: ["500"],
  subsets: ["latin"],
});

export type AccentTone = "sky" | "orange" | "mint" | "rose" | "gold";

export const theme = {
  colors: {
    background: "#07111f",
    backgroundAlt: "#0d1727",
    panel: "rgba(10, 20, 36, 0.72)",
    panelStrong: "rgba(10, 20, 36, 0.9)",
    border: "rgba(148, 163, 184, 0.18)",
    shadow: "rgba(2, 6, 23, 0.45)",
    text: {
      primary: "#f8fafc",
      secondary: "#9fb0c8",
      muted: "#64748b",
    },
    tones: {
      sky: "#38bdf8",
      orange: "#fb923c",
      mint: "#34d399",
      rose: "#fb7185",
      gold: "#fbbf24",
    },
  },
  fonts: {
    heading,
    body,
    mono,
  },
} as const;
