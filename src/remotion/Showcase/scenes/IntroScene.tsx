import React from "react";
import { Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { introTags, profile } from "../content";
import { Eyebrow, GlassCard, ShowcaseShell, Tag } from "../shared";
import { theme } from "../theme";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Pre-reveal phase (frames 0–75) ---
  const line1In = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const line2In = interpolate(frame, [8, 23], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const hookOut = interpolate(frame, [60, 75], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Main layout phase (frames 75–180) ---
  const reveal = interpolate(frame, [75, 93], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exit = interpolate(frame, [160, 180], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const leftShift = interpolate(reveal, [0, 1], [48, 0]);
  const photoFloat = Math.sin(frame / (fps * 0.55)) * 18;

  return (
    <ShowcaseShell frame={frame} justifyContent="center">
      {/* Pre-reveal hook overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          opacity: hookOut,
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 52,
            lineHeight: 1.2,
            letterSpacing: "-0.04em",
            color: theme.colors.text.primary,
            textAlign: "center",
            opacity: line1In,
            transform: `translateY(${interpolate(line1In, [0, 1], [20, 0])}px)`,
          }}
        >
          What you're watching was built in React + Remotion
        </div>
        <div
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 52,
            lineHeight: 1.2,
            letterSpacing: "-0.04em",
            color: theme.colors.tones.sky,
            textAlign: "center",
            opacity: line2In,
            transform: `translateY(${interpolate(line2In, [0, 1], [20, 0])}px)`,
          }}
        >
          by the person you're about to hire.
        </div>
      </div>

      {/* Main layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 44,
          alignItems: "center",
          opacity: exit * reveal,
          transform: `translateY(${interpolate(reveal, [0, 1], [30, 0])}px)`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
            transform: `translateX(${leftShift}px)`,
            opacity: reveal,
          }}
        >
          <Eyebrow label={profile.availability.join("  •  ")} />

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <h1
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: 110,
                lineHeight: 0.92,
                letterSpacing: "-0.065em",
                margin: 0,
              }}
            >
              {profile.name}
            </h1>
            <div
              style={{
                fontFamily: theme.fonts.mono,
                color: theme.colors.tones.sky,
                fontSize: 28,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {profile.role}
            </div>
          </div>

          <p
            style={{
              margin: 0,
              maxWidth: 880,
              color: theme.colors.text.secondary,
              fontSize: 31,
              lineHeight: 1.42,
            }}
          >
            {profile.headline}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            {introTags.map((tag, index) => {
              const tagIn = interpolate(frame, [93 + index * 4, 107 + index * 4], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              return (
                <div
                  key={tag}
                  style={{
                    opacity: tagIn,
                    transform: `translateY(${interpolate(tagIn, [0, 1], [20, 0])}px)`,
                  }}
                >
                  <Tag
                    label={tag}
                    tone={index % 3 === 0 ? "sky" : index % 3 === 1 ? "orange" : "mint"}
                  />
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
              maxWidth: 760,
            }}
          >
            <GlassCard tone="orange" style={{ padding: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div
                  style={{
                    color: theme.colors.tones.orange,
                    fontFamily: theme.fonts.mono,
                    fontSize: 17,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Delivery Focus
                </div>
                <div
                  style={{
                    fontSize: 27,
                    lineHeight: 1.3,
                    color: theme.colors.text.primary,
                    fontWeight: 800,
                  }}
                >
                  SaaS features, CMS builds, AI-assisted tooling, and performance cleanup.
                </div>
              </div>
            </GlassCard>

            <GlassCard tone="sky" style={{ padding: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div
                  style={{
                    color: theme.colors.tones.sky,
                    fontFamily: theme.fonts.mono,
                    fontSize: 17,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Working Style
                </div>
                <div
                  style={{
                    fontSize: 27,
                    lineHeight: 1.3,
                    color: theme.colors.text.primary,
                    fontWeight: 800,
                  }}
                >
                  Remote-ready, fast to respond, and comfortable shipping async with distributed teams.
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 760,
            opacity: reveal,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 640,
              height: 640,
              borderRadius: 999,
              border: `1px solid ${theme.colors.tones.sky}22`,
              transform: `translateY(${photoFloat * 0.6}px)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 560,
              height: 560,
              borderRadius: 999,
              border: `1px solid ${theme.colors.tones.orange}22`,
              transform: `translateY(${photoFloat}px)`,
            }}
          />
          <GlassCard
            tone="sky"
            style={{
              width: 560,
              padding: 24,
              borderRadius: 40,
              transform: `translateY(${photoFloat}px)`,
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: 30,
                overflow: "hidden",
                background: "linear-gradient(180deg, rgba(15,23,42,0.5), rgba(15,23,42,0.9))",
              }}
            >
              <Img
                src={staticFile("shuvo.png")}
                style={{
                  width: "100%",
                  height: 620,
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, gap: 18 }}>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 16,
                    letterSpacing: "0.06em",
                    color: theme.colors.tones.sky,
                    textTransform: "uppercase",
                  }}
                >
                  Base
                </div>
                <div style={{ fontSize: 24, color: theme.colors.text.primary, fontWeight: 700 }}>
                  {profile.location}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 16,
                    letterSpacing: "0.06em",
                    color: theme.colors.tones.orange,
                    textTransform: "uppercase",
                  }}
                >
                  Contact
                </div>
                <div style={{ fontSize: 24, color: theme.colors.text.primary, fontWeight: 700 }}>
                  {profile.website}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </ShowcaseShell>
  );
};
