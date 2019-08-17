export default function upload(option) {
    const xhr = new XMLHttpRequest();
    xhr.upload.onerror = function () {

    }

    xhr.upload.onprogress = function (e) {
        const {loaded,total} = e;
        option.onProgress(Math.floor(loaded / total * 100))
    }
    xhr.upload.onload = function () {
        option.onLoad(option.file)
    }
    xhr.open("POST",option.action,true)
    const formData = new FormData();
    formData.append(option.type,option.file,option.filename)
    xhr.send(formData)


}
