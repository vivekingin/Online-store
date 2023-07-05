import Navbar from "@/pages/components/Navbar"

export default function Layout({children}){
    return (
        <>
        <Navbar/>
        <main className="m-auto px-2 max-w-sm md:max-w-3xl lg:max-w-7xl">
            {children}
        </main>
        </>
    )
}