import React from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import './TodosLoading.css';

function TodosLoading() {
    return (
        <section>
        <ul className="list">
          {Array(4)
            .fill()
            .map((item, index) => (
                <li className="TodoItem" key={index}>
                    <SkeletonTheme baseColor="#335083" highlightColor="#4e7cca">
                        <span className="Icon-container Icon-container--add">
                            <Skeleton width={30} height={30} />
                        </span>
                        <p className="TodoItem-p">
                            <Skeleton width={`90%`} height={20} />
                        </p>
                    </SkeletonTheme>
                </li>
            ))}
        </ul>
      </section>
        
    );
}

export { TodosLoading };