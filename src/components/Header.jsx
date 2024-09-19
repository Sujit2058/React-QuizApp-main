import ReactLogo from "../image/quizer.png"; // Import the image
function Header() {
  return (
    <header className="app-header">
      <img src={ReactLogo} alt="Reactlogo" />
      <h1>S Quiz Maker</h1>
    </header>
  );
}

export default Header;
