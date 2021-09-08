import Produtos from "./components/Produtos/Produtos";

export const rotas = [
  {
    path: "/produtos",
    component: Produtos,
    title: "Produtos",
  },
  {
    path: "/users",
    component: Users,
    title: "Users",
  },
  {
    path: "/",
    component: Home,
    title: "Home",
  },
];

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  console.log(window.location);
  return <h2>Users</h2>;
}
