import { nameToNum } from "@/utils/utils"

export default function Table2({ data = [], animalData = [] }) {
  // console.log('data', data);
  const list = data?.splice(0,5).map((item, i) => {
    let newItem = {}
    let selection  = nameToNum(item.names, animalData).join('.')
    let arr = item.names.split('.')
    let animals = arr.map((name, index) => {
      return index === 0 ? name : arr.slice(0, index + 1).join('.')
    })
    newItem = { ...item, selection, animals }
    return newItem
  })

  // console.log(list, '11111');
  return (
    <div className="w-full">
      <div
        className="w-full h-14 flex justify-center items-center text-2xl border-lime-300 text-yellow-300 bg-img"
        style={{ backgroundImage: "url(/images/roll-bg4.gif)" }}
      ></div>
      <div
        className="w-full h-14 flex justify-center items-center text-2xl border-lime-300 text-yellow-300 bg-img"
        style={{ backgroundImage: "url(/images/roll-bg5.gif)" }}
      ></div>
      <div
        className="w-full h-14 flex justify-center items-center text-2xl border-lime-300 text-yellow-300 bg-img"
        style={{ backgroundImage: "url(/images/roll-bg2.jpeg)" }}
      >
        <p>欧洲彩论坛(必中九肖)</p>
      </div>
      <div>
        {list.map((item, index) => (
          <div key={item.id}>
            <div className="header h-12 p-1 text-lg flex justify-center items-center bg-blue-500 text-slate-800">
              <span>精选：</span>
              <span>{item.selection}</span>
            </div>
            <ul>
              {item.animals?.map((child) => (
                <li key={item.periods + index + child} className="flex h-10" style={{ borderTop: '1px solid #ccc' }}>
                  <div className="w-20 flex justify-center items-center font-medium text-sm" style={{ backgroundColor: 'rgb(0, 204, 51)' }}>
                    <span>{item.periods}</span>
                    <span>期</span>
                    <span>{child?.split('.').length}</span>
                    <span>肖</span>
                  </div>
                  <div className="flex-1 flex justify-center items-center text-sm text-red-600 font-semibold">{child}</div>
                  <div className="w-20  flex justify-center items-center" style={{ backgroundColor: 'rgb(0, 204, 51)'}}>{item.open || '??????'}</div>
                </li>
              ))}
            </ul>
            <div className="footer h-12 p-1 bg-cyan-300 text-zinc-800 flex justify-center items-center text-xl">见证奇迹，成就梦想，彩霸王</div>
          </div>
        ))}
      </div>
    </div>
  );
}
