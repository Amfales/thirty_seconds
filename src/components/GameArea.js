import Location from './Location'

//import {ReactComponent as WheatImage} from '../images/wheat-svgrepo-com.svg'
import svg_manager from '../images/svg_man'


export default function GameArea(props) {
  let keys = Object.keys(svg_manager);
  let max_imgs = keys.length;
  //let w_img = svg_manager["wheat"];
  const spaces = (amt) => {
    let a = [];
    for(let i = 0; i < amt; i++) {
      let rand = (Math.random() * (max_imgs  + 1)) | 0;
      console.log(keys);
      console.log(i,rand);
      if (rand === 0) {
        a.push(<Location />);
      }
      else {
        a.push(<Location img={svg_manager[keys[rand-1]]} />)
      }
    }
    return a;
  }


  return (
    <div className="flex">
      {spaces(props.numSpaces)}
    </div>
  )
}