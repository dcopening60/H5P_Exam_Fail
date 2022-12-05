import 'cypress-iframe'
describe("Student take H5P Interactive Book exam",()=>{
it("Student take H5P Interactive Book exam ",()=>{
    Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })
  
    cy.visit("https://cypresstest2.sharmony.org/cypresstesttwo/multiple-choice-3-assessment-in-wordpress")
    cy.wait(4000)
    cy.wait(4000)
    cy.frameLoaded('[data-content-id="' + 1 + '"]')
       
    cy.task('log','iFrame loaded')
      
    //Question 1
       
    cy.iframe('[data-content-id="' + 1 + '"]').find('[aria-labelledby="h5p-mcq0"]')
        .contains('State sovreignty, national union')
        .should('be.visible').click({ force: true, timeout: 40000 })
    cy.iframe('[data-content-id="' + 1 + '"]').contains('Check').click() 
    cy.wait(4000)
    //cy.pause()
    cy.iframe('[data-content-id="' + 1 + '"]')
        .find('[class="h5p-interactive-book-status"]')
        .find('[class="navigation-button icon-next"]')
        .should('be.visible').first().click({force: true })
    
       
    //Question 2       
    cy.iframe('[data-content-id="' + 1 + '"]').find('[aria-labelledby="h5p-mcq1"]')
        .contains('Illinois')
        .should('be.visible').click({ force: true, timeout: 40000 })
    cy.iframe('[data-content-id="' + 1 + '"]').contains('Check').click() 
    cy.wait(4000)
    cy.iframe('[data-content-id="' + 1 + '"]')
        .find('[class="h5p-interactive-book-status"]')
        .find('[class="navigation-button icon-next"]')
        .should('be.visible').first().click({force: true })

   
    //Question 3       
    cy.iframe('[data-content-id="' + 1 + '"]').find('[aria-labelledby="h5p-mcq2"]')
        .contains('Illinois is the 21st state and Illinois joined the Union on December 1, 1818')
        .should('be.visible').click({ force: true, timeout: 40000 })
    cy.iframe('[data-content-id="' + 1 + '"]').contains('Check').click() 
    cy.wait(4000)
    cy.iframe('[data-content-id="' + 1 + '"]')
        .find('[class="h5p-interactive-book-summary-text"]')
        .should('be.visible').first().click({force: true })
  

})
})
