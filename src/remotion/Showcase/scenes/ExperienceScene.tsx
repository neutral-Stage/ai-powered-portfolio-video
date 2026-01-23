import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate, Easing } from "remotion";
import { theme } from "../theme";
import { animations } from "../utils/animations";
import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadSecondaryFont } from "@remotion/google-fonts/Outfit";
import React from "react";

const { fontFamily: primaryFont } = loadFont();
const { fontFamily: secondaryFont } = loadSecondaryFont();

const jobs = [
    {
        company: "Operation Nation",
        role: "Full Stack Developer",
        period: "Recent",
        desc: "Built AI-powered presentation platform & 300% conversion lift",
    },
    {
        company: "BuiltForYou Digital",
        role: "Senior Full Stack Developer",
        period: "Past",
        desc: "Architected scalable streaming products & secure auth systems",
    },
    {
        company: "Matthew Luke Studio",
        role: "Full Stack Developer",
        period: "Past",
        desc: "Delivered 12+ custom web apps & headless CMS integrations",
    },
    {
        company: "123workforce",
        role: "Frontend Web Developer",
        period: "Past",
        desc: "Built responsive workforce management frontends & component libraries",
    },
    {
        company: "Boi Kotha",
        role: "Full Stack Developer",
        period: "Past",
        desc: "Engineered book publishing platform with secure payments",
    },
    {
        company: "Code Builder IT",
        role: "Full Stack Developer",
        period: "Past",
        desc: "Created custom CMS & ecommerce platforms for local clients",
    },
];

export const ExperienceScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleAnim = animations.fadeInUp(frame, fps, 10);

    // Timeline Line Animation - extend to cover all items
    const lineHeight = interpolate(frame, [20, 100], [0, 1800], {
        extrapolateLeft: "clamp", extrapolateRight: "clamp"
    });

    // Scroll Animation
    // Scroll up as new items appear
    const scrollY = interpolate(frame, [60, 300], [0, -900], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.inOut(Easing.quad),
    });

    return (
        <AbsoluteFill
            style={{
                background: theme.colors.background,
                fontFamily: primaryFont,
                color: theme.colors.text.primary,
                padding: `60px ${theme.layout.contentPadding}px`,
                overflow: "hidden", // Hide scroll overflow
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
                    zIndex: 10,
                    ...titleAnim,
                }}
            >
                <span style={{ color: theme.colors.primary }}>Career</span> Timeline
            </h2>

            {/* Fixed Timeline Line - OUTSIDE the scroll container */}
            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "180px", // Align with first item
                    bottom: 0,
                    width: "4px",
                    background: theme.colors.border,
                    transform: "translateX(-50%)",
                    zIndex: 10, // Ensure on top of scrolling content
                    height: "80%", // Fixed height
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: lineHeight,
                        background: theme.colors.accent,
                        backgroundImage: `linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.accent})`,
                    }}
                />
            </div>

            <div style={{
                position: "relative",
                maxWidth: "1000px",
                margin: "0 auto",
                transform: `translateY(${scrollY}px)`,
                height: "100%",
            }}>

                {/* Timeline Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "60px", paddingBottom: "100px", }}>
                    {jobs.map((job, index) => {
                        const delay = 30 + index * 25; // Slower stagger
                        const isLeft = index % 2 === 0;

                        const cardAnim = animations.slideIn(
                            frame, fps, isLeft ? "left" : "right", delay
                        );

                        // Node scale animation
                        const nodeScale = interpolate(frame - delay, [0, 15], [0, 1], {
                            extrapolateLeft: "clamp", extrapolateRight: "clamp"
                        });

                        return (
                            <div
                                key={job.company}
                                style={{
                                    display: "flex",
                                    justifyContent: isLeft ? "flex-end" : "flex-start",
                                    position: "relative",
                                    width: "100%",
                                }}
                            >
                                {/* Center Node - Fixed relative to the item but high z-index */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "30px",
                                        width: "20px",
                                        height: "20px",
                                        background: theme.colors.background,
                                        border: `4px solid ${theme.colors.accent}`,
                                        borderRadius: "50%",
                                        transform: `translateX(-50%) scale(${nodeScale})`,
                                        zIndex: 20, // Higher than line
                                        boxShadow: `0 0 15px ${theme.colors.accent}80`,
                                    }}
                                />

                                {/* Content Card */}
                                <div
                                    style={{
                                        width: "45%",
                                        background: theme.colors.surface,
                                        padding: "25px",
                                        borderRadius: theme.layout.borderRadius,
                                        border: `1px solid ${theme.colors.border}`,
                                        ...cardAnim,
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "24px",
                                            margin: "0 0 5px 0",
                                            color: theme.colors.primary,
                                        }}
                                    >
                                        {job.company}
                                    </h3>
                                    <div
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            marginBottom: "10px",
                                            color: theme.colors.text.primary,
                                        }}
                                    >
                                        {job.role}
                                    </div>
                                    <p
                                        style={{
                                            fontFamily: secondaryFont,
                                            fontSize: "16px",
                                            margin: 0,
                                            color: theme.colors.text.secondary,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {job.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AbsoluteFill>
    );
};
