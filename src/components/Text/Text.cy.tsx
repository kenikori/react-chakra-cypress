import { Text } from "./Text";

describe("<Text />", () => {
  it("renders", () => {
    cy.mount(<Text>Lorem ipsum dolores</Text>);
    cy.get("p").contains("Lorem ipsum dolores");
  });
});
