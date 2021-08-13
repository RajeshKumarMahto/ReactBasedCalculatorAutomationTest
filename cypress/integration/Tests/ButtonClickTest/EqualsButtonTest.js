import CalculatorPage from "../../../support/PageObjects/CalculatorPage";

describe("Automation Test Suite to check Equals Button", ()=>{

const calculatorPage = new CalculatorPage();
beforeEach("Open Calculator", ()=>{
    cy.visit("http://localhost:3000/");
});

it("Verify single click on equals button results nothing if no any numeric key is clicked before", ()=>{
    calculatorPage.getEqualsKey().click();
    calculatorPage.getResult().should("have.text", "0");
});

it("Verify multiple click on equals button results nothing if no any numeric key is clicked before", ()=>{
    calculatorPage.getEqualsKey().click();
    calculatorPage.getEqualsKey().click();
    calculatorPage.getEqualsKey().click();
    calculatorPage.getResult().should("have.text", "0");
});

it("Verify the equals button when equals key is pressed folowed by any numeric key single time", () =>{
    calculatorPage.getZeroKey().click();
    calculatorPage.getEqualsKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getOneKey().click();
    calculatorPage.getEqualsKey().click();
    calculatorPage.getResult().should("have.text", "1");
    calculatorPage.getTwoKey().click();
    calculatorPage.getEqualsKey().click();
    calculatorPage.getResult().should("have.text", "12");
})

})