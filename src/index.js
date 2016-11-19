

import _presence from './pure/presence'
import _email from './pure/email'
import _regexp from './pure/regexp'
import fromPure from './fromPure'
import validate from './validate'
import depends from './depends'

export default validate
export { depends }
export const presence = fromPure(_presence, 'presence')
export const email = fromPure(_email, 'email')
export const regexp = fromPure(_regexp, 'regexp')
