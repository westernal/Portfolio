"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";

/**
 * Fades and lifts its child the first time it scrolls into view.
 *
 * This is what framer-motion's `whileInView` was doing, minus the library: it
 * was 70KB in the initial payload — Jobs renders above the fold — for one
 * IntersectionObserver and a transition the compositor already handles.
 *
 * The transform and timing live in `.reveal` in style.css, so the global
 * `prefers-reduced-motion` block flattens them along with everything else.
 */
const Reveal = <T extends ElementType = "div">(
  props: { as?: T; delay?: number } & Omit<
    ComponentPropsWithoutRef<T>,
    "as" | "delay"
  >,
) => {
  // The call sites are checked against the generic above; inside, the rest
  // props are only ever spread back onto the same tag, which TypeScript cannot
  // follow through a generic ElementType without this widening.
  const {
    as,
    delay = 0,
    className = "",
    ...rest
  } = props as { as?: ElementType; delay?: number; className?: string } & Record<
    string,
    unknown
  >;

  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No observer (very old browser, or a JSDOM-style environment): show the
    // content rather than leaving it permanently at opacity 0.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setShown(true);
        // Once only — matching framer-motion's `viewport={{ once: true }}`.
        observer.disconnect();
      },
      // Fire a little before the element is fully in view, so the motion has
      // finished by the time the reader's eye reaches it.
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    />
  );
};

export default Reveal;
