import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, staticFile } from "remotion";
import { theme, type AccentTone } from "./theme";

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

export const toneColor = (tone: AccentTone) => theme.colors.tones[tone];

export const reveal = (frame: number, start = 0, duration = 30) =>
  interpolate(frame, [start, start + duration], [0, 1], {
    ...clamp,
    easing: Easing.bezier(0.2, 0, 0, 1),
  });

export const softRise = (
  frame: number,
  start = 0,
  distance = 28,
  duration = 34,
): React.CSSProperties => {
  const progress = reveal(frame, start, duration);

  return {
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [distance, 0])}px)`,
  };
};

export const softSlide = (
  frame: number,
  start = 0,
  distance = 32,
  direction: "left" | "right" = "right",
  duration = 34,
): React.CSSProperties => {
  const progress = reveal(frame, start, duration);
  const from = direction === "right" ? distance : -distance;

  return {
    opacity: progress,
    transform: `translateX(${interpolate(progress, [0, 1], [from, 0])}px)`,
  };
};

export const lineProgress = (frame: number, start = 0, duration = 40) =>
  interpolate(frame, [start, start + duration], [0, 100], {
    ...clamp,
    easing: Easing.bezier(0.2, 0, 0, 1),
  });

export const ChapterFrame: React.FC<{
  frame: number;
  chapter: string;
  eyebrow: string;
  accent?: AccentTone;
  children: React.ReactNode;
  footer?: React.ReactNode;
}> = ({ frame, chapter, eyebrow, accent = "blue", children, footer }) => {
  const sweepX = interpolate(frame % 560, [0, 560], [-520, 2320], clamp);
  const gridOffset = `${(frame * 0.08) % 96}px ${(frame * 0.04) % 96}px`;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(118deg, ${theme.colors.background} 0%, ${theme.colors.backgroundAlt} 54%, #0b0e12 100%)`,
        color: theme.colors.text.primary,
        fontFamily: theme.fonts.body,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(246,240,230,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(246,240,230,0.045) 1px, transparent 1px)",
          backgroundPosition: gridOffset,
          backgroundSize: "96px 96px",
          maskImage:
            "linear-gradient(90deg, rgba(0,0,0,0.82), rgba(0,0,0,0.28) 50%, rgba(0,0,0,0.78))",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: sweepX,
          width: 360,
          background: `linear-gradient(90deg, transparent 0%, ${toneColor(accent)}1a 50%, transparent 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: `${theme.layout.y}px ${theme.layout.x}px`,
          border: `1px solid ${theme.colors.line}`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: theme.layout.y,
          left: theme.layout.x,
          right: theme.layout.x,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "23px 28px",
          borderBottom: `1px solid ${theme.colors.line}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: 17,
              color: toneColor(accent),
            }}
          >
            {chapter}
          </span>
          <span
            style={{
              width: 84,
              height: 1,
              background: `linear-gradient(90deg, ${toneColor(accent)}, transparent)`,
            }}
          />
          <span
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: 16,
              color: theme.colors.text.secondary,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </span>
        </div>
        <span
          style={{
            fontFamily: theme.fonts.mono,
            fontSize: 16,
            color: theme.colors.text.muted,
            textTransform: "uppercase",
          }}
        >
          Senior Full-Stack Developer
        </span>
      </div>
      <main
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          padding: `${theme.layout.y + 92}px ${theme.layout.x + 44}px ${theme.layout.y + 48}px`,
        }}
      >
        {children}
      </main>
      {footer ? (
        <div
          style={{
            position: "absolute",
            left: theme.layout.x + 28,
            right: theme.layout.x + 28,
            bottom: theme.layout.y + 22,
            zIndex: 2,
          }}
        >
          {footer}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

export const Kicker: React.FC<{
  children: React.ReactNode;
  tone?: AccentTone;
}> = ({ children, tone = "blue" }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      color: toneColor(tone),
      fontFamily: theme.fonts.mono,
      fontSize: 17,
      fontWeight: 600,
      textTransform: "uppercase",
    }}
  >
    <span style={{ width: 9, height: 9, background: toneColor(tone) }} />
    {children}
  </div>
);

export const SectionTitle: React.FC<{
  children: React.ReactNode;
  size?: number;
  maxWidth?: number;
  style?: React.CSSProperties;
}> = ({ children, size = 84, maxWidth = 1180, style }) => (
  <h2
    style={{
      margin: 0,
      maxWidth,
      fontFamily: theme.fonts.display,
      fontSize: size,
      lineHeight: 0.96,
      fontWeight: 800,
      color: theme.colors.text.primary,
      letterSpacing: 0,
      ...style,
    }}
  >
    {children}
  </h2>
);

export const BodyText: React.FC<{
  children: React.ReactNode;
  size?: number;
  maxWidth?: number;
  style?: React.CSSProperties;
}> = ({ children, size = 28, maxWidth = 920, style }) => (
  <p
    style={{
      margin: 0,
      maxWidth,
      color: theme.colors.text.secondary,
      fontSize: size,
      lineHeight: 1.42,
      fontWeight: 500,
      ...style,
    }}
  >
    {children}
  </p>
);

export const BrandPanel: React.FC<{
  children: React.ReactNode;
  tone?: AccentTone;
  style?: React.CSSProperties;
}> = ({ children, tone = "steel", style }) => (
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      background: `linear-gradient(180deg, ${theme.colors.surfaceElevated} 0%, ${theme.colors.surface} 100%)`,
      border: `1px solid ${theme.colors.line}`,
      borderRadius: 8,
      boxShadow: `0 24px 70px ${theme.colors.shadow}`,
      ...style,
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(135deg, ${toneColor(tone)}12 0%, transparent 36%)`,
        pointerEvents: "none",
      }}
    />
    <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
  </div>
);

export const Tag: React.FC<{ label: string; tone?: AccentTone }> = ({
  label,
  tone = "steel",
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "9px 13px",
      border: `1px solid ${toneColor(tone)}42`,
      background: `${toneColor(tone)}14`,
      color: toneColor(tone),
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1,
      borderRadius: 4,
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </span>
);

export const StatModule: React.FC<{
  value: string;
  label: string;
  detail: string;
  tone?: AccentTone;
  frame: number;
  delay?: number;
}> = ({ value, label, detail, tone = "blue", frame, delay = 0 }) => (
  <BrandPanel
    tone={tone}
    style={{ padding: 30, minHeight: 250, ...softRise(frame, delay) }}
  >
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      <div
        style={{
          fontFamily: theme.fonts.display,
          fontSize: 82,
          lineHeight: 0.9,
          fontWeight: 800,
          color: toneColor(tone),
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 28,
          lineHeight: 1.1,
          color: theme.colors.text.primary,
          fontWeight: 700,
        }}
      >
        {label}
      </div>
      <BodyText size={21} maxWidth={420}>
        {detail}
      </BodyText>
      <div
        style={{
          height: 2,
          width: "100%",
          background: theme.colors.surfaceWash,
          marginTop: 8,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${lineProgress(frame, delay + 14, 44)}%`,
            background: toneColor(tone),
          }}
        />
      </div>
    </div>
  </BrandPanel>
);

export const TimelineRole: React.FC<{
  company: string;
  role: string;
  meta: string;
  summary: string;
  wins: readonly string[];
  tone?: AccentTone;
  frame: number;
  delay?: number;
  index: string;
}> = ({
  company,
  role,
  meta,
  summary,
  wins,
  tone = "blue",
  frame,
  delay = 0,
  index,
}) => (
  <BrandPanel
    tone={tone}
    style={{ padding: 30, minHeight: 306, ...softRise(frame, delay) }}
  >
    <div style={{ display: "grid", gridTemplateColumns: "82px 1fr", gap: 24 }}>
      <div
        style={{
          fontFamily: theme.fonts.mono,
          fontSize: 22,
          color: toneColor(tone),
          paddingTop: 4,
        }}
      >
        {index}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <h3
            style={{
              margin: 0,
              color: theme.colors.text.primary,
              fontFamily: theme.fonts.display,
              fontSize: 42,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: 0,
            }}
          >
            {company}
          </h3>
          <div
            style={{
              marginTop: 10,
              color: theme.colors.text.secondary,
              fontSize: 23,
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            {role}
          </div>
          <div
            style={{
              marginTop: 8,
              color: theme.colors.text.muted,
              fontFamily: theme.fonts.mono,
              fontSize: 15,
              lineHeight: 1.35,
            }}
          >
            {meta}
          </div>
        </div>
        <BodyText size={20} maxWidth={620}>
          {summary}
        </BodyText>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {wins.map((win) => (
            <div
              key={win}
              style={{ display: "flex", gap: 11, alignItems: "flex-start" }}
            >
              <span
                style={{
                  width: 18,
                  height: 2,
                  marginTop: 13,
                  background: toneColor(tone),
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: theme.colors.text.secondary,
                  fontSize: 19,
                  lineHeight: 1.35,
                  fontWeight: 500,
                }}
              >
                {win}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </BrandPanel>
);

export const ProjectTile: React.FC<{
  title: string;
  category: string;
  summary: string;
  stack: readonly string[];
  tone?: AccentTone;
  frame: number;
  delay?: number;
  badge?: string;
}> = ({
  title,
  category,
  summary,
  stack,
  tone = "blue",
  frame,
  delay = 0,
  badge,
}) => (
  <BrandPanel
    tone={tone}
    style={{ padding: 28, minHeight: 360, ...softRise(frame, delay) }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 18,
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
      >
        <span
          style={{
            color: toneColor(tone),
            fontFamily: theme.fonts.mono,
            fontSize: 15,
            lineHeight: 1.2,
            textTransform: "uppercase",
          }}
        >
          {category}
        </span>
        {badge ? <Tag label={badge} tone={tone} /> : null}
      </div>
      <h3
        style={{
          margin: 0,
          color: theme.colors.text.primary,
          fontFamily: theme.fonts.display,
          fontSize: 42,
          lineHeight: 1,
          fontWeight: 800,
          letterSpacing: 0,
        }}
      >
        {title}
      </h3>
      <BodyText size={20} maxWidth={480}>
        {summary}
      </BodyText>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          paddingTop: 16,
          borderTop: `1px solid ${theme.colors.line}`,
        }}
      >
        {stack.map((item) => (
          <Tag key={item} label={item} tone={tone} />
        ))}
      </div>
    </div>
  </BrandPanel>
);

export const PortraitFrame: React.FC<{
  frame: number;
  delay?: number;
  tone?: AccentTone;
  imageMinHeight?: number;
  style?: React.CSSProperties;
}> = ({ frame, delay = 0, tone = "blue", imageMinHeight = 560, style }) => (
  <BrandPanel
    tone={tone}
    style={{
      padding: 16,
      ...softSlide(frame, delay, 32, "right"),
      ...style,
    }}
  >
    <div
      style={{
        height: "100%",
        minHeight: imageMinHeight,
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(160deg, ${theme.colors.surface} 0%, ${theme.colors.background} 100%)`,
      }}
    >
      <Img
        src={staticFile("shuvo.png")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          filter: "contrast(1.05) saturate(0.92)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, transparent 44%, ${theme.colors.background}d8 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 22,
          right: 22,
          bottom: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: `1px solid ${theme.colors.line}`,
          paddingTop: 18,
        }}
      >
        <span
          style={{
            fontFamily: theme.fonts.mono,
            fontSize: 15,
            color: theme.colors.text.secondary,
            textTransform: "uppercase",
          }}
        >
          Remote ready
        </span>
        <span style={{ width: 70, height: 2, background: toneColor(tone) }} />
      </div>
    </div>
  </BrandPanel>
);

export const ContactLine: React.FC<{
  label: string;
  value: string;
  tone?: AccentTone;
  frame: number;
  delay?: number;
}> = ({ label, value, tone = "blue", frame, delay = 0 }) => (
  <BrandPanel tone={tone} style={{ padding: 18, ...softRise(frame, delay) }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontFamily: theme.fonts.mono,
          fontSize: 15,
          color: toneColor(tone),
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      <div
        style={{
          color: theme.colors.text.primary,
          fontSize: 21,
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        {value}
      </div>
    </div>
  </BrandPanel>
);
