import FeedbackOptionsCss from '../FeedbackOptions/FeedbackOptionsCss.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={FeedbackOptionsCss.buttonList}>
      {options.map((option) => (
        <li key={option} className={FeedbackOptionsCss.liButton}>
          <button type="button" className={FeedbackOptionsCss.button} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;