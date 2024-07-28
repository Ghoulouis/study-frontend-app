import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { TUrl } from "../../configs/menu";

export default function LinkCustom({ href, target, type = 0, style, children }: { children: ReactNode; href: string; target?: "_blank" | "_parent" | "_self" | "_top" | undefined; type?: TUrl; style?: React.CSSProperties | undefined }) {
    return (
        <Link to={href} target={target} style={{ textDecoration: "none", color: "unset", ...style }}>
            {children}
        </Link>
    );
}
