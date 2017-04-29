var tipuesearch = {"pages":[{"tags":"misc","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: https://github.com/40423103/2017springcd_hw 課程投影片: http://40423103.github.io/2017springcd_hw 課程網誌: http://40423103.github.io/2017springcd_hw/blog","title":"About","url":"./pages/about/"},{"tags":"Course","text":"Brython submodule add cdw10 導入 cdw10/add.py window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../cdw10']}); } from browser import document as doc from browser import html import math import add container = doc['container'] degree = math.pi/180 a=1 b=2 sum=add.add(a,b) def button1(event): x = input(\"give me x\") container <= str(math.cos(60*degree)+float(x)+float(sum)) doc[\"button1\"].bind(\"click\", button1) 按下取 x 值","title":"第十週","url":"./w10.html"},{"tags":"Course","text":"修正Github Github 改版解決方法 到 clone下來的倉儲資料夾 plugin\\liquid_tags 裡面的 Readme.md 檔案 將所有大括號改成兩個 修改後的程式碼 # Liquid-style Tags *Author: Jake Vanderplas <jakevdp@cs.washington.edu>* This plugin allows liquid-style tags to be inserted into markdown within Pelican documents. Liquid uses tags bounded by ``{{% ... %}}``, and is used to extend markdown in other blogging platforms such as octopress. This set of extensions does not actually interface with liquid, but allows users to define their own liquid-style tags which will be inserted into the markdown preprocessor stream. There are several built-in tags, which can be added as follows. First, in your pelicanconf.py file, add the plugins you want to use: PLUGIN_PATH = '/path/to/pelican-plugins' PLUGINS = ['liquid_tags.img', 'liquid_tags.video', 'liquid_tags.youtube', 'liquid_tags.vimeo', 'liquid_tags.include_code', 'liquid_tags.notebook'] There are several options available ## Image Tag To insert a sized and labeled image in your document, enable the ``liquid_tags.img`` plugin and use the following: {{% img [class name(s)] path/to/image [width [height]] [title text | \"title text\" [\"alt text\"]] %}} ### Base64 Image (inline image) tag There is one more tag for image: ``b64img``. It is based on ``img`` tag, but instead of inserting link on image it acutally reads image and inserts it as base64 text into ``<img src=`` attribute. To use it: 1. Enable ``liquid_tags.b64img`` 1. Insert tag as you'd insert image one: ``{{% b64img [class name(s)] path/to/image [width [height]] [title text | \"title text\" [\"alt text\"]] %}}`` Images are read on compilation phase so you can use any local path (just be sure that image will remain there on next compilation) ## Instagram Tag To insert a sized and labeled Instagram image in your document by its shortcode (such as ``pFI0CAIZna``), enable the ``liquid_tags.gram`` plugin and use the following: {{% gram shortcode [size] [width] [class name(s)] [title text | \"title text\" [\"alt text\"]] %}} You can specify a size with `t`, `m`, or `l`. ## Flickr Tag To insert a Flickr image to a post, follow these steps: 1. Enable ``liquid_tags.flickr`` 2. [Get an API key from Flickr](https://www.flickr.com/services/apps/create/apply) 3. Add FLICKR_API_KEY to your config 4. Add this to your document: ``{{% flickr image_id [small|medium|large] [\"alt text\"|'alt text'] %}}`` ## Giphy Tag To insert a gif from Giphy in your document by its id (such as ``aMSJFS6oFX0fC``), enable the ``liquid_tags.giphy`` plugin and use the following: {{% giphy gif_id [\"alt text\"|'alt text'] %}} IMPORTANT: You have to request a production API key from giphy [here](https://api.giphy.com/submit). For the first runs you could also use the public beta key you can get [here](https://github.com/giphy/GiphyAPI). ## Soundcloud Tag To insert a Soundcloud Widget to a post, follow these steps: 1. Enable ``liquid_tags.soundcloud`` 2. Add this to your document: ``{{% soundcloud track_url %}}`` ## Youtube Tag To insert youtube video into a post, enable the ``liquid_tags.youtube`` plugin, and add to your document: {{% youtube youtube_id [width] [height] %}} The width and height are in pixels, and can be optionally specified. If they are not, then the dimensions will be 640 (wide) by 390 (tall). If you're experiencing issues with code generating (i.e. missing closing tags), add `SUMMARY_MAX_LENGTH = None` to your config. ## Vimeo Tag To insert a Vimeo video into a post, enable the ``liquid_tags.vimeo`` plugin, and add to your document: {{% vimeo vimeo_id [width] [height] %}} The width and height are in pixels, and can be optionally specified. If they are not, then the dimensions will be 640 (wide) by 390 (tall). If you're experiencing issues with code generating (i.e. missing closing tags), add `SUMMARY_MAX_LENGTH = None` to your config. ## Video Tag To insert flash/HTML5-friendly video into a post, enable the ``liquid_tags.video`` plugin, and add to your document: {{% video /url/to/video.mp4 [width] [height] [/path/to/poster.png] %}} The width and height are in pixels, and can be optionally specified. If they are not, then the original video size will be used. The poster is an image which is used as a preview of the video. To use a video from file, make sure it's in a static directory and put in the appropriate url. ## Audio Tag To insert HTML5 audio into a post, enable the ``liquid_tags.audio`` plugin, and add to your document: {{% audio url/to/audio [url/to/audio] [url/to/audio] %}} Up to 3 audio urls are possible. So you can add different versions of the audio file you want to post because not every browser support every file format. To use a audio from file, make sure it's in a static directory and put in the appropriate url. ## Include Code To include code from a file in your document with a link to the original file, enable the ``liquid_tags.include_code`` plugin, and add to your document: {{% include_code /path/to/code.py [lang:python] [lines:X-Y] [:hidefilename:] [title] %}} All arguments are optional but their order must be kept. `:hidefilename:` is only allowed if a title is also given. {{% include_code /path/to/code.py lines:1-10 :hidefilename: Test Example %}} This example will show the first 10 lines of the file while hiding the actual filename. The script must be in the ``code`` subdirectory of your content folder: this default location can be changed by specifying CODE_DIR = 'code' within your configuration file. Additionally, in order for the resulting hyperlink to work, this directory must be listed under the STATIC_PATHS setting, e.g.: STATIC_PATHS = ['images', 'code'] ## IPython notebooks To insert an [IPython][] notebook into your post, enable the ``liquid_tags.notebook`` plugin and add to your document: {{% notebook filename.ipynb %}} The file should be specified relative to the ``notebooks`` subdirectory of the content directory. Optionally, this subdirectory can be specified in the config file: NOTEBOOK_DIR = 'notebooks' Because the conversion and rendering of notebooks is rather involved, there are a few extra steps required for this plugin: - First, you will need to install IPython: pip install ipython==2.4.1 - After typing \"make html\" when using the notebook tag, a file called ``_nb_header.html`` will be produced in the main directory. The content of the file should be included in the header of the theme. An easy way to accomplish this is to add the following lines within the header template of the theme you use: {{% if EXTRA_HEADER %}} {{ EXTRA_HEADER }} {{% endif %}} and in your configuration file, include the line: EXTRA_HEADER = open('_nb_header.html').read().decode('utf-8') this will insert the proper css formatting into your document. ### Optional Arguments for Notebook Tags The notebook tag also has two optional arguments: ``cells`` and ``language``. - You can specify a slice of cells to include: ``{{% notebook filename.ipynb cells[2:8] %}}`` - You can also specify the name of a language which Pygments should use for highlighting code cells. A list of the short names for languages that Pygments will highlight can be found [here](http://www.pygments.org/docs/lexers/). ``{{% notebook filename.ipynb language[julia] %}}`` This may be helpful for those using [IJulia](https://github.com/JuliaLang/IJulia.jl) or notebooks in any other language, especially as the IPython project [broadens its scope](https://github.com/ipython/ipython/wiki/Roadmap:-IPython) of [language compatibility](http://jupyter.org/). By default, the language for highlighting will be ``ipython``. - These options can be used separately, together, or not at all. However, if both tags are used then ``cells`` must come before ``language``: ``{{% notebook filename.ipynb cells[2:8] language[julia] %}}`` ### Collapsible Code in IPython Notebooks The plugin also enables collapsible code input boxes. For this to work you first need to copy the file ``pelicanhtml_3.tpl`` (for IPython 3.x, ``pelicanhtml_2.tpl`` (for IPython 2.x)...) to the top level of your Pelican blog. Notebook input cells containing the comment line ``# <!-- collapse=True -->`` will be collapsed when the html page is loaded and can be expanded by clicking on them. Cells containing the comment line ``# <!-- collapse=False -->`` will be open on load but can be collapsed by clicking on their header. Cells without collapse comments are rendered as standard code input cells. ## Testing To test the plugin in multiple environments we use [tox](http://tox.readthedocs.org/en/latest/), to run the entire test suite, just type: \u0002wzxhzdk:0\u0003 [IPython]: http://ipython.org/","title":"Github改版問題","url":"./github.html"},{"tags":"Course","text":"繪製八連桿並模擬 利用Onshape繪製八連桿並進行模擬 Onshape： https://cad.onshape.com/documents/e64e4499c72a617ab07565a3/w/a195dae8e55c99ed1e147d18/e/a24cb1f9f9b5f16dfcb40d52 繪製影片 國立虎尾科技大學機械設計工程系_40423103 - 八連桿繪製 from 劉怡萱 on Vimeo . 組裝完成","title":"第六週","url":"./w6.html"},{"tags":"Course","text":"單連桿導入V-rep 將單連桿導入V-rep並進行模擬 模擬影片 國立虎尾科技大學機械設計工程系_40423103 - 單連桿導入V-rep from 劉怡萱 on Vimeo .","title":"第五週","url":"./w5.html"},{"tags":"Course","text":"Start.bat 設定 修改 Start.bat，讓批次檔可以在開啟時自動搜尋電腦 IP 然後修改 stunnel.conf 並開啟 fossil 倉儲 最後會開啟課程投影片、課程 fosill 倉儲、課程 Vimeo、課程部落格，我後來改成開小組 fossil 和課程部落格 chrome https://%NetworkIP% https://mde2a2.kmol.info/cdag2/home http://mde.tw/2017springwcm/blog/ Exit 設定影片 Start.bat 設定 from 劉怡萱 on Vimeo .","title":"第四週","url":"./w4.html"},{"tags":"Course","text":"Hyperworks 逐字稿 (1&3) Hyperworks1 逐字稿 In the 2017 release, we followed our vision and implement a lot more features, delivering more technology for your HyperWorks units investment. In our continuous development, we focused, as always, on simulation-driven innovation, adding more optimization technology. We added more physics simulation to the software, and we improved our parallel performance on high performance computers. OptiStruct, which is our implicit code, adds a lot of development in the nonlinear implicit area, but also in the optimization technology. RADIOSS, we see a lot of development in new materials and material modeling. You probably know that we did the acquisition of MDS a couple of years back, and we have now MDS integrated with RSDIOSS, and are doing application there. MotionSolve is based on a very unique formulation that this different from other multibody dynamics code, and the MotionSolve formulation lends itself very well to optimization implementation. So the team has worked really hard on contact formulations, got very robust. It's very cool which kind of problems can solve with contact modelling. So this is along the structural solvers side on AcuSolve side we actually added the complete portfolio of turbulence and transition models that really helps us to solve problems in wind turbines and automotive industry much more accurately, and it's a big asset of physics simulation. And then our electromagnetic suite has actually grown last year through the acquisition of Flux, from the CEDRAT company. As well as the acquisition of WinProp, from AWE. So now we have a complete frequency spectrum from low frequency electromagnetics the high frequency electromagnetics which is powered by FEKO. We now have a complete portfolio of physics modeling available for our customers, and it's all linked through optimization. In the 2017 release, we followed our vision and implement a lot more features, delivering more technology for your HyperWorks units investment. In our continuous development, we focused, as always, on simulation-driven innovation, adding more optimization technology. We added more physics simulation to the software, and we improved our parallel performance on high performance computers. OptiStruct, which is our implicit code, adds a lot of development in the nonlinear implicit area, but also in the optimization technology. RADIOSS, we see a lot of development in new materials and material modeling. You probably know that we did the acquisition of MDS a couple of years back, and we have now MDS integrated with RSDIOSS, and are doing application there. MotionSolve is based on a very unique formulation that this different from other multibody dynamics code, and the MotionSolve formulation lends itself very well to optimization implementation. So the team has worked really hard on contact formulations, got very robust. It's very cool which kind of problems can solve with contact modelling. So this is along the structural solvers side on AcuSolve side we actually added the complete portfolio of turbulence and transition models that really helps us to solve problems in wind turbines and automotive industry much more accurately, and it's a big asset of physics simulation. And then our electromagnetic suite has actually grown last year through the acquisition of Flux, from the CEDRAT company. As well as the acquisition of WinProp, from AWE. So now we have a complete frequency spectrum from low frequency electromagnetics the high frequency electromagnetics which is powered by FEKO. We now have a complete portfolio of physics modeling available for our customers, and it's all linked through optimization. Hyperworks3 逐字稿 In OptiStruct, one of our focus areas is nonlinear large deformation analysis. And in 2017 we added nonlinear transient analysis. The main purpose was to couple AcuSolve to do fluid-structure interaction. But also one development that happened during the last year. Came out piece-wise in different point releases. And is now really mature. And 2017 is our contact analysis. So we have different ways of defining large sliding contact and things like that. The fast contact analysis for small deformation is blazing fast. It's a very simple idea that makes the solution very fast, and that adds OptiStruct as really a leading nonlinear . Our two major optimization packages are OptiStruct for structural optimization, there's a huge multidisciplinary component, too. And Hyperstudy for general optimization wrap around multidisciplinary optimization. OptiStruct we spend a lot of time continuing the development for optimization. And we have now Failsafe topology optimization. We kept on working on the manufacturing solution to do lattice optimization. For the multi-model optimization it's really maturing and we find more and more applications where that helps . Our goal is actually to include all the physics in the optimizations. So the team right now is working on optimization for nonlinear problems and so on And then Hyperstudy, on the other hand, is going through a new transformation of the user the user experience was changed a few years back, but we are now trying to make it much more easy to use by hiding a lot of the advanced functionalities to the regular users. And depending on the level of expertise or depending on the job that the user has to do, they can customize the userience. We adds a few new connections. One of them is a Flux connection. Flux is an electromagnetics code that we just acquired for low frequency electromagnetics, so we can all take a Flux database and put it into Hyperstudy into the study with that.","title":"第三週","url":"./w3.html"},{"tags":"Course","text":"繪製四連桿機構，並導入V-rep 先利用SolveSpace繪製四連桿機構，再導入V-rep進行動態模擬 1. 30桿鍵 2. 50桿鍵 3. 60桿鍵 4. 組裝 繪製影片 四連桿 from 劉怡萱 on Vimeo .","title":"第二週","url":"./w2.html"},{"tags":"Course","text":"下載新版可攜程式系統，設定Stunnel.conf 1. 下載 可攜程式系統 (1GB) 2. 設定 Stunnel.conf 的 IP 設定影片 Stunnel from 劉怡萱 on Vimeo .","title":"第一週","url":"./w1.html"}]};