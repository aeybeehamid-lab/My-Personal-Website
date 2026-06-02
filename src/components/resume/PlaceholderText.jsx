/** Renders text with [brackets] highlighted as editable placeholders. */
export default function PlaceholderText({ text, className = '' }) {
  const parts = text.split(/(\[[^\]]+\])/g)

  return (
    <p className={className}>
      {parts.map((part, i) =>
        part.startsWith('[') && part.endsWith(']') ? (
          <mark
            key={i}
            className="rounded bg-amber-100 px-1 text-amber-950 print:bg-transparent print:font-semibold print:text-black"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  )
}
