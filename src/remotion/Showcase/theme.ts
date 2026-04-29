import { loadFont as loadDisplayFont } from "@remotion/google-fonts/Archivo";
import { loadFont as loadBodyFont } from "@remotion/google-fonts/InstrumentSans";
import { loadFont as loadMonoFont } from "@remotion/google-fonts/IBMPlexMono";

const { fontFamily: display } = loadDisplayFont("normal", {
  weights: ["600", "700", "800"],
  subsets: ["latin"],
});

const { fontFamily: body } = loadBodyFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const { fontFamily: mono } = loadMonoFont("normal", {
  weights: ["500", "600"],
  subsets: ["latin"],
});

export type AccentTone = "blue" | "green" | "amber" | "coral" | "steel";

export const theme = {
  colors: {
    background: "#090b0e",
    backgroundAlt: "#101318",
    surface: "#12161b",
    surfaceElevated: "#171c22",
    surfaceWash: "rgba(246, 240, 230, 0.055)",
    line: "rgba(246, 240, 230, 0.14)",
    lineStrong: "rgba(246, 240, 230, 0.24)",
    shadow: "rgba(0, 0, 0, 0.42)",
    text: {
      primary: "#f4efe7",
      secondary: "#b7bec7",
      muted: "#78828e",
    },
    tones: {
      blue: "#62a8ff",
      green: "#39d69f",
      amber: "#f4bd5f",
      coral: "#ff766b",
      steel: "#9cadbf",
    },
  },
  fonts: {
    display,
    body,
    mono,
  },
  layout: {
    x: 96,
    y: 72,
  },
} as const;
