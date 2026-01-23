import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate } from "remotion";
import { theme } from "../theme";
import { animations } from "../utils/animations";
import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadSecondaryFont } from "@remotion/google-fonts/Outfit";
import React from "react";

const { fontFamily: primaryFont } = loadFont();
const { fontFamily: secondaryFont } = loadSecondaryFont();

const skills = [
    { name: "JavaScript", level: 95, exp: "9 Years" },
    { name: "TypeScript", level: 85, exp: "7 Years" },
    { name: "React / Next.js", level: 95, exp: "9 Years" },
    { name: "Node.js", level: 90, exp: "9 Years" },
    { name: "HTML5 / CSS3", level: 95, exp: "9 Years" },
    { name: "SQL", level: 85, exp: "8 Years" },
    { name: "MongoDB", level: 80, exp: "6 Years" },
    { name: "Express.js", level: 85, exp: "6 Years" },
    { name: "SASS / SCSS", level: 90, exp: "8 Years" },
    { name: "PHP", level: 75, exp: "6 Years" },
    { name: "Sanity CMS", level: 90, exp: "5 Years" },
    { name: "Supabase", level: 85, exp: "3 Years" },
];

export const SkillsScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleAnim = animations.fadeInUp(frame, fps, 10);

    return (
        <AbsoluteFill
            style={{
                background: theme.colors.background,
                fontFamily: primaryFont,
                color: theme.colors.text.primary,
                padding: `60px ${theme.layout.contentPadding}px`,
            }}
        >
            <h2
                style={{
                    fontSize: "60px",
                    fontWeight: 800,
                    color: theme.colors.text.primary,
                    marginBottom: "60px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                    ...titleAnim,
                }}
            >
                Tech <span style={{ color: theme.colors.accent }}>Stack</span>
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "30px",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    width: "100%",
                }}
            >
                {skills.map((skill, index) => {
                    const delay = 30 + index * 5;
                    const anim = animations.fadeInUp(frame, fps, delay);

                    // Progress bar animation
                    const progress = interpolate(
                        frame - delay - 10,
                        [0, 45],
                        [0, skill.level],
                        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                    );

                    return (
                        <div
                            key={skill.name}
                            style={{
                                background: theme.colors.surface,
                                padding: "30px",
                                borderRadius: theme.layout.borderRadius,
                                border: `1px solid ${theme.colors.border}`,
                                ...anim,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "15px",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "28px",
                                        margin: 0,
                                        fontWeight: 600,
                                    }}
                                >
                                    {skill.name}
                                </h3>
                                <span
                                    style={{
                                        fontFamily: secondaryFont,
                                        color: theme.colors.text.accent,
                                        fontSize: "20px",
                                    }}
                                >
                                    {skill.exp}
                                </span>
                            </div>

                            {/* Progress Bar Container */}
                            <div
                                style={{
                                    width: "100%",
                                    height: "12px",
                                    background: "rgba(255,255,255,0.1)",
                                    borderRadius: "6px",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Progress Bar Fill */}
                                <div
                                    style={{
                                        width: `${progress}%`,
                                        height: "100%",
                                        background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent})`,
                                        borderRadius: "6px",
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </AbsoluteFill>
    );
};
