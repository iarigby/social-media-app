function publishPost() {
    let text = document.getElementById('post-text').value
    console.log(text)
}

document.getElementById('publish-post').onclick = publishPost
