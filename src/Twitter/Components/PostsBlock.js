import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";

export const PostsBlock = ({ allPosts, page }) => {
  // console.log(allPosts);
  return (
    <div className="postsBlock text-slate-500 py-2">
      {allPosts?.map((post) => (
        <div key={post.id}>
          <div className="mb-2">
            <div className="flex gap-1">
              <div className="w-1/12">
                <Link to={`/profile/${post.userId}`}>
                  <img
                    className="min-w-[40px] h-[40px] aspect-[1/1] object-cover rounded-full"
                    src={post.user.image}
                    alt=""
                  />
                </Link>
              </div>
              <div className="w-11/12">
                <div className="flex justify-between mb-2">
                  <Link
                    to={`/profile/${post.userId}`}
                    className="text-slate-400 hover:text-slate-500 px-2.5"
                  >
                    {post.user.username}
                  </Link>
                  <div className="text-slate-400 text-[10px]">{`${
                    post.createdAt.split("T")[0]
                  } ${post.createdAt.split("T")[1].substring(0, 5)}`}</div>
                </div>
                <div className="px-2.5">
                  <Link to={`/post/${post.id}`}>
                    {post.detail}
                    <br />
                    <br />
                  </Link>
                  <div className="hashtagBlock flex justify-between">
                    <div className="flex gap-x-2">
                      {post.hashtagOnPosts.map((hashtag) => (
                        <div key={hashtag.id}>
                          <Link
                            to={`/hashtag/${hashtag.hashtag.id}`}
                            className="font-light text-slate-300 hover:text-slate-500"
                          >
                            #{hashtag.hashtag.topic}
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="commentBtn text-slate-300 mb-1">
                      <div className="flex items-end">
                        <Link
                          to={`/reply/${post.id}`}
                          className="flex items-center"
                        >
                          {post.replyToPost.length > 0 && (
                            <p className="text-[10px] mx-1">
                              {post.replyToPost.length}
                            </p>
                          )}
                          <FaComment className="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>

          {page === "post" &&
            post.replyToPost?.map((firstRep) => (
              <div key={firstRep.id}>
                <div className="ml-8">
                  <div className="mb-2">
                    <div className="flex gap-1">
                      <div className="w-1/12">
                        <Link to={`/profile/${firstRep.userId}`}>
                          <img
                            className="min-w-[40px] h-[40px] aspect-[1/1] object-cover rounded-full"
                            src={firstRep.user.image}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="w-11/12">
                        <div className="flex justify-between mb-2">
                          <Link
                            to={`/profile/${firstRep.userId}`}
                            className="text-slate-400 hover:text-slate-500 px-2.5"
                          >
                            {firstRep.user.username}
                          </Link>
                          <div className="text-slate-400 text-[10px]">{`${
                            firstRep.createdAt.split("T")[0]
                          } ${firstRep.createdAt
                            .split("T")[1]
                            .substring(0, 5)}`}</div>
                        </div>
                        <div className="px-2.5">
                          <Link to={`/post/${firstRep.id}`}>
                            {firstRep.detail}
                            <br />
                            <br />
                          </Link>
                          <div className="hashtagBlock flex justify-between">
                            <div className="flex gap-x-2">
                              {firstRep.hashtagOnPosts.map((hashtag) => (
                                <div key={hashtag.id}>
                                  <Link
                                    to={`/hashtag/${hashtag.hashtag.id}`}
                                    className="font-light text-slate-300 hover:text-slate-500"
                                  >
                                    #{hashtag.hashtag.topic}
                                  </Link>
                                </div>
                              ))}
                            </div>
                            <div className="commentBtn text-slate-300 mb-1">
                              <div className="flex items-end">
                                <Link
                                  to={`/reply/${post.id}`}
                                  className="flex items-center"
                                >
                                  {firstRep.replyToPost?.length > 0 && (
                                    <p className="text-[10px] mx-1">
                                      {firstRep.replyToPost.length}
                                    </p>
                                  )}
                                  <FaComment className="" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                {/* {firstRep.replies?.map((secRep) => (
                  <div key={secRep.id} className="ml-12">
                    <div className="mb-2">
                      <div className="flex gap-1">
                        <div className="w-1/12">
                          <Link to={`/profile/${secRep.userId}`}>
                            <img
                              className="min-w-[40px] h-[40px] aspect-[1/1] object-cover rounded-full"
                              src={secRep.user.image}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="w-11/12">
                          <div className="flex justify-between mb-2">
                            <Link
                              to={`/profile/${secRep.userId}`}
                              className="text-slate-400 hover:text-slate-500 px-2.5"
                            >
                              {secRep.user.username}
                            </Link>
                            <div className="text-slate-400 text-[10px]">{`${
                              secRep.createdAt.split("T")[0]
                            } ${secRep.createdAt
                              .split("T")[1]
                              .substring(0, 5)}`}</div>
                          </div>
                          <div className="px-2.5">{secRep.detail}</div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                ))} */}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
