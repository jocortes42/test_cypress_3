describe('template spec', () => {

    
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
  })

  
  it('crear tarea', () => {
    cy.get('[data-testid="text-input"]').type('comprar el pan{enter}')
  })

  
  it('marcar tarea como completada', () => {
    cy.get('[data-testid="text-input"]').type('comprar el pan{enter}')
    cy.get('[data-testid="todo-item-toggle"]').click()
  })

  
  it('desmarcar tarea completada', () => {
    cy.get('[data-testid="text-input"]').type('comprar el pan{enter}')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
  })


  it('Doble click para editar texto', () => {
    cy.get('[data-testid="text-input"]').dblclick()
    cy.get('[data-testid="text-input"]').type('comprar patatas{enter}')
  })

  
  it('Borrar tarea', () => {
    cy.get('[data-testid="text-input"]').type('comprar patatas{enter}')
    cy.get('.destroy').click({force: true})
  })
})