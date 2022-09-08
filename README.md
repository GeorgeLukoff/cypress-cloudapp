Development Requirements
This project makes use of Node, JavaScript and NPM.

Getting started
The following should be run from the root of this project directory, i.e. automation/ from the command line.

Install Node via NVM, see install Node Version Manager
Run npm install
If node-gyp complains about Xcode, you might need to re-install Xcode
see uninstall Xcode in Xcode faq
then run xcode-select --install
Run node_modules/cypress/bin/cypress install
Your environment should now be ready to run Cypress

Writing Tests
Always include selectors as const values at the top of each integration test file.
Use Xpath selectors with cy.xpath(xpathSelector) where xpathSelector looks something like '//button[contains(text(), "Sign In")]'. See Resources.
Use jquery selectors with cy.get(selector) where selector looks something like 'input#image'.
There should be one Practitest test case per integration file / it('test case name'), () => {})' function.
Test formatting should look like this
    describe('Practitest testset name', () => {
        it('test case name', () => {
            //do steps here
        })
    })
Resources
Xpath syntax cheat sheet

Read the Official Cypress Docs! Cypress best practices

Look at examples for particular use cases!
