import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  Glitch,
} from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";

export const Effects = () => {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <Glitch
        delay={[4, 4.5]} // min and max glitch delay
        duration={[0.1, 0.19]} // min and max glitch duration
        strength={[0.8, 0.85]} // min and max glitch strength
        mode={GlitchMode.SPORADIC} // glitch mode
        active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
        ratio={0.85}
      />
      <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={500} />
      {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
    </EffectComposer>
  );
};
