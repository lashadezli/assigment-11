import classes from "../modules/ThirdPart.module.scss";
import Computer from "../assets/images/icon-access-anywhere.svg";
import Security from "../assets/images/icon-security.svg";
import Any from "../assets/images/icon-any-file.svg";
import Collaboration from "../assets/images/icon-collaboration.svg";

export const ThirdPart = () => {
  return (
    <div className={classes["Boxes"]}>
      <div className={classes['boxes1']}>
        <div className={classes["bg1"]}>
            <img src={Computer} alt="" />
            <h1>Access your files, anywhere</h1>
            <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
        </div>

        <div className={classes["bg1"]}>
            <img src={Security} alt="" />
            <h1>Security you can trust</h1>
            <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
        </div>
      </div>
      <div className={classes['boxes2']}>
        <div className={classes["bg2"]}>
            <img src={Any} alt="" />
            <h1>Real-time collaboration</h1>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        </div>

        <div className={classes["bg2"]}>
            <img src={Collaboration} alt="" />
            <h1>Store any type of file</h1>
            <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
        </div>
      </div>
    </div>
  );
};
