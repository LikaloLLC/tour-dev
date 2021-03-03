import IndexPage from "./views/index/index.jsx"
import ExamplePage from "./views/example/index.jsx"

const routes = [
    {
        path: "/",
        title: "Home",
        exact: true,
        component: IndexPage
    },
    {
        path: "/example",
        title: "Examples",
        component: ExamplePage
    }
]

export default routes;