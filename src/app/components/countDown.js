import useCountDown from "@/hooks/useCountDown";
import { formatRemainTime } from "@/utils/utils";
import { useEffect } from "react";

export default ({ value = 0, total = 2400_000, onChange = () => {} }) => {
  // 倒计时
  const [countDownNum, setCountDown] = useCountDown();
  useEffect(() => {
    if (value !== void 0) {
      setCountDown(value, total);
    }
  }, [value]);
  useEffect(() => {
    if (countDownNum !== void 0) {
      onChange?.(countDownNum);
    }
  }, [countDownNum]);
  return (
    <div className="com-count-down">{formatRemainTime(countDownNum)}</div>
  );
};
