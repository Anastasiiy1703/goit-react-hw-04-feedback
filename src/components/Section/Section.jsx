import SectionCss from '../Section/SectionCss.module.css'

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h2 className={SectionCss.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;