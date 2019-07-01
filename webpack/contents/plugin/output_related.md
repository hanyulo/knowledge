* HtmlWebpackPlugin
  * problem: you have an index.html file in dist folder
    * the index.html includes several bundle files.
    * if you change the bundle's name, you have to change the path in index.html manually.
  * solution:
    * HtmlWebpackPlugin generate the index.html file for you.

* html-webpack-template
  * has extra features to complement HtmlWebpackPlugin


* clean-webpack-plugin
 * clean dist folder in each build process
