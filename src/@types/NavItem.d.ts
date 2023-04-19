import { ReactNode } from "react";

export interface NavItem {
  label: string;
  children?: ReactNode;
  href?: string;
}
