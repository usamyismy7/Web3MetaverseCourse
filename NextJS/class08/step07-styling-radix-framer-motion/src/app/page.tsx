import AlertButton from "@/components/RadixUI/AlertButton";
import FadeUpStagger from "@/components/FramerMotion/FadeUpStagger";
import TypingEffect from "@/components/FramerMotion/TypingEffect";

export default function Home() {
  return (
    <div>
      <FadeUpStagger />
      <TypingEffect />
      <AlertButton />
    </div>
  );
}
