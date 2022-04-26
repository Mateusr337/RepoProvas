import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";

export default function GithubPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    const promise = api.GithubCallback(code);

    promise.then((response) => {
      const promise = api.GithubCallbackSuccess(response.data.access_token);
      promise.then((response) => {
        if (!response.data.email) return error();

        api
          .LoginWithGithub(response.data.email)
          .then((response) => {
            login(response.data);
            navigate("/home");
          })

          .catch((error) => {
            error();
          });
      });
    });
  }, []);

  function error() {
    toast.error(
      "It was not possible to make your authentication through github, this app is not providing the necessary information about you!"
    );
    navigate("/");
  }

  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: "#252526", top: "100px" }}
        limit={1}
        dark={true}
        position={"top-center"}
      />
    </>
  );
}
