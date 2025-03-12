import BaseText from "./BaseText";

const DayText = (props) => {
  const { day } = props;
  const style = {
    fontSize: "13px",
    lineHeight: "14px",
    fontWeight: "400",
    letterSpacing: "-0.04em",
  };

  return <BaseText css={style} text={"(" + day + ")"} />;
};

export default DayText;
