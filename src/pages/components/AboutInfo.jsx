import React, { useContext } from 'react'
import ClassesContext from '../../context/classesContext';
import travel from "./../../images/travel.svg";
import plane from "./../../images/plane.svg";
import doctor from "./../../images/doctor.svg";

import Typography from '@material-ui/core/Typography';


const AboutInfo = () => {
    const classes = useContext(ClassesContext);
    const content = [{ img: plane, text: "Explore travel restrictions", a: 1 }, { img: travel, text: "Learn local policies", a: 2 },
    { img: doctor, text: "Be prepared", a: 3 }]
    return (
        <div className={classes.aboutInfoContainer}>
            {content.map(c =>
                <div key={c.a} className={classes.aboutInfoElement}>
                    <div className={classes.aboutInfoImageContainer} >
                        <img src={c.img} className={classes.aboutInfoImage} />
                    </div>
                    <Typography component="p" variant="subtitle1" color="textSecondary" align="center" style={{ width: "100%", lineHeight: 1.2, marginTop: 20 }}>
                        {c.text}
                    </Typography>
                </div>
            )}
        </div>
    );
}

export default AboutInfo;