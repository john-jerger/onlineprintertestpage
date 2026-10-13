export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          {typeof a === 'string' && a.includes('<') ? (
            <p dangerouslySetInnerHTML={{ __html: a }} />
          ) : (
            <p>{a}</p>
          )}
        </details>
      ))}
    </div>
  );
}
