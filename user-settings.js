import { pageObject as po } from "./page-object"
import { cloudAppUser } from "../../fixtures/secrets"

export function userSettingUpdate() {
    cy.get('#avatar').click()
    cy.get('.dropdown-item').contains('Settings').click()
    cy.get(fileInput).attachFile(fileName)
    cy.get(userFullName).type(fullName).clear()
    cy.get(userFullName).type(fullName)
    cy.get(userCompany).type(role).clear()
    cy.get(userCompany).type(role)
    cy.get(userRole).select(7).should('have.value', 'information_technology')
    cy.get(submitButton).contains('Submit').should('be.visible').click()
}