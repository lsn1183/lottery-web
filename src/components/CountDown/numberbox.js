// bg-[#343650]
export const NumberBox = ({ num, unit, flip }) => {
  console.log('num', num);
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center justify-center rounded-lg w-6 h-6">
        <div className="rounded-t-lg rounded-b-lg w-full h-full"></div>
        <div className="absolute z-10 font-bold font-redhat font-mono">
          {num < 0 ? 0 : num}
        </div>
      </div>

    </div>
  )
}

