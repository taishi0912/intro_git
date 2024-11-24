import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa"; // DM用のアイコンをインポート

export default function MatchingSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center border border-gray-200 max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-pink-500 mb-6">マッチング完了</h1>
        <p className="text-gray-700 text-lg mb-8">
          おめでとうございます！先生とのマッチングが完了しました。
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          {/* プランを作成するボタン */}
          <Link href="/create-plan">
            <div className="relative group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-pink-500 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
              <span className="relative inline-block w-full px-6 py-3 text-lg font-semibold text-white bg-pink-500 border border-current rounded-lg group-hover:bg-white group-hover:text-pink-500 transition duration-300 ease-out shadow-md">
                プランを作成する
              </span>
            </div>
          </Link>

          {/* DMに飛ぶボタン */}
          <Link href="/direct-messages">
            <div className="relative group flex items-center justify-center">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-pink-300 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
              <span className="relative inline-block w-full px-6 py-3 text-lg font-semibold text-white bg-pink-300 border border-current rounded-lg group-hover:bg-white group-hover:text-pink-300 transition duration-300 ease-out shadow-md flex items-center justify-center space-x-2">
                <FaPaperPlane className="text-xl" />
                <span>DM</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
