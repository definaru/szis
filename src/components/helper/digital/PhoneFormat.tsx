interface Phone {
    phone: string;
}

export function PhoneFormat({phone}: Phone)
{
    const pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
    const phone_format = phone.replace(pattern, '+7 ($2) $3-$4-$5');
    return (<a href={`tel:${phone}`}>{phone_format}</a>)
}