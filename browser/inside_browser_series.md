
## Browser Process
1. UI thread
    * handle user input
    * get renderer process
2. Network thread
    * request data
    * hand data back to UI thread
3. Browser Process
    * hand data to Renderer Process through IPC (Inter-process communication)

## Renderer Process
1. main thread
    * render pipe line
        1. parse html to DOM tree
            * script
                * defer
                * async
                * initial
        2. create computed style
        3. create layout tree
            * time consuming!!!
            * location
            * content: "1234"
        4. paint
            * paint order
            * z-index
            * default steps
                1. background
                2. text
                3. inner rectangle
            * draw in different layers
            * create layer tree
2. composite thread
    1. composite
        * rasterizes the page
            * separate parts of a page into layers, rasterize them separately,
        * The layers are placed together and finally shown on the screen.
    2. create Draw quads -> composite frame
        * draw quads
            * Contains information such as the tile's location in memory and where in the page to draw the tile taking in consideration of the page compositing.
        * composite frame
            * final frame
    3. send composite frame to Browser Process

## Browser Process -> GPU Process
* send composite frame to GPU process


## Note
* animation
    * only modify composite part is quicker
        * transform
            1. translate
            2. scale
            3. rotate
            4. opacity
    * if you touch the layout part, the whole pipeline thing will drag your browser performance
        * position: absolute: left

## ref
* https://developers.google.com/web/updates/2018/09/inside-browser-part1
* https://developers.google.com/web/updates/2018/09/inside-browser-part2
* https://developers.google.com/web/updates/2018/09/inside-browser-part3
* https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
