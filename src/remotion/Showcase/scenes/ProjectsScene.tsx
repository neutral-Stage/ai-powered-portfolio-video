import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { selectedProjects } from "../content";
import { Eyebrow, GlassCard, SectionHeading, ShowcaseShell, Tag } from "../shared";
import { theme } from "../theme";

export const ProjectsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <ShowcaseShell frame={frame}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Eyebrow label="Selected builds" />
        <SectionHeading
          title="Public"
          accent="proof"
          body="These builds show product thinking, code range, and execution quality across video tooling, AI workflows, dashboards, and CMS SEO."
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 24,
        }}
      >
        {selectedProjects.map((project, index) => {
          const cardIn = interpolate(frame, [14 + index * 5, 34 + index * 5], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          const isMetaVideo = project.title === "AI-Powered Portfolio Video";

          return (
            <div
              key={project.title}
              style={{
                opacity: cardIn,
                transform: `translateY(${interpolate(cardIn, [0, 1], [42, 0])}px)`,
              }}
            >
              <GlassCard tone={project.tone} style={{ minHeight: 260 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: theme.fonts.mono,
                        fontSize: 15,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: theme.colors.tones[project.tone],
                      }}
                    >
                      {project.category}
                    </div>
                    {isMetaVideo ? (
                      <Tag label="★ This video" tone="sky" />
                    ) : (
                      <div
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: 999,
                          background: theme.colors.tones[project.tone],
                        }}
                      />
                    )}
                  </div>

                  <div
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontSize: 38,
                      lineHeight: 1,
                    }}
                  >
                    {project.title}
                  </div>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 20,
                      lineHeight: 1.45,
                      color: theme.colors.text.secondary,
                    }}
                  >
                    {project.summary}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {project.stack.map((tool) => (
                      <Tag key={tool} label={tool} tone={project.tone} />
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
