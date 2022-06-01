describe("Story 1: TODO list layout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should match snapshot when hover on todo item", () => {
    cy.get("ul.todo-lists li:first .delete-btn")
      .should("be.hidden")
      .invoke("show");
    cy.compareSnapshot("todo-page", 0.1);
  });
});
