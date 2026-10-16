type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "ink" | "accent" | "outline";
};

const styles = {
  // Ink on accent is 4.7:1; cream on accent would fail AA, so the accent button uses ink text.
  accent: "bg-accent text-ink hover:bg-ink hover:text-bone",
  ink: "bg-ink text-bone hover:bg-accent hover:text-ink",
  outline: "border border-current text-fg hover:bg-fg hover:text-[var(--band-bg)]",
} as const;

/** Small rectangular link-button. */
export function Button({ variant = "ink", className = "", ...props }: Props) {
  return (
    <a
      className={`inline-flex h-9 items-center gap-2 rounded-[2px] px-4 text-[13px] font-medium whitespace-nowrap transition-colors duration-200 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
