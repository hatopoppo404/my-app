"use client";
import { useState } from "react";
import styles from "./Buttons.module.css";
import { Variant, Size, IconType } from "../../type/buttons";
import { ICON_DATA } from '../../constants/icons';

interface Props {
    variant: Variant;
    size: Size;
    iconType?: IconType;
    text?: string;
}

export default function Button({
    variant = "ghost",
    size = "md",
    iconType = "none",
    text = "送信"
}: Props) {
    const Icon = ICON_DATA[iconType];
    return (
        <button
            className={[
                styles.button,
                styles[variant],
                styles[size],
            ].join(" ")}
        >
            <div className={styles.icon_container}>
                <i className={styles.icon}>
                    {Icon}
                </i>
            </div>
            <span className={styles.text}>
                {text}
            </span>
        </button>
    );
};