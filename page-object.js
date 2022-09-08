import { userLogin } from "./user-login"
import { userSignup } from "./user-signup"
import { userSettingUpdate } from "./user-settings"


export const pageObject = {
    userLogin: userLogin,
    userSignup: userSignup,
    userSettingUpdate: userSettingUpdate,
    // verifyAvatar: verifyAvatar,

    selectors: {
        emailInput: 'input[type="email"]',
        passwordInput: 'input[type="password"]',
        submitButton: 'input[type="submit"]',
        userFullName: 'input[placeholder = "Name"]',
        userCompany: 'input[placeholder = "ex: Apple Inc."]',
        userRole: 'select[name = "user[profile]"]',
        inputFile: 'input[type="file"]'
    },

    profile: {
        fullName: "George Lukoff",
        company: "Self",
        role: "Information Technology"
    }
}
