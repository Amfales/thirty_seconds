import clsx from "clsx"

export default function BuildingSidebar(props) {
  let cName = clsx(
    "border-2 border-black",
    //"h-screen w-1/6 min-w-min",
    //"w-full",
    //"flex-grow",
    "bottom-0 relative",
    "mx-2",
    "rounded-md",
  )
  return (
    <div className={cName}>
      <p className="text-center">Buildings</p>
      <p className="m-2">Construction</p>
      <p className="m-2">Goals</p>
    </div>
  )
}