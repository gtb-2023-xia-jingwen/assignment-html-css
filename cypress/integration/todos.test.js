describe("Story 1: TODO list layout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should match snapshot", () => {
    cy.matchImageSnapshot("todo-list-default");
  });

  it("should match snapshot when hover on todo item", () => {
    cy.get(".todo-lists li:first .operator")
      .should("be.hidden")
      .invoke("show")
      .click();
    cy.matchImageSnapshot("todo-item-hover");
  });
});
