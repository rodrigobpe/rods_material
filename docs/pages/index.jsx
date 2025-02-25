import docsJson from '../docs.json'
import { Link } from 'react-router'

export const Pages = () => {
    const getTagComponents = (tags) => {
        return tags.map((tag, i) => {
            return <p style={{backgroundColor:'red', padding:'4px 8px', borderRadius: 5, color: 'white'}} key={i}>{tag}</p>
        })
    }

    const getComponents = () => {
        return docsJson.map(component => {
            return <li style={{display: 'flex', alignItems: 'center', gap: 10}} key={component.componentName}>
                <Link to={component.componentName.toLowerCase()} state={component.props}>
                    {component.componentName}
                </Link>
                {getTagComponents(component.tags)}
            </li>
        })
    }

    return (
        <div>
            <h1>Lista de compontes disponiveis</h1>
            <ul>
                {getComponents()}
            </ul>
        </div>
    )
}