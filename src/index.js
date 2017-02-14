import _presence from './pure/presence'
import _regexp from './pure/regexp'
import _email from './pure/email'
import fromPure from './fromPure'
import withMessage from './withMessage'
import validate from './validate'
import depends from './depends'

export default validate
export { depends, fromPure, withMessage }
export const presence = fromPure(_presence, 'presence')
export const regexp = fromPure(_regexp, 'regexp')
export const email = fromPure(_email, 'email')
