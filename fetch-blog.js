const fs = require('fs');
const path = require('path'); // パス操作のためのモジュール

// 仮のAPIレスポンスデータ
const apiResponse = {
    contents: [
        {
            id: "s6her22ru4o0",
            title: "(Sample) First, open this article",
            content: `
<h2 id="h2cec5766ea">Created from a blog template🎉</h2>
<p>An API was created with the blog template.<br>Excellent job! 🎉</p>
<!-- その他のHTMLコンテンツ -->
            `,
            category: {
                name: "Update Information"
            }
        }
    ]
};

// ファイルを_postsディレクトリに保存する関数
function saveMarkdownFiles(data) {
    const postsDir = '_posts'; // 保存するディレクトリ名
    // ディレクトリが存在しない場合は作成
    if (!fs.existsSync(postsDir)) {
        fs.mkdirSync(postsDir);
    }

    data.contents.forEach(article => {
        const filename = path.join(postsDir, `${article.id}.md`); // ファイルパスを組み立て
        const markdownContent = `---
layout: post
title: ${article.title}
tags: [${article.category.name}]
---

${article.content}`;

        // ファイルに保存
        fs.writeFile(filename, markdownContent, (err) => {
            if (err) throw err;
            console.log(`file: '${filename}' saved.`);
        });
    });
}

// 関数を実行
saveMarkdownFiles(apiResponse);
