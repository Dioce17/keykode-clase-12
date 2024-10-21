import { useState } from "react";

import AddTask from "../components/AddTask";
import Header from "../components/header/components/Header";
import SeeTask from "../components/SeeTask";

function Home() {
    const [showCmponent, setShowComponent] = useState(true);
    const [listTask, setlistTask] = useState([]);

    return (
        <>
            <Header setShowComponent={setShowComponent} />

            {showCmponent ? <AddTask listTask={listTask} setlistTask={setlistTask} /> : <SeeTask listTask={listTask} />}
        </>
    );
}

export default Home;