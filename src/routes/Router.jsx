import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../Components/ErrorPage";
import Contact from "./Contact";
import { createContactsData, getContactsData, getContactsId } from "../utils";
import EditContact from "./EditContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //   Adding error page on the parent route.
    errorElement: <ErrorPage />,
    // load data with loader
    loader : getContactsData,
    // to make something happen like create,edit,delete etc use action method from react-router-dom
    action : createContactsData,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader : getContactsId,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactsId,
        action : EditContact,
      },
    ],
  },
]);

export default router;
