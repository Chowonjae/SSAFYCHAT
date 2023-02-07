import axios from "axios";

// axios 객체 생성
// localServer 통신
function localServer() {
  const instance = axios.create({
    baseURL: "https://ssafychat.shop/",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

export { localServer };
