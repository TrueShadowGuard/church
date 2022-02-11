import React from 'react';
import classes from "./Post.module.css";
import {useNavigate, useParams} from "react-router";
import Navbar from "../../common-components/Navbar/Navbar";
import Footer from "../../common-components/Footer/Footer";
import {useEffect, useState} from "react";
import PostsService from "../../network/PostsService.js";
import dayjs from "dayjs";
import Container from "../../common-components/Container/Container.jsx";
import Spinner2 from "../../common-components/Spinner2/Spinner2.jsx";
import {useSearchParams} from "react-router-dom";

const Post = () => {
    const params = useParams();
    let [search] = useSearchParams();
    search = Object.fromEntries(search);
    const navigate = useNavigate();

    const [post, setPost] = useState();

    useEffect(() => {
        PostsService.get(search).then(response => setPost(response.data[0]));
    }, [params.id]);

    if (post === undefined) return <Spinner2 />

    if (post === null) {
        navigate("/not-found");
        return null;
    }

    const dateString = dayjs(post.date).format("D MMMM, YYYY");

    return (
        <>
            <Navbar/>
            <main className={classes.main}>
                <Container>
                    <div className={classes.type}>{post.type}</div>
                    <div className={classes.header}>{post.header}</div>
                    <div className={classes.date_and_author}>
                        <span className={classes.date}>{dateString}</span>&nbsp;
                        <span className={classes.author}>By {post.author}</span>
                    </div>
                    <img className={classes.image} src={post.image} alt={""}/>
                </Container>
                <Container maxWidth={"768px"}>
                    <article className={classes.content} dangerouslySetInnerHTML={{__html: post.content}}/>
                </Container>
            </main>
            <Footer/>
        </>
    );
};

export default Post;
