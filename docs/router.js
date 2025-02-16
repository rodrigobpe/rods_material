import { createBrowserRouter } from "react-router";
import { Pages } from "./pages"
import { ButtonPage } from "./pages/Atoms/ButtonPage"

export const router = createBrowserRouter([
	{ path: '/docs', Component: Pages},
	{ path: "/docs/atoms/button", Component: ButtonPage },
])
