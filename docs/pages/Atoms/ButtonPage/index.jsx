import { Button } from '@/components/Atoms/Button/Button'
import colorConstants from '@/commons/constanst/color'
import roundedConstants from '@/commons/constanst/rounded'
import paddingConstants from '@/commons/constanst/padding'

export const ButtonPage = () => {
    return (
        <>
            <h1>Exemple buttons</h1>
            <div style={{ display: 'flex', alignItems: 'center', height: '50px', gap: '10px' }}>
                <Button color={"RED_500"} size={paddingConstants.SMALL}>Banana</Button>
                <Button color={colorConstants.ORANGE_500} size={paddingConstants.MEDIUM}>Banana</Button>
                <Button color={colorConstants.BLUE_500} size={paddingConstants.LARGE}>Banana</Button>
                <Button color={colorConstants.GREEN_500} size={paddingConstants.EXTRA_LARGE}>Banana</Button>
                <Button color={colorConstants.YELLOW_500}>Banana</Button>
            </div>
        </>
    )
}