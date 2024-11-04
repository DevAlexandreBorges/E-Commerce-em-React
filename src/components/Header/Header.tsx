import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();
  const isLogged = user !== null;
  const [showCart, setShowCart] = useState(false);

  function handleUserAuth() {
    if (user === null) {
      dispatch(
        login({
          name: "Alexandre",
          email: "ale@email.com",
        })
      );

      // dispatch({
      //   type: "user/login",
      //   payload: {
      //     name: "Alexandre",
      //     email: "ale@email.com",
      //   },
      // });
    } else {
      dispatch(logout({}));

      // dispatch({
      //   type: "user/logout",
      // });
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "logout" : "login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} cart={cart} />
    </S.StyledHeader>
  );
};
