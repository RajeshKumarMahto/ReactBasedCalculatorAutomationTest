class CalculatorPage{


    getACKey(){
        return cy.get("div[class='component-app'] div:nth-child(1) div:nth-child(1) button:nth-child(1)");
    }

    getPlusMinusKey(){
        return cy.get("div[class='component-app'] div:nth-child(1) div:nth-child(2) button:nth-child(1)");
    }

    getPercentageKey(){
        return cy.get("div[class='component-app'] div:nth-child(1) div:nth-child(3) button:nth-child(1)");
    }

    getDivisionKey(){
        return cy.get("div[class='component-app'] div:nth-child(1) div:nth-child(4) button:nth-child(1)");
    }

    getMultiplicationKey(){
        return cy.get("div[class='component-button-panel'] div:nth-child(2) div:nth-child(4) button:nth-child(1)");
    }


    getMinusKey(){
        return cy.get("div:nth-child(3) div:nth-child(4) button:nth-child(1)");
    }
    getPlusKey(){
        return cy.get("div:nth-child(4) div:nth-child(4) button:nth-child(1)");
    }
    getEqualsKey(){
        return cy.get("div:nth-child(5) div:nth-child(3) button:nth-child(1)");
    }
    getDecimalKey(){
        return cy.get("div:nth-child(5) div:nth-child(2) button:nth-child(1)");
    }
    getZeroKey(){
        return cy.get("div:nth-child(5) div:nth-child(1) button:nth-child(1)");
    }
    getOneKey(){
        return cy.get("div:nth-child(4) div:nth-child(1) button:nth-child(1)");
    }
    getTwoKey(){
        return cy.get("div:nth-child(4) div:nth-child(2) button:nth-child(1)");
    }
    getThreeKey(){
        return cy.get("div:nth-child(4) div:nth-child(3) button:nth-child(1)");
    }
    getFourKey(){
        return cy.get("div:nth-child(3) div:nth-child(1) button:nth-child(1)");
    }
    getFiveKey(){
        return cy.get("div:nth-child(3) div:nth-child(2) button:nth-child(1)");
    }
    getSixKey(){
        return cy.get("div:nth-child(3) div:nth-child(3) button:nth-child(1)");
    }
    getSevenKey(){
        return cy.get("div[class='component-button-panel'] div:nth-child(2) div:nth-child(1) button:nth-child(1)");
    }
    getEightKey(){
        return cy.get("div[class='component-button-panel'] div:nth-child(2) div:nth-child(2) button:nth-child(1)");
    }
    getNineKey(){
        return cy.get("div[class='component-button-panel'] div:nth-child(2) div:nth-child(3) button:nth-child(1)");
    }
    getResult(){
        return cy.get(".component-display > div");
    }

    getDivisonByZeroError(){
        return cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");
    }

}

export default CalculatorPage;