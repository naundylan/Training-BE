function extensionFileName(string) {
    if (string.include("."))
        return string.split('.').pop();
    else
        return "Đây không phải file đúng định dạng";
};

const input = prompt("Nhập vào một tên file");
if (input.length > 0) {
    const extension = extensionFileName(input);
    console.log(extension);
}
