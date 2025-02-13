import { Button } from "./components/atoms/Button/Button"
import colorConstants from './commons/constanst/color'
import roundedConstants from './commons/constanst/rounded'
import paddingConstants from './commons/constanst/padding'

function App() {
  return (
    <>
      <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh', gap: '10px'}}>

        <Button color={colorConstants.RED_500} size={paddingConstants.SMALL} disabled rounded={roundedConstants.XL}>Banana</Button>
        <Button color={colorConstants.ORANGE_500} size={paddingConstants.MEDIUM}>Banana</Button>
        <Button color={colorConstants.BLUE_500} size={paddingConstants.LARGE}>Banana</Button>
        <Button color={colorConstants.GREEN_500} size={paddingConstants.EXTRA_LARGE}>Banana</Button>
        <Button color={colorConstants.YELLOW_500}>Banana</Button>
      </div>
    </>
  )
}

export default App
