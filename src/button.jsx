import './button.css'
function RedirectButton() {
  const handleClick = () => {
    // Redirect to the desired webpage when the button is clicked
    window.location.href = 'https://www.youtube.com/'; // Replace with the URL you want to redirect to
  };

  return (
    <button className="button"onClick={handleClick}>Go to Destination</button>
  );
}

export default RedirectButton;

