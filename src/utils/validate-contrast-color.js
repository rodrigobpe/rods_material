import colorConstants from "../commons/constanst/color"

export const validateContrastColor = (key) => {
    return [
        colorConstants.BLUE_500,
        colorConstants.GREEN_500,
        colorConstants.ORANGE_500,
        colorConstants.RED_500,
    ].includes(key) ? colorConstants.WHITE: colorConstants.BLACK
}