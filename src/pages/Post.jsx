import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Button from "../components/Button";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-10 bg-white min-h-screen">
            <Container>
                {/* Featured image */}
                <div className="w-full max-w-3xl mx-auto mb-8 relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="w-full object-cover max-h-96"
                    />
                    {isAuthor && (
                        <div className="absolute top-4 right-4 flex gap-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-black" className="mr-0 text-xs px-3 py-1.5">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-white" textColor="text-black" className="text-xs px-3 py-1.5 !border-gray-300 hover:!bg-red-600 hover:!text-white hover:!border-red-600" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Article */}
                <article className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="prose prose-gray max-w-none text-gray-800 leading-relaxed browser-css">
                        {parse(post.content)}
                    </div>
                </article>
            </Container>
        </div>
    ) : null;
}