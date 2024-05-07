import PropTypes from 'prop-types'; // Import PropTypes

import '../Styles/button.css'

function RedirectButton({ link }) {
    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <button className="button" onClick={handleClick}>Go to Destination</button>
    );
}
RedirectButton.propTypes = {
  link: PropTypes.string.isRequired // Specify 'link' prop as a required string
};
export default RedirectButton;
