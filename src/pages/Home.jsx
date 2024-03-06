import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf";
import { Container, Postcard } from "../components";
import { useSelector } from "react-redux";
import authService from "../appwrite/auth";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  const [user, setUser] = useState("none");

  useEffect(() => {
    if (authStatus) {
      appwriteService.getPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        setUser(userData.name);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="flex flex-col justify-between min-h-screen">
        <div className="w-full py-8  text-center bg-[#02042A] text-white">
          <Container>
            <div className="flex flex-wrap">
              <div className="p-2 w-full">
                {!authStatus && (
                  <h1 className="text-3xl font-bold font-serif hover:text-blue-400">
                    <span className="text-white">Welcome to</span>{" "}
                    <span className="text-yellow-400">BlogVerse</span>
                  </h1>
                )}

                {!authStatus && (
                  <h4 className="text-lg font-semibold pt-7 hover:text-blue-400">
                    Please Login to read posts
                  </h4>
                )}
              </div>
            </div>
          </Container>
        </div>
        <div className="w-full py-8">
          <Container>
            <div className="flex flex-wrap">
              {posts.map((post) => (
                <div key={post.$id} className="p-2 w-1/4">
                  <Postcard {...post} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <Postcard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
