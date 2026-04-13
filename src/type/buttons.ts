import { useState } from "react";
import { ICON_DATA } from '../constants/icons';

export type Variant =
    | "primary"
    | "secondary"
    | "danger"
    | "ghost";

export type Size =
    | "sm"
    | "md"
    | "lg";

export type IconType = keyof typeof ICON_DATA;