import { Button } from "./Button";

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(<Button variant="brandPrimary">Lorem ipsum dolores</Button>);
    cy.get("button").contains("Lorem ipsum dolores");
  });

  it("render loading button", () => {
    cy.mount(
      <Button variant="brandPrimary" isLoading>
        Lorem ipsum dolores
      </Button>
    );
    cy.get("button").should("have.attr", "disabled");
  });
});
