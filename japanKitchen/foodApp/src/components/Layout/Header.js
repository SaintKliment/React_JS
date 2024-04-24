import React from "react";
import sushiImg from "../../assets/sushi.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Японская еда</h1>
        <HeaderCartButton cartOpen={props.cartOpen} />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImg} alt="здесь должна быть картинка :)" />
      </div>
    </React.Fragment>
  );
};

export default Header;
