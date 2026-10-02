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
import { certifications } from "./certifications";
import { githubSnapshot } from "./github-snapshot";
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
  readonly certifications = certifications;
  readonly github = githubSnapshot;
  readonly filters = ["Todos", "Web", "Móvil", "Backend"];
  readonly projectFilter = signal("Todos");
  readonly email = "angelfernandezmota@gmail.com";
  readonly copyStatus = signal("");
  readonly menuOpen = signal(false);
  readonly backgroundPaused = signal(false);
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
          ".hero-profile, .architecture, .section-heading, .project, .experience, .about-lead",
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
  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copyStatus.set("Correo copiado ✓");
    } catch {
      this.copyStatus.set(
        "No se pudo copiar. Puedes seleccionar el correo o abrir tu aplicación de email.",
      );
    }
  }
  openProject(target: string, event: MouseEvent): void {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    )
      return;
    if (this.projectFilter() === "Todos") return;
    event.preventDefault();
    this.projectFilter.set("Todos");
    // Wait for Angular to reveal all cards before resolving the anchor position.
    requestAnimationFrame(() => {
      const project = this.document.getElementById(target);
      if (!project) return;
      history.pushState(history.state, "", `#${target}`);
      project.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
      project.focus({ preventScroll: true });
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
