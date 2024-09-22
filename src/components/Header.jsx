import style from '../styles/Header.module.css'
const Header = () =>
{
    return(
    <header className={style.header}>
        <p className={style.header__logo}>Kst.By</p>
        <nav>
          <ul>
            <li><a href="default.html">Каталог</a></li>
            <li><a href="news.asp">Новости</a></li>
            <li><a href="contact.asp">Контакты</a></li>
            <li><a href="about.asp">О нас</a></li>
          </ul>
        </nav>
      </header>
      )
}
export default Header;