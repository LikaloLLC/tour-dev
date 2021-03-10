import Remote from "./remote/App.jsx"
import Default from "./default/App.jsx"
import Actions from "./_actions/App.jsx"
import ContentBase from "./contentbase/App.jsx"

const routes = [
    {
        path: "/default",
        title: "Default",
        component: Default
    },
    {
        path: "/remote",
        title: "Remote src",
        component: Remote
    },
    {
        path: "/contentbase",
        title: "Content based",
        component: ContentBase
    },
    {
        path: "/actions",
        title: "Actions in steps",
        component: Actions
    },
]

export default routes;