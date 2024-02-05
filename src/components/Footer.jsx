import Logo from '../assets/images/logo.svg'
import classes from '../modules/footer.module.scss'
import location from '../assets/images/icon-location.svg'
import calls from '../assets/images/icon-phone.svg'
import email from '../assets/images/icon-email.svg'
import facebook from '../assets/images/facebook-f.svg'
import instagram from '../assets/images/instagram.svg'
import twitter from '../assets/images/twitter.svg'





export const Footerend = () => 
{
    return(
    <div className={classes['footer']}>
        <div className={classes['part1']}>
            <img className={classes['image']}src={Logo} alt="" />
                <div className={classes['inner']}>
                   <img src={location} alt="" />
                   <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit,sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua</p>
                </div>
        </div>
        <div className={classes['part2']}>
            <div className={classes['inner2']}>
                <img src={calls} alt="" />
                <p>+1-543-123-4567</p>
            </div>
            <div className={classes['inner2']}>
                <img src={email} alt="" />
                <p>example@fylo.com</p>
            </div>
        </div>
        
        <div className={classes['part3']}>
            <a href="#">About us</a>
            <a href="#">jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
        </div>
        <div className={classes['part4']}>
            <a href="#">Contact us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
        </div>
        <div className={classes['icons']}>
           <img src={facebook} alt="" />
           <img src={instagram} alt="" />
           <img src={twitter} alt="" />

        </div>

   </div>
)
}
