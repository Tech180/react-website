"use client";

import { createContext } from "react";
import { ThemeContextType } from "../../interfaces/theme/theme-context.interface";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
