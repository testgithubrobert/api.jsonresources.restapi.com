import NavigationBar from "../modules/Navigation.bar.component";
import Footer from "../modules/Footer.component";

function AboutAPI() {
    return (
        <>
            <NavigationBar />
            <br />
            <br />
            <section className="about-api-section" id="">
                <article>
                    <h1>About Api</h1>
                    <br />
                    <p>jsonresources.com API is a free api for testing out projects and carry out CRUD operations for both the frontend and the backend. It provides a simple way of interacting with json resources inform of json objects and arrays. You can be able to use it to create mainly simple websites or application through fetching on this API. Its a MERN stack project developed and managed by <a href="https://www.github.com/testgithubrobert/">robert sims</a> mern stack developer, created in 2024. Its free and effectively used by mainly frontend developers while creating and testing out different frontend or ui designs for better web applications. You can also be able to carry out different HTTP/HTTPS methods using the CRUD operations in order to access different API resources, it uses a server made up of Node.js which runs via chromes v8 engine which makes it suitable for handling async operations quickly. It also uses tokens to allow users mainly developers to access protected routes and api resources. It provides resources like sample texts, online images, users information and also simple blogs for sampling out projects. You can be able to use the built in javascript fetch api or axios to access these resources on the frontend of your project or application. </p>
                </article>
            </section>
            <br />
            <br />
            <Footer />
        </>
    );
} 

export default AboutAPI;