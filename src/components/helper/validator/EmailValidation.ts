export const Pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function EmailValidation(email: string)
{
    const isValidEmail = () => Pattern.test(email)
    console.log('Is Valid E-mail:', isValidEmail)
    return isValidEmail
}