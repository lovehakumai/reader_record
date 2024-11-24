import {getAllReviews} from '@/lib/getter';
import LinkedBookDetails from '@/components/LinkedBookDetails';

// 常に最新情報を取得
export const dynamic = 'force-dynamic';

export default async function Home() {
  // すべてのレビュー情報を取得
  const reviews = await getAllReviews();
  return(
    <>
      {/* 取得したレビュー情報を元にリストを生成 */}
      {reviews.map((b, i)=>(<LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </>
  );
}
