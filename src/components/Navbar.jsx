import classes from '../modules/navbar.module.scss'
import Logo from '../assets/images/logo.svg'

export const Navbar = () => {
    return (
        <div className={classes['Navbar']}>
          <img src={Logo} alt="" />
            <div className={classes['Nav-items']}>
                <a href='#'>
                    Features
                </a>
                <a href='#'>
                    Team
                </a>
                <a href='#'>
                    Sign in
                </a>
            </div>
        </div>
    )
}