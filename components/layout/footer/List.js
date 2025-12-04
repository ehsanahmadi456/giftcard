function List({ title, links }) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <span className="font-medium text-base">{title}</span>
      <ul className="flex flex-col gap-4 text-gray-600 text-sm lg:gap-6">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-gray-800 transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
