module.exports={
    plugins:[
        require("tailwindcss"),
        require("autoprefixer"),
        require("cssnano")({
            preset:'default'
        }),
        require("@fullhuman/postcss-purgecss")({
            content:["./index.html"],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
        
    ]
}