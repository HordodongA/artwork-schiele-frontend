
const Navbar = ({ onSearch, searchTitle, onClickHighlight, searchHighlighted, onClickTitle }) => {

  return (
    <div>
      <div className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#top">Home</a>
          </li>
          <li className="nav-item">
            <a href="#top">Collection</a>
          </li>
          <li className="nav-item">
            <a href="#top">Logo</a>
          </li>
          <li className="nav-item">
            <a href="#top">Login</a>
          </li>
          <li className="nav-item">
            <div className="tooltip">
              <label htmlFor="search-checkbox">highlighted</label>
              <input
                className="search-checkbox"
                type="checkbox"
                name="Search-highlighted"
                id="search-highlighted"
                value={searchHighlighted}
                onClick={() => onClickHighlight(!searchHighlighted)}
                />
              <span className="tooltiptext">
                Search highlighted pictures
              </span>
            </div>
            <div className="tooltip">
            <label htmlFor="search-checkbox">title</label>
              <input
                className="search-checkbox"
                type="checkbox"
                name="Searc-title"
                id="search-title"
                value={searchTitle}
                onClick={event => onClickTitle(!searchTitle)}
              />
              <span className="tooltiptext">
                Search title
              </span>
            </div>
            <div className="tooltip">
              <input
                className="search-input"
                type="search"
                name="search-api"
                id="search-api"
                placeholder="search MET database"
                onKeyUp={(event) => onSearch(event.target.value)}
              />
              <span className="tooltiptext">
                Search among Metropolitan Museum's paintings
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Navbar

