// jsx components to be returned for this route
import Footer from "./Footer.component";
import NavigationBar from "./Navigation.bar.component";

function APIGuideComponentSection() {
    return (
        <>
            <NavigationBar />
                <section className="api-guide-section">
                    <article>
                        <h1>API Use Guid</h1>
                        <br />
                        <p>This is a simple api that provides simple and fake json data theat can be used to test out frontend projects. You can be able to use this api for free by using GET https/http method to fetch json data with no api token needed.</p>
                        <br />
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
                        <p>When carrying or making other https/http methods to this api in order to update a resource, delete a resource and to create a resource, make sure you include an api registered token in the request authorization headers to enable easy access to the apis protected routes and resources. To get or register for an api authorization token for in order or to enable you access the api properly and make different https/http methods to the api <a href="/token/register">click here</a> to continue or <a href="/token/refresh">click here</a> to refresh a registered token.</p>
                    </article>
                </section>
            <Footer />
        </>
    );
}

export default APIGuideComponentSection;