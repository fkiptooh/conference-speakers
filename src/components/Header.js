export function Header({ theme }) {
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img src="/images/SVCClogo.png" />
          </div>
          <div className="light">
            <h4 className={theme === "light" ? "header-title" : "text-info"}>
              Silicon Valley Code Camp
            </h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            Hello Mr.Smith &nbsp; &nbsp;
            <span>
              <a href="#">Sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
