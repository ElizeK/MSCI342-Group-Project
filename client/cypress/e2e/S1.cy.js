describe('Sign up and search for articles', () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:3000/')
  // })

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

  it('should scroll down to favorited articles', () => {
    cy.visit('http://localhost:3000/Profile')

    // Get the "Favorited Articles" section
    cy.get('[data-testid=profile-component]').scrollIntoView();

    // Check if the section is visible
    cy.get('[data-testid=profile-component]').should('be.visible');
  });



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
    // cy.get('[data-testid="articles"]').should('exist');
  });


  it('should change the preference when a new option is selected', () => {
    // Set up test data
    cy.visit('http://localhost:3000/Profile');
    cy.get('[id = "dd1"').click();
    cy.contains('Business').click({ force: true }); // add force: true option
    cy.get('[id = "dd2"').click();
    cy.contains('English').click();
    cy.get('[id="update-preferences"]').click();
    cy.visit('http://localhost:3000/');

  });

  it('should create a new thinkpiece', () => {
    // Set up test data
    cy.visit('http://localhost:3000/ThinkPiece');
    cy.get('[data-testid="Title"]').type('My First Think Piece');
    cy.get('[data-testid="Summary"]').type('A brief summary of my think piece');
    // cy.get('[data-testid="Topic"]').select('General');
    cy.get('[data-testid="Topic"]').click()
    cy.contains('General').click({ force: true });
    cy.get('[data-testid="URL"]').type('https://www.example.com/article', { force: true });
    cy.get('[data-testid="Content"]').type('This is my first think piece. It is about...');
    cy.get('[data-testid="Submit"]').click();

  });

  

  const thinkpiece = {
    uuid: 'abc123',
    title: 'Test Think Piece',
    summary: 'This is a test think piece.',
    topic: 'General',
    url: 'https://example.com',
    content: 'Testing thinkpiece.',
  };

  it('should allow editing a think piece', () => {
    cy.visit('http://localhost:3000/ViewThinkPiece');
    // cy.contains('View Think Pieces').click();
    cy.contains(thinkpiece.title).parent().within(() => {
      cy.contains('Edit think piece').click();
      cy.get('#outlined-basic').first().clear().type('New Title');
      cy.get('#outlined-basic').eq(1).clear().type('New summary.');
      cy.get('[data-testid="Topic"]').select('Technology');
      cy.contains('Save Edits').click();
    });
    cy.contains('New Title').should('exist');
    cy.contains('New summary.').should('exist');
    cy.contains('Technology').should('exist');
  });

  it('filters thinkpieces by category', () => {
    cy.visit('http://localhost:3000/ViewOtherThinkPiece');
    cy.get('[data-testid=Category]').select('Business')
    cy.get('[data-testid=Search]').click()
    cy.get('.ArticleCard').should('have.length.at.least', 1)
    cy.get('.header').contains('Business')
    cy.get('[data-testid=Category]').select('Health')
    cy.get('[data-testid=Search]').click()
    cy.get('.ArticleCard').should('have.length.at.least', 1)
    cy.get('.header').contains('Health')
  })

  it('should sign out', () => {
    cy.wait(3000) // wait for API response
    cy.get('[id=sign-out]').click();

  })

  it('login', () => {
    cy.visit('http://localhost:3000/Landing');
    cy.wait(3000) // wait for API response
    cy.get('[id=log-in]').click();
    cy.get('[data-testid="Email"]').type('testing23@gmail.com');
    cy.get('[data-testid="Password"]').type('123456');
    cy.get('[id="buttonBox').click();



  })


})
