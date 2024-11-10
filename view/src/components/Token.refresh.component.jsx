import NavigationBar from "./Navigation.bar.component";
import Footer from "./Footer.component";

function RefreshToken() {
    return (
        <>
            <NavigationBar />
            <section className="token-refresh-section">
                <article>
                    <form action="http://localhost:5000/api.jsonresources.restapi.com/token/refresh" method="post" acceptCharset="utf8" className="" id="">
                        <h1>Refresh Token</h1>
                        <br />
                        <br />
                        <input type="email" name="email" id="email" className="email" placeholder="email"  required aria-required />
                        <br />
                        <input type="password" name="password" id="psd" className="psd" placeholder="password***" maxLength={Number(15)} required aria-required onInput={(event) => {
                            event.stopPropagation();
                            const indicators = window.document.querySelectorAll(".indicator");
                            if(event.target.value.length < 5) {
                                indicators[0].style.backgroundColor = "red";
                            } else if(event.target.value.length > 5 && event.target.value.length < 9) {
                                indicators[0].style.backgroundColor = "orange";
                                indicators[1].style.backgroundColor = "orange";
                            } else if(event.target.value.length > 10) {
                                indicators.forEach((i) => i.style.backgroundColor = "green");
                            }
                        }}/>
                        <br />
                        <div className="indicators">
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                        </div>
                        <br />
                        <p>Refresh for a token to access different resources for the API or <a href="/token/register">register token</a></p>
                        <br />
                        <button type="submit" className="submit" id="submit">Refresh</button>
                    </form>
                </article>
            </section>
            <Footer />
        </>
    );
}

export default RefreshToken;