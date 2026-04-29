import { interpolate, useCurrentFrame } from "remotion";
import { introTags, profile } from "../content";
import {
  BodyText,
  BrandPanel,
  ChapterFrame,
  Kicker,
  SectionTitle,
  Tag,
  lineProgress,
  softRise,
  toneColor,
} from "../shared";
import { theme } from "../theme";

export const IntroScene = () => {
  const frame = useCurrentFrame();
  const line = lineProgress(frame, 32, 70);
  const marker = interpolate(frame, [40, 108], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <ChapterFrame
      frame={frame}
      chapter="01"
      eyebrow="Brand position"
      accent="blue"
    >
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateRows: "1fr auto",
          gap: 34,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: 46,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
            <div style={softRise(frame, -18)}>
              <Kicker tone="blue">Senior developer brand film</Kicker>
            </div>
            <div style={softRise(frame, -14)}>
              <SectionTitle size={104} maxWidth={1280}>
                Senior full-stack developer for teams that need product work
                shipped.
              </SectionTitle>
            </div>
            <div style={softRise(frame, 6)}>
              <BodyText size={31} maxWidth={1080}>
                {profile.headline} Clean execution across product UI, AI
                workflows, CMS-backed websites, backend systems, and launch
                delivery.
              </BodyText>
            </div>
            <div
              style={{
                width: `${line}%`,
                height: 3,
                background: `linear-gradient(90deg, ${toneColor("blue")}, ${toneColor(
                  "green",
                )}, transparent)`,
              }}
            />
          </div>

          <BrandPanel
            tone="blue"
            style={{
              padding: 32,
              minHeight: 500,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              ...softRise(frame, 12),
            }}
          >
            <div>
              <div
                style={{
                  color: theme.colors.text.muted,
                  fontFamily: theme.fonts.mono,
                  fontSize: 16,
                  textTransform: "uppercase",
                }}
              >
                Developer
              </div>
              <h1
                style={{
                  margin: "18px 0 0",
                  color: theme.colors.text.primary,
                  fontFamily: theme.fonts.display,
                  fontSize: 62,
                  lineHeight: 0.96,
                  fontWeight: 800,
                  letterSpacing: 0,
                }}
              >
                {profile.name}
              </h1>
              <div
                style={{
                  marginTop: 18,
                  color: toneColor("blue"),
                  fontSize: 27,
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {profile.role}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                borderTop: `1px solid ${theme.colors.line}`,
                paddingTop: 24,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: 74,
                    lineHeight: 0.85,
                    color: toneColor("amber"),
                    fontWeight: 800,
                    opacity: marker,
                  }}
                >
                  10+
                </div>
                <div
                  style={{
                    color: theme.colors.text.secondary,
                    fontSize: 20,
                    marginTop: 12,
                  }}
                >
                  years shipping product
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: 74,
                    lineHeight: 0.85,
                    color: toneColor("green"),
                    fontWeight: 800,
                    opacity: marker,
                  }}
                >
                  95+
                </div>
                <div
                  style={{
                    color: theme.colors.text.secondary,
                    fontSize: 20,
                    marginTop: 12,
                  }}
                >
                  Lighthouse targets
                </div>
              </div>
            </div>
          </BrandPanel>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 22,
            ...softRise(frame, 46),
          }}
        >
          <div
            style={{
              fontFamily: theme.fonts.mono,
              color: theme.colors.text.muted,
              fontSize: 16,
              textTransform: "uppercase",
            }}
          >
            Core stack
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "flex-end",
            }}
          >
            {introTags.map((tag, index) => (
              <Tag
                key={tag}
                label={tag}
                tone={
                  index % 4 === 0
                    ? "blue"
                    : index % 4 === 1
                      ? "green"
                      : index % 4 === 2
                        ? "amber"
                        : "coral"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </ChapterFrame>
  );
};
