import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { products } from "../../data/products";
// import userEvent from "@testing-library/user-event";

const cart = products.slice(0, 2);
const mockDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

describe("Cart > Unit Test", () => {
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getByTestId("total");
    const cartListElement = screen.getByRole("list");

    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement).toHaveTextContent("$0");
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it("should render a cart with two product", () => {
    render(<Cart showCart={true} cart={cart} />);

    const productItemElement = screen.getAllByRole("listitem");
    const firstProductTitleElement = screen.getByText(products[0].title);

    expect(productItemElement.length).toBe(2);
    expect(firstProductTitleElement).toBeInTheDocument();
  });

  // it("should remove product when remove button is clicked", () => {
  //   render(<Cart showCart={true} cart={[products[0]]} />);
  // });

  // // const removeProductElement = screen.getByRole("button", { name: "Remover" });

  // // userEvent.click(removeProductElement);

  // expect(mockDispatch).toHaveBeenCalled();
});
