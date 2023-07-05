import { use, useState } from "react"

export default function Search({}){
    const [searchVal, setSearchVal] = useState("");
    function handleSearchChange(event){
        setSearchVal(event.target.value);
    }

    return (
        <>
            <form className="w-full flex flex-wrap gap-3 mt-3">
                <input type="text"  placeholder="Search Products..." onChange={handleSearchChange} className={` border-black border-[1px] px-3 rounded`}/>
                <button type="submit" className="rounded border-2 border-black hover:bg-[#f85606] hover:text-white transition-all duration-300 px-4 py-1">Search</button>
            </form>
        </>
    )
}