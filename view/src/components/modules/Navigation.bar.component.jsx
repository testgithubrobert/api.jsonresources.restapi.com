import { useState } from "react";
import { v4 as uuid } from "uuid";

function NavigationBar() {
    const [ navigation, setNavigation ] = useState([
        {
            id: String(`${uuid()}`),
            navigation: "About",
            href: "/about"
        },
        {
            id: String(`${uuid()}`),
            navigation: "Guide",
            href: "/guide"
        },
        {
            id: String(`${uuid()}`),
            navigation: "Github",
            href: "https://github.com/testgithubrobert/api.jsonresources.restapi.com"
        }
    ]);

    return (
        <nav className="navigation-bar" id="nav">
            <div className="logo">
                <a href="/"><span className="logo" id="logo">{String("{}")}</span></a>
            </div>
            <div className="navigators">
                <ul onDoubleClick={() => { setNavigation(navigation) }}>
                    {
                        navigation.map((n) => (
                            <li key={n.id}><a href={n.href}>{n.navigation}</a></li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;