
function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content fotter-center">
      <div>
        <p>&copy; {footerYear} Github Finder</p>
      </div>
    </footer>
  )
}

export default Footer