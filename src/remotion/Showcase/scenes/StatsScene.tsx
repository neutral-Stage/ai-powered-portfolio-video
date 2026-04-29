import { useCurrentFrame } from "remotion";
import { hiringReasons } from "../content";
import {
  BodyText,
  BrandPanel,
  ChapterFrame,
  Kicker,
  SectionTitle,
  softRise,
  toneColor,
} from "../shared";
import { theme } from "../theme";

export const StatsScene = () => {
  const frame = useCurrentFrame();

  return (
    <ChapterFrame
      frame={frame}
      chapter="09"
      eyebrow="Working style"
      accent="green"
    >
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 42,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={softRise(frame, 8)}>
            <Kicker tone="green">How collaboration feels</Kicker>
          </div>
          <div style={softRise(frame, 24)}>
            <SectionTitle size={84} maxWidth={760}>
              Senior delivery without communication drag.
            </SectionTitle>
          </div>
          <div style={softRise(frame, 52)}>
            <BodyText size={28} maxWidth={720}>
              Clear scope, visible progress, focused execution, and enough
              product judgment to protect the outcome when requirements move.
            </BodyText>
          </div>

          <BrandPanel
            tone="green"
            style={{ padding: 30, ...softRise(frame, 78) }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
              }}
            >
              {["Brief", "Prototype", "Ship", "Measure"].map((step, index) => (
                <div
                  key={step}
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  <div
                    style={{
                      height: 2,
                      background:
                        index === 0
                          ? toneColor("blue")
                          : index === 1
                            ? toneColor("green")
                            : index === 2
                              ? toneColor("amber")
                              : toneColor("coral"),
                    }}
                  />
                  <div
                    style={{
                      color: theme.colors.text.primary,
                      fontSize: 22,
                      fontWeight: 800,
                    }}
                  >
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </BrandPanel>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          {hiringReasons.map((reason, index) => (
            <BrandPanel
              key={reason.title}
              tone={reason.tone}
              style={{
                padding: 30,
                minHeight: 250,
                ...softRise(frame, 72 + index * 14),
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div
                  style={{
                    fontFamily: theme.fonts.mono,
                    color: toneColor(reason.tone),
                    fontSize: 16,
                    textTransform: "uppercase",
                  }}
                >
                  0{index + 1}
                </div>
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
                  {reason.title}
                </h3>
                <BodyText size={22} maxWidth={460}>
                  {reason.body}
                </BodyText>
              </div>
            </BrandPanel>
          ))}
        </div>
      </div>
    </ChapterFrame>
  );
};
