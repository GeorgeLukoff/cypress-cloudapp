import { pageObject as po } from "./page-object"


export function userLogin(username, password) {

    const baseUrl = "https://share.getcloudapp.com"

    cy.visit(`${baseUrl}/login`)

    const emailInputElement = 
        cy.get(po.selectors.emailInput)
    emailInputElement.type(username)

    const passwordInputElement =
        cy.get(po.selectors.passwordInput)
    passwordInputElement.type(password)

    cy.get(po.selectors.submitButton).click()
}
