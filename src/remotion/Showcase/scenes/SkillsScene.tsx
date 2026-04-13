import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { focusAreas } from "../content";
import { Eyebrow, GlassCard, SectionHeading, ShowcaseShell, Tag } from "../shared";
import { theme } from "../theme";

export const SkillsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <ShowcaseShell frame={frame}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Eyebrow label="Core strengths" />
        <SectionHeading
          title="What I"
          accent="ship well"
          body="Teams bring me in when they need product UI, CMS delivery, AI workflows, or backend work shipped cleanly and without hand-holding."
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 24,
        }}
      >
        {focusAreas.map((area, index) => {
          const cardIn = interpolate(frame, [12 + index * 6, 28 + index * 6], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={area.title}
              style={{
                opacity: cardIn,
                transform: `translateY(${interpolate(cardIn, [0, 1], [34, 0])}px)`,
              }}
            >
              <GlassCard tone={area.tone} style={{ minHeight: 280 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: 16,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: theme.colors.tones[area.tone],
                    }}
                  >
                    Capability {String(index + 1).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontSize: 40,
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {area.title}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      color: theme.colors.text.secondary,
                      fontSize: 23,
                      lineHeight: 1.45,
                    }}
                  >
                    {area.blurb}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    {area.tools.map((tool) => (
                      <Tag key={tool} label={tool} tone={area.tone} />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </ShowcaseShell>
  );
};
