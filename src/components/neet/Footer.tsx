import Link from "@/components/neet/AppLink";
import Motto from "./Motto";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-label text-xl font-bold tracking-[0.25em] text-accent">NEET</p>
          <p className="mt-1 font-display italic text-muted">
            Not in Education, Employment, or Training.
          </p>
          <p className="mt-4 max-w-sm text-muted">
            We ain&apos;t an academy. We&apos;re a group that learns by building, and shows its work
            instead of collecting badges.
          </p>
          <Motto className="mt-6 text-sm" />
        </div>
        <div>
          <p className="font-label text-sm uppercase tracking-widest text-muted">Learn</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link className="hover:text-accent" href="/library">
                Knowledge library
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" href="/paths">
                Paths
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" href="/exercises">
                Exercises
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" href="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" href="/sources">
                Sources
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" href="/coverage">
                Research coverage
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" href="/labs">
                Practice labs
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" href="/method">
                The method
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-label text-sm uppercase tracking-widest text-muted">You</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link className="hover:text-accent" href="/me">
                My progress
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" href="/me/calibration">
                Calibration
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" href="/health">
                Content status
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-6 text-muted">
            Progress is kept in this browser. Sign in to keep it across devices.
          </p>
        </div>
      </div>
    </footer>
  );
}
