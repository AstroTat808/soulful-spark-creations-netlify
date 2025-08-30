export default function FloralDivider({ className="" }: { className?: string }) {
  return (
    <div className={`divider-floral ${className} py-6`} aria-hidden="true">
      <svg viewBox="0 0 600 60" role="img" className="mx-auto h-6 opacity-60" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.2" className="text-smokyplum/50">
          <path d="M10,30 C100,20 150,40 230,30" />
          <path d="M370,30 C450,20 500,40 590,30" />
          <path d="M300 30 q-10 -12 -20 0 q10 8 20 0 z" />
          <circle cx="300" cy="30" r="2" />
        </g>
      </svg>
    </div>
  );
}
