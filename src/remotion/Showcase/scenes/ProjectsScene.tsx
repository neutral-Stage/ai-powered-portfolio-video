import { useCurrentFrame } from "remotion";
import { selectedProjects } from "../content";
import {
  BodyText,
  ChapterFrame,
  Kicker,
  ProjectTile,
  SectionTitle,
  softRise,
} from "../shared";

const byTitle = (title: string) =>
  selectedProjects.find((project) => project.title === title)!;

const proofProjects = [
  byTitle("Remotion Captioneer"),
  byTitle("Gmail MCP Server"),
  byTitle("Church Finance"),
] as const;

const depthProjects = [
  byTitle("TYPO SIEGE"),
  byTitle("AI-Powered Portfolio Video"),
  byTitle("Sanity Plugin Schema Markup"),
] as const;

export const ProjectsProofScene = () => {
  const frame = useCurrentFrame();

  return (
    <ChapterFrame
      frame={frame}
      chapter="07"
      eyebrow="Project proof"
      accent="blue"
    >
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateRows: "auto 1fr",
          gap: 38,
        }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 560px", gap: 48 }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={softRise(frame, 8)}>
              <Kicker tone="blue">Proof beyond job titles</Kicker>
            </div>
            <div style={softRise(frame, 24)}>
              <SectionTitle size={82} maxWidth={1050}>
                Technical judgment shown through shipped systems.
              </SectionTitle>
            </div>
          </div>
          <div style={{ alignSelf: "end", ...softRise(frame, 54) }}>
            <BodyText size={25} maxWidth={560}>
              Open-source tooling, agent workflows, dashboards, and
              product-grade implementations show how the stack translates into
              outcomes.
            </BodyText>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
            alignItems: "center",
          }}
        >
          {proofProjects.map((project, index) => (
            <ProjectTile
              key={project.title}
              {...project}
              frame={frame}
              delay={78 + index * 18}
            />
          ))}
        </div>
      </div>
    </ChapterFrame>
  );
};

export const ProjectsDepthScene = () => {
  const frame = useCurrentFrame();

  return (
    <ChapterFrame
      frame={frame}
      chapter="08"
      eyebrow="Creative systems"
      accent="amber"
    >
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateRows: "auto 1fr",
          gap: 38,
        }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 600px", gap: 48 }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={softRise(frame, 8)}>
              <Kicker tone="amber">Range with taste</Kicker>
            </div>
            <div style={softRise(frame, 24)}>
              <SectionTitle size={82} maxWidth={1060}>
                Product thinking, automation, and craft in one portfolio.
              </SectionTitle>
            </div>
          </div>
          <div style={{ alignSelf: "end", ...softRise(frame, 54) }}>
            <BodyText size={25} maxWidth={600}>
              Senior full-stack value includes experimentation. These projects
              show UI motion, CMS tooling, gameplay logic, and AI-assisted video
              delivery.
            </BodyText>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
            alignItems: "center",
          }}
        >
          {depthProjects.map((project, index) => (
            <ProjectTile
              key={project.title}
              {...project}
              badge={
                project.title === "AI-Powered Portfolio Video"
                  ? "This film"
                  : undefined
              }
              frame={frame}
              delay={78 + index * 18}
            />
          ))}
        </div>
      </div>
    </ChapterFrame>
  );
};
