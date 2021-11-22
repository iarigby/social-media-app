function publishPost() {
    let text = document.getElementById('post-text').value
    let postsFeed = document.getElementById('posts-feed')
    postsFeed.insertAdjacentHTML('afterbegin', text + '<br>')
}

document.getElementById('publish-post').onclick = publishPost
