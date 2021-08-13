// type definitions for Cypress object "cy"
//<reference types="cypress" />
import CalculatorPage from "../../../support/PageObjects/CalculatorPage";

describe("Automation Test Suite to check Addition", () =>{

const calculatorPage = new CalculatorPage();

 beforeEach("Open Calculator", ()=>{
    cy.visit("http://localhost:3000/");
 });

 it("Add 2 single digit numbers", ()=>{
    calculatorPage.getACKey().click();
    calculatorPage.getFiveKey().click();//5
    calculatorPage.getResult().should("have.text", "5");
    calculatorPage.getPlusKey().click();//+
    calculatorPage.getResult().should("have.text", "5");
    calculatorPage.getThreeKey().click();//3
    calculatorPage.getResult().should("have.text", "3");
    calculatorPage.getEqualsKey().click();
    calculatorPage.getResult().should("have.text", "8");//8
    calculatorPage.getACKey().click();
    calculatorPage.getNineKey().click();//9
    calculatorPage.getResult().should("have.text", "9");
    calculatorPage.getPlusKey().click();//+
    calculatorPage.getResult().should("have.text", "9");
    calculatorPage.getSevenKey().click();//7
    calculatorPage.getResult().should("have.text", "7");
    calculatorPage.getEqualsKey().click();
    calculatorPage.getResult().should("have.text", "16");
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getOneKey().click();//1
    calculatorPage.getResult().should("have.text", "1");
    calculatorPage.getPlusKey().click();//+
    calculatorPage.getResult().should("have.text", "1");
    calculatorPage.getEightKey().click();//8
    calculatorPage.getResult().should("have.text", "8");
    calculatorPage.getEqualsKey().click();
    calculatorPage.getResult().should("have.text", "9");
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getFourKey().click();//4
    calculatorPage.getResult().should("have.text", "4");
    calculatorPage.getPlusKey().click();//+
    calculatorPage.getResult().should("have.text", "4");
    calculatorPage.getSixKey().click();//6
    calculatorPage.getResult().should("have.text", "6");
    calculatorPage.getEqualsKey().click();
    calculatorPage.getResult().should("have.text", "10");
 });

 it("Verify addition of 2 digits numbers", ()=>{
    calculatorPage.getACKey().click();
    calculatorPage.getResult().should("have.text", "0");
    calculatorPage.getSevenKey().click();//7
    calculatorPage.getResult().should("have.text", "7");
    calculatorPage.getOneKey().click();//71
    calculatorPage.getResult().should("have.text", "71");
    calculatorPage.getPlusKey().click();//71
    calculatorPage.getResult().should("have.text", "71");
    calculatorPage.getEightKey().click();//8
    calculatorPage.getResult().should("have.text", "8");
    calculatorPage.getNineKey().click();//89
    calculatorPage.getResult().should("have.text", "89");
    calculatorPage.getEqualsKey().click();//160
    calculatorPage.getResult().should("have.text", "160")
 });

 it("Verify cliking on + button after clicking +/- results nothing", ()=>{
      calculatorPage.getACKey().click();
      calculatorPage.getPlusMinusKey().click();
      calculatorPage.getResult().should("have.text", "0");
      calculatorPage.getPlusKey().click();
      calculatorPage.getResult().should("have.text", "0");
 });

 it("Verify cliking on + button after clicking % results nothing", ()=>{
   calculatorPage.getACKey().click();
   calculatorPage.getPercentageKey().click();
   calculatorPage.getResult().should("have.text", "0");
   calculatorPage.getPlusKey().click();
   calculatorPage.getResult().should("have.text", "0");
});

it("Verify cliking on + button after clicking division button results nothing", ()=>{
   calculatorPage.getACKey().click();
   calculatorPage.getDivisionKey().click();
   calculatorPage.getResult().should("have.text", "0");
   calculatorPage.getPlusKey().click();
   calculatorPage.getResult().should("have.text", "0");
});

it("Verify cliking on + button after clicking multiplication button results nothing", ()=>{
   calculatorPage.getACKey().click();
   calculatorPage.getMultiplicationKey().click();
   calculatorPage.getResult().should("have.text", "0");
   calculatorPage.getPlusKey().click();
   calculatorPage.getResult().should("have.text", "0");
});

it("Verify cliking on + button after clicking minus button results nothing", ()=>{
   calculatorPage.getACKey().click();
   calculatorPage.getMinusKey().click();
   calculatorPage.getResult().should("have.text", "0");
   calculatorPage.getPlusKey().click();
   calculatorPage.getResult().should("have.text", "0");
});

});