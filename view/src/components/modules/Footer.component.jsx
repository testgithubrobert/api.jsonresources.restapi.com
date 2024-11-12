import { useState } from "react";
import { v4 as uuid } from "uuid";
import { format } from 'date-fns';

function Footer() {
    const [keys, setKeys] = useState([
        {
            id: String(`${uuid()}`),
            key: "Github",
            href: "https://www.github.com/testgithubrobert/json-api"
        },
        {
            id: String(`${uuid()}`),
            key: "Developer",
            href: "https://www.github.com/testgithubrobert/"
        },
        {
            id: String(`${uuid()}`),
            key: "Privacy",
            href: "http://localhost:4000/privacy"
        },
        {
            id: String(`${uuid()}`),
            key: "Terms",
            href: "http://localhost:4000/terms"
        },
    ]);

    return (
        <footer className="footer" id="">
            <article>
                <span className="developer">Developed and managed by <a href="https://www.github.com/testgithubrobert/">robert sims</a> mern stack developer.</span>
                <ul onDoubleClick={() => { setKeys(keys) }}>
                    {
                        keys.map((key) => (
                            <li key={key.id} id={key.id} className={key.id}>
                                    <a href={key.href} target="_blank">{key.key}</a></li>
                        ))
                    }
                </ul>
                <p>jsonresources.restapi.com &copy;right {format(new Date(), "yyyy")}</p>
                <br />
            </article>
        </footer>
    );  
}

export default Footer;