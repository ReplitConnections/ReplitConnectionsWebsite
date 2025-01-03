import Link from "fumadocs-core/link";

export function NotReplit() {
  return (
    <div className="bg-fd-card rounded-lg border border-fd-border p-4 text-sm">
      This site is <strong>NOT</strong> affiliated with Replit.{" "}
      <Link
        href="/"
        className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
      >
        Learn more.
      </Link>
    </div>
  );
}
