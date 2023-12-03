import Image from "next/image";
import { API } from "../../utils/config";

/**
 * 开奖历史记录
 * @returns
 */
async function getHistoryList() {
  const res = await fetch(API + "/open/list");
  const data = await res.json();
  return data;
}

const ballList = [
  {color: 'green', url: 'icon/ball-green.png'},
  {color: 'red', url: 'icon/ball-red.png'},
  {color: 'blue', url: 'icon/ball-blue.png'},
]

export default async function History() {
  const { data } = await getHistoryList();
  const list = data.sort((a, b) => b.periods - a.periods); // 倒序
  // console.log("list", list, 11111);

  return (
    <div className="flex min-h-screen flex-col items-center content pb-12">
      <Image
        src="/images/222.jpg"
        alt="Vercel Logo"
        className="dark:invert"
        width={768}
        height={48}
        priority
      />
      <div className=" font-bold text-center w-full text-xl mb-2 mt-2">
        2023年开奖记录
      </div>
      <ul className=" w-full">
        {list?.map((item) => {
          return (
            <li key={item.id} className=" w-full" style={{borderBottom: '1px solid #ccc'}}>
              <div className=" w-full text-left text-lg pl-1 bg-gray-200" >
                <span>第</span>
                <span className=" text-green-600 pl-1 pr-1 text-lg font-bold">
                  {item.periods}
                </span>
                <span>期开奖结果：</span>
              </div>
              <div className="flex items-center justify-around pl-4 pr-4 text-xl pt-3 pb-3">
                <div className="rounded-xl text-center">
                  <div
                    style={{
                      backgroundImage:  'url(' + ballList.filter(c=> c.color == item.particular_color)[0]['url'] + ')',
                      margin: '0 auto',
                      width: '2rem',
                      height: '2rem',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#000',
                    }}
                  >
                    {item.particular}
                  </div>
                  <div className=" text-center text-sm text-neutral-600">
                    <span>{item.particular_property.slice(0,1)}</span>
                    <span>/</span>
                    <span style={{color: 'gold'}}>{item.particular_property.slice(2,3)}</span>
                  </div>
                </div>
                <div className=" text-xl text-gray-400">+</div>
                <div className="text-center">
                  <div
                    style={{
                      color: item.ordinary1_color,
                      backgroundImage:  'url(' + ballList.filter(c=> c.color == item.ordinary1_color)[0]['url'] + ')',
                      margin: '0 auto',
                      width: '2rem',
                      height: '2rem',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#000',
                    }}
                  >
                    {item.ordinary1}
                  </div>
                  <div className=" text-sm text-neutral-700">{item.ordinary1_property}</div>
                </div>

                <div className="text-center">
                  <div
                    style={{
                      // color: item.ordinary2_color,
                      backgroundImage:  'url(' + ballList.filter(c=> c.color == item.ordinary2_color)[0]['url'] + ')',
                      margin: '0 auto',
                      width: '2rem',
                      height: '2rem',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#000',
                    }}
                  >
                    {item.ordinary2}
                  </div>
                  <div className=" text-sm text-neutral-600">{item.ordinary2_property}</div>
                </div>

                <div className="text-center">
                  <div
                    style={{
                      // color: item.particular_color,
                      backgroundImage:  'url(' + ballList.filter(c=> c.color == item.particular_color)[0]['url'] + ')',
                      margin: '0 auto',
                      width: '2rem',
                      height: '2rem',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#000',
                    }}
                  >
                    {item.ordinary3}
                  </div>
                  <div className=" text-sm text-neutral-600">{item.ordinary3_property}</div>
                </div>

                <div className="text-center">
                  <div
                    style={{
                      // color: item.ordinary4_color,
                      backgroundImage:  'url(' + ballList.filter(c=> c.color == item.ordinary4_color)[0]['url'] + ')',
                      margin: '0 auto',
                      width: '2rem',
                      height: '2rem',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#000',
                    }}
                  >
                    {item.ordinary4}
                  </div>
                  <div className=" text-sm text-neutral-600">{item.ordinary4_property}</div>
                </div>

                <div className="text-center">
                  <div
                    style={{
                      // color: item.ordinary5_color,
                      backgroundImage:  'url(' + ballList.filter(c=> c.color == item.ordinary5_color)[0]['url'] + ')',
                      margin: '0 auto',
                      width: '2rem',
                      height: '2rem',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#000',
                    }}
                  >
                    {item.ordinary5}
                  </div>
                  <div className=" text-sm text-neutral-600">{item.ordinary4_property}</div>
                </div>

                <div className="text-center">
                  <div
                    style={{
                      // color: item.ordinary6_color,
                      backgroundImage:  'url(' + ballList.filter(c=> c.color == item.ordinary6_color)[0]['url'] + ')',
                      margin: '0 auto',
                      width: '2rem',
                      height: '2rem',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#000',
                    }}
                  >
                    {item.ordinary6}
                  </div>
                  <div className=" text-sm text-neutral-600">{item.ordinary6_property}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
