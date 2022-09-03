import PropTypes from 'prop-types';
import CSS from './Container.module.css';

function Container({ children }) {
  return <div className={CSS.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
