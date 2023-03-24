context("Página inicial", () => {
  it("Visitar a pagina inicial e ir para página de detalhes da HQ", () => {
    cy.visit("http://localhost:5173");

    cy.get("div").eq(0).find("h4").eq(0).click();

    cy.url().should("include", "comic/");
  });

  it("Visitar a pagina inicial, adicionar um item ao carrinho e voltar para a pagina inicial", () => {
    cy.visit("http://localhost:5173");

    cy.get("div").eq(0).find("button").click();

    cy.get("div").eq(1).find("div").find("svg").click();

    cy.get("div").eq(0).find("#modalOverlay").click();
  });
});
