import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate } from "remotion";
import { theme } from "../theme";
import { animations } from "../utils/animations";
import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadSecondaryFont } from "@remotion/google-fonts/Outfit";
import React from "react";

const { fontFamily: primaryFont } = loadFont();
const { fontFamily: secondaryFont } = loadSecondaryFont();

export const IntroScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const nameAnim = animations.fadeInUp(frame, fps, 10);
    const titleAnim = animations.fadeInUp(frame, fps, 25);
    const taglineAnim = animations.fadeIn(frame, fps, 45);

    // Fade out everything at the end (last 20 frames)
    const fadeOut = interpolate(frame, [100, 120], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Background subtle movement
    const bgScale = interpolate(frame, [0, 120], [1, 1.1]);
    const bgRotate = interpolate(frame, [0, 120], [0, 2]);

    return (
        <AbsoluteFill
            style={{
                background: theme.colors.backgroundGradient,
                fontFamily: primaryFont,
                color: theme.colors.text.primary,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* Abstract Background Shapes */}
            <AbsoluteFill>
                <div
                    style={{
                        position: "absolute",
                        top: "-20%",
                        left: "-10%",
                        width: "60%",
                        height: "80%",
                        background: `radial-gradient(circle, ${theme.colors.primary}20 0%, transparent 70%)`,
                        transform: `scale(${bgScale}) rotate(${bgRotate}deg)`,
                        filter: "blur(60px)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-20%",
                        right: "-10%",
                        width: "60%",
                        height: "80%",
                        background: `radial-gradient(circle, ${theme.colors.accent}20 0%, transparent 70%)`,
                        transform: `scale(${bgScale}) rotate(-${bgRotate}deg)`,
                        filter: "blur(60px)",
                    }}
                />
            </AbsoluteFill>

            {/* Content */}
            <div style={{ textAlign: "center", zIndex: 1, padding: "0 20px", opacity: fadeOut }}>
                <h1
                    style={{
                        fontSize: "120px",
                        fontWeight: 900,
                        margin: "0 0 20px 0",
                        lineHeight: 1,
                        letterSpacing: "-2px",
                        background: `linear-gradient(to right, ${theme.colors.text.primary}, ${theme.colors.text.secondary})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        ...nameAnim,
                    }}
                >
                    SHUVO ANIRBAN ROY
                </h1>

                <h2
                    style={{
                        fontFamily: secondaryFont,
                        fontSize: "48px",
                        fontWeight: 600,
                        color: theme.colors.accent,
                        margin: "0 0 40px 0",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        ...titleAnim,
                    }}
                >
                    Full Stack Web Developer
                </h2>

                <div
                    style={{
                        fontFamily: secondaryFont,
                        fontSize: "24px",
                        color: theme.colors.text.secondary,
                        maxWidth: "800px",
                        margin: "0 auto",
                        opacity: taglineAnim,
                    }}
                >
                    Engineering Tomorrow's Digital Frontier, One Pixel at a Time
                </div>
            </div>
        </AbsoluteFill>
    );
};
