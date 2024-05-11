import { Layout, MyWorks, Feedback, Intro, AboutMe } from "components";

export default function Main() {
    return (
        <Layout>
            <>
                <Intro />
                <MyWorks />
                <Feedback />
                <AboutMe />
            </>
        </Layout>
    );
}
