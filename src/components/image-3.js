import Image from "next/image";

// 波叔推荐， 
export default function ImageThree({ periodCount }) {
  // let days = moment().dayOfYear(); // 今年的第几天
  return (
    <div className="flex w-full flex-wrap justify-between gap-1 mt-2">
      <Image
        src={`/images/main/${periodCount}-1.png` || `/images/main/${periodCount}.jpeg`}
        alt="img"
        width={768}
        height={200}
        priority={false}
        style={{ height: "100%", width: "100%" }}
      />

    </div>
  );
}
