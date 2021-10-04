import clsx from "clsx"

export default function ResourceDisplay(props) {
  let cName = clsx(
    "flex flex-col",
    "flex-shrink",
    "h-screen w-1/12 min-w-min",
    "border-2 border-black",
    //"mx-2",
    "rounded-md",
  )
  return (
    <div className={cName}>
      <p className="w-full text-center">Resources</p>
      {props.resources.map((res) => {
        let rName = (res.amount !== 1 && res.pluralName) ? res.pluralName : res.name;
        return <p className="mx-2 whitespace-nowrap">{rName}: {res.amount}</p>
      })}
    </div>
  )
}