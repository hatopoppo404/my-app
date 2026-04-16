"use client";
import { Children, useState } from "react";
import styles from "./Button.module.css";
import { Variant, Size, IconType } from "../../type/buttons";
import { ICON_DATA } from '../../constants/icons';
import Spinner from '../Spinner/Spinner';

interface Props {
    variant: Variant;
    size: Size;
    iconType?: IconType;
    text?: string;
    iconOnly?: boolean;

    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function Button({
    variant = "ghost",
    size = "md",
    iconType = "none",
    text = "送信",
    iconOnly = false,
    disabled = false,
    loading = false
}: Props) {
    const Icon = ICON_DATA[iconType];
    return (
        <button
            disabled={disabled || loading}
            className={[
                styles.button,
                styles[variant],
                styles[size],
                iconOnly && styles.iconOnly,
                disabled && styles.disabled,
                loading && styles.loading
            ].filter(Boolean)
                .join(" ")}
        >
            <div
                className={[
                    styles.icon_container,
                    styles[iconType]
                ].join(" ")}
            >
                <i className={styles.icon}>
                    {Icon}
                </i>
            </div>
            {loading && <span className={styles.spinner}>
                <Spinner size={size} />
            </span>}
            <span className={styles.text}>
                {text}
            </span>
        </button>
    );
};