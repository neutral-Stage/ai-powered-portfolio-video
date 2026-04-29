import { useCurrentFrame } from "remotion";
import { introTags, profile } from "../content";
import {
  BodyText,
  BrandPanel,
  ChapterFrame,
  Kicker,
  PortraitFrame,
  SectionTitle,
  Tag,
  softRise,
  toneColor,
} from "../shared";
import { theme } from "../theme";

export const IdentityScene = () => {
  const frame = useCurrentFrame();

  return (
    <ChapterFrame frame={frame} chapter="02" eyebrow="Identity" accent="green">
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 560px",
          gap: 48,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 30,
          }}
        >
          <div style={softRise(frame, 8)}>
            <Kicker tone="green">Remote product delivery</Kicker>
          </div>
          <div style={softRise(frame, 22)}>
            <SectionTitle size={92} maxWidth={1030}>
              Full-stack execution with senior product judgment.
            </SectionTitle>
          </div>
          <div style={softRise(frame, 50)}>
            <BodyText size={29} maxWidth={980}>
              {profile.summary} Built for teams that value clear async
              communication, pragmatic tradeoffs, and production-ready handoff.
            </BodyText>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
              marginTop: 8,
            }}
          >
            <BrandPanel
              tone="green"
              style={{ padding: 26, ...softRise(frame, 72) }}
            >
              <div
                style={{
                  fontFamily: theme.fonts.mono,
                  color: toneColor("green"),
                  fontSize: 15,
                  textTransform: "uppercase",
                }}
              >
                Availability
              </div>
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {profile.availability.map((item) => (
                  <Tag key={item} label={item} tone="green" />
                ))}
              </div>
            </BrandPanel>

            <BrandPanel
              tone="steel"
              style={{ padding: 26, ...softRise(frame, 84) }}
            >
              <div
                style={{
                  fontFamily: theme.fonts.mono,
                  color: toneColor("steel"),
                  fontSize: 15,
                  textTransform: "uppercase",
                }}
              >
                Location
              </div>
              <div
                style={{
                  marginTop: 16,
                  color: theme.colors.text.primary,
                  fontSize: 26,
                  fontWeight: 700,
                  lineHeight: 1.25,
                }}
              >
                {profile.location}
              </div>
            </BrandPanel>
          </div>

          <BrandPanel
            tone="blue"
            style={{ padding: 24, ...softRise(frame, 102) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  fontFamily: theme.fonts.mono,
                  color: toneColor("blue"),
                  fontSize: 15,
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                Primary stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                {introTags.map((tag, index) => (
                  <Tag
                    key={tag}
                    label={tag}
                    tone={index % 2 === 0 ? "blue" : "steel"}
                  />
                ))}
              </div>
            </div>
          </BrandPanel>
        </div>

        <PortraitFrame frame={frame} delay={44} tone="green" />
      </div>
    </ChapterFrame>
  );
};
