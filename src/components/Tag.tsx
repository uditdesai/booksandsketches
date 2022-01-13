interface TagProps {
  tag: string
  type: "type" | "genre"
}

export const Tag: React.FC<TagProps> = ({ tag, type }) => {
  return (
    <span
      className={`text-14 px-3 py-0.5 rounded-2xl w-fit-content ${
        type === "type" ? "bg-blue-300" : "bg-yellow-500"
      }`}
    >
      {tag}
    </span>
  )
}
