import { Layout, MyWorks, Feedback, Intro, AboutMe, Reviews, Diplomas } from "components";

export default function Main() {
    return (
        <Layout>
            <>
                <Intro />
                <MyWorks />
                <Reviews />
                {/* <Feedback />
                <Diplomas />
                <AboutMe /> */}
            </>
        </Layout>
    );
}
