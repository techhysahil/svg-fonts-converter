#SVG to Fonts converter
Contains SVG to Fonts converter which use grunt package "grunt-webfont" for converting svg to font files. It allow conversion of SVG files to following:
woff,woff2,ttf,eot,html,css,less,sass
It also creates HTML demo file with styleshet(less,sass & css).

##Install Dependencies
fontforge & ttfautohint needs to be installed first. For more info check grunt-webfont repo.
npm install

##Usage
Step 1: Add all SVG files into "./icons" directory.
Step 2: Run "grunt" or "grunt webfont" or "grunt default".
Step 3: Get all the final fonts file with html+style files in "./dist" directory.

Enjoy guy's... :)