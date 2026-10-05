export default function Credits({ subject }) {
    return (
        <main className="col-span-12 xl:col-span-8 p-4 bg-white xl:flex">
            <section>
                <h1 className="text-2xl xl:text-3xl font-semibold mb-2">Credits</h1>
                { subject.sources.map((source, index) => source.getJSX(index)) }                
            </section>
        </main>
    )
}