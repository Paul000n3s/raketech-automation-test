describe('Access Casino Guide From Raketech Products Page', () => {
    beforeEach(() => {
        cy.visit('https://raketech.com/')
    })
  
    it('Should Access Casino Guide Page', () => {
        cy.searchBar("products")
        cy.get('#search-results a[href="https://raketech.com/products/"]').click()
        cy.contains('Casinoguide').click({force: true})
        cy.get('.team-desc > .bottom_meta > [href="https://www.casinoguide.se"]').invoke('removeAttr', 'target').click()
        
        cy.on('uncaught:exception', (e) => {
            if (e.message.includes('Things went bad')) {
              return false;
            }
        }); 

        cy.origin('https://www.casinoguide.se', () => {
            cy.contains('Casino Online').should('exist');
        })
    })
})