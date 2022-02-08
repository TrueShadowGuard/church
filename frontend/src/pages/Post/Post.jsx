import React from 'react';
import classes from "./Post.module.css";
import {useNavigate, useParams} from "react-router";
import Navbar from "../../common-components/Navbar/Navbar";
import Footer from "../../common-components/Footer/Footer";
import {useEffect, useState} from "react";
import PostsService from "../../network/postsService.js";
import dayjs from "dayjs";
import Container from "../../common-components/Container/Container.jsx";
import Spinner2 from "../../common-components/Spinner2/Spinner2.jsx";

const Post = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState();

    useEffect(() => {
        PostsService.getOne(params.id).then(response => setPost(response.data));
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
