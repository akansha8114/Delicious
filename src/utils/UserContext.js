//Step 34: Mkaing the global store called context so that i can access data in whole app

import { createContext } from "react";

const UserContext = createContext({
    LoggedInUser: "Default User",
});

export default UserContext;