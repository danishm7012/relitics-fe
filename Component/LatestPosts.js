import React from 'react'
import Link from "next/link"
import classes from "./BlogDetail.module.css"
import blogData from './Data/BlogData';


const LatestPosts = () => {

    return (
        <div>
            {blogData.slice(0, 4).map(posts => {
                const date = new Date(posts.date)
                const month = date.toLocaleDateString("en-US", { month: "short" });
                const day = date.toLocaleDateString("en-US", { day: "numeric" });
                // var lastPosts = blogData.slice(1, 3)
                return (
                    <Link href={`/Blog/${posts.id}`}>
                        < div className='d-flex my-2' >
                            <div className={classes.date}>
                                <div className={classes.dateDay}>{day}</div>
                                <div className={classes.dateMonth}>{month}</div>
                            </div>
                            <div className="ms-3 fs-16 my-auto">
                                {posts.title.length > 25
                                    ? posts.title.substring(0, 45) + '...'
                                    : posts.title}
                            </div>
                            <hr />
                        </div>
                    </Link>

                )
            })}

        </div >
    )
}

export default LatestPosts