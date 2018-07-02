## Too Much inline CSS Style

## Optimize CSS Delivery

* Check your website with google PageSpeed Insights.

### Overview
* Style Redner Process
  1. Download and process all external stylesheets which used by the rendering page.
  2. Render
  * Need to wait all http requests.

* Inline CSS Style(in HTML)
  * Good for small amount of css.
  * Reduce HTTP request.
  * Inline CSS with big amount of css
    * cause flash of un-styled content.
    * Prevent us from caching css.

* Solution for big amount of css
  * Inline the necessary css of rendering above-the-fold.
  * Defer loading the remaining external styles after above-the-fold.


```HTML
<html>
  <head>
    <style>
      .blue{color:blue;}
    </style>
    </head>
  <body>
    <div class="blue">
      Hello, world!
    </div>
    <noscript id="deferred-styles">
      <link rel="stylesheet" type="text/css" href="small.css"/>
    </noscript>
    <script>
      // load deferred style
    </script>
  </body>
</html>
```

## Extract Text Webpack Plugin(ETWP)

* In default, webpack inline all css style.
* ETWP extract all inline css style to different css files.
* You can define the name of output file, e.g., bundle.css.

## References

[Page Speed - Google](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery)
[Extract Text Webpack Plugin - Youtube](https://www.youtube.com/watch?v=-j_90uQw-Iw)
