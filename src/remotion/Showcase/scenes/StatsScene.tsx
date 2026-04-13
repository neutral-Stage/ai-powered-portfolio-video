import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { hiringReasons, profile } from "../content";
import { Eyebrow, GlassCard, SectionHeading, ShowcaseShell, Tag } from "../shared";
import { theme } from "../theme";

export const StatsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <ShowcaseShell frame={frame} justifyContent="center">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 28,
          alignItems: "stretch",
        }}
      >
        <GlassCard tone="sky" style={{ padding: 36 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Eyebrow label="Working style" />
            <SectionHeading
              title="Easy to"
              accent="plug in"
              body="Fast reply. Straightforward communication. Comfortable with remote collaboration and async workflows."
            />
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 20,
          }}
        >
          {hiringReasons.map((reason, index) => {
            const cardIn = interpolate(frame, [18 + index * 5, 34 + index * 5], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={reason.title}
                style={{
                  opacity: cardIn,
                  transform: `translateY(${interpolate(cardIn, [0, 1], [26, 0])}px)`,
                }}
              >
                <GlassCard tone={reason.tone} style={{ minHeight: 224 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div
                      style={{
                        fontFamily: theme.fonts.heading,
                        fontSize: 34,
                        lineHeight: 1.02,
                      }}
                    >
                      {reason.title}
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 22,
                        lineHeight: 1.45,
                        color: theme.colors.text.secondary,
                      }}
                    >
                      {reason.body}
                    </p>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </ShowcaseShell>
  );
};
