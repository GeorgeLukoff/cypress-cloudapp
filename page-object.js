// import { login } from "../support/page-objects"
// import { signup } from "../support/page-objects"
// import { settings } from "../support/page-objects"

export const pageObject = {
    globalSelectors: {
        emailInput: 'input[type="email"]',
        passwordInput: 'input[type="password"]',
        submitButton: 'input[type="submit"]',
        userFullName: 'input[placeholder = "Name"]',
        userCompany: 'input[placeholder = "ex: Apple Inc."]',
        userRole: 'select[name = "user[profile]"]',
        fileInput: 'input[type="file"]'
    }
}
