// import Link from "next/link";

// const NavLink = async () => {
//   const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");
//    if (!res.ok) {
//     throw new Error("Failed to fetch categories");
//   }
//   const data = await res.json();

//   return (
//     <nav className="mt-4 mx-w-[1180px] mx-auto">
//       <ul className="flex gap-6">
//         {data.map((nav) => (
//           <li key={nav.id}>
//             <Link
//               href={`/category/${nav.slug}`}
//               className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-green-600"
//             >
//               <span>{nav.icon}</span>
//               <span>{nav.nameBn}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavLink;


import Link from "next/link";
import { cacheLife } from "next/cache";

async function getCategories() {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

const NavLink = async () => {
  const data = await getCategories();

  return (
    <nav className="mt-4 mx-auto max-w-[1180px]">
      <ul className="flex gap-6">
        {data.map((nav) => (
          <li key={nav.id}>
            <Link
              href={`/category/${nav.slug}`}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-green-600"
            >
              <span>{nav.icon}</span>
              <span>{nav.nameBn}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLink;