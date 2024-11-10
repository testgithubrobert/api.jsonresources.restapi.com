import NavigationBar from "./Navigation.bar.component";
import Footer from "./Footer.component";

function RegisterToken() {
    return (
        <>
            <NavigationBar />
            <section className="token-register-section">
                <article>
                    <form action="http://localhost:5000/api.jsonresources.restapi.com/token/register" method="post" acceptCharset="utf8" className="" id="">
                        <h1>Register For Token</h1>
                        <br />
                        <br />
                        <input type="text" name="username" id="username" className="username" placeholder="username" required aria-required />
                        <br />
                        <input type="email" name="email" id="email" className="email" placeholder="email"  required aria-required />
                        <br />
                        <input type="password" name="password" id="password" className="password" placeholder="password***" maxLength={Number(15)} required aria-required onInput={(event) => {
                            event.stopPropagation();
                            const indicators = window.document.querySelectorAll(".indicator");
                            if(event.target.value.length < 5) {
                                indicators[0].style.backgroundColor = "red";
                            } else if(event.target.value.length > 5 && event.target.value.length < 9) {
                                indicators[0].style.backgroundColor = "orange";
                                indicators[1].style.backgroundColor = "orange";
                            } else if(event.target.value.length > 10) {
                                indicators.forEach((i) => i.style.backgroundColor = "green")
                            }
                        }} />
                        <br />
                        <div className="indicators">
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                        </div>
                        <br />
                        <p>Register for a token to access different resources for the API or <a href="/token/refresh">refresh token</a></p>
                        <br />
                        <button type="submit" className="submit" id="submit" >Register</button>
                    </form>
                </article>
            </section>
            <Footer />
        </>
    );
}

export default RegisterToken;