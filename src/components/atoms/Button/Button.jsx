import './index.scss'
import roundedToken from '/src/commons/token/rounded'
import colorToken from '/src/commons/token/color'

export const Button = ({ children, onClick, rounded, disabled }) => {        
        
    const getStyle = () => {
        return {
            borderRadius: roundedToken[rounded] || roundedToken.SM,
            backgroundColor: colorToken.BLUE_500,
            padding: '8px 16px',
            cursor: 'pointer',
            border: `1px solid ${colorToken.BLUE_600}`,
            color: colorToken.WHITE,
            outline: 'none',
        }
    };

    return (
        <button
            className="r-button"
            style={getStyle()}
            onClick={onClick}
        >
            {children}
        </button>
    )
};