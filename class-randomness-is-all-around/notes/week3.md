# class-randomness-is-all-around

## Week 3: Introduction to randomness for graphics with p5.js

### Human color perception

Perception of color is done by cone cells, specialized retinal cells containing pigments with different spectral sensitivities.

In humans, there are 3 types of cones sensitive to three different spectra, resulting in trichromatic color vision.

Color is not a property of electromagnetic radiation, but a feature of visual perception by an observer.

### Additive color

[Additive color](https://en.wikipedia.org/wiki/Additive_color)

Additive color is a method to create color by mixing a number of different light colors, with shades of red, green, and blue being the most common primary colors used in the additive color system.

Computer monitors and televisions are the most common examples of additive color. Examination with a sufficiently powerful magnifying lens will reveal that each pixel in CRT, LCD and most other types of color video displays is composed of red, green and blue sub-pixels, the light from which combines in various proportions to produce all the other colors as well as white and shades of gray.

The colored sub-pixels do not overlap on the screen, but when viewed from a normal distance they overlap and blend on the eye's retina, producing the same result as external superimposition.

[RGB color model](https://en.wikipedia.org/wiki/RGB_color_model)

The RGB color model is an additive color model in which red, green and blue light are added together in various ways to reproduce a broad array of colors.

RGB is a device-dependent color model: different devices detect or reproduce a given RGB value differently, since the color elements (such as phosphors or dyes) and their response to the individual R, G, and B levels vary from manufacturer to manufacturer, or even in the same device over time. Thus an RGB value does not define the same color across devices without some kind of color management.

Typical RGB input devices are color TV and video cameras, image scanners, and digital cameras. Typical RGB output devices are TV sets of various technologies (CRT, LCD, plasma, OLED, quantum dots, etc.), computer and mobile phone displays, video projectors, multicolor LED displays and large screens such as JumboTron.

Color printers, on the other hand are not RGB devices, but subtractive color devices (typically CMYK color model).

### Substractive color

[Substractive color](https://en.wikipedia.org/wiki/Subtractive_color)

A subtractive color model involves the mixing of a limited set of dyes, inks, paint pigments or natural colorants to create a wider range of colors, each the result of partially or completely subtracting (that is, absorbing) some wavelengths of light and not others. The color that a surface displays depends on which parts of the visible spectrum are not absorbed and therefore remain visible.

Subtractive color systems start with light, presumably white light. Colored inks, paints, or filters between the viewer and the light source or reflective surface subtract wavelengths from the light, giving it color.

[CMYK color model](https://en.wikipedia.org/wiki/CMYK_color_model)

The CMYK color model (process color, four color) is a subtractive color model, used in color printing, and is also used to describe the printing process itself. CMYK refers to the four inks used in some color printing: cyan, magenta, yellow, and key.

The CMYK model works by partially or entirely masking colors on a lighter, usually white, background. The ink reduces the light that would otherwise be reflected. Such a model is called subtractive because inks "subtract" the colors red, green and blue from white light. White light minus red leaves cyan, white light minus green leaves magenta, and white light minus blue leaves yellow.

In additive color models, such as RGB, white is the "additive" combination of all primary colored lights, while black is the absence of light. In the CMYK model, it is the opposite: white is the natural color of the paper or other background, while black results from a full combination of colored inks.

### Computer vision

[Computer vision](https://en.wikipedia.org/wiki/Computer_vision) is an interdisciplinary scientific field that deals with how computers can be made to gain high-level understanding from digital images or videos.

Some software dealing with computer vision includes:

* [clmtrackr](https://github.com/auduno/clmtrackr)
* [DeepDream](https://en.wikipedia.org/wiki/DeepDream)
* [ml5.js + PoseNet](https://ml5js.org/docs/posenet-webcam)
* [ml5.js + YOLO](https://ml5js.org/docs/yolo-webcam)
* [pico.js](https://github.com/tehnokv/picojs)
* [SimpleCV](http://simplecv.org/)
* [OpenCV](https://opencv.org/)
* [WebGazer.js](https://github.com/brownhci/WebGazer)

### Introduction to [p5.js](https://p5js.org/)

p5.js is a JavaScript library created by [Lauren McCarthy](http://lauren-mccarthy.com/), and part of the [Processing Foundation](https://processingfoundation.org/).

### How to setup

Today we will use the [p5.js editor](https://editor.p5js.org/), please create an account so you can save it.

Another way to program with p5.js is downloading it from p5js.org and using a server.

### Drawing basic shapes

Coordinate system, explain origin.

ellipse()

ellipseMode()

rect()

rectMode()

translate()

### Colors in p5.js

* color()
* stroke()
* noStroke()
* strokeWeight()
* fill()
* noFill()

### p5.js color modes

By default, p5.js uses an RGB color model, with an 8-bit resolution, using values from 0 to 255.

[p5js.org/reference/#/p5/colorMode](http://p5js.org/reference/#/p5/colorMode)

colorMode() changes the way p5.js interprets color data. By default, the parameters for fill(), stroke(), background(), and color() are defined by values between 0 and 255 using the RGB color model. This is equivalent to setting colorMode(RGB, 255). Setting colorMode(HSB) lets you use the HSB system instead. By default, this is colorMode(HSB, 360, 100, 100, 1). You can also use HSL.

### [White noise](https://en.wikipedia.org/wiki/White_noise), [pink noise](https://en.wikipedia.org/wiki/Pink_noise)

### [Brownian noise](https://en.wikipedia.org/wiki/Brownian_noise), [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise)

### Server for loading projects

Two different options are suggested for running a server in your computer:

1. Google Chrome + Web Server for Chrome plugin

* Open Google Chrome
* Install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en) plugin.
* Open the plugin and use the "CHOOSE FOLDER" section to select the folder where your code is. In this case, I suggest using the "code" folder of the class.
* Make sure the Web Server is "Started", there is an slider for turning it on.
* Now your server is running on your computer on a certain port, by default is 8887, so you can visit the website [http://127.0.0.1:8887](http://127.0.0.1:8887), and navigate through your files.


2. Use Python for setting up a server

* cd to the folder

```bash
cd code/
```

* Use Python2 or Python 3 for setting up a server

```bash
python -m SimpleHTTPServer
```

```bash
python3 -m http.server
```

* Go to [http://localhost:8000/](http://localhost:8000/) on your browser.
