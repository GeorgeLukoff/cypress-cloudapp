import { pageObject as po } from "./page-object"
import { cloudAppUser } from "../../fixtures/secrets"

export function userLogin(username, password) {

    // const user = cloudAppUser

    const baseUrl = "https://share.getcloudapp.com"

    cy.visit(`${baseUrl}/login`)

    const emailInputElement =
        cy.get(po.globalSelectors.emailInput).type(username)

    const passwordInputElement =
        cy.get(po.globalSelectors.passwordInput)
    passwordInputElement.type(password)

    cy.get(po.globalSelectors.submitButton).click()
}