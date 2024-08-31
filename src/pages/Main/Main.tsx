import { Layout, MyWorks, Feedback, Intro, AboutMe, Reviews, Diplomas, Experience } from "components";

export default function Main() {
    return (
        <Layout>
            <>
                <Intro />
                <MyWorks />
                <Reviews />
                <Feedback />
                <Diplomas />
                <Experience />
                <AboutMe />
            </>
        </Layout>
    );
}
