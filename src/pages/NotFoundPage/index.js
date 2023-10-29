import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center gap-5 px-5 m-auto">
        <h1 className="text-[250px] text-center">😥</h1>
        <h1 className="text-6xl text-center font-semibold">404</h1>
        <h1 className="text-6xl text-center font-semibold">Page Not Found</h1>
        <p className="text-xl text-center">
          The page you're looking for doesn't exist.
        </p>
        <p className="text-xl italic text-center">
          "Things we lose have a way of coming
          <Link to="../" className="text-blue-500 hover:text-blue-400">
            {" "}
            back
          </Link>{" "}
          to us in the end, if not always in the way we expect."
        </p>
        <p className="text-xl text-center font-semibold">
          ― JK Rowling, Harry Potter and the Order of the Phoenix
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
