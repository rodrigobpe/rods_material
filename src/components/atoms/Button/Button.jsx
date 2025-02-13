import './index.scss'
import roundedToken from '/src/commons/token/rounded'
import colorToken from '/src/commons/token/color'
import paddingToken from '/src/commons/token/padding'
import { validateContrastColor } from '../../../utils';

export const Button = ({
    children,
    onClick,
    rounded,
    size,
    color,
    disabled
}) => {

    const getBoarderColor = () => {
        if (!color) throw new Error("Invalid COLOR, verify keys of colorTokens!")
        const splitedColor = color.split("_")
        return colorToken[splitedColor[0]+"_"+(parseInt(splitedColor[1]) + 100)]
    }

    const getColor = () => {
        return validateContrastColor(color)
    }

    const getStyle = () => {
        return {
            borderRadius: roundedToken[rounded] || roundedToken.SM,
            backgroundColor: colorToken[color] || colorToken.BLUE_500,
            padding: paddingToken[size] || paddingToken.MEDIUM,
            cursor: 'pointer',
            border: `2px solid ${getBoarderColor()}`,
            color: getColor(),
            outline: 'none',
            minWidth: '80px',
            maxWidth: '350px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            opacity: 0.85
        }
    };

    return (
        <button
            className="r-button"
            style={getStyle()}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
};