import StatisticsCss from '../Statistisc/StatisticsCss.module.css'
const Statistics = ({ good, neutral, bad, total, positivePercentage })=> {
  
    return (
      <ul className={StatisticsCss.statisticsList}>
        <li className={StatisticsCss.item}>Good: {good}</li>
        <li className={StatisticsCss.item}>Neutral: {neutral}</li>
        <li className={StatisticsCss.item}>Bad: {bad}</li>
        <li className={StatisticsCss.item}>Total: {total}</li>
        <li className={StatisticsCss.item}>Positive feedback: {positivePercentage}%</li>
      </ul>
    );
  }

export default Statistics;