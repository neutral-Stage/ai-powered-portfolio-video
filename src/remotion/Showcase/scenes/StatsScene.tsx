import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate } from "remotion";
import { theme } from "../theme";
import { animations } from "../utils/animations";
import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadSecondaryFont } from "@remotion/google-fonts/Outfit";
import React from "react";

const { fontFamily: primaryFont } = loadFont();
const { fontFamily: secondaryFont } = loadSecondaryFont();

const stats = [
    { label: "Conversion Lift", value: 300, suffix: "%", color: "#10b981" },
    { label: "Lighthouse Score", value: 98, suffix: "%", color: "#f59e0b" },
    { label: "Components Built", value: 100, suffix: "+", color: "#3b82f6" },
    { label: "Bundle Reduced", value: 40, suffix: "%", color: "#ec4899" },
];

export const StatsScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    return (
        <AbsoluteFill
            style={{
                background: theme.colors.background,
                fontFamily: primaryFont,
                color: theme.colors.text.primary,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "60px",
                padding: `0 ${theme.layout.contentPadding}px`,
            }}
        >
            {stats.map((stat, index) => {
                const delay = 10 + index * 15;
                const anim = animations.scaleIn(frame, fps, delay);

                // Counter Animation
                const count = interpolate(frame - delay, [0, 60], [0, stat.value], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic ease out
                });

                return (
                    <div
                        key={stat.label}
                        style={{
                            width: "350px",
                            height: "350px",
                            background: theme.colors.surface,
                            borderRadius: "50%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            border: `2px solid ${theme.colors.border}`,
                            position: "relative",
                            transform: `scale(${anim})`,
                        }}
                    >
                        {/* Animated Ring */}
                        <svg
                            width="360"
                            height="360"
                            style={{
                                position: "absolute",
                                top: -5,
                                left: -5,
                                transform: "rotate(-90deg)",
                            }}
                        >
                            <circle
                                cx="180"
                                cy="180"
                                r="175"
                                stroke={theme.colors.border}
                                strokeWidth="4"
                                fill="none"
                            />
                            <circle
                                cx="180"
                                cy="180"
                                r="175"
                                stroke={stat.color}
                                strokeWidth="4"
                                fill="none"
                                strokeDasharray={1100}
                                strokeDashoffset={interpolate(frame - delay, [0, 60], [1100, 0], {
                                    extrapolateLeft: "clamp",
                                    extrapolateRight: "clamp",
                                })}
                                strokeLinecap="round"
                            />
                        </svg>

                        <div
                            style={{
                                fontSize: "80px",
                                fontWeight: 900,
                                color: theme.colors.text.primary,
                                lineHeight: 1,
                                marginBottom: "10px",
                            }}
                        >
                            {Math.round(count)}
                            <span style={{ fontSize: "50px", color: stat.color }}>
                                {stat.suffix}
                            </span>
                        </div>

                        <div
                            style={{
                                fontFamily: secondaryFont,
                                fontSize: "24px",
                                textAlign: "center",
                                color: theme.colors.text.secondary,
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                            }}
                        >
                            {stat.label}
                        </div>
                    </div>
                );
            })}
        </AbsoluteFill>
    );
};
