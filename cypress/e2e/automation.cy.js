describe('sauce', () => {

  beforeEach( () => {
    cy.visit('https://automationexercise.com/')
  })
  //Cambiar direccion de correo para probar correctamente.
  it('Prueba registro usuario', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type('menganito')
    cy.get('[data-qa="signup-email"]').type('menganito@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('[data-qa="password"]').should('be.visible').type('contrasena')
    cy.get('#id_gender1').click()
    cy.get('[data-qa="days"]').select('23')
    cy.get('[data-qa="months"]').select('June')
    cy.get('[data-qa="years"]').select('1980')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('[data-qa="first_name"]').type('Menganito')
    cy.get('[data-qa="last_name"]').type('De tal')
    cy.get('[data-qa="company"]').type('Jormaneva')
    cy.get('[data-qa="address"]').type('Micasita')
    cy.get('[data-qa="address2"]').type('Micasita 2')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type('Vancoover')
    cy.get('[data-qa="city"]').type('Mi barrio')
    cy.get('[data-qa="zipcode"]').type('29620')
    cy.get('[data-qa="mobile_number"]').type('666 333 444')
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
   })

  it('Prueba login correo y password correcto', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').should('be.visible').type('menganito@gmail.com')
    cy.get('[data-qa="login-password"]').should('be.visible').type('contrasena')
    cy.get('[data-qa="login-button"]').should('be.visible').click()
  })
  
  it.('Prueba login correo y password incorrecto', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type('menganito')
    cy.get('[data-qa="signup-email"]').type('menganitox#gmail.com')
    cy.get('[data-qa="signup-button"]').click()
  })

  it('Prueba logout', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').should('be.visible').type('menganito@gmail.com')
    cy.get('[data-qa="login-password"]').should('be.visible').type('contrasena')
    cy.get('[data-qa="login-button"]').should('be.visible').click()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  })
})