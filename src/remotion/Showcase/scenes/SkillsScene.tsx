import { useCurrentFrame } from "remotion";
import { focusAreas } from "../content";
import {
  BodyText,
  BrandPanel,
  ChapterFrame,
  Kicker,
  SectionTitle,
  Tag,
  softRise,
  toneColor,
} from "../shared";
import { theme } from "../theme";

export const SkillsScene = () => {
  const frame = useCurrentFrame();

  return (
    <ChapterFrame
      frame={frame}
      chapter="04"
      eyebrow="Capabilities"
      accent="blue"
    >
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateRows: "auto 1fr",
          gap: 36,
        }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 620px", gap: 48 }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={softRise(frame, 8)}>
              <Kicker tone="blue">What gets shipped</Kicker>
            </div>
            <div style={softRise(frame, 24)}>
              <SectionTitle size={82} maxWidth={1020}>
                Product-grade range from interface to infrastructure.
              </SectionTitle>
            </div>
          </div>
          <div style={{ alignSelf: "end", ...softRise(frame, 54) }}>
            <BodyText size={26} maxWidth={610}>
              The value is not one isolated skill. It is connecting product
              intent, design clarity, backend constraints, and launch pressure
              into one delivery loop.
            </BodyText>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {focusAreas.map((area, index) => (
            <BrandPanel
              key={area.title}
              tone={area.tone}
              style={{
                padding: 30,
                minHeight: 260,
                ...softRise(frame, 74 + index * 14),
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr",
                  gap: 22,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    display: "grid",
                    placeItems: "center",
                    border: `1px solid ${toneColor(area.tone)}66`,
                    color: toneColor(area.tone),
                    fontFamily: theme.fonts.mono,
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  0{index + 1}
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  <h3
                    style={{
                      margin: 0,
                      color: theme.colors.text.primary,
                      fontFamily: theme.fonts.display,
                      fontSize: 40,
                      lineHeight: 1,
                      fontWeight: 800,
                      letterSpacing: 0,
                    }}
                  >
                    {area.title}
                  </h3>
                  <BodyText size={20} maxWidth={650}>
                    {area.blurb}
                  </BodyText>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {area.tools.map((tool) => (
                      <Tag key={tool} label={tool} tone={area.tone} />
                    ))}
                  </div>
                </div>
              </div>
            </BrandPanel>
          ))}
        </div>
      </div>
    </ChapterFrame>
  );
};
