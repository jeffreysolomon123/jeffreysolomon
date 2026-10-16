type Props = React.HTMLAttributes<HTMLDivElement>;

/** 1200px max content width with a 16px mobile gutter. */
export function Container({ className = "", ...props }: Props) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`} {...props} />;
}
