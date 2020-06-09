import React from 'react';
import PropTypes from 'prop-types';

function Line({ stroke }) {
  return (
    <div>
      <svg
        width="1003"
        height="900"
        viewBox="0 0 1003 900"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Design"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          opacity="0.3"
        >
          <g
            id="Nav-2"
            transform="translate(-204.000000, 0.000000)"
            stroke={stroke}
          >
            <path
              d="M1236,0 C1230.30374,209.548272 1090.22769,314.322407 815.771854,314.322407 C555.507614,314.322407 497.982719,453.635995 643.19717,732.26317 L643.197169,732.263171 C650.344231,745.976447 645.021263,762.887092 631.307988,770.034154 C626.575343,772.500706 621.23636,773.563356 615.919947,773.096928 C396.15415,753.816092 259.180835,816.117116 205,960"
              id="Path-2"
              transform="translate(720.500000, 480.000000) scale(-1, 1) translate(-720.500000, -480.000000) "
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

Line.propTypes = {
  stroke: PropTypes.string,
};

Line.defaultProps = {
  stroke: '#FFF',
};

export default Line;
