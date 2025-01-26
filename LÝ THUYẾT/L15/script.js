let inforUserDB = {
    fullName : "Ngô Lê Nam Quyền",
    email : "havu2845@gmail.com"
}

let inforUserFE = {
    phone : "0384805215",
    age : 19
}

let newInforUser = {
    ...inforUserDB,
    ...inforUserFE,
    facebook : "fb.com/abc"
}