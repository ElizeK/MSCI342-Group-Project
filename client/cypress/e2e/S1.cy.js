describe('Sign up and search for articles', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display sign up page', () => {
    cy.visit('http://localhost:3000/SigningUp')
    cy.contains('Sign Up Page').should('exist')
    cy.contains('Create your account below').should('exist')
  })

  it('should sign up a user', () => {
    cy.visit('http://localhost:3000/SigningUp')
    cy.get('#tf1').type('user@email.com')
    cy.get('#tf2').type('username')
    cy.get('#tf3').type('123456')
    cy.get('#tf4').type('123456')
    cy.get('#dd1').click().get('ul > li[data-value="Business"]').click()
    cy.get('#dd2').click().get('ul > li[data-value="en"]').click()
    cy.get('#buttonBox').find('#bt5').click()
    cy.wait(3000) // wait for API response
  })

  it('should view profile page', () => {
    cy.visit('http://localhost:3000/Profile')
    
    cy.wait(3000) // wait for API response
  })



  it('should display articles after search', () => {
    cy.visit('http://localhost:3000/Search');
    cy.get('[data-testid="searchbox"]').type('canada');
    cy.get('[data-testid="Source"]').click();
    cy.contains('ABC News').click();
    cy.get('[data-testid="Language"]').click();
    cy.contains('English').click();
    cy.get('[data-testid="Sort By"]').click();
    cy.contains('Relevancy').click();
    cy.get('[data-testid="search-button"]').click();
    cy.wait(3000); // wait for API response
    cy.get('[data-testid="articles"]').should('exist');
  });
})
