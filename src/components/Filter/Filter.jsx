import PropTypes from 'prop-types';

const Filter = ({ title, value, onChange }) => {
  return (
    <div>
      {<h4>{title}</h4>}
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
