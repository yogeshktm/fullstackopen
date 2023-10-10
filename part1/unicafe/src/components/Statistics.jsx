import { StatisticLine } from "./StatisticLine"

export const  Statistics = (props) => {
    const { good,bad,neutral,all,average,positive,title } = props;
    return(
        <div>
          <h2>{title}</h2>
          <StatisticLine text="good" value={good}></StatisticLine>
          <StatisticLine text="Neutral" value={neutral}></StatisticLine>
          <StatisticLine text="bad" value={bad}></StatisticLine>
          <StatisticLine text="all" value={all}></StatisticLine>
          <StatisticLine text="average" value={average}></StatisticLine>
          <StatisticLine text="positive" value={positive + '%'}></StatisticLine>
        </div>
    )
}