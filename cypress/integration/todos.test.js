describe("Story 1: TODO list layout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should match snapshot when hover on todo item", () => {
    cy.get("ul.todo-lists li:first .delete-btn")
      .should("be.hidden")
      .invoke("show");
    cy.matchImageSnapshot("todo-item-hover", {
      failureThreshold: 0.03,
      failureThresholdType: "percent",
      customDiffConfig: { threshold: 0.1 },
      capture: "viewport",
    });
  });
});
