import toast from "react-hot-toast";

const useNotify = () => {
  const notify = (status, message) => {
    if (status === "success") {
      return toast.success(`${message}`, {
        style: {
          border: "1px solid #000",
          padding: "16px",
          color: "#0f1226",
        },
        iconTheme: {
          primary: "#038f05",
          secondary: "#FFFAEE",
        },
      });
    } else {
      return toast.error(`${message}`, {
        style: {
          border: "1px solid #000",
          padding: "16px",
          color: "#0f1226",
        },
        iconTheme: {
          primary: "#fc0808",
          secondary: "#FFFAEE",
        },
      });
    }
  };
  return notify;
};

export default useNotify;
