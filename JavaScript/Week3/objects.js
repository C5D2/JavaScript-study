let authUser = {
    uuid: crypto.randomUUID(),
    name: "tiger",
    email: "seonbeom2@gmail.com",
    isSignIn: false,
    permission: "paid", // paid | free
};

for (let key in authUser) {
    if (Object.prototype.hasOwnProperty.call(authUser, key)) { // 불린이 true일 경우
        console.log(key);
    }
}