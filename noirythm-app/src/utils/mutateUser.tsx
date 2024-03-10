import axiosInstance from "./axiosInstance";

interface postUserRegisterProps {
  postUserRegisterData?: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
}

interface postUserLoginProps {
  postUserLoginData?: {
    email: string;
    password: string;
  };
}

export const postUserRegister = async ({
  postUserRegisterData,
}: postUserRegisterProps) => {
  const payload = {
    name: postUserRegisterData?.name,
    email: postUserRegisterData?.email,
    password: postUserRegisterData?.password,
    confirm_password: postUserRegisterData?.confirmPassword,
  };
  try {
    axiosInstance.post("/api/register", payload).then((r) => {
      localStorage.setItem("token", r.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({ name: r.data.name, email: r.data.email })
      );
    });
  } catch (error) {
    console.log(error);
  }
};

export const postUserLogin = async ({
  postUserLoginData,
}: postUserLoginProps) => {
  const payload = {
    email: postUserLoginData?.email,
    password: postUserLoginData?.password,
  };

  axiosInstance
    .post("/api/login", payload)
    .then(({ data }) => {
      const accessToken = data.data.token;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data.data.name,
          email: data["email"],
        })
      );
    })

    .catch((Error) => {
      console.log(Error);
    });
};

export const postUserlogout = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    console.error("Access token not found");
    return;
  }

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  axiosInstance
    .post("/api/logout", null, { headers })
    .then((response) => {
      if (response.data.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
      } else {
        console.error("Logout failed");
      }
    })
    .catch((error) => {
      console.error("Error during logout:", error);
    });
};
