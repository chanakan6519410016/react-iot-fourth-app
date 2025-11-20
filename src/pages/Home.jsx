import React from "react";
import Footer from "./../components/Footer";
import todo from "./../assets/todo.png";

export default function Home() {
  return (
    <div>
      <div className="w-8/12 border border-gray-200 shadow p-10 mx-auto mt-30 rounded">
        <img src={todo} alt="todo" className="w-50 mx-auto" />

        <h1 className="text-3xl text-center font-bold mt-10 text-blue-300">
          Todo Management V.1.0
        </h1>

        <input
          type="text"
          placeholder="Enter secure code to access web..."
          className="p-3 mt-8 w-full border rounded"
        />

        <button
          className="p-3 mt-5 w-full bg-red-500 hover:bg-red-500
                         text-white rounded cursor-pointer"
        >
          เข้าสู่ระบบ
        </button>
      </div>

      <Footer />
    </div>
  );
}
