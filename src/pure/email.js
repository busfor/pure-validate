import isEmail from 'sane-email-validation'

function email(value) {
  return isEmail(value)
}

email.message = 'Неверный формат email'

export default email
