import classes from '../modules/ForthPart.module.scss'
import Productive from '../assets/images/illustration-stay-productive.png'



export const FourtPart = () => {
    return (
        <div className={classes['Forth']}>
            <img src={Productive} alt="" />
            <div className={classes['Right']}>
                <h1>Stay productive,<br/> wherever you are</h1>
                <p>Never let location be an issue when accessing your files. Fylo has you <br/>covered for all of your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for <br/>live collaboration. No email attachments required.</p>
                <a href='#' className={classes['works__link']} >See how Fylo works </a>
            </div>
        </div>
    )
}