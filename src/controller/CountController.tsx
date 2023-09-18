interface Count {
    count: number;
    word_one?: string;
    word_two?: string;
    word_free?: string;
    declension?: boolean
}

export function CountController({
    count, 
    word_one = 'фильм', 
    word_two = 'фильма', 
    word_free = 'фильмов', 
    declension = false
}: Count)
{

    console.log('count',typeof count)
    
    const module: number = count % 10; 
    const inclination: number = count % 100;

    if(declension) {count = count}
    if(module == 0 || module >= 5 || ( inclination >= 10 && inclination <= 20 ) ) {
        return (
            <>{`${count} ${word_free}`}</>
        )
    }
    if(module >= 2 && module <= 4) return  (
        <>{`${count} ${word_two}`}</>
    )

    return (
        <>{`${count} ${word_one}`}</>
    )

}