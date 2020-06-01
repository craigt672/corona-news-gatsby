function slugify (title) {
  return title.toLowerCase()
  .replace(/\-/g, "")
  .replace(/\'/g, "")
  .replace(/\"/g, "")
  .replace(/\‘/g, "")
  .replace(/\’/g, "")
  .replace(/\:/g, "")
  .replace(/\,/g, "")
  .replace(/\./g, "")
  .replace(/\%/g, "")
  .replace(/\s/g, "-")
  .replace(/\?/g, "");
}

module.exports = { slugify };
