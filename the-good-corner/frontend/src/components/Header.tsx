import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { UserContext } from "./Layout";
import { GET_ALL_CATEGORIES } from "../graphql/queries/queries";
import SearchBar from "./SearchBar";

const Header = () => {
  const authInfo = useContext(UserContext);
  const { loading, error, data } = useQuery<{
    allCategories: {
      id: number;
      name: string;
    }[];
  }>(GET_ALL_CATEGORIES);
  const router = useRouter();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) {
    return (
      <header className="header">
        <div className="main-menu">
          <h1>
            <Link href="/" className="button logo link-button">
              <span className="mobile-short-label">TGC</span>
              <span className="desktop-long-label">THE GOOD CORNER</span>
            </Link>
          </h1>
          <SearchBar router={router} />
          <>
            {authInfo.isLoggedIn ? (
              <>
                {authInfo.role === "admin" ? (
                  <Link href="/admin/users" className="button link-button">
                    <span className="desktop-long-label">Admin Panel</span>
                    <span className="mobile-short-label">Admin</span>
                  </Link>
                ) : null}
                <Link href="/ad/new" className="button link-button">
                  <span className="mobile-short-label">Publier</span>
                  <span className="desktop-long-label">
                    Publier une annonce
                  </span>
                </Link>
                <button
                  className="button button-primary"
                  onClick={() => {
                    localStorage.removeItem("jwt");
                    authInfo.refetchLogin();
                    router.push("/");
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="button link-button">
                <span className="mobile-short-label">Login</span>
                <span className="desktop-long-label">Login</span>
              </Link>
            )}
          </>
        </div>
        <nav className="categories-navigation">
          {data.allCategories.map((el) => (
            <Link
              key={el.id}
              className="category-navigation-link"
              href={`/ad/filter/${el.name}`}
            >
              {el.name}
            </Link>
          ))}
        </nav>
      </header>
    );
  }
};

export default Header;
