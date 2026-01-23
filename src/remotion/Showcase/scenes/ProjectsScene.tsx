import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate } from "remotion";
import { theme } from "../theme";
import { animations } from "../utils/animations";
import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadSecondaryFont } from "@remotion/google-fonts/Outfit";
import { spring } from "remotion";
import React from "react";

const { fontFamily: primaryFont } = loadFont();
const { fontFamily: secondaryFont } = loadSecondaryFont();

const projects = [
    {
        title: "AI Presentation Platform",
        desc: "AI agents, 300% conv. lift",
        tech: ["Next.js", "AI", "React"],
        color: "#f43f5e",
    },
    {
        title: "Sanity SEO Plugin",
        desc: "Auto schema markup & SEO",
        tech: ["Sanity", "Plugin", "Node"],
        color: "#8b5cf6",
    },
    {
        title: "Event Management",
        desc: "Comprehensive tech conf system",
        tech: ["TypeScript", "Postgres", "AWS"],
        color: "#10b981",
    },
];

export const ProjectsScene: React.FC = () => {
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
                perspective: "1000px",
            }}
        >
            <h2
                style={{
                    fontSize: "60px",
                    fontWeight: 800,
                    color: theme.colors.text.primary,
                    marginBottom: "80px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                    ...titleAnim,
                }}
            >
                Featured <span style={{ color: theme.colors.accent }}>Projects</span>
            </h2>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "40px",
                    alignItems: "center",
                    height: "500px",
                }}
            >
                {projects.map((project, index) => {
                    const delay = 30 + index * 10;

                    // Elastic Scale Animation
                    const scale = spring({
                        frame: frame - delay,
                        fps,
                        config: {
                            damping: 12, // Lower damping for more bounce
                            stiffness: 100,
                            mass: 0.5,
                        },
                    });

                    const opacity = interpolate(frame - delay, [0, 30], [0, 1], {
                        extrapolateLeft: "clamp", extrapolateRight: "clamp"
                    });

                    return (
                        <div
                            key={project.title}
                            style={{
                                width: "400px",
                                height: "500px",
                                background: `linear-gradient(145deg, ${theme.colors.surface}, ${project.color}20)`,
                                borderRadius: "20px",
                                border: `1px solid ${theme.colors.border}`,
                                padding: "40px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                transform: `scale(${scale})`,
                                opacity,
                                boxShadow: `0 20px 50px -10px ${project.color}40`,
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "15px",
                                        background: project.color,
                                        marginBottom: "30px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "24px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {project.title[0]}
                                </div>

                                <h3
                                    style={{
                                        fontSize: "32px",
                                        margin: "0 0 15px 0",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {project.title}
                                </h3>

                                <p
                                    style={{
                                        fontFamily: secondaryFont,
                                        fontSize: "20px",
                                        color: theme.colors.text.secondary,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {project.desc}
                                </p>
                            </div>

                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        style={{
                                            padding: "8px 16px",
                                            background: "rgba(255,255,255,0.1)",
                                            borderRadius: "20px",
                                            fontSize: "14px",
                                            fontFamily: secondaryFont,
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </AbsoluteFill>
    );
};
