import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/neet/meta";
import Breadcrumbs from "@/components/neet/Breadcrumbs";
import LessonActions, { SaveButton } from "@/components/neet/LessonActions";
import LessonBlocks, { slugify } from "@/components/neet/LessonBlocks";
import LessonSidebar from "@/components/neet/LessonSidebar";
import SignatureGate from "@/components/neet/SignatureGate";
import { PATHS, flatLessons, skillById } from "@/lib/neet/content";

function LessonPage() {
  const data = Route.useLoaderData();
  const { path, module, lesson, prev, next } = data;
  const headings = lesson.blocks.filter((b) => b.t === "h2");
  const skill = skillById(lesson.skillIds[0]!);

  return (
    <>
      <SignatureGate />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[17rem_minmax(0,1fr)_16rem]">
        <aside className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-auto">
          <details className="rounded-lg border border-line bg-surface p-4 lg:hidden">
            <summary className="cursor-pointer font-label text-sm text-muted">
              Course outline
            </summary>
            <div className="mt-4">
              <LessonSidebar path={path} current={lesson.slug} />
            </div>
          </details>
          <div className="hidden lg:block">
            <LessonSidebar path={path} current={lesson.slug} />
          </div>
        </aside>

        <article className="min-w-0">
          <Breadcrumbs
            items={[
              { label: "Paths", href: "/paths" },
              { label: path.title, href: `/paths/${path.slug}` },
              { label: lesson.title },
            ]}
          />
          <p className="mt-8 font-label text-xs uppercase tracking-widest text-accent">
            {module.title} · {lesson.minutes} min · {skill?.title}
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold md:text-5xl">{lesson.title}</h1>
          <p className="measure mt-4 text-xl leading-8 text-muted">{lesson.summary}</p>
          <div className="mt-5">
            <SaveButton pathSlug={path.slug} lessonSlug={lesson.slug} />
          </div>

          <div className="mt-6 border-t border-line pt-2">
            <LessonBlocks blocks={lesson.blocks} />
          </div>

          <LessonActions
            pathSlug={path.slug}
            lessonSlug={lesson.slug}
            skillId={lesson.skillIds[0]!}
            prev={prev ? { slug: prev.lesson.slug, title: prev.lesson.title } : null}
            next={next ? { slug: next.lesson.slug, title: next.lesson.title } : null}
          />
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <nav aria-label="In this lesson">
            <p className="font-label text-xs uppercase tracking-widest text-muted">
              In this lesson
            </p>
            <ul className="mt-2 space-y-0.5 border-l border-line pl-1 text-sm">
              {headings.map((h) => (
                <li key={h.t === "h2" ? h.text : ""}>
                  {h.t === "h2" && (
                    <a
                      href={`#${slugify(h.text)}`}
                      className="flex min-h-11 items-center rounded-r-md px-3 text-muted hover:bg-surface hover:text-text"
                    >
                      {h.text}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <a
                  href="#explain"
                  className="flex min-h-11 items-center rounded-r-md px-3 text-muted hover:bg-surface hover:text-text"
                >
                  Explain it back
                </a>
              </li>
            </ul>
          </nav>
          <section className="rounded-lg border border-line bg-surface p-4">
            <p className="font-label text-xs uppercase tracking-widest text-accent">
              Keep this in mind
            </p>
            <ul className="mt-3 space-y-3 text-sm text-text">
              {lesson.keep.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </>
  );
}

export const Route = createFileRoute("/_public-account/learn/$path/$lesson")({
  loader: ({ params }) => {
    const path = PATHS.find((p) => p.slug === params.path);
    if (!path) throw notFound();
    const flat = flatLessons(path);
    const i = flat.findIndex((x) => x.lesson.slug === params.lesson);
    if (i < 0) throw notFound();
    return {
      path,
      module: flat[i]!.module,
      lesson: flat[i]!.lesson,
      prev: i > 0 ? { path: path.slug, lesson: flat[i - 1]!.lesson } : null,
      next: i < flat.length - 1 ? { path: path.slug, lesson: flat[i + 1]!.lesson } : null,
    };
  },
  head: ({ loaderData }) =>
    pageHead(loaderData?.lesson.title ?? "Lesson", loaderData?.lesson.summary ?? "A short lesson."),
  component: LessonPage,
});
