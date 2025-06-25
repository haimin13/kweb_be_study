const { runQuery } = require('./../lib/database');

const formatDate = date => {
    const yr = date.getFullYear();
    const mon = date.getMonth() + 1;
    const dt = date.getDate();
    const hrs = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    return `${yr}. ${mon}. ${dt} ${hrs}:${mins}:${secs}`;
};

const replaceDate = article => {
    if (article) {
        article.createdAt = formatDate(article.createdAt);
        article.lastUpdated = formatDate(article.lastUpdated);
    }
    return article;
};

const getList = async (start, count) => {
    const pstmt = "SELECT a.id, title, created_at AS createdAt, last_updated AS lastUpdated, u.display_name AS displayName " +
                  "FROM articles AS a INNER JOIN users AS u ON a.author = u.id WHERE a.is_active = 1 AND is_deleted = 0 " +
                  "ORDER BY a.id DESC LIMIT ?, ?";
    const data = [start, count];
    const result = await runQuery(pstmt, data);
    for (let i = 0; i < result.lengtht; i++) {
        result[i] = replaceDate(result[i]);
    }
    return result;
}

const getTotalCount = async () => {
    const pstmt = "SELECT Count(*) AS count FROM articles WHERE is_active = 1 AND is_deleted = 0";
    const result = await runQuery(pstmt);
    return result[0].count;
};

const getById = async id => {
    const pstmt = "SELECT a.id, title, content, created_at AS createdAt, last_updated AS lastUpdated, " +
                  "author, u.display_name AS displayName " +
                  "FROM articles AS a INNER JOIN users AS u ON a.author = u.id " +
                  "WHERE a.id = ? AND a.is_active = 1 AND is_deleted = 0";
    const data = [id];
    const result = await runQuery(pstmt, data);
    return replaceDate(result[0]);
};

const getByIdAndAuthor = async (id, author) => {
    const pstmt = "SELECT title, content, created_at AS createdAt, last_updated AS lastUpdated " +
                  "FROM articles WHERE id = ? AND author = ? AND is_active = 1 AND is_deleted = 0"
    const data = [id, author.id];
    const result = await runQuery(pstmt, data);
    return replaceDate(result[0]);
};

const create = async (title, content, author) => {
    const pstmt = "INSERT INTO articles (title, content, author) VALUES (?, ?, ?)";
    const data = [title, content, author.id];
    const result = await runQuery(pstmt, data);
    return result.insertId;
};

const update = async (id, title, content) => {
    const pstmt = "UPDATE articles SET title = ?, content = ? WHERE id = ?";
    const data = [title, content, id];
    await runQuery(pstmt, data);
};

const remove = async (id) => {
    const pstmt = "UPDATE articles SET is_deleted = 1 WHERE id = ?";
    const data = [id];
    await runQuery(pstmt, data);
};

module.exports = { 
    getList,
    getTotalCount,
    getById,
    getByIdAndAuthor,
    create,
    update,
    remove
 };