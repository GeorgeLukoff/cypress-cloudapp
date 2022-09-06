import { pageObject as po } from "./page-object"
import { cloudAppUser } from "../../fixtures/secrets"

export function userSignup(username, password) {

    let review_recaptcha_widget
    let onloadCallback = function () {
        if ($('#review_recaptcha').length) {
            review_recaptcha_widget = grecaptcha.render('review_recaptcha', {
                'sitekey': '<?php echo $site_key?>'
            })
        }
    }

    // const user = cloudAppUser

    const baseUrl = "https://share.getcloudapp.com"

    cy.visit(`${baseUrl}/signup`)

    const emailInputElement =
        cy.get(po.globalSelectors.emailInput).type(username)

    const passwordInputElement =
        cy.get(po.globalSelectors.passwordInput)
    passwordInputElement.type(password)

    cy.get(po.globalSelectors.submitButton).click()
}