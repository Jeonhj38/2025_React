import BaseText from "./BaseText";

const DateText = (props) => {
  const { month, date } = props;

  const style = {
    fontSize: "40px",
    lineHeight: "40px",
    fontWeight: "300",
    letterSpacing: "-0.04em",
  };

  return <BaseText css={style} text={month + "." + date} />;
};

export default DateText;
