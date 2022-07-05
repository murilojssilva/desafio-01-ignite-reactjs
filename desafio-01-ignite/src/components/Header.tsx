import styles from "./Header.module.css";

import layerLogo from "../assets/layer-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={layerLogo} /> <p>todo</p>
    </header>
  );
}
