import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../../components/Button/Button";
import { Navigate } from "react-router-dom";

export const CreateNewPost = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const format = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", file[0]);
    console.log(file);
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      credentials: "include",
      body: data,
    });
    await response.json();
    if (response.ok) {
      setRedirect(true);
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div>Here you can create new post</div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          name=""
          id=""
          required
        />
        <input
          type="summary"
          required
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
          placeholder="summary"
          name=""
          id=""
        />
        <input
          type="file"
          required
          //   value={file}
          onChange={(ev) => setFile(ev.target.files)}
        />
        <ReactQuill
          modules={modules}
          formats={format}
          value={content}
          onChange={(newValue) => setContent(newValue)}
        />
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "16px" }}
        >
          <Button
            title={"submit"}
            bg={"green"}
            px="4"
            py={8}
            className="submit"
            type={"submit"}
          />
        </div>
      </form>
    </>
  );
};
