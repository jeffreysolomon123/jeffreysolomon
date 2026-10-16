import { Label } from "./Label";

type Props = { id: string; label: string; intro?: React.ReactNode };

/** Label in the left 3 columns, intro sentence in the right 9 (stacked on mobile). */
export function SectionHeader({ id, label, intro }: Props) {
  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-5">
      <div className="col-span-12 pt-2 md:col-span-3">
        <Label as="h2" id={id}>
          {label}
        </Label>
      </div>
      {intro && (
        <p className="col-span-12 max-w-[34ch] text-[22px] leading-[1.3] font-medium tracking-[-0.01em] text-fg md:col-span-9 md:text-[28px]">
          {intro}
        </p>
      )}
    </div>
  );
}
