var webpack = require('webpack'); 
var path = require('path'); 
 
 
var BUILD_DIR = path.resolve(__dirname, 'public/'); 
var APP_DIR = path.resolve(__dirname, 'src/'); 
 
 
var config = { 
entry: { 
index: APP_DIR + '/routers/Root.js', 
//login: APP_DIR + '/user_login.jsx' 
}, 
output: { 
path: BUILD_DIR, 
filename: '[name].js' 
}, 
module: { 
loaders: [ 
{ 
test: /\.jsx?/, 
include: APP_DIR, 
loader: 'babel-loader',

}, 
{
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
      }
] 
} 
}; 
 
 
module.exports = config;