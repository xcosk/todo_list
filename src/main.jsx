import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root} from './routes/Root/Root'
import { ErrorPage404 } from './routes/ErrorPage404/ErrorPage404'
import { ToDO_list, loader as todoLoader } from './routes/ToDO_list/ToDO_list'
import './index.css'
import { Notes, loader as notesLoader } from './routes/Notes/Notes'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage404 />,
		children: [
			{
				path: 'Notes',
				element: <Notes />,
				loader: notesLoader,
			},
			{
				path: 'ToDO_List',
				element: <ToDO_list />,
				loader: todoLoader,
			},
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
