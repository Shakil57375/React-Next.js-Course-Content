"use client";

import { useSearchParams } from "next/navigation";

export default function SortProducts() {
    const searchParams = useSearchParams();

    function updateSorting(sortOrder) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", sortOrder);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    return (
        <div className="flex gap-5 mt-5">
            <button
                className="bg-blue-600 px-6 py-3 w-fit h-fit rounded-lg"
                onClick={() => updateSorting("asc")}
            >
                Sort Ascending
            </button>
            <button
                className="bg-blue-600 px-6 py-3 w-fit h-fit rounded-lg"
                onClick={() => updateSorting("desc")}
            >
                Sort Descending
            </button>
        </div>
    );
}
