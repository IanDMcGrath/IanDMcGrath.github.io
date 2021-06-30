---
layout: post
title: Teaching Blender to Love My Old Assets
date: 2021-06-12 18:36 -0700
---

# This is an example of h1 text

## This is an example of h2 text

![this is an example image with alt text](/assets/images/yessirGriphon.png)

{% youtube "https://www.youtube.com/watch?v=Dji1sCz8z-c" %}
<!-- this is an example of a youtube embed -->
<!--https://www.markdownguide.org/basic-syntax/-->

# Obligatory Opening Paragraph
You know how, in an artists world, you have to show your best work first? You can't lead people up to a grand reveal with your old works. In fact, you usually should show your older stuff without the context that you're showing a progression in skill level. With design recruitment only having short patience for anyone's reel, portfolio, project, etc. you really ought to start with the loudest thing you got, and stay in that zone. Completely cut out all the loose progression that got you there. They don't want that.
That's what I understood. But maybe I gave that thought too much credit. In the end, I didn't want to show off anything. None of it was that sort of loud that artists wanted to see. I left it all in the stairwell, and I took the elevator. So here I am, having arrived at my destination, but no loud bang, no portfolio.... I digress.
Today I'm looking at taking pieces of an old project and re-authoring them to fit into my online portfolio. There's a few of these that I've looked at as a starting point for this venture. I bailed real quick on the Unreal Engine project with 20 people's work in it. Looking at it closely, it's going to take me some weeks to really turn it around. So... The victim today is going to be my hard-surface assets for another UE4 project.
This part of the project is a second(?) attempt at an environment kit. Which is strange because most of the project was supposed to be focused on writing/recording dialogue, creating/animating characters, designing/creating puzzles, and a large dollup of level design using //PRE-MADE// assets. This is largely my fault. I got pretty frustrated with the environment pieces we were using since it was all relatively thin geometry. I felt it didn't fit the theme we were trying to hit. Now, I didnt keep time while building these assets. I think it took 2 weeks to put everything in this scene into UE4. From a project with ~3 months of dev time, that's too much time spent on /feelings/, and should have been a solved problem during concepting.

This is originally authored in Blender ~v2.81. As I'm re-importing these assets to one scene in v2.93, I realize I've never relied on Blender's materials for anything. I don't know the PBR workflow in any sense in up to this point. Trying to import the texture maps from Substance Painter, and Wow these are all 2k maps. Wait a second, there are 3 texture maps per material. There are some objects here with 8 materials. I have One Hundred Seven, 2k resolution texture maps... for a somewhat small environment kit. It totals to ~293MB. Umm, so, anyways, college is hard and this happened after 4 years of near-constant burnout. Yep... OK PBR materials are gonna wait for a bit. I need to CRUSH all of these down. The obvious ultimate-end-all optimisation would be to build tiling materials out of most of this stuff and completely rebuild the materials that drive them. That's going to take quite a while. In an effort to be hasty, I'm instead going to reduce the size of the textures and atlas them together.
Photoshop has a batch exporter. Important note: don't try to import all the images on the welcome screen or you'll open each image in a separate file. Open one image. then drag and drop the rest of the images into that canvas. Everything should land in the same file, each image comes in as a new layer. Photoshop will ask you to confirm imported image transform for every image. There's no fast way to do this, but it's faster to hold the Enter key than it is to click the checkbox 100 times. Once everything's imported. Image -> Image Size -> change resolution (I'm going for 512 pixels to start) -> OK. Then File -> Export -> Layers to Files. Change these settings as needed, I'm exporting as JPEGs. Important

There are some challenges I imagine I'll run into while uploading to Sketchfab. Are my UVs and materials all going to be respected as I've defined them in Blender? Could sketchfab overwrite the UVs of some objects with other objects UVs? Is there a limit to the objects I can have in the scene, or number of materials? I've only uploaded single-object, single-materials projects to Sketchfab in the past. Uploading to Sketchfab at all was a part of a class assignment. I think I had an issue with materials even then. All will hopefully be answered as I upload. As a non-paying user, I have "1 upload token" in a tooltip floating off my user icon. A quick search on it results "With a Basic membership, you can upload an unlimited number of public downloadable models and one view-only model per month..." So it sounds like I don't have anything to worry about there if I don't mind being plublicly downloadable. Thank goodness!

![this is an example image with alt text](\assets\capstoneSolitudeBlenderToSketchFab\doorLanding1.png)
![this is an example image with alt text](\assets\capstoneSolitudeBlenderToSketchFab\doorLanding2.png)
I can't say why I built a landing into the car. Just stripping that off and pretending it was never there. It would make sense if it telescoped out of the hull. This shouldn't interfere with the texture maps so I'm continuing on.