import { userLogin } from "../support/page-objects/user-login"
import { userSignup } from "../support/page-objects/user-signup"
import { userSettingUpdate } from "../support/page-objects/user-settings"
import { verifyAvatar } from "../support/page-objects/user-avatar"


describe('Home Work', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test when it encounters 'grecaptcha' pop up
    return false
  });


  let user

  beforeEach(function () {
    cy.fixture('secrets').then((data) => {
      user = data
    })
  })


  it('A User signs up for a Cloud App account', () => {

    userSignup(user.username, user.password)

  })


  it('A User logs in and updates it avatar', () => {

    userLogin(user.username, user.password)

    userSettingUpdate()

  })
})
