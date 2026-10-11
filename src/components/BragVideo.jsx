import { useEffect, useRef } from "react";

/**
 * Launch video for a project. Plays muted + looping while on screen,
 * pauses when scrolled away, and keeps native controls so a visitor can
 * unmute or scrub. Respects prefers-reduced-motion (no autoplay).
 */
export default function BragVideo({ src, poster, title, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={`brag-video ${className}`}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      aria-label={`${title} launch video`}
    />
  );
}
