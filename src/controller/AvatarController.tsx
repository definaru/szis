import { Avatar } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { GetDataPhoto } from '../components/data/GetDataPhoto'


export function AvatarController(name: string, width?: number | string, height?: number | string)
{
    const w = width ?? 156
    const h = height ?? 200
    const avatar = GetDataPhoto()
    const color = { bgcolor: deepPurple[500], width: w, height: h, fontSize: 80 }
    const result = avatar.filter(n => n.person.includes(name))[0]

    const stringAvatar = (name: string) => {
        return {
            sx: color,
            children: `${name[0]}`,
        };
    }

    return (
        <>
            {result ?
                <Avatar
                    alt={result.person}
                    src={result.avatar}
                    variant='rounded'
                    sx={color}
                /> :
                <Avatar 
                    variant='rounded' 
                    {...stringAvatar(name)} 
                />      
            }
        </>
    )
}