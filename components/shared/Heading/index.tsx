const Heading = ({
  text,
  style,
  className,
}: {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <div className="heading-wrapper">
      <h2 className={`heading ${className}`} style={style}>
        {text}
      </h2>
    </div>
  );
};

export default Heading;
