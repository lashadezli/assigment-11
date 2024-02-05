import classes from '../modules/SecondPart.module.scss'
import illustraton from '../assets/images/illustration-intro.png'


export const SecondPart = () => {
    return (
        <div className={classes['Box']}>
            <img src={illustraton} alt="" />
                <h1>All your files in one secure location, 
                    <br/>
                    accessible anywhere.
                </h1>
                <p>
                Fylo stores all your most important files in one
                secure location.<br/> Access them wherever you need, 
                share and collaborate with
                <br/> friends family, and 
                co-workers.
                </p>
                <button>Get Started</button>
        
        </div>
    )
}