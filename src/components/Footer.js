import React from 'react'
import vk from "./../img/icons/vk.svg"
import instagram from "./../img/icons/instagram.svg"
import gitHub from "./../img/icons/gitHub.svg"
import linkedIn from "./../img/icons/linkedIn.svg"


function Footer() {
  return (
    <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item"><a href="https://vk.com/id182980594"><img src={vk}alt="Link"/></a></li>
                <li className="social__item"><a href="https://www.instagram.com/arazargaryan/"><img src={instagram }alt="Link"/></a></li>
                <li className="social__item"><a href="https://github.com/AroZarg"><img src={gitHub} alt="Link"/></a></li>
                <li className="social__item"><a href="https://www.linkedin.com/in/ara-zargaryan-aa881b65/"><img src={linkedIn} alt="Link"/></a></li>
            </ul>
            <div className="copyright">
                <p>© 2023 frontend-dev.com</p>
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer