import { getLatestAllHistoryData } from '@/api/query';
import moment from 'moment';
import { useState } from 'react';
import style from './history.module.scss';
const ballList = [
  { color: 'green', url: 'icon/ball-green.png' },
  { color: 'red', url: 'icon/ball-red.png' },
  { color: 'blue', url: 'icon/ball-blue.png' },
];

export async function getServerSideProps() {
  const year = moment().year(); // 今年年份
  const result = await getLatestAllHistoryData();
  const data = {
    list: result || [],
    year
  };
  return { props: { data } }
}

export default function History({ data }) {
  const { list } = data || [];
  const yearList = [2023, 2024]
  const datas = {
    2023: list.filter(item => item.year == 2023),
    2024: list.filter(item => item.year == 2024)
  }
  let [active, setActive] = useState(2023)
  const handleSelect = (v) => {
    setActive(v)
  }

  return (
    <div className="content flex min-h-screen flex-col items-center pb-4 ">
      <div className=" mb-2 mt-4 w-full text-center text-xl font-bold ">
        <div>开奖历史记录</div>
        <ul className='flex gap-4'>
          {
            yearList.map(item => (<li key={item} className={active == item ? style.active : ''} onClick={() => handleSelect(item)} >{item}年</li>))
          }
          {/* <li className={active == 2023 ? style.active : ''}>2023年</li>
          <li className={active == 2024 ? style.active : ''}>2024</li> */}
        </ul>
      </div>
      <ul className="w-full overflow-auto">
        {datas[active]?.map((item) => {
          return (
            <li key={item.id} className=" w-full" style={{ borderBottom: '1px solid #ccc' }}>
              <div className=" w-full bg-gray-200 pl-1 text-left text-lg">
                <span>第</span>
                <span className=" pl-1 pr-1 text-lg font-bold text-green-600">
                  {item.periods < 10 ? '00' + item.periods : item.periods < 100 ? '0' + item.periods : item.periods}
                </span>
                <span>期开奖结果：</span>
              </div>
              <div className="flex items-center justify-around pb-3 pl-4 pr-4 pt-3 text-xl">
                <div className="text-center">
                  <div
                    style={{
                      color: item.ordinary1_color,
                      backgroundImage:
                        'url(' +
                        ballList.filter(
                          (c) => c.color == item.ordinary1_color
                        )[0]['url'] +
                        ')',
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
                  <div className=" text-base text-neutral-700">
                    {item.ordinary1_property}
                  </div>
                </div>

                <div className="text-center">
                  <div
                    style={{
                      backgroundImage:
                        'url(' +
                        ballList.filter(
                          (c) => c.color == item.ordinary2_color
                        )[0]['url'] +
                        ')',
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
                  <div className=" text-base text-neutral-700">
                    {item.ordinary2_property}
                  </div>
                </div>

                <div className="text-center">
                  <div
                    style={{
                      backgroundImage:
                        'url(' +
                        ballList.filter(
                          (c) => c.color == item.particular_color
                        )[0]['url'] +
                        ')',
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
                  <div className=" text-base text-neutral-700">
                    {item.ordinary3_property}
                  </div>
                </div>

                <div className="text-center">
                  <div
                    style={{
                      // color: item.ordinary4_color,
                      backgroundImage:
                        'url(' +
                        ballList.filter(
                          (c) => c.color == item.ordinary4_color
                        )[0]['url'] +
                        ')',
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
                  <div className=" text-base text-neutral-600">
                    {item.ordinary4_property}
                  </div>
                </div>

                <div className="text-center">
                  <div
                    style={{
                      // color: item.ordinary5_color,
                      backgroundImage:
                        'url(' +
                        ballList.filter(
                          (c) => c.color == item.ordinary5_color
                        )[0]['url'] +
                        ')',
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
                  <div className=" text-base text-neutral-600">
                    {item.ordinary4_property}
                  </div>
                </div>

                <div className="text-center">
                  <div
                    style={{
                      // color: item.ordinary6_color,
                      backgroundImage:
                        'url(' +
                        ballList.filter(
                          (c) => c.color == item.ordinary6_color
                        )[0]['url'] +
                        ')',
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
                  <div className=" text-base text-neutral-600">
                    {item.ordinary6_property}
                  </div>
                </div>
                {/* 分割标 */}
                <div className=" text-2xl from-purple-400 font-bold text-gray-600">+</div>

                <div className="rounded-xl text-center">
                  <div
                    style={{
                      backgroundImage:
                        'url(' +
                        ballList.filter(
                          (c) => c.color == item.particular_color
                        )[0]['url'] +
                        ')',
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
                  <div className=" text-center text-base text-neutral-800">
                    <span>{item.particular_property.slice(0, 1)}</span>
                    <span>/</span>
                    <span style={{ color: '#000000' }}>
                      {item.particular_property.slice(2, 3)}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
