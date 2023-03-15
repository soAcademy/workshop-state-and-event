import { Link } from "react-router-dom";

export const PostsBlock = ({ allPosts }) => {
  return (
    <div className="postsBlock text-slate-500 py-2">
      {allPosts.map((post) => (
        <div key={post.id} className="mb-2">
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
                <div className="text-slate-400">{`${
                  post.createdAt.split("T")[0]
                } ${post.createdAt.split("T")[1].substring(0, 5)}`}</div>
              </div>
              <div className="px-2.5">
                {post.detail}
                <br />
                <br />
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
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};
