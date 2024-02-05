import classes from '../modules/FifthPart.module.scss'
import profile1 from '../assets/images/profile-1.jpg'
import profile2 from '../assets/images/profile-2.jpg'
import profile3 from '../assets/images/profile-3.jpg'



export const FifthPart = () => {
    return (
        
        <div className={classes['Main']}>
           <div className={classes['boxes']}>
                    <div className={classes['Box']}>
                        <p>Fylo has improved our team productivity by<br/> an order of magnitude. Since making the <br/>switch our team has become a well-oiled <br/>collaboration machine.</p>
                    <div className={classes['customer']}>
                        <img src={profile1} alt="" />
                        <div className={classes['review']}>
                            <p className={classes['customers']}>Satish Patel</p>
                            <p className={classes['seo']}>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                    </div>
                    <div className={classes['Box']}>
                        <p>Fylo has improved our team productivity by<br/> an order of magnitude. Since making the <br/>switch our team has become a well-oiled <br/>collaboration machine.</p>
                    <div className={classes['customer']}>
                        <img src={profile2} alt="" />
                        <div className={classes['review']}>
                            <p className={classes['customers']}>Satish Patel</p>
                            <p className={classes['seo']}>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                    </div>
                    <div className={classes['Box']}>
                        <p>Fylo has improved our team productivity by<br/> an order of magnitude. Since making the <br/>switch our team has become a well-oiled <br/>collaboration machine.</p>
                    <div className={classes['customer']}>
                        <img src={profile3} alt="" />
                        <div className={classes['review']}>
                             <p className={classes['customers']}>Satish Patel</p>
                            <p className={classes['seo']}>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                    </div>
            </div>
        
        </div>
    )
}