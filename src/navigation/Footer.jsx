const Footer = () => {
  return (
    <footer className="footer fixed-bottom py-3 bgColorPrimary">
      <div className="container text-center">
        <span className="text-muted">
          Techdencia Store &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};
export default Footer;
