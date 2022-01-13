interface RatingProps {
  rating: number
  color: string
}

export const Rating: React.FC<RatingProps> = ({ rating, color }) => {
  return (
    <div className="flex items-center">
      {Array.from(Array(rating)).map((val, i) => {
        return (
          <div
            key={i}
            style={{ background: color }}
            className="w-4 h-4 rounded-2xl mr-2"
          ></div>
        )
      })}
      {Array.from(Array(10 - rating)).map((val, i) => {
        return (
          <div
            key={i}
            style={{ background: color }}
            className="w-4 h-4 rounded-2xl opacity-20 mr-2"
          ></div>
        )
      })}
    </div>
  )
}
