import Link from "next/link"

interface TagProps {
  label: string
  style: "outline" | "filled"
  color?: string
  onClick?: () => void
  to?: string
  textSize?: "14" | "16"
  classname?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button: React.FC<TagProps> = ({
  label,
  style,
  color,
  onClick,
  to,
  textSize = "16",
  classname,
  leftIcon,
  rightIcon,
}) => {
  if (!!to) {
    return (
      <Link href={to}>
        <a
          onClick={onClick}
          style={{
            backgroundColor: style === "filled" && !!color ? color : "none",
          }}
          className={`Button relative overflow-hidden px-4 py-2 rounded-3xl flex items-center justify-center drop-shadow-sm ${
            style === "outline"
              ? "border border-black bg-white"
              : "text-white Button--filled"
          } ${textSize === "16" ? "text-16" : "text-14"} ${classname}`}
        >
          {!!leftIcon && leftIcon}
          <span
            className={`relative z-[1] ${!!leftIcon && "ml-2"} ${
              !!rightIcon && "mr-2"
            }`}
          >
            {label}
          </span>
          {!!rightIcon && rightIcon}
        </a>
      </Link>
    )
  } else if (!!onClick) {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: style === "filled" && !!color ? color : "none",
        }}
        className={`Button relative overflow-hidden px-4 py-2 rounded-3xl flex items-center justify-center drop-shadow-sm ${
          style === "outline"
            ? "border border-black bg-white"
            : "text-white Button--filled"
        } ${textSize === "16" ? "text-16" : "text-14"} ${classname}`}
      >
        {!!leftIcon && leftIcon}
        <span
          className={`relative z-[1] ${!!leftIcon && "ml-2"} ${
            !!rightIcon && "mr-2"
          }`}
        >
          {label}
        </span>
        {!!rightIcon && rightIcon}
      </button>
    )
  } else {
    return null
  }
}
