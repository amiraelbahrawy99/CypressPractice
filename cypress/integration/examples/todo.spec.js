/// <reference types="cypress" />

import { TodoPage } from "../../pageObjects/TodoPage"

describe('todo actions', () => {
    const todoPage = new TodoPage()
    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo("clean room")
    })

    it('Should add a new todo to list', () => {
        cy.get('label').should('have.text', 'clean room')
        cy.get('.toggle').should('not.be.checked')
    })

    it('Should mark todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })

    it('Should clear completed', () => {
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.new-todo').should('not.have.descendants', 'li')
    })



})



