module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    
    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("blog/*.md");
    });
};