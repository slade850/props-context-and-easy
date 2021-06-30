import "../styles/globals.css";
import { StoreProvider, createStore } from "easy-peasy";
import count from "../store/count";
import CounterProvider from "../context/count";
import Link from "next/link";
import { useRouter } from "next/router";
import { clearReload } from "../service/storage";

const store = createStore(count);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <CounterProvider>
      <StoreProvider store={store}>
        <nav>
          <ul>
            <li
              className={router.asPath === "/" ? "nav-item active" : "nav-item"}
            >
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li
              className={
                router.asPath === "/props" ? "nav-item active" : "nav-item"
              }
            >
              <Link href="/props">
                <a>with Props</a>
              </Link>
            </li>
            <li
              className={
                router.asPath === "/context" ? "nav-item active" : "nav-item"
              }
            >
              <Link href="/context">
                <a>with Context</a>
              </Link>
            </li>
            <li
              className={
                router.asPath === "/easy" ? "nav-item active" : "nav-item"
              }
            >
              <Link href="/easy">
                <a>with Easy-peasy</a>
              </Link>
            </li>
          </ul>
          <button
            onClick={() => {
              clearReload();
              router.reload();
            }}
          >
            clear
          </button>
        </nav>
        <Component {...pageProps} />
      </StoreProvider>
    </CounterProvider>
  );
}

export default MyApp;
