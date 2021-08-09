import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <div className="works">
      <h1>Welcome to the works page. Please select a category</h1>
      <div className="links">
        <Link to="/works/exercices">Exos</Link>
        <Link to="/works/case_study">Case Study</Link>
        <Link to="/works/concrete_case">Concrete Cases</Link>
      </div>
    </div>
  );
};

export default Works;
