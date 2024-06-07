import { StateList } from "../states/StateList"
import { StatePost } from "../states/StatePost"
import { Sliders } from "../util/Sliders"

const data = [
  {
    test:1
  },
  {
    test:2
  },
  {
    test:3
  }
]

export const HomeBody = () => {
  return (
    <div>
        <Sliders />
        <StatePost />

        {
          data.map((_value, index) => <StateList key={index} />)
        }
        
    </div>
  )
}
