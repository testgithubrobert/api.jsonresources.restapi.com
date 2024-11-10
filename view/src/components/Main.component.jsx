import NavigationBar from './Navigation.bar.component';
import Header from './Header.component';
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import Footer from './Footer.component';
import CookiesMessage from './Cookies.message.component';

function Main() {
    const [resources, setResources] = useState([
        {
            id: uuid(),
            resource: "/resources",
            href: "http://localhost:5000/jsonresources.com/resources"
        },
        {
            id: uuid(),
            resource: "/resources/users",
            href: "http://localhost:5000/jsonresources.com/resources/users"
        },
        {
            id: uuid(),
            resource: "/resources/blogs",
            href: "http://localhost:5000/jsonresources.com/resources/blogs"
        },
        {
            id: uuid(),
            resource: "/resources/texts",
            href: "http://localhost:5000/jsonresources.com/resources/texts"
        },
        {
            id: uuid(),
            resource: "/resources/images",
            href: "http://localhost:5000/jsonresources.com/resources/images"
        }
    ]);

    const [SingleResources, setSingleResources] = useState([
        {
            id: uuid(),
            resource: "/resources/users/158a2413-21d4-4af5-ae01-99c44cd57dcb",
            href: "http://localhost:5000/api.jsonresources.restapi.com/resources/users/158a2413-21d4-4af5-ae01-99c44cd57dcb"
        },
        {
            id: uuid(),
            resource: "/resources/blogs/6f5b932e-5b16-41d7-8891-bdf53ba8cac0",
            href: "http://localhost:5000/api.jsonresources.restapi.com/resources/blogs/6f5b932e-5b16-41d7-8891-bdf53ba8cac0"
        },
        {
            id: uuid(),
            resource: "/resources/texts/2bd79c88-120e-46db-b584-97369b7d03e3",
            href: "http://localhost:5000/api.jsonresources.restapi.com/resources/texts/2bd79c88-120e-46db-b584-97369b7d03e3"
        },
        {
            id: uuid(),
            resource: "/resources/images/291dd0fb-f054-4fdd-b943-b76821346645",
            href: ""
        }
    ])

    return (
      <>
        <NavigationBar />
        <Header content = {String("This is a free online REST API that provides json resources interactivity in form of JSON objects to provide effective resource sharing to all origins freely and handles all CRUD operations to help you test out your projects with json data fetching.")}/>
        <main>
            <section className="try-out-section">
                <article>
                    <h1>Try Fetch</h1>
                    <br />
                    <p>{String("Try to fetch api users resources using this url resource provider to test the API.")}</p>
                    <br />
                    <article>
                           <div>
                                <textarea type="text" name="" id="get" readOnly aria-readonly value={String(`fetch("https://www.jsonresources.com/resources/users", { method: "GET", headers: { "Content-Type": "application/json", "Authorization": "Bearer token" } })`)} />
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
                    <h1>{String("API Resources")}</h1>
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
                    <ul className="" id="" onDoubleClick={() => { setSingleResources(resources) }}>
                        {
                            SingleResources.map((resource) => (
                                <li key={resource.id} id={resource.id} className={resource.id}>
                                    <a href={resource.href}>{resource.resource}</a></li>
                            ))
                        }
                    </ul>
                </article>
            </section>
            <br />
            <section className="http-methods-section" id="">
                <article>
                    <h1>{String("Allowed HTTP/https Methods.")}</h1>
                    <br />
                    <p>{String("Use all HTTP/HTTPS methods to carry out CRUD operations.")}</p>
                    <br />
                    <h2>{String("GET http/https method")}</h2>
                    <br />
                    <p>Make and test out GET http/https method with CRUD operations to retrieve different api resources.</p>
                    <br />
                        <article>
                            <div>
                                <textarea type="text" name="" id="get" readOnly aria-readonly value={String(`fetch("https://www.jsonresources.com/resources/users", { method: "GET", headers: { "Content-Type": "application/json", "Authorization": "Bearer token" } })`)} />
                            </div>
                            <br />
                            <button type="button" className='' id='' onClick={(event) => {
                                event.stopPropagation();
                                navigator.clipboard.writeText(window.document.querySelector("#get").value);
                            }}><span className="material-symbols-outlined">content_copy</span> copy</button>
                        </article>
                    <br />
                    <br />
                    <br />
                    <h2>{String("POST http/https method")}</h2>
                    <br />
                    <p>Make and test out POST http/https method with CRUD operations to add different resources to the api.</p>
                    <br />
                    <article>
                            <div>
                                <textarea type="text" name="" id="post" readOnly aria-readonly value={String(`fetch("https://www.jsonresources.com/resources/users", { method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer token" },  body: JSON.stringify({ first_name: "", last_name: "", job: "", email: "" }) })`)} />
                            </div>
                            <br />
                            <button type="button" className='' id='' onClick={(event) => {
                                event.stopPropagation();
                                navigator.clipboard.writeText(window.document.querySelector("#post").value);
                            }}><span className="material-symbols-outlined">content_copy</span> copy</button>
                        </article>
                    <br />
                    <br />
                    <br />
                    <h2>{String("DELETE http/https method")}</h2>
                    <br />
                    <p>Make and test out DELETE http/https method with CRUD operations to delete different api resources.</p>
                    <br />
                    <article>
                           <div>
                                <textarea type="text" name="" id="delete" readOnly aria-readonly value={String(`fetch("https://www.jsonresources.com/resources/users/resource-id", { method: "DELETE", headers: { "Content-Type": "application/json", "Authorization": "Bearer token" } })`)} /> 
                           </div>
                            <br />
                            <button type="button" className='' id='' onClick={(event) => {
                                event.stopPropagation();
                                navigator.clipboard.writeText(window.document.querySelector("#delete").value);
                            }}><span className="material-symbols-outlined">content_copy</span> copy</button>
                        </article>
                    <br />
                    <br />
                    <br />
                    <h2>{String("PUT http/https method")}</h2>
                    <br />
                    <p>Make and test out PUT http/https method with CRUD operations to update different api resources.</p>
                    <br />
                    <article>
                            <div>
                                <textarea type="text" name="" id="put" readOnly aria-readonly value={String(`fetch("https://www.jsonresources.com/resources/users/resource-id", { method: "PUT", headers: { "Content-Type": "application/json", "Authorization": "Bearer token" } })`)} />
                            </div>
                            <br />
                            <button type="button" className='' id='' onClick={(event) => {
                                event.stopPropagation();
                                navigator.clipboard.writeText(window.document.querySelector("#put").value);
                            }}><span className="material-symbols-outlined">content_copy</span> copy</button>
                    </article>
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    <p><strong>NOTE!:</strong> {String("Some resources and routes on this api are protected, to access them you need a token in order to access those protected resources and routes. Make sure when making some http/https crud operations like put, delete and post you include the bearer and a registered token in the authorization headers.")}</p>
                    <br />
                </article>
            </section>

            <a href="/#" title="return up">
                <button type="button" id="navigation-button" className="navigation-button">
                    <span className="material-symbols-outlined">keyboard_arrow_up</span>
                </button>
                </a>
        </main>
        {
            !window.navigator.cookieEnabled || window.navigator.cookieEnabled === Boolean(false)
                 ? <CookiesMessage message={String("This api uses cookies for security and authentication issues, enable cookies to increase efficiency for the api.")} /> : ""
        }
        <br />
        <br />
        <br />
        <Footer />
      </>
    );
}

export default Main;