import { AbsoluteFill } from "remotion";
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
    return (
        <AbsoluteFill style={{ background: theme.colors.background }}>
            <TransitionSeries>
                <TransitionSeries.Sequence durationInFrames={180}>
                    <IntroScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 20 })}
                />

                <TransitionSeries.Sequence durationInFrames={150}>
                    <AboutScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={slide({ direction: "from-right" })}
                    timing={linearTiming({ durationInFrames: 20 })}
                />

                <TransitionSeries.Sequence durationInFrames={150}>
                    <SkillsScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={wipe({ direction: "from-bottom" })}
                    timing={linearTiming({ durationInFrames: 20 })}
                />

                <TransitionSeries.Sequence durationInFrames={180}>
                    <ExperienceScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={slide({ direction: "from-left" })}
                    timing={linearTiming({ durationInFrames: 20 })}
                />

                <TransitionSeries.Sequence durationInFrames={210}>
                    <ProjectsScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={wipe({ direction: "from-top" })}
                    timing={linearTiming({ durationInFrames: 20 })}
                />

                <TransitionSeries.Sequence durationInFrames={150}>
                    <StatsScene />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 20 })}
                />

                <TransitionSeries.Sequence durationInFrames={210}>
                    <ContactScene />
                </TransitionSeries.Sequence>
            </TransitionSeries>
        </AbsoluteFill>
    );
};
