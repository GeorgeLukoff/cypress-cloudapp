import { userLogin } from "../support/page-objects/user-login"
import { userSignup } from "../support/page-objects/user-signup"
import { userSettingUpdate } from "../support/page-objects/user-settings"
import { pageObjet as po } from "../support/page-objects/page-object"
import { cloudAppUser } from "../fixtures/secrets"



describe('Home Work', () => {

  const user = cloudAppUser
  
  it("A User signs up for a Cloud App account", () => {

    userSignup(user.username, user.password)

  })

  
  it('A User updates it avatar', () => {

    const fileName = 'hamster.jpeg'

    userLogin(user.username, user.password)

    userSettingUpdate()

  })
})

