import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/conf";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

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
    <div className="py-8">
      <Container>
        <h1 className="text-2xl text-yellow-500 font-bold font-mono mb-4">{post.title}</h1>
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-6">
          <div className="w-full lg:w-[50%]">
            <div className="browser-css prose prose-lg max-w-none">
              {parse(post.content)}
            </div>
          </div>
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl h-72 w-full lg:w-[50%] object-cover mb-4 lg:mb-0 lg:ml-4"
          />
        </div>
        {isAuthor && (
          <div className="flex justify-center">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-blue-500" className="mr-4 px-6 py-2 rounded-lg hover:bg-blue-600">
                Edit
              </Button>
            </Link>
            <Button
              bgColor="bg-blue-500"
              onClick={deletePost}
              className="px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Delete
            </Button>
          </div>
        )}
      </Container>
    </div>
  ) : null;
}
