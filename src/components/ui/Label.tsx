type Props = { children: React.ReactNode; as?: "p" | "h2" | "span"; id?: string; className?: string };

/** Small mono label with an accent underline, e.g. "Technical Focus". */
export function Label({ children, as: Tag = "p", id, className = "" }: Props) {
  return (
    <Tag
      id={id}
      className={`font-mono text-[12px] leading-none font-medium tracking-tight text-label underline decoration-1 underline-offset-[5px] ${className}`}
    >
      {children}
    </Tag>
  );
}
