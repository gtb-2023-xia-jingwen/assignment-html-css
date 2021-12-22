describe("Story 1: TODO list layout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should match snapshot", () => {
    cy.matchImageSnapshot("todo-list-default", {
      failureThreshold: 0.03,
      failureThresholdType: "percent",
      customDiffConfig: { threshold: 0.1 },
    });
  });

  it("should match snapshot when hover on todo item", () => {
    cy.get(".todo-lists li:first .operator")
      .should("be.hidden")
      .invoke("show");
    cy.matchImageSnapshot("todo-item-hover",  {
      failureThreshold: 0.03,
      failureThresholdType: "percent",
      customDiffConfig: { threshold: 0.1 },
    });
  });
});
