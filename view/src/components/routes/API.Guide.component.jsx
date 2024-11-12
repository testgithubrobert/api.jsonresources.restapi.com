// jsx components to be returned for this route
import Footer from "../modules/Footer.component";
import NavigationBar from "../modules/Navigation.bar.component";

function APIGuideComponentSection() {
    return (
        <>
            <NavigationBar />
            <br />
            <br />
                <section className="api-guide-section">
                    <article>
                        <h1>API Use Guide</h1>
                        <br />
                    <br />
                    <p>This is a simple api that provides simple and fake json data that can be used to test out frontend projects. You can be able to use this api for free by using GET https/http method to fetch json data with no api token needed or other methods that require token access.</p>
                        <br />
                        <br />
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
                    <p><strong>NOTE!:</strong> {String("Fetching json resources from this api using the http/https get method and use it in your projects for testing is allowed an also other http/https methods like put, delete and update are also supported by this api but the only thing is that as this api provides sampling json data which is fake data, there wont be any resources updated, deleted or created and saved to the databases you make from your projects while testing.")}</p>
                    <br /><br />
                    <br /><br />
                </article>
            </section>
            <Footer />
        </>
    );
}

export default APIGuideComponentSection;