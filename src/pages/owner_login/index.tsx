import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LoginPage() {
  return (
    <main className={`flex w-full min-h-screen flex-col items-center justify-center bg-gray-50 ${inter.className} p-6`}>
      <div className="flex flex-col gap-4 items-center justify-center bg-white shadow-2xl rounded-md p-6 md:p-16 min-h-[60vh] max-w-md w-full">
        <div className="flex flex-col gap-2 items-center">
          <img src="https://sliceup.pizza/assets/media/uploads/logo%203.png" className="h-8 mr-3" alt="Sliceup Logo" />
          <h1 className="text-2xl font-bold text-black"> Welcome </h1>
          <p className="text-base font-semibold text-black text-center"> Login to your account to continue to SliceUp Portal </p>
        </div>
        <div className="w-full flex flex-col gap-2 items-center">
          <input type="text" placeholder="Username" className="w-full text-black p-4 border-2 border-gray-600 rounded-md"/>
          <input type="password" placeholder="Password" className="w-full text-black p-4 border-2 border-gray-600 rounded-md"/>
          <button className="font-bold bg-monza-600 text-white rounded-md px-4 py-4 w-full">Login</button>
        </div>
      </div>
    </main>
  );
}
