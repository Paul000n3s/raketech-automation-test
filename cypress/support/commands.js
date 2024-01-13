Cypress.Commands.add('searchBar', (product) => {
    cy.get('.mobile-search').click({force: true})
    cy.get('[id=search]').type(product)
    cy.get('input').type("{enter}")
  });

