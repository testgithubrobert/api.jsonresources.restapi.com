import { useState } from "react";
import { v4 as uuid } from "uuid";
import { format } from 'date-fns';
import { FaHeart } from "react-icons/fa";

function Footer() {
    const [keys, setKeys] = useState([
        {
            id: String(`${uuid()}`),
            key: "Github",
            href: "https://github.com/testgithubrobert/api.jsonresources.restapi.com"
        },
        {
            id: String(`${uuid()}`),
            key: "Developer",
            href: "https://www.github.com/testgithubrobert"
        },
        {
            id: String(`${uuid()}`),
            key: "Privacy",
            href: "https://api-jsonresources-restapi-com-api.onrender.com/privacy"
        },
        {
            id: String(`${uuid()}`),
            key: "Terms",
            href: "https://api-jsonresources-restapi-com-api.onrender.com/terms"
        },
    ]);

    return (
        <footer className="footer" id="">
            <article>
                <span className="developer">Developed and managed with <FaHeart /> by <a href="https://robertsims.netlify.app">robert sims</a> mern stack developer.</span>
                <ul onDoubleClick={() => { setKeys(keys) }}>
                    {
                        keys.map((key) => (
                            <li key={key.id} id={key.id} className={key.id}>
                                    <a href={key.href} target="_blank">{key.key}</a></li>
                        ))
                    }
                </ul>
                <p>jsonresources-api.com &copy;right {format(new Date(), "yyyy")}</p>
                <br />
            </article>
        </footer>
    );  
}

export default Footer;