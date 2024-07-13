const Heading = ({ text }: { text: string }) => {
  return (
    <div className="heading-wrapper">
      <h2 className="heading">{text}</h2>
    </div>
  );
};

export default Heading;
