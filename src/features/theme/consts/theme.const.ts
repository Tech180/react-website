"use client";

import { createContext } from "react";
import { ThemeContextType } from "../types/theme-context.interface";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
