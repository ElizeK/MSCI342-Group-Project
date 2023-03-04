describe('empty spec', () => {


  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })


  it('can enter a user info and sign up ', () => {

    cy.visit('http://localhost:3000/SigningUp')
    cy.contains('Sign Up Page');
    cy.contains('Create your account below');


    cy.get('#tf1').type('user@email.com');
    cy.get('#tf2').type('username');
    cy.get('#tf3').type('123');
    cy.get('#tf4').type('123');

    cy.get('#dd1')
      .parent()
      .click()
      .get('ul > li[data-value="Business"]')
      .click();


    cy.get('#dd2')
      .parent()
      .click()
      .get('ul > li[data-value="en"]')
      .click();

    // cy.contains('SIGN UP!')
    cy.get('#buttonBox')
      .find('#bt5')
      .click();



    cy.contains('Search');


    cy.get('.MuiButton-root').then(($buttons) => {
      console.log($buttons);
    });

    // cy.get('div.MuiButton-root')
    //   .find('#bt2')
    //   .click();


    // cy.get('#bt2')
    //   .click();



    // cy.get('#toolbar')
    //   .find('#bt2')
    //   .click();

    // cy.get('div.MuiToolbar-root')
    //   .within(() => {
    //     cy.find('#bt2')
    //       .click();
    //   });

    // cy.get('[data-testid="#bt2"]').click();

  })

  // it('can submit entered info', () => {

  //   cy.get('[data-cy="submit"]').click()
  // })


})

// describe('empty spec', () => {
//   it('visits SigningUp page', () => {
//     cy.visit('http://localhost:3000/SigningUp')
//   })
// })