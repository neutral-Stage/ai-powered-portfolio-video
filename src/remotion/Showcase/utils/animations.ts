import {
    spring,
    interpolate,
    SpringConfig,
} from "remotion";

export const springConfig: SpringConfig = {
    damping: 200,
    stiffness: 200,
    mass: 1,
    overshootClamping: false,
};

export const bouncyConfig: SpringConfig = {
    damping: 10,
    stiffness: 100,
    mass: 1,
    overshootClamping: false,
};

export const animations = {
    fadeIn: (frame: number, fps: number, delay = 0, duration = 30) => {
        return interpolate(frame - delay, [0, duration], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        });
    },

    fadeInUp: (frame: number, fps: number, delay = 0) => {
        const spr = spring({
            frame: frame - delay,
            fps,
            config: springConfig,
        });

        const opacity = interpolate(spr, [0, 1], [0, 1]);
        const translateY = interpolate(spr, [0, 1], [50, 0]);

        return { opacity, transform: `translateY(${translateY}px)` };
    },

    scaleIn: (frame: number, fps: number, delay = 0, config = springConfig) => {
        const spr = spring({
            frame: frame - delay,
            fps,
            config,
        });

        return interpolate(spr, [0, 1], [0, 1]);
    },

    slideIn: (
        frame: number,
        fps: number,
        direction: "left" | "right" | "top" | "bottom",
        delay = 0
    ) => {
        const spr = spring({
            frame: frame - delay,
            fps,
            config: springConfig,
        });

        const distance = 100;
        const map = {
            left: { x: [-distance, 0], y: [0, 0] },
            right: { x: [distance, 0], y: [0, 0] },
            top: { x: [0, 0], y: [-distance, 0] },
            bottom: { x: [0, 0], y: [distance, 0] },
        };

        const x = interpolate(spr, [0, 1], map[direction].x);
        const y = interpolate(spr, [0, 1], map[direction].y);
        const opacity = interpolate(spr, [0, 1], [0, 1]);

        return { opacity, transform: `translate(${x}px, ${y}px)` };
    },
};
