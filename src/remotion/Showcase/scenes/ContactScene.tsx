import React from "react";
import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { profile } from "../content";
import { Eyebrow, GlassCard, ShowcaseShell, Tag } from "../shared";
import { theme } from "../theme";

export const ContactScene: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 18) * 0.02;

  return (
    <ShowcaseShell frame={frame} justifyContent="center">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.78fr 1.22fr",
          gap: 30,
          alignItems: "stretch",
        }}
      >
        <GlassCard tone="orange" style={{ padding: 30 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, height: "100%" }}>
            <div
              style={{
                borderRadius: 30,
                overflow: "hidden",
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <Img
                src={staticFile("shuvo.png")}
                style={{
                  width: "100%",
                  height: 420,
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 42,
                  lineHeight: 1,
                }}
              >
                {profile.name}
              </div>
              <div
                style={{
                  color: theme.colors.tones.orange,
                  fontFamily: theme.fonts.mono,
                  fontSize: 17,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {profile.role}
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {profile.availability.map((item, index) => (
                <Tag
                  key={item}
                  label={item}
                  tone={index === 0 ? "sky" : index === 1 ? "orange" : "mint"}
                />
              ))}
            </div>
          </div>
        </GlassCard>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Eyebrow label="Let's work together" />

          <div
            style={{
              opacity: interpolate(frame, [0, 20], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: 80,
                lineHeight: 0.94,
                letterSpacing: "-0.06em",
                margin: 0,
              }}
            >
              Send the brief.
              <br />
              I'll reply with next steps.
            </h2>
            <p
              style={{
                margin: "18px 0 0 0",
                color: theme.colors.text.secondary,
                fontSize: 28,
                lineHeight: 1.42,
                maxWidth: 920,
              }}
            >
              Strongest fit: React, Next.js, Node.js, Sanity, AI-assisted product work, and performance-focused delivery. Remote full-time, contract, or freelance.
            </p>
          </div>

          <GlassCard tone="sky" style={{ padding: 28, transform: `scale(${pulse})` }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 16,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: theme.colors.tones.sky,
                }}
              >
                Primary contact
              </div>
              <div
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 62,
                  lineHeight: 1,
                }}
              >
                {profile.email}
              </div>
              <div style={{ fontSize: 26, color: theme.colors.text.secondary }}>
                Portfolio: {profile.website}
              </div>
            </div>
          </GlassCard>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            {[
              { label: "Location", value: profile.location, tone: "orange" as const },
              { label: "GitHub", value: profile.github, tone: "mint" as const },
              { label: "LinkedIn", value: profile.linkedin, tone: "gold" as const },
              { label: "Education", value: profile.education, tone: "sky" as const },
            ].map((item) => (
              <GlassCard key={item.label} tone={item.tone} style={{ padding: 22 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: 15,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: theme.colors.tones[item.tone],
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: item.label === "Education" ? 18 : 24,
                      lineHeight: 1.35,
                      color: theme.colors.text.primary,
                      fontWeight: 700,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </ShowcaseShell>
  );
};
