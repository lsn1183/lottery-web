
export const NumberBox = ({ num, unit, flip }) => {
  console.log('num', num);
  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg w-8 h-6 text-sm ">
        <div className="rounded-t-lg rounded-b-lg bg-[#343650] w-full h-full"></div>
        <div className="text-base absolute text-rose-500 z-10 font-bold font-redhat font-mono">
          {num}
        </div>
      </div>

    </div>
  )
}

