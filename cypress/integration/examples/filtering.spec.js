/// <reference types="cypress" />
describe('Should filter todo', () => {

    beforeEach(() => {
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
        cy.get('.new-todo').type("clean room{enter}")
        cy.get('.new-todo').type("study cypress{enter}")
        cy.get('.new-todo').type("call friends{enter}")
        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })


    it('should filter by completed', () => {
        cy.contains("Completed").click()
        cy.get('.todo-list li').should('have.length', 1)

    })


    it('should filter by Active', () => {
        cy.contains("Active").click()
        cy.get('.todo-list li').should('have.length', 2)

    })

    it('should filter by All', () => {
        cy.contains("All").click()
        cy.get('.todo-list li').should('have.length', 3)

    })


})