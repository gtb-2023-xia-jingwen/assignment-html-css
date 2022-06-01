describe("Story 1: TODO list layout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should match snapshot when hover on todo item", () => {
    cy.get("ul.todo-lists li:first .delete-btn")
      .should("be.hidden")
      .invoke("show");

    if (Cypress.platform === "darwin") {
      cy.compareSnapshot("todo-page-mac", 0.1);
    } else {
      cy.compareSnapshot("todo-page-windows", 0.1);
    }
  });
});
