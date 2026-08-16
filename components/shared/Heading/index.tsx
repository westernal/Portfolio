const Heading = ({
  text,
  eyebrow,
  lead,
  style,
  className = "",
}: {
  text: string;
  /** Small label above the heading — gives a section context in two words. */
  eyebrow?: string;
  /** One sentence under the heading, so the section explains itself. */
  lead?: string;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <div className={`heading-wrapper ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="heading" style={style}>
        {text}
      </h2>
      {lead && <p className="heading-lead">{lead}</p>}
    </div>
  );
};

export default Heading;
