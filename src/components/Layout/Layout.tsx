import { Header, Footer } from "components";

export default function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header />
            <main className="flex flex-col">{children}</main>
            {/* <Footer /> */}
        </>
    );
}
