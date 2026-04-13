import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { profile, proofPoints } from "../content";
import { Eyebrow, MetricCard, SectionHeading, ShowcaseShell } from "../shared";

export const AboutScene: React.FC = () => {
  const frame = useCurrentFrame();
  const intro = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <ShowcaseShell frame={frame}>
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <Eyebrow label="Selected outcomes" />
        <SectionHeading
          title="Measured"
          accent="wins"
          body={`${profile.summary} From conversion gains to performance work to auth-heavy product systems, the results are already proven in production.`}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 26,
          opacity: intro,
        }}
      >
        {proofPoints.map((point, index) => {
          const cardIn = interpolate(frame, [14 + index * 6, 32 + index * 6], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={point.label}
              style={{
                opacity: cardIn,
                transform: `translateY(${interpolate(cardIn, [0, 1], [36, 0])}px)`,
              }}
            >
              <MetricCard
                value={point.value}
                label={point.label}
                detail={point.detail}
                tone={point.tone}
              />
            </div>
          );
        })}
      </div>
    </ShowcaseShell>
  );
};
