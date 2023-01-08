import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>

        {cartQuantity > 0 && (
        <Button
        onClick={openCart}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="0 0 512 512"
            enable-background="new 0 0 512 512"
          >
            <g>
              <g>
                <path d="m480.6,11h-91.7c-9.8,0-18.3,7-20.1,16.7l-48.4,262.9h-289c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h27.2v48.6c-22.9,9.2-39.1,31.9-39.1,58.3 0,34.6 27.7,62.7 61.8,62.7 34.1,0 61.8-28.1 61.8-62.7 0-28.2-18.4-52.1-43.7-60v-46.8h171.9v47.4c-24.3,8.4-41.9,31.9-41.9,59.4 0,34.6 27.7,62.7 61.8,62.7 34.1,0 61.8-28.1 61.8-62.7 0-27.2-17.1-50.3-40.9-59v-47.8h25.3c9.9,0 18.3-7 20.1-16.7l48.4-262.9h74.7c11.3,0 20.4-9.1 20.4-20.4 0-11.4-9.1-20.5-20.4-20.5zm-399.3,449.2c-11.6,0-21-9.8-21-21.9 0-12.1 9.4-21.9 21-21.9 11.6,0 21,9.8 21,21.9 0,12-9.4,21.9-21,21.9zm209.9,0c-11.6,0-21-9.8-21-21.9 0-12.1 9.4-21.9 21-21.9 11.6,0 21,9.8 21,21.9 0,12-9.4,21.9-21,21.9z" />
                <path d="M40.1,263.4h245.2c11.3,0,20.4-9.1,20.4-20.4V78.8c0-11.3-9.1-20.4-20.4-20.4H40.1c-11.3,0-20.4,9.1-20.4,20.4v164.1    C19.7,254.2,28.8,263.4,40.1,263.4z M60.5,99.3h204.3v123.3H60.5V99.3z" />
              </g>
            </g>
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)"
            }}
          >
            {cartQuantity}
          </div>
        </Button>
        )}
      </Container>
    </NavbarBs>
  );
}
