export function paginate(items, pageNamber, pageSize) {
    const startIndex = (pageNamber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
