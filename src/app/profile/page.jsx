
// "use client";

// import { useState } from "react";
// import { useSession, signOut, updateUser } from "@/lib/auth-client";

// const Profile = () => {
//   const { data: session, isPending } = useSession();

//   const user = session?.user;

//   const [name, setName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     if (!name.trim()) {
//       setMessage("আপনার নাম লিখুন।");
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     try {
//       const { error } = await updateUser({
//         name: name.trim(),
//       });

//       if (error) {
//         setMessage(error.message || "নাম আপডেট করা যায়নি।");
//         return;
//       }

//       setMessage("নাম সফলভাবে আপডেট হয়েছে!");
//       setName("");
//     } catch (error) {
//       console.error(error);
//       setMessage("কিছু একটা সমস্যা হয়েছে।");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (isPending) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-[#f0f5f1]">
//         <p className="text-sm text-gray-500">প্রোফাইল লোড হচ্ছে...</p>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-[#f0f5f1] p-5">
//         <div className="rounded-xl bg-white p-6 text-center shadow-sm">
//           <p className="mb-4 text-gray-700">
//             প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।
//           </p>
//           <a
//             href="/sign-in"
//             className="inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
//           >
//             সাইন ইন
//           </a>
//         </div>
//       </div>
//     );
//   }

//   const handleSignOut = async () => {
//     const { error } = await signOut();

//     if (error) {
//       setMessage(error.message || "সাইন আউট করা যায়নি।");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f0f5f1] px-4 py-8">
//       <div className="mx-auto max-w-[720px]">
//         {/* Page heading */}
//         <div className="mb-4">
//           <h1 className="text-xl font-bold tracking-tight text-[#202a23]">
//             আমার প্রোফাইল
//           </h1>
//           <p className="mt-1 text-xs text-gray-500">
//             আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
//           </p>
//         </div>

//         {/* User information card */}
//         <section className="mb-4 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-4">
//           <div className="flex min-w-0 items-center gap-3">
//             <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100">
//               {user.image ? (
//                 <img
//                   src={user.image}
//                   alt={user.name || "User"}
//                   className="h-full w-full object-cover"
//                 />
//               ) : (
//                 <span className="text-2xl font-bold text-green-700">
//                   {(user.name || user.email || "U")
//                     .charAt(0)
//                     .toUpperCase()}
//                 </span>
//               )}
//             </div>

//             <div className="min-w-0">
//               <h2 className="truncate text-sm font-bold text-[#263329]">
//                 {user.name || "ব্যবহারকারী"}
//               </h2>
//               <p className="mt-1 break-all text-xs text-gray-500">
//                 {user.email}
//               </p>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={handleSignOut}
//             className="shrink-0 rounded-md border border-red-400 px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50"
//           >
//             ↪ সাইন আউট
//           </button>
//         </section>

//         <section className="rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-5 sm:p-6">
//           <h2 className="mb-7 text-base font-semibold text-[#263329]">
//             তথ্য
//           </h2>

//           <form onSubmit={handleUpdate}>
//             <label
//               htmlFor="name"
//               className="mb-2 block text-xs font-medium text-gray-700"
//             >
//               নাম
//             </label>

//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder={user.name || "আপনার নাম লিখুন"}
//               className="mb-3 h-10 w-full rounded-md border border-[#e0e8e1] bg-transparent px-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full rounded-md bg-[#07863f] py-2.5 text-sm font-semibold text-white shadow-[0_2px_3px_rgba(0,0,0,0.2)] transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
//             </button>

//             {message && (
//               <p
//                 aria-live="polite"
//                 className={`mt-3 text-sm ${
//                   message.includes("সফলভাবে")
//                     ? "text-green-700"
//                     : "text-red-600"
//                 }`}
//               >
//                 {message}
//               </p>
//             )}
//           </form>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Profile;