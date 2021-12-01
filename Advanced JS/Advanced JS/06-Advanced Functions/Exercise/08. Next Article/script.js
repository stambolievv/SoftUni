function getArticleGenerator(articles) {
    const div = document.getElementById('content');
    let index = 0;
    return () => {
        if (articles.length > index) {
            const article = document.createElement('article');
            article.textContent = articles[index];
            div.appendChild(article);
            index++;
        }
    };
}