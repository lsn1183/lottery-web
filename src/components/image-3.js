import moment from "moment";
import Image from "next/image";

// 插图集合
export default function ImageThree() {
  let days = moment().dayOfYear(); // 今年的第几天
  return (
    <div className="flex w-full flex-wrap justify-between gap-1 mt-2">
      <Image
        src={`/images/main/${days}.jpg`}
        alt="img"
        width={768}
        height={200}
        priority={false}
        style={{ height: "100%", width: "100%" }}
      />

    </div>
  );
}
