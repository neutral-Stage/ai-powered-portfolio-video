import { AbsoluteFill, useVideoConfig, useCurrentFrame, Img, staticFile } from "remotion";
import { theme } from "../theme";
import { animations } from "../utils/animations";
import { loadFont } from "@remotion/google-fonts/Inter";
import { spring } from "remotion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from "react";

const { fontFamily: primaryFont } = loadFont();

export const ContactScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const photoScale = animations.scaleIn(frame, fps, 10);
    const textAnim = animations.fadeInUp(frame, fps, 30);
    const linkAnim = animations.fadeInUp(frame, fps, 50);

    // Button Pulse
    const pulse = spring({
        frame: frame - 60,
        fps,
        config: { damping: 10, mass: 2 },
    });

    return (
        <AbsoluteFill
            style={{
                background: theme.colors.backgroundGradient,
                fontFamily: primaryFont,
                color: theme.colors.text.primary,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Profile Photo */}
            <div
                style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: `6px solid ${theme.colors.primary}`,
                    boxShadow: `0 0 80px ${theme.colors.primary}60`,
                    marginBottom: "60px",
                    transform: `scale(${photoScale})`,
                }}
            >
                <Img
                    src={staticFile("shuvo.png")}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </div>

            <h2
                style={{
                    fontSize: "80px",
                    fontWeight: 900,
                    margin: "0 0 20px 0",
                    textAlign: "center",
                    lineHeight: 1.1,
                    ...textAnim,
                }}
            >
                Let's Build Something<br />
                <span style={{ color: theme.colors.accent }}>Amazing</span> Together
            </h2>

            <div style={{ ...linkAnim, marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
                <div
                    style={{
                        background: theme.colors.primary,
                        padding: "20px 50px",
                        borderRadius: "50px",
                        fontSize: "32px",
                        fontWeight: 600,
                        color: "white",
                        boxShadow: `0 10px 30px ${theme.colors.primary}60`,
                        transform: `scale(${1 + pulse * 0.05})`,
                    }}
                >
                    shuvoanirbanroy.com
                </div>

                <div style={{ display: "flex", gap: "30px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", color: theme.colors.text.secondary, fontSize: "24px" }}>
                        <FaGithub /> <span>neutral-Stage</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", color: theme.colors.text.secondary, fontSize: "24px" }}>
                        <FaLinkedin /> <span>linkedin.com/in/shuvo-anirban-roy</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", color: theme.colors.text.secondary, fontSize: "24px" }}>
                        <FaTwitter /> <span>@anirban_shuvo</span>
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};
