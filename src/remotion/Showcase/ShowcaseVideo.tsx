import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { Audio } from "@remotion/media";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { IntroScene } from "./scenes/IntroScene";
import { AboutScene } from "./scenes/AboutScene";
import { SkillsScene } from "./scenes/SkillsScene";
import { ExperienceScene } from "./scenes/ExperienceScene";
import { ProjectsScene } from "./scenes/ProjectsScene";
import { StatsScene } from "./scenes/StatsScene";
import { ContactScene } from "./scenes/ContactScene";
import { theme } from "./theme";

export const ShowcaseVideo = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    // Fade out audio in the last 2 seconds (60 frames)
    const volume = interpolate(
        frame,
        [0, 30, durationInFrames - 60, durationInFrames],
        [0, 0.5, 0.5, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    return (
        <AbsoluteFill style={{ background: theme.colors.background }}>
            <Audio
                src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                volume={volume}
            />
            <TransitionSeries>
                {/* Intro - 4s */}
                <TransitionSeries.Sequence durationInFrames={120}>
                    <IntroScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={slide({ direction: "from-right" })}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                {/* About - 5s */}
                <TransitionSeries.Sequence durationInFrames={150}>
                    <AboutScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={wipe({ direction: "from-top" })}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                {/* Skills - 6s */}
                <TransitionSeries.Sequence durationInFrames={180}>
                    <SkillsScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={slide({ direction: "from-bottom" })}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                {/* Experience - 12s (360 frames) for full timeline scroll */}
                <TransitionSeries.Sequence durationInFrames={360}>
                    <ExperienceScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={wipe({ direction: "from-right" })}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                {/* Projects - 5s */}
                <TransitionSeries.Sequence durationInFrames={150}>
                    <ProjectsScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={slide({ direction: "from-left" })}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                {/* Stats - 4s */}
                <TransitionSeries.Sequence durationInFrames={120}>
                    <StatsScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 20 })}
                />

                {/* Contact - 10s (300 frames) to hold the final view */}
                <TransitionSeries.Sequence durationInFrames={300}>
                    <ContactScene />
                </TransitionSeries.Sequence>
            </TransitionSeries>
        </AbsoluteFill>
    );
};
