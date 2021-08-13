import CalculatorPage from "../../../support/PageObjects/CalculatorPage";

describe("Automation Test Suite check buttons on click", () =>{

const calculatorPage = new CalculatorPage();

 beforeEach("Open Calculator", ()=>{
    cy.visit("http://localhost:3000/");
 });

 it("Verify single click on AC button results to 0)", ()=>{
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
 });
 
 it("Verify multiple clicks on AC button leads to result 0", ()=>{
    calculatorPage.getACKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
 })

 it("Verify AC button click should make result 0 after clicking any number between 1 to 9 one time", ()=>{
    calculatorPage.getOneKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getTwoKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getThreeKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getFourKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getFiveKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getSixKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getSevenKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getEightKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getNineKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
 })

 it("Verify AC button click should make result 0 after clicking any digit any time", ()=>{
    calculatorPage.getOneKey().click();
    calculatorPage.getOneKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getTwoKey().click();calculatorPage.getNineKey().click();
    calculatorPage.getTwoKey().click();
    calculatorPage.getTwoKey().click();calculatorPage.getNineKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getThreeKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getFourKey().click();calculatorPage.getFourKey().click();
    calculatorPage.getFourKey().click();calculatorPage.getFourKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getFiveKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getSixKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getSevenKey().click();calculatorPage.getSevenKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getEightKey().click();calculatorPage.getSevenKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getNineKey().click();
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
 })




});