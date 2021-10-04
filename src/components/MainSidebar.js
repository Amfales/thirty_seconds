import clsx from "clsx"

export default function MainSidebar(props) {
  let cName = clsx(
    "border-2 border-black",
    "h-screen w-1/12 min-w-min",
    "rounded-md"
  )
  return (
    <div className={cName}>
      <p className="text-center">Nav</p>
      <p className="m-2">Construction</p>
      <p className="m-2">Goals</p>
    </div>
  )
}