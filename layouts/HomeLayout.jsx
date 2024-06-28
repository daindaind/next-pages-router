import Link from "next/link";
import React from "react";

function HomeLayout({ children }) {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">products list (main)</Link>
        </li>
        <li>
          <Link href="/products/1">products</Link>
        </li>
        <li>
          <a href="/cart">cart</a>
        </li>
      </ul>
      {children}
    </nav>
  );
}

export default HomeLayout;
