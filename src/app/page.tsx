"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import {
  SHOWCASE_DURATION_IN_FRAMES,
  SHOWCASE_HEIGHT,
  SHOWCASE_WIDTH,
  VIDEO_FPS,
} from "../../types/constants";
import { ShowcaseVideo } from "../remotion/Showcase/ShowcaseVideo";

const Home: NextPage = () => {

  return (
    <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center p-10">
      <div className="w-full max-w-screen-lg">
        <div className="overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-gray-800">
          <Player
            component={ShowcaseVideo}
            durationInFrames={SHOWCASE_DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={SHOWCASE_HEIGHT}
            compositionWidth={SHOWCASE_WIDTH}
            style={{
              width: "100%",
            }}
            controls
            autoPlay
            loop
            acknowledgeRemotionLicense
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
