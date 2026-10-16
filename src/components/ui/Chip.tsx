/** Small outlined mono chip for stack tags. */
export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-[2px] border border-line px-2 py-1 font-mono text-[11.5px] leading-none text-fg">
      {children}
    </span>
  );
}

export function ChipList({ items, label }: { items: string[]; label: string }) {
  if (items.length === 0) return null;
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <Chip>{item}</Chip>
        </li>
      ))}
    </ul>
  );
}
