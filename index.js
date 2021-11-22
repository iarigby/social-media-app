function publishPost() {
    let postText = document.getElementById('post-text').value
    let postsFeed = document.getElementById('posts-feed')
    let postElem = '<div class="post-text">'+ postText + '</div>'
    postsFeed.insertAdjacentHTML('afterbegin', postElem)
}

document.getElementById('publish-post').onclick = publishPost
