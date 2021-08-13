import CalculatorPage from "../../../support/PageObjects/CalculatorPage";

describe("Automation Test Suite to test basic functionality of decimal", ()=>{

const calculatorPage = new CalculatorPage();
beforeEach("Open Calculator", ()=>{
    cy.visit("http://localhost:3000/");
});

it("Verify only one decimal is displayed in ouptut if clicked multipletimes", ()=>{
    calculatorPage.getACKey().click();
    calculatorPage.getDecimalKey().click();
    calculatorPage.getResult().should("have.text", "0.");
    calculatorPage.getDecimalKey().click();
    calculatorPage.getDecimalKey().click();
    calculatorPage.getResult().should("have.text", "0.");
    calculatorPage.getFiveKey().click();
    calculatorPage.getResult().should("have.text", "0.5");
    calculatorPage.getZeroKey().click();
    calculatorPage.getResult().should("have.text", "0.50");
})

});