export function BytesToSize(bytes: number)
{
    const sizes = ['Bt', 'KB', 'MB', 'GB', 'TB']
    if (!bytes) return '0 Bt'
    const i = Number(Math.floor(Math.log(bytes) / Math.log(1024))) // parseInt
    return Math.round(Number(bytes) / Math.pow(1024, i)) + ' ' + sizes[i]
}