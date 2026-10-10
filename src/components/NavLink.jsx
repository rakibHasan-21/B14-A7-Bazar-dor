import Link from "next/link";

const NavLink = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories" ,{cache: "force-cache"});
   if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();

  return (
    <nav className="mt-4 mx-w-[1180px] mx-auto">
      <ul className="flex gap-6">
        {data.map((nav) => (
          <li key={nav.id}>
            <Link
              href={`/category/${nav.id}`}
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
