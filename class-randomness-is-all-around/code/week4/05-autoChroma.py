## example based on Auto Chroma Key example from VidPy website
## https://antiboredom.github.io/vidpy/examples.html

# import vidpy module
from vidpy import Clip, Composition

# video location in hard drive
video = "videos/video5.mp4"

# empty list of clips
clips = []

for i in range(0, 10):
    clip = Clip(video)

    # attempt to automatically remove background color
    # you can also specify a color with color='#00ff00'
    clip.chroma(amount=0.2, color="#000000")

    # start the clips 1/2 second after last clip
    clip.set_offset(i * 0.5)

    # change the clips x coordinate
    clip.position(x=(i*10)-30)

    # loop the clip 3 times
    clip.repeat(3)

    clips.append(clip)


comp = Composition(clips, bgcolor='#ff4dff', duration=4)
comp.save('chroma.mp4')
