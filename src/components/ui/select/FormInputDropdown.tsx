import { Controller } from 'react-hook-form'
import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material'


type Props = {
    name: string;
    control: any;
    rules?: any;
    label: string;
    list: [] | any;
}

export function FormInputDropdown({ name, control, rules, label, list }: Props)
{
    const MenuProps = {
        PaperProps: {
            style: {
                color: '#000', 
                border: '1px solid #ddd',
                maxHeight: 230
            }
        }
    }

    return (
        <Controller
            name={name}      
            control={control}
            rules={rules}
            defaultValue={''}
            render={({ 
                field: { onChange, value },
                fieldState: { error },
            }) => (
                <FormControl sx={{width: '100%'}} error={!!error}>
                    <InputLabel>{label}</InputLabel>
                    <Select 
                        label={label}
                        MenuProps={MenuProps} 
                        onChange={onChange} 
                        value={value} 
                        sx={{ '.MuiSelect-select': { borderBottom: 'none !important' } }}
                    >
                        <MenuItem value={''} disabled>Выберите звание...</MenuItem>
                        {list.map((item: any, i: number) => (
                            <MenuItem key={i} value={item.key}>{item.value}</MenuItem>
                        ))}
                    </Select>
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                </FormControl> 
            )}
        />
    )
}