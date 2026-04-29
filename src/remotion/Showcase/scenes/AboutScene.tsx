import { useCurrentFrame } from "remotion";
import { proofPoints } from "../content";
import {
  BodyText,
  ChapterFrame,
  Kicker,
  SectionTitle,
  StatModule,
  softRise,
} from "../shared";

export const AboutScene = () => {
  const frame = useCurrentFrame();

  return (
    <ChapterFrame
      frame={frame}
      chapter="03"
      eyebrow="Proof signals"
      accent="amber"
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 42,
        }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 560px", gap: 48 }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={softRise(frame, 8)}>
              <Kicker tone="amber">Client-readable evidence</Kicker>
            </div>
            <div style={softRise(frame, 24)}>
              <SectionTitle size={86} maxWidth={980}>
                Results that make the hiring decision easier.
              </SectionTitle>
            </div>
          </div>
          <div style={{ alignSelf: "end", ...softRise(frame, 50) }}>
            <BodyText size={26} maxWidth={560}>
              A senior developer portfolio should show measurable outcomes, not
              just a technology list. These are the proof points that matter in
              a first review.
            </BodyText>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            flex: 1,
            alignItems: "center",
          }}
        >
          {proofPoints.map((point, index) => (
            <StatModule
              key={point.label}
              value={point.value}
              label={point.label}
              detail={point.detail}
              tone={point.tone}
              frame={frame}
              delay={70 + index * 16}
            />
          ))}
        </div>
      </div>
    </ChapterFrame>
  );
};
