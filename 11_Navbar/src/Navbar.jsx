import { useRef, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";



const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    // alternative way - set this styles to linksContainer 
    // const linkStyles = {
    //     height: showLinks
    //         ? `${linksRef.current.getBoundingClientRect().height}px`
    //         : '0px',
    // };

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = `0px`;
        }
    }, [showLinks]);

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h3 className="logo">Navbar</h3>
                    <div className="nav-toggle" onClick={toggleLinks}>
                        <FaBars />
                    </div>
                </div>

                <div className="links-container" ref={linksContainerRef} >
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return <li key={id}>
                                <a href={url}>{text}</a>
                            </li>;
                        })}

                    </ul>
                </div>

                <ul className="social-links">
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (<li key={id}>
                            <a href={url}>{icon}</a>
                        </li>);
                    })}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;