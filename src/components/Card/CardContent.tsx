import { PropsWithChildren } from "react";
import styles from "./CardContent.module.css";

export const CardContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className={styles.countryInfo}>{children}</section>;
};

CardContent.displayName = "CardContent Component";
