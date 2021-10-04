import MainSidebar from './components/MainSidebar'
import BuildingSidebar from './components/BuildingSidebar'
import ResourceDisplay from './components/ResourceDisplay'
import GameArea from './components/GameArea'

import Resource from './data/resources'

export default function Main() {
  let wheat = new Resource("Wheat", 0);
  let egg = new Resource("Eggs", 1);
  let res = [
    wheat,
    egg,
  ]


  return (
    <div className="flex bg-blue-200">
      <MainSidebar />
      <div className="flex-grow flex flex-col relative">
        <GameArea numSpaces={5} />
        <div className="flex-grow" />
        <BuildingSidebar />
      </div>
      <ResourceDisplay resources={res} />
    </div>
  )
}