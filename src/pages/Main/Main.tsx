import { Layout, MyWorks, Feedback, Intro } from "components";

export default function Main() {
    return (
        <Layout>
            <>
                <Intro />
                <MyWorks />
                <Feedback />
            </>
        </Layout>
    );
}
