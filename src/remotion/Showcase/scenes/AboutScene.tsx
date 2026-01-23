import { AbsoluteFill, useVideoConfig, useCurrentFrame, Img, staticFile, interpolate } from "remotion";
import { theme } from "../theme";
import { animations, springConfig } from "../utils/animations";
import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadSecondaryFont } from "@remotion/google-fonts/Outfit";
import { spring } from "remotion";
import React from "react";

const { fontFamily: primaryFont } = loadFont();
const { fontFamily: secondaryFont } = loadSecondaryFont();

export const AboutScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const photoReveal = animations.scaleIn(frame, fps, 10);
    const textSlide = animations.slideIn(frame, fps, "right", 30);

    // Ring animation
    const ringScale = spring({
        frame: frame - 20,
        fps,
        config: { ...springConfig, damping: 100 },
    });

    const ringOpacity = interpolate(ringScale, [0, 1], [0, 1]);

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
                padding: `0 ${theme.layout.contentPadding}px`,
            }}
        >
            {/* Left side: Photo */}
            <div style={{ flex: 1, display: "flex", justifyContent: "center", position: "relative" }}>
                {/* Animated Rings */}
                <div
                    style={{
                        position: "absolute",
                        width: "550px",
                        height: "550px",
                        borderRadius: "50%",
                        border: `2px solid ${theme.colors.primary}40`,
                        transform: `scale(${ringScale})`,
                        opacity: ringOpacity,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        border: `1px solid ${theme.colors.accent}40`,
                        transform: `scale(${ringScale * 1.1})`,
                        opacity: ringOpacity * 0.5,
                    }}
                />

                {/* Profile Image */}
                <div
                    style={{
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: `4px solid ${theme.colors.accent}`,
                        boxShadow: `0 0 50px ${theme.colors.primary}60`,
                        transform: `scale(${photoReveal})`,
                        zIndex: 2,
                    }}
                >
                    <Img
                        src={staticFile("shuvo.png")}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>

            {/* Right side: Text */}
            <div style={{ flex: 1, paddingLeft: "50px", ...textSlide }}>
                <h2
                    style={{
                        fontSize: "80px",
                        fontWeight: 800,
                        margin: "0 0 20px 0",
                        color: theme.colors.primary,
                        lineHeight: 1.1,
                    }}
                >
                    9+ Years of<br />
                    <span style={{ color: theme.colors.text.primary }}>Experience</span>
                </h2>

                <div
                    style={{
                        width: "100px",
                        height: "6px",
                        background: theme.colors.accent,
                        marginBottom: "40px",
                    }}
                />

                <p
                    style={{
                        fontFamily: secondaryFont,
                        fontSize: "32px",
                        lineHeight: 1.6,
                        color: theme.colors.text.secondary,
                        margin: 0,
                    }}
                >
                    Building scalable SaaS platforms and delivering enterprise-grade solutions.
                    Expert in modern web application architecture and performance optimization.
                </p>
            </div>
        </AbsoluteFill>
    );
};
