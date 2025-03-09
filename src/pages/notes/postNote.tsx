import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const PostNote = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = location.state?.date || "Unknown Date";
  const title = location.state?.title || "Note";
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("# Post not found");
        return res.text();
      })
      .then((data) => {
        console.log(data);
        setContent(data);
      })
      .catch(() => setContent("# Post Not Found"));
  }, [slug]);

  return (
    <div className="bg-black text-white max-w-screen min-h-screen h-auto w-full font-playfair overflow-x-hidden pr-5 pb-5">
      <div className="flex flex-row">
        <button
          className="bg-white text-black cursor-pointer w-40 hover:bg-lightBeige hover:text-darkBeige3 m-5 p-5 mb-10"
          onClick={() => {
            navigate("../notes");
          }}
        >
          back to all notes.
        </button>
        <h1 className="p-5 m-5">
          {date} - {title}
        </h1>
      </div>

      <div className="w-full pl-5 prose prose-invert">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={content}
          components={{
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default PostNote;
