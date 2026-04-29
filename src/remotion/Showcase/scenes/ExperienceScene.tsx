import { useCurrentFrame } from "remotion";
import { recentRoles } from "../content";
import {
  BodyText,
  BrandPanel,
  ChapterFrame,
  Kicker,
  SectionTitle,
  TimelineRole,
  softRise,
  toneColor,
} from "../shared";
import { theme } from "../theme";

const [presentia, operationNation, builtForYou, matthewLuke] = recentRoles;

export const ExperienceCurrentScene = () => {
  const frame = useCurrentFrame();

  return (
    <ChapterFrame
      frame={frame}
      chapter="05"
      eyebrow="Recent roles"
      accent="green"
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 36,
        }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 560px", gap: 48 }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={softRise(frame, 8)}>
              <Kicker tone="green">Current product context</Kicker>
            </div>
            <div style={softRise(frame, 24)}>
              <SectionTitle size={82} maxWidth={1060}>
                Recent work at the intersection of AI products, SaaS, and growth
                sites.
              </SectionTitle>
            </div>
          </div>
          <div style={{ alignSelf: "end", ...softRise(frame, 54) }}>
            <BodyText size={25} maxWidth={560}>
              These roles show senior-level ownership across product thinking,
              implementation, integration, and delivery cadence.
            </BodyText>
          </div>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}
        >
          <TimelineRole {...presentia} index="01" frame={frame} delay={76} />
          <TimelineRole
            {...operationNation}
            index="02"
            frame={frame}
            delay={94}
          />
        </div>
      </div>
    </ChapterFrame>
  );
};

export const ExperienceDepthScene = () => {
  const frame = useCurrentFrame();

  return (
    <ChapterFrame
      frame={frame}
      chapter="06"
      eyebrow="Delivery depth"
      accent="coral"
    >
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateRows: "auto auto auto",
          gap: 20,
        }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 620px", gap: 48 }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={softRise(frame, 8)}>
              <Kicker tone="coral">Production foundation</Kicker>
            </div>
            <div style={softRise(frame, 24)}>
              <SectionTitle size={70} maxWidth={1060}>
                Agency, ecommerce, client builds, and performance-critical
                products.
              </SectionTitle>
            </div>
          </div>
          <div style={{ alignSelf: "end", ...softRise(frame, 52) }}>
            <BodyText size={23} maxWidth={610}>
              The senior signal: shipping across messy client constraints,
              modern stacks, legacy expectations, and real deployment timelines.
            </BodyText>
          </div>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}
        >
          <TimelineRole {...builtForYou} index="03" frame={frame} delay={72} />
          <TimelineRole {...matthewLuke} index="04" frame={frame} delay={90} />
        </div>

        <BrandPanel
          tone="steel"
          style={{ padding: 18, ...softRise(frame, 118) }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "230px 1fr 180px",
              alignItems: "center",
              gap: 28,
            }}
          >
            <div
              style={{
                color: toneColor("steel"),
                fontFamily: theme.fonts.mono,
                fontSize: 15,
                textTransform: "uppercase",
              }}
            >
              Earlier foundation
            </div>
            <div
              style={{
                color: theme.colors.text.secondary,
                fontSize: 18,
                lineHeight: 1.3,
              }}
            >
              WordPress, Shopify, React, Node.js, Express, MongoDB, CMS
              migrations, ecommerce storefronts, and long-running client
              delivery.
            </div>
            <div
              style={{
                color: theme.colors.text.primary,
                fontFamily: theme.fonts.display,
                fontSize: 34,
                lineHeight: 1,
                fontWeight: 800,
                textAlign: "right",
              }}
            >
              10+ years
            </div>
          </div>
        </BrandPanel>
      </div>
    </ChapterFrame>
  );
};
