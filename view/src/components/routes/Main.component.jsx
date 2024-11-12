import NavigationBar from '../modules/Navigation.bar.component';
import Header from '../modules/Header.component';
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import Footer from '../modules/Footer.component';
import CookiesMessage from '../modules/Cookies.message.component';
import CookiesAlertMessage from '../modules/Cookies.Enabled.Alert.Message.Component';

function Main() {
    const [resources, setResources] = useState([
        {
            id: uuid(),
            resource: "/resources",
            href: "http://localhost:4000/resources"
        },
        {
            id: uuid(),
            resource: "/resources/users",
            href: "http://localhost:4000/resources/users"
        },
        {
            id: uuid(),
            resource: "/resources/posts",
            href: "http://localhost:4000/resources/posts"
        },
        {
            id: uuid(),
            resource: "/resources/texts",
            href: "http://localhost:4000/resources/texts"
        },
        {
            id: uuid(),
            resource: "/resources/photos",
            href: "http://localhost:4000/resources/photos"
        }
    ]);

    return (
      <>
        <NavigationBar />
        <Header content = {String("This is a free online REST API that provides sampling json resources interactivity in form of JSON objects to provide effective resource sharing to all origins freely and handles all CRUD operations to help you test out your projects with json data fetching.")}/>
        <main>
            <section className="try-out-section">
                <article>
                    <h1>Try Fetch</h1>
                    <br />
                    <p>{String("Try to fetch api users resources using this url resource provider to test the API.")}</p>
                    <br />
                    <article>
                           <div>
                                <textarea type="text" name="" id="get" readOnly aria-readonly value={String(`fetch("https://www.jsonresources.com/resources/users", { method: "GET", headers: { "Content-Type": "application/json" } })`)} />
                           </div>
                            <br />
                            <button type="button" className='' id='' onClick={(event) => {
                                event.stopPropagation();
                                navigator.clipboard.writeText(window.document.querySelector("#get").value);
                            }}><span className="material-symbols-outlined">content_copy</span> copy</button>
                        </article>
                </article>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section className="resources-section" id="resources">
                <article>
                    <h1>{String("API Resources & Routes.")}</h1>
                    <br />
                    <p>{String("Checkout the following API resources to sample out your project and fetch resources.")}</p>
                    <br />
                    <ul className="" id="" onDoubleClick={() => { setResources(resources) }}>
                        {
                            resources.map((resource) => (
                                <li key={resource.id} id={resource.id} className={resource.id}>
                                    <a href={resource.href}>{resource.resource}</a></li>
                            ))
                        }
                    </ul>
                    <br />
                    <br />
                    <p><strong>NOTE!:</strong> {String("Fetching json resources from this api using the http/https get method and use it in your projects for testing is allowed an also other http/https methods like put, delete and update are also supported by this api but the only thing is that as this api provides sampling json data which is fake data, there wont be any resources updated, deleted or created and saved to the databases you make from your projects while testing.")}</p>
                    <br />
                </article>
            </section>
            <br />

            <a href="/#" title="return up">
                <button type="button" id="navigation-button" className="navigation-button">
                    <span className="material-symbols-outlined">keyboard_arrow_up</span>
                </button>
            </a>
        </main>

        {
            // check whether cookies are enabled or whether the current visitor has never been on this site
            !window.navigator.cookieEnabled || window.navigator.cookieEnabled === Boolean(false) ||
            !window.document.cookie || typeof window.document.cookie === "undefined" || !window.document.cookie === "cookies_enabled=true"
                ? <CookiesMessage message={
                    String("This api uses cookies for security and authentication issues, enable cookies to increase efficiency for the api.")
                } /> : undefined
        }

        {
            // check if this is the visitors first time to visit this site and send a msg
            window.document.cookie === "cookies_enabled=true" || typeof window.document.cookie === "undefined"
                ? <CookiesAlertMessage message={
                    String("Welcome back to our api site, cookies are currently enabled to be used and accessed by this api site to increase its efficiency!")
                } /> : undefined
        }
        <br />
        <br />
        <br />
        <Footer />
      </>
    );
}

export default Main;