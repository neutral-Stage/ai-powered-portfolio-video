import React from "react";
import { AbsoluteFill, interpolate } from "remotion";
import { theme, type AccentTone } from "./theme";

const toneColor = (tone: AccentTone) => theme.colors.tones[tone];

export const ShowcaseShell: React.FC<{
  frame: number;
  children: React.ReactNode;
  gap?: number;
  justifyContent?: React.CSSProperties["justifyContent"];
}> = ({ frame, children, gap = 28, justifyContent = "space-between" }) => {
  const orbAOffset = Math.sin(frame / 42) * 36;
  const orbBOffset = Math.cos(frame / 47) * 26;
  const orbOpacity = interpolate(frame, [0, 40], [0.4, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(140deg, ${theme.colors.background} 0%, ${theme.colors.backgroundAlt} 100%)`,
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
            "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 85%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 680,
          height: 680,
          borderRadius: 999,
          top: -180 + orbAOffset,
          right: -120,
          opacity: orbOpacity,
          background:
            "radial-gradient(circle, rgba(56,189,248,0.28) 0%, rgba(56,189,248,0.04) 45%, transparent 75%)",
          filter: "blur(8px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 720,
          height: 720,
          borderRadius: 999,
          bottom: -260 + orbBOffset,
          left: -180,
          opacity: orbOpacity,
          background:
            "radial-gradient(circle, rgba(251,146,60,0.2) 0%, rgba(251,146,60,0.05) 50%, transparent 78%)",
          filter: "blur(16px)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent,
          gap,
          height: "100%",
          padding: "78px 94px",
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};

export const Eyebrow: React.FC<{ label: string }> = ({ label }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      alignSelf: "flex-start",
      padding: "12px 18px",
      borderRadius: 999,
      border: `1px solid ${theme.colors.border}`,
      background: theme.colors.panel,
      color: theme.colors.text.secondary,
      fontFamily: theme.fonts.mono,
      fontSize: 15,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    }}
  >
    {label}
  </div>
);

export const SectionHeading: React.FC<{
  title: string;
  accent?: string;
  body?: string;
  align?: React.CSSProperties["textAlign"];
}> = ({ title, accent, body, align = "left" }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 18, textAlign: align }}>
    <h2
      style={{
        fontFamily: theme.fonts.heading,
        fontSize: 80,
        lineHeight: 1,
        letterSpacing: "-0.05em",
        margin: 0,
      }}
    >
      {title}
      {accent ? (
        <span style={{ color: theme.colors.tones.sky }}> {accent}</span>
      ) : null}
    </h2>
    {body ? (
      <p
        style={{
          margin: 0,
          color: theme.colors.text.secondary,
          fontSize: 28,
          lineHeight: 1.45,
          maxWidth: 980,
        }}
      >
        {body}
      </p>
    ) : null}
  </div>
);

export const GlassCard: React.FC<{
  children: React.ReactNode;
  tone?: AccentTone;
  style?: React.CSSProperties;
}> = ({ children, tone = "sky", style }) => (
  <div
    style={{
      background: theme.colors.panelStrong,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: 28,
      padding: 28,
      boxShadow: `0 20px 70px ${theme.colors.shadow}, inset 0 1px 0 rgba(255,255,255,0.04)`,
      position: "relative",
      overflow: "hidden",
      ...style,
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(135deg, ${toneColor(tone)}18 0%, transparent 45%)`,
        pointerEvents: "none",
      }}
    />
    <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
  </div>
);

export const Tag: React.FC<{ label: string; tone?: AccentTone }> = ({
  label,
  tone = "sky",
}) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "10px 14px",
      borderRadius: 999,
      background: `${toneColor(tone)}18`,
      color: toneColor(tone),
      border: `1px solid ${toneColor(tone)}22`,
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1,
    }}
  >
    {label}
  </div>
);

export const MetricCard: React.FC<{
  value: string;
  label: string;
  detail: string;
  tone?: AccentTone;
}> = ({ value, label, detail, tone = "sky" }) => (
  <GlassCard tone={tone} style={{ minHeight: 228 }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div
        style={{
          fontFamily: theme.fonts.heading,
          fontSize: 64,
          lineHeight: 1,
          color: toneColor(tone),
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: theme.colors.text.primary,
        }}
      >
        {label}
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 21,
          lineHeight: 1.45,
          color: theme.colors.text.secondary,
        }}
      >
        {detail}
      </p>
    </div>
  </GlassCard>
);

export const BulletRow: React.FC<{ text: string; tone?: AccentTone }> = ({
  text,
  tone = "sky",
}) => (
  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
    <div
      style={{
        width: 10,
        height: 10,
        marginTop: 10,
        borderRadius: 999,
        background: toneColor(tone),
        flexShrink: 0,
      }}
    />
    <div
      style={{
        fontSize: 22,
        lineHeight: 1.45,
        color: theme.colors.text.secondary,
      }}
    >
      {text}
    </div>
  </div>
);
