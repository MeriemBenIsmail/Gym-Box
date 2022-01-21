import classes from "./HeroBack.module.css"
import Album from "../Album/Album";
import Overlay from "../Overlay/Overlay";
import Description from "../Description/Description";
import { Fragment } from "react/cjs/react.production.min";
const HeroBack = () => {
    return ( 
        <Fragment>
        <div className={classes.background}>
            <Album></Album>
        </div>
        <Overlay></Overlay>
        <Description></Description>
        </Fragment>
     );
}
 
export default HeroBack;