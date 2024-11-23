import Link from "next/link";

export default function MatchingSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold text-teal-600 mb-6">マッチング完了</h1>
        <p className="text-gray-700 mb-6">
          おめでとうございます！先生とのマッチングが完了しました。
        </p>

        <div className="flex space-x-4">
          {/* プランを作成するボタン */}
          <Link
            href="/create-plan"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-center"
          >
            プランを作成する
          </Link>

          {/* DMに飛ぶボタン */}
          <Link
            href="/direct-messages"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors text-center"
          >
            DMに飛ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
