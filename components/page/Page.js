import PropTypes from 'prop-types';

import Meta from 'components/meta';

const Page = ({ children }) => (
  <div>
    <Meta />
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
