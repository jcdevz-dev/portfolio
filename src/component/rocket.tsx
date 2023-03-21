import React from 'react'
import { StaticImage } from "gatsby-plugin-image";

export default function Rocket({showBelow}:{showBelow:number}) {
const [show, setShow] = React.useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    React.useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <div onClick={handleClick} style={{
                    zIndex: 2,
                    padding: 12,
                    right: '3vh',
                    bottom: '3vh',
                    cursor: 'pointer',
                    position: 'fixed',
                    borderRadius: '50%',
                    border: '1px dashed #ffffff',
                }} aria-label="to top">
                  <StaticImage
                    id="toTop"
                    src="../images/rocket.png"
                    alt="Go to Top"
                    height={30}
                  />
                </div>
            }
        </div>
    )
}
