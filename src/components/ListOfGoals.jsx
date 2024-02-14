export default function ListOfGoals({ data }) {
    return (
      <ul>
        {data.map((g) => {
          return (
            <li key={g.goal}>
              <p>
                {g.goal} -- {g.by}
              </p>
            </li>
          )
        })}
      </ul>
    )
  }