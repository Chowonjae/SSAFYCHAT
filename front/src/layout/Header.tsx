import "../styles/components/header.css"
import { Link } from "react-router-dom"
function Header (){
    return (
        <div className="header">
            <div className="header_name">SSAFY CHAT</div>
            <nav className="navbar">
              <span><a href="#!">Home</a></span>
              <span><Link to="/banner/apply">Mentoring</Link></span>
              <span>
                <div className="dropdown">
                  <span className="dropbtn"> 
                  <span>
                    <div className="dropbtn_image"></div>
                  </span>
                  <span>김겨울 님</span>
                  <span>
                    <div className="dropbtn_icon"></div>
                    </span>
                  </span>
                  <div className="dropdown_content">
                    <a href="#!">로그아웃</a>
                    <Link to="/banner/mypage">마이페이지</Link>
                    <a href="#!">롤링페이퍼</a>
                  </div>
                </div>
              </span>
            </nav>
        </div>
    )
}

export default Header