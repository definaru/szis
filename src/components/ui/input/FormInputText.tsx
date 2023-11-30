import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'


type Props = {
    name: string;
    control: any;
    rules?: any;
    label: string;
    defaultValue?: string;
    //setOpen: (newType: boolean) => void;
}

export function FormInputText({ name, control, rules, label, defaultValue }: Props) 
{
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({
                field: { onChange, value },
                fieldState: { error },
                //formState,
            }) => (
                <TextField
                    helperText={error ? error.message : null}
                    error={!!error}
                    onChange={onChange}
                    defaultValue={defaultValue}
                    fullWidth
                    label={label}
                    variant="outlined"
                    autoComplete='off'
                />
            )}
        />
    )
}