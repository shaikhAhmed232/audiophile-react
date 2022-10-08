import React from 'react'

function useMobile() {
    const [isMobile, setIsMobile] = React.useState(false)
    const screenWidthRef = React.useRef<null | number>(null)
    React.useEffect(() => {
        setIsMobile(window.innerWidth > 768 ? false : true)
        const showNav = () => {
            let currentWidth = window.innerWidth
            if (currentWidth > 768 && screenWidthRef.current! < 768 ) {
                screenWidthRef.current = currentWidth
                setIsMobile(false)
            } else if(currentWidth < 768 && screenWidthRef.current! > 768 ) {
                screenWidthRef.current = currentWidth
                setIsMobile(true)
            }
        }
        if(!screenWidthRef.current) {
            screenWidthRef.current = window.innerWidth
            showNav()
        } else {
            showNav()
        }
        window.addEventListener('resize', showNav)
        return () => {
            window.removeEventListener('resize', showNav)
        }
    }, [screenWidthRef, setIsMobile, isMobile])

    return isMobile
}

export default useMobile