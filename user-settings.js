import { pageObject as po } from "./page-object"


export function userSettingUpdate() {

    const fileName = 'hamster.jpeg'

    cy.get('#avatar').click()
    cy.get('.dropdown-item').contains('Settings').click()
    cy.get(po.selectors.inputFile).attachFile(fileName)
    cy.get(po.selectors.userFullName).type(po.profile.fullName).clear()
    cy.get(po.selectors.userFullName).type(po.profile.fullName)
    cy.get(po.selectors.userCompany).type(po.profile.role).clear()
    cy.get(po.selectors.userCompany).type(po.profile.role)
    cy.get(po.selectors.userRole).select(7).should('have.value', 'information_technology')
    cy.get(po.selectors.submitButton).contains('Submit').should('be.visible').click()
}
