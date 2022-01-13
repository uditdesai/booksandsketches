import React, { FC } from "react"
import { Svgs, SvgType } from "./Svgs"

type Variation = "active" | "hover" | "default"
export type SvgSize = "small" | "medium" | "large" | "default" | "custom"

interface SvgProps {
  svg: SvgType
  size?: SvgSize
  variation?: Variation
  className?: string
  ariaLabel: string
}

const getIconMarkup = (svg: SvgType): React.ReactNode => {
  return React.createElement(Svgs[svg])
}

export const Svg: FC<SvgProps> = ({
  svg,
  size = "default",
  variation,
  className = "",
  ariaLabel,
}) => {
  const kebabCaseName = svg.replace(
    /[A-Z]/g,
    (letter) => `-${letter.toLowerCase()}`
  )

  const standardStyle = `
    Svg Svg--${kebabCaseName} ${className}
    ${!!variation ? `Svg--${kebabCaseName}--${variation}` : ""}
    ${
      size !== "default" && size !== "custom"
        ? `Svg--${kebabCaseName}-size-${size}`
        : ""
    }
  `

  return (
    <div className={standardStyle} aria-label={ariaLabel}>
      {getIconMarkup(svg)}
    </div>
  )
}
