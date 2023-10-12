interface Label {
    text: 'На работе' | 'В отделе' | 'На вызове' | string;
}


interface Color {
    [k: string]: string; //unknown
}

export function Status({text = 'На работе'}: Label)
{
    const color: Color = {
        'На работе': '#8ED59B',
        'В отделе': '#8ED59B',
        'На вызове': '#FF9498'
    }

    const styles = {
        display: 'flex',
        width: '120px',
        color: '#fff',
        backgroundColor: color[text], 
        justifyContent: 'center',
        borderRadius: '50em',
        lineHeight: 2,
        fontWeight: 500
    }

    return (
        <div style={styles}>{text}</div>
    )
}