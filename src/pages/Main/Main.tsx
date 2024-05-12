import { Layout, MyWorks, Feedback, Intro, AboutMe, Reviews } from "components";

export default function Main() {
    return (
        <Layout>
            <>
                <Intro />
                <MyWorks />
                <Reviews />
                <Feedback />
                <AboutMe />
            </>
        </Layout>
    );
}
