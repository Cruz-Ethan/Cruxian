import LeftSidebar from "./LeftSidebar";

export default function NotFound() {
    return (
        <>
            <LeftSidebar subjectName={null} />
            <main className="col-span-10 p-4 bg-white h-full flex justify-center items-center">
                <section className="flex flex-col gap-2 items-center">
                    <h1 className="text-4xl font-semibold">404 Not Found</h1>
                    <p className="text-lg">We couldn't find the page you were looking for.</p>
                </section>
            </main >
        </>
    )
}