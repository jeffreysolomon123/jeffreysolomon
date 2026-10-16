type Props = React.HTMLAttributes<HTMLElement> & {
  tone: "cream" | "ink";
  as?: "section" | "footer" | "div";
};

/** Full-bleed colour band. Children can use text-fg / text-muted / border-line / text-label. */
export function Band({ tone, as: Tag = "section", className = "", ...props }: Props) {
  return <Tag className={`band-${tone} ${className}`} {...props} />;
}
