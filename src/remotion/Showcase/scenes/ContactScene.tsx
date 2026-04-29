import { useCurrentFrame } from "remotion";
import { profile } from "../content";
import {
  BodyText,
  BrandPanel,
  ChapterFrame,
  ContactLine,
  Kicker,
  PortraitFrame,
  SectionTitle,
  softRise,
  toneColor,
} from "../shared";
import { theme } from "../theme";

const contactItems = [
  { label: "Email", value: profile.email, tone: "blue" as const },
  { label: "Portfolio", value: profile.website, tone: "green" as const },
  { label: "GitHub", value: profile.github, tone: "amber" as const },
  { label: "LinkedIn", value: profile.linkedin, tone: "steel" as const },
];

export const ContactScene = () => {
  const frame = useCurrentFrame();

  return (
    <ChapterFrame frame={frame} chapter="10" eyebrow="Contact" accent="coral">
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 430px",
          gap: 38,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={softRise(frame, 8)}>
            <Kicker tone="coral">Send the brief</Kicker>
          </div>
          <div style={softRise(frame, 24)}>
            <SectionTitle size={74} maxWidth={940}>
              Hire a senior full-stack developer who can move from idea to
              shipped product.
            </SectionTitle>
          </div>
          <div style={softRise(frame, 54)}>
            <BodyText size={23} maxWidth={870}>
              Remote full-time, contract, or freelance. Best fit: SaaS teams,
              agencies, AI products, CMS-backed growth sites, and founders who
              need reliable delivery.
            </BodyText>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: 2,
            }}
          >
            {contactItems.map((item, index) => (
              <ContactLine
                key={item.label}
                label={item.label}
                value={item.value}
                tone={item.tone}
                frame={frame}
                delay={76 + index * 12}
              />
            ))}
          </div>

          <BrandPanel
            tone="coral"
            style={{ padding: 20, ...softRise(frame, 116) }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 96px",
                gap: 20,
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: theme.fonts.mono,
                    color: toneColor("coral"),
                    fontSize: 15,
                    textTransform: "uppercase",
                  }}
                >
                  Next step
                </div>
                <div
                  style={{
                    marginTop: 10,
                    color: theme.colors.text.primary,
                    fontFamily: theme.fonts.display,
                    fontSize: 31,
                    lineHeight: 1,
                    fontWeight: 800,
                    letterSpacing: 0,
                  }}
                >
                  Email the project brief. I will map the fastest path to
                  launch.
                </div>
              </div>
              <div
                style={{
                  width: 96,
                  height: 96,
                  display: "grid",
                  placeItems: "center",
                  border: `1px solid ${toneColor("coral")}66`,
                  color: toneColor("coral"),
                  fontFamily: theme.fonts.display,
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                GO
              </div>
            </div>
          </BrandPanel>
        </div>

        <PortraitFrame
          frame={frame}
          delay={42}
          tone="coral"
          imageMinHeight={510}
          style={{ minHeight: 550 }}
        />
      </div>
    </ChapterFrame>
  );
};
