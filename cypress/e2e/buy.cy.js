context("Comprando", () => {
  it("Adicionar um item ao carrinho, adicionar os cupons e comprar o item", () => {
    cy.visit("http://localhost:5173");

    cy.get("div").eq(0).find("button").click();
    cy.get("div").eq(1).find("div").find("svg").click();

    cy.get("form").find("input").first().type("HQCOMUM");
    cy.get("form").find("button").last().click();
    cy.contains("HQCOMUM");

    cy.get("form").find("input").first().type("HQRARA");
    cy.get("form").find("button").last().click();
    cy.contains("HQRARA");

    cy.contains("Finalizar compra").click();

    cy.contains("Voltar ao inicio").click();
  });

  it("Testanto cupons válidos e inválidos", () => {
    cy.visit("http://localhost:5173");

    cy.get("div").eq(0).find("button").click();
    cy.get("div").eq(1).find("div").find("svg").click();

    // cupons invalidos
    cy.get("form").find("input").first().type("QOINEFOINWFJNW");
    cy.get("form").find("button").last().click();
    cy.get(".error-input");

    // cupons validos
    cy.get("form").find("input").first().type("HQCOMUM");
    cy.get("form").find("button").last().click();
    cy.contains("HQCOMUM");

    cy.get("form").find("input").first().type("HQRARA");
    cy.get("form").find("button").last().click();
    cy.contains("HQRARA");
  });
});
