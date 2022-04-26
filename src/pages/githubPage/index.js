import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../services/api";

export default function GithubPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    const promise = api.GithubCallback(code);

    promise.then((response) => {
      const promise = api.GithubCallbackSuccess(response.data.access_token);

      promise.then((response) => {
        api
          .LoginWithGithub()

          .then((response) => {
            localStorage.setItem("auth", JSON.stringify(response.data));
            navigate("/home");
          })

          .catch((error) => {
            navigate("/");
          });
      });
    });
  }, []);

  return <></>;
}
