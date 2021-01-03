let blogsList = [{
        "blogNo": 1,
        "imgURL": "https://images.unsplash.com/photo-1606146615992-7f25bf02a4fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80",
        "blogLink": "blogs\blog1\blog1.html",
        "title": "Version Control with Git PART-1",
        "desc": "In this blog you will'll get an overview of git commit, project history, branches, pull request, version control...",
        "lastUpdated": "Last Updated November 27, 2020 by Shivaansh Agarwal"
    },
    {
        "blogNo": 2,
        "imgURL": "https://images.unsplash.com/photo-1538388149542-5e24932d11a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        "blogLink": "blogs\blog2\blog2.html",
        "title": "How to find complement of base 10 Integer in Java?",
        "desc": "In this blog I discuss about how I solved the Leetcode 1009 problem, and what doubts I had...",
        "lastUpdated": "Last Updated November 28, 2020 by Shivaansh Agarwal"
    },
    {
        "blogNo": 3,
        "imgURL": "blogs/blog3/blog3-header-img.jpg",
        "blogLink": "https://dev.to/shiv1998/closures-in-javascript-part-1-28i4",
        "title": "Closures in Javascript!",
        "desc": "In this blog I discuss about my understanding of Closures in Javascript, compiled after reading/watching several blogs, videos, documentations...",
        "lastUpdated": "Last Updated December 15, 2020 by Shivaansh Agarwal"
    },
    {
        "blogNo": 4,
        "imgURL": "https://images.unsplash.com/photo-1608592077365-c6399182e63c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
        "blogLink": "https://dev.to/shiv1998/maps-hashmaps-in-javascript-4cdi",
        "title": "Maps in Javascript!",
        "desc": "Let's understand how to create and use a Map (Hashmap) in Javascript.",
        "lastUpdated": "Last Updated December 28, 2020 by Shivaansh Agarwal"
    }
];

function compare(a, b) {
    if (a.blogNo > b.blogNo) return 1;
    if (b.blogNo > a.blogNo) return -1;
    return 0;
}
blogsList.sort(compare);

let blogsHTMLList = "";
for (let blog of blogsList) {
    let blogHTML = `
    <li>
        <section class="blog-section">
            <div class="blog-listing-left">
                <img src="${blog.imgURL}" alt="Blog ${blog.blogNo} Heading Image" class="blog-listing-img">
            </div>
            <div class="blog-listing-right">
                <h3 class="blog-list-heading">
                    <a href="${blog.blogLink}" class="blog-link">${blog.title}</a>
                </h3>
                <p class="blog-desc">${blog.desc}</p>
                <small class="date">${blog.lastUpdated}</small>
            </div>
        </section>
    </li>`;
    blogsHTMLList += blogHTML;
}

document.querySelector('main > ul').innerHTML = blogsHTMLList;