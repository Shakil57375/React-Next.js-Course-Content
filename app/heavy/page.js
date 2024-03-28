import { Suspense } from "react";
import Posts from "../components/Posts";

const Heavy = () => {
    return (
        <div>
            <h1>Heavy page</h1>
            <Suspense fallback={<h1>Post Data Data is loading......</h1>}>
                <Posts />
            </Suspense>
        </div>
    );
};

export default Heavy;
