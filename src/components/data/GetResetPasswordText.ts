export function GetResetPasswordText()
{
    return {
        required_email: 'Введите ваш e-mail, данное поле обязательно для заполнения',
        required_pattern: 'Введенное значение не соответствует формату электронной почты',
        style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 425,
            bgcolor: '#0D1535',
            border: 'none',
            borderRadius: '12px',
            boxShadow: 24,
            p: 3,
        },
        modal: {
            header: 'Восстановить пароль',
            message: 'Новый пароль будет выслан на вашу электронную почту',
            textbutton: 'Получить новый пароль',
            is_valid: true
        } 
    }
}