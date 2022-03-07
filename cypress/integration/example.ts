import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

describe("example", () => {
   it('form submission', () =>{
    websiteIsOpened();
    cy.get('.latInp').type('11')
    cy.get('.lonInp').type('123')
    cy.get('.submitForm').click()
    cy.get('.weather-info').should('exist')
  })

  it('inputs are not numbers', () =>{
    websiteIsOpened();
    expect(()=>{
        cy.get('.latInp').type('asd')
        cy.get('.lonInp').type('123')
        cy.get('.submitForm').click()
        cy.get('.weather-info').should('not.exist')
        cy.get('@consoleLog').should('be.calledWith', 'Only numbers Allowed')
    })
  })

    it('inputs are out of range', () =>{
        websiteIsOpened();
        cy.get('.latInp').type('111')
        cy.get('.lonInp').type('-92')
        cy.get('.submitForm').click()
        cy.get('.weather-info').should('not.exist')
        cy.get('@consoleLog').should('be.calledWith', 'Inputs are out of range')
           })

    it('change source without inputs', () =>{
        websiteIsOpened();
        cy.get('.changeSourceBtn').click()
        cy.get('@consoleLog').should('be.calledWith', 'You need to provide inputs, before u change source')
    })


});

function websiteIsOpened() {
  cy.visit("http://localhost:3000",{
      onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog')
      },
  });

}

