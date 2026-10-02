import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { capabilities, projects, stack } from "./content";
@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly projects = projects;
  readonly stack = stack;
  readonly capabilities = capabilities;
  readonly menuOpen = signal(false);
  readonly activeSection = signal("");
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  readonly linkedin =
    "https://www.linkedin.com/in/%C3%A1ngel-fern%C3%A1ndez-mota/";
  constructor() {
    afterNextRender(() => {
      const sections = this.document.querySelectorAll<HTMLElement>(
        ".hero, main > section[id]",
      );
      const navigation = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.activeSection.set(entry.target.id);
          }
        },
        { rootMargin: "-90px 0px -55% 0px", threshold: 0 },
      );
      sections.forEach((section) => navigation.observe(section));

      const motion = matchMedia("(prefers-reduced-motion: reduce)");
      const animations = new Set<Animation>();
      const reveal = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            reveal.unobserve(entry.target);
            if (motion.matches) continue;
            const animation = entry.target.animate(
              [
                { transform: "translateY(10px)" },
                { transform: "translateY(0)" },
              ],
              { duration: 280, easing: "cubic-bezier(.2,.7,.3,1)" },
            );
            animations.add(animation);
            animation.finished
              .then(() => animations.delete(animation))
              .catch(() => animations.delete(animation));
          }
        },
        { threshold: 0.08 },
      );
      this.document
        .querySelectorAll(
          ".section-heading, .project, .experience, .about-lead",
        )
        .forEach((element) => reveal.observe(element));
      const reduceMotion = () => {
        if (motion.matches)
          animations.forEach((animation) => animation.cancel());
      };
      motion.addEventListener("change", reduceMotion);
      this.destroyRef.onDestroy(() => {
        navigation.disconnect();
        reveal.disconnect();
        motion.removeEventListener("change", reduceMotion);
        animations.forEach((animation) => animation.cancel());
      });
    });
  }
  closeMenu(restoreFocus = false): void {
    this.menuOpen.set(false);
    if (restoreFocus) this.document.getElementById("menu-toggle")?.focus();
  }
  toggleTheme(): void {
    const theme =
      this.document.documentElement.dataset["theme"] === "light"
        ? "dark"
        : "light";
    this.document.documentElement.dataset["theme"] = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* Storage can be disabled by the browser. */
    }
  }
}
