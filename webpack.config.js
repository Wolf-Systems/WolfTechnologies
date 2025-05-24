const HtmlWebpackPlugin = require("html-webpack-plugin") //sirve para inyectar html 
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    mode:'development',

    output:{
        clean:true
    },

    module : {
        rules : [
            {
                test:/\.html$/,
                loader:'html-loader', //para cargar html a dist
                options:{
                    sources:false
                }
            },
            {
                test:/\.css$/,
                exclude:/styles.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/styles.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/,
                loader:'file-loader',
            },
        ]
    },

    optimization:{},
    
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new CopyPlugin({
            patterns:[
                {from:'src/resources/', to:'resources/'},
            ]
        })
    ]
}