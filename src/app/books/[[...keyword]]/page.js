import LinkedBookDetails from "@/components/LinkedBookDetails";
import { getBooksByKeyword } from "@/lib/getter";

// ルートパラメータkeywordを取得(default : React)
export default async function BookResult({params:{keyword='React'}}){
    // 与えられたキーワードで書籍情報を検索
    const books = await getBooksByKeyword(keyword);

    return(
        <>
            {/* 取得した書籍をリスト表示 */}
            {books.map((b, i)=>(<LinkedBookDetails book={b} index={i+1} key={b.id} />))}
        </>
    );
}