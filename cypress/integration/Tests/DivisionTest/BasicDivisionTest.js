import CalculatorPage from "../../../support/PageObjects/CalculatorPage";

describe("Automation Test Suite to test basic functionality of Division", ()=>{

const calculatorPage = new CalculatorPage();

beforeEach("Open Calculator", ()=>{
    cy.visit("http://localhost:3000/");
});

it("Divide by zero test", ()=>{
    calculatorPage.getACKey().click();
    
    
    try {
        calculatorPage.getOneKey().click();
        calculatorPage.getDivisionKey().click();
        calculatorPage.getZeroKey().click();
        calculatorPage.getEqualsKey().click();
        
    } catch (error) {
         
        console.log("Input is not Proper", error);
    }
    
    calculatorPage.getResult().should("have.text", "Error: [big.js] Division by zero");
});

it("Random single digit divison test", ()=>{
    calculatorPage.getACKey().click();

})

});