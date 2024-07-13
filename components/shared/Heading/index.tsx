const Heading = ({
  text,
  style,
}: {
  text: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="heading-wrapper">
      <h2 className="heading" style={style}>
        {text}
      </h2>
    </div>
  );
};

export default Heading;
