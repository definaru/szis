import labels from './Label.module.css'

interface Label {
    children: React.ReactNode;
    name: string;
    color?: string;
    checked?: boolean;
}

export function ColorLabel({children, name = 'text', color = 'success', checked = true}: Label)
{
    return (
        <div>
            <label>
                <input type="checkbox" className={labels[`${color}`]} name={name} value={name} defaultChecked={checked} />
                <span></span>
                {children}
            </label>            
        </div>
    )
}