import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { recentRoles } from "../content";
import { BulletRow, Eyebrow, GlassCard, SectionHeading, ShowcaseShell } from "../shared";
import { theme } from "../theme";

export const ExperienceScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <ShowcaseShell frame={frame}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Eyebrow label="Career snapshot" />
        <SectionHeading
          title="Recent"
          accent="roles"
          body="The strongest hiring signal is in the current stack: AI product work, conversion-focused UX, performance tuning, and modern full-stack delivery."
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 24,
        }}
      >
        {recentRoles.map((role, index) => {
          const cardIn = interpolate(frame, [12 + index * 8, 28 + index * 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={role.company}
              style={{
                opacity: cardIn,
                transform: `translateY(${interpolate(cardIn, [0, 1], [38, 0])}px)`,
              }}
            >
              <GlassCard tone={role.tone} style={{ minHeight: 380 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: 15,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: theme.colors.tones[role.tone],
                    }}
                  >
                    {role.meta}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div
                      style={{
                        fontFamily: theme.fonts.heading,
                        fontSize: 42,
                        lineHeight: 1,
                        margin: 0,
                      }}
                    >
                      {role.role}
                    </div>
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: theme.colors.tones[role.tone],
                      }}
                    >
                      {role.company}
                    </div>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 22,
                      lineHeight: 1.45,
                      color: theme.colors.text.secondary,
                    }}
                  >
                    {role.summary}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {role.wins.map((win) => (
                      <BulletRow key={win} text={win} tone={role.tone} />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          );
        })}
      </div>

      <GlassCard tone="gold" style={{ padding: 22 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 32,
              lineHeight: 1,
            }}
          >
            Earlier experience
          </div>
          <div
            style={{
              color: theme.colors.text.secondary,
              fontSize: 22,
              lineHeight: 1.4,
              textAlign: "right",
            }}
          >
            123workforce (2019–2020), Boi Kotha (2018–2019), and Code Builder IT (2016–2018) built the foundation across ecommerce, frontend systems, and full-stack delivery.
          </div>
        </div>
      </GlassCard>
    </ShowcaseShell>
  );
};
