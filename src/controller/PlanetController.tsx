import { GetDataPlanet } from '../components/data/GetDataPlanet'


export function PlanetController(name: string)
{
    const planet = GetDataPlanet()
    const result = planet.filter(n => n.url.includes(name))[0]

    return (
        <>
            {result ? 
                <p>{result.name}</p> : 
                <em>{'Unkown planet'}</em>
            }
        </>
    )
}