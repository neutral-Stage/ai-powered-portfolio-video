import { Audio } from "@remotion/media";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill, interpolate, staticFile } from "remotion";
import { VIDEO_FPS } from "../../../types/constants";
import { AboutScene } from "./scenes/AboutScene";
import { ContactScene } from "./scenes/ContactScene";
import {
  ExperienceCurrentScene,
  ExperienceDepthScene,
} from "./scenes/ExperienceScene";
import { IdentityScene } from "./scenes/IdentityScene";
import { IntroScene } from "./scenes/IntroScene";
import { ProjectsDepthScene, ProjectsProofScene } from "./scenes/ProjectsScene";
import { SkillsScene } from "./scenes/SkillsScene";
import { StatsScene } from "./scenes/StatsScene";
import { theme } from "./theme";

const transition = (
  <TransitionSeries.Transition
    presentation={fade()}
    timing={linearTiming({ durationInFrames: 20 })}
  />
);

const musicVolume = (frame: number) =>
  interpolate(frame, [0, 45, 2310, 2400], [0, 0.16, 0.16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const ShowcaseVideo = () => {
  return (
    <AbsoluteFill style={{ background: theme.colors.background }}>
      <Audio
        src={staticFile("audio/mixkit-close-up-1167.mp3")}
        volume={musicVolume}
        startFrom={0}
      />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={210}>
          <IntroScene />
        </TransitionSeries.Sequence>
        {transition}

        <TransitionSeries.Sequence durationInFrames={270}>
          <IdentityScene />
        </TransitionSeries.Sequence>
        {transition}

        <TransitionSeries.Sequence durationInFrames={270}>
          <AboutScene />
        </TransitionSeries.Sequence>
        {transition}

        <TransitionSeries.Sequence durationInFrames={285}>
          <SkillsScene />
        </TransitionSeries.Sequence>
        {transition}

        <TransitionSeries.Sequence durationInFrames={285}>
          <ExperienceCurrentScene />
        </TransitionSeries.Sequence>
        {transition}

        <TransitionSeries.Sequence durationInFrames={255}>
          <ExperienceDepthScene />
        </TransitionSeries.Sequence>
        {transition}

        <TransitionSeries.Sequence durationInFrames={285}>
          <ProjectsProofScene />
        </TransitionSeries.Sequence>
        {transition}

        <TransitionSeries.Sequence durationInFrames={285}>
          <ProjectsDepthScene />
        </TransitionSeries.Sequence>
        {transition}

        <TransitionSeries.Sequence durationInFrames={220}>
          <StatsScene />
        </TransitionSeries.Sequence>
        {transition}

        <TransitionSeries.Sequence durationInFrames={215}>
          <ContactScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

export const showcaseDurationInSeconds = 2400 / VIDEO_FPS;
