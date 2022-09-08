import { pageObject as po } from "./page-object"

export function userSignup(username, password) {

    const baseUrl = "https://share.getcloudapp.com"

    cy.visit(`${baseUrl}/signup`)

    const emailInputElement =
        cy.get(po.emailInput)
    emailInputElement.type(username)

    const passwordInputElement =
        cy.get(po.passwordInput)
    passwordInputElement.type(password)

    cy.get(po.submitButton).click()
}
