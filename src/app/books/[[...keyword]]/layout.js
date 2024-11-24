'use client';

import { useRouter } from "next/navigation";
import { useRef } from "react";

// .books.keyword配下に適用されるレイアウト
export default function BooksLayout({children}){
    const router = useRouter();
    const txtkeyword = useRef(null);
    // 検索ボタンクリック時に/books/keywordへリダイレクト
    const handleSearch=()=>{
        router.push(`/books/${txtkeyword.current.value}`);
    };

    return(
        <>
            <form className="mt-2 mb-4">
                <input type="text" ref={txtkeyword} className="bg-gray-100 text-black border border-gray-600 rounded mr-2 px-2 py-2 focus:bg-white focus: outline-none focus:border-red-500"/>
                <button type="button" onClick={handleSearch} className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-500">Search</button>
            </form>
            <hr />
            {children}
        </>
    );
}