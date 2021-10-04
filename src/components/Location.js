import clsx from "clsx"

export default function Location(props) {
  let cName = clsx(
    "border-2 border-black",
    "m-2",
    "h-16 w-16",
    props.img && "p-2",
    //"min-h-full"
  );
  



  let i = () => {
    if (props.img && props.img !== '')
      return <img className="w-full h-full" src={props.img} />
    return '';
  }
  return (
    <div className={cName}>
      {i()}
    </div>
  )
}