from adafruit_circuitplayground import cp
import time
import random

#Define colors
pink = (12,10,12)
gold = (50, 40, 5)
blue = (0,0,8)
orange = (25, 10, 0)
blank = (0,0,0)
grn = (0,20,0)
green  = (0,40,10)
red = (20,0,0)
white = (20,20,20)

color = [red,orange,gold,green,blue,white,pink]
statecolor = [red,gold,green,blank]
answers = ["Yes, definitely.", "As I see it, yes.", "Reply hazy, try again.", "Cannot predict now.", "Do not count on it.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
yes = ["m8/yesdef.wav", "m8/asyes.wav"]
maybe = ["m8/hazy.wav", "m8/cannot.wav", "m8/count.wav"]
no = ["m8/sources.wav", "m8/outlook.wav", "m8/doubtful.wav"]

colors = [green,green,orange,orange,orange,red,red,red]

wavs = ["m8/yesdef.wav", "m8/asyes.wav", "m8/hazy.wav", "m8/cannot.wav", "m8/count.wav", "m8/sources.wav", "m8/outlook.wav", "m8/doubtful.wav"]


def cycle(x):
    for i in range(x*10):
        cp.pixels[i%10] = random.choice(color)
        time.sleep(.1)
def dom8():
    cycle(1)
    ans = random.randrange(8)
    cp.pixels.fill(colors[ans])
    print(answers[ans])
    cp.play_file(wavs[ans])
    time.sleep(2)
    cp.pixels.fill(blank)
def blinknum(num,color):
    if num != 0:
        for i in range(num):
            cp.pixels.fill(color)
            time.sleep(.25)
            cp.pixels.fill(blank)
            time.sleep(.10)
    else:
        for i in range(10):
            cp.pixels[i] = color
            cp.pixels.show()
            time.sleep(.14)

        cp.pixels.fill(blank)

magic = 0
brain = 1

state = magic
cycle(2)
cp.pixels.fill(blank)
good = 0
bad = 0
garray = [4,3,2,1,0]
barray = [5,6,7,8,9]



while True:
    if cp.switch:
        if state == magic:
            state = brain
            good = 0
            bad = 0
            g=0
            b=0
            cycle(1)
            cp.pixels.fill(blank)
    else:
        if state==brain:
            state = magic
            cycle(1)
            cp.pixels.fill(blank)

    if cp.button_a and state == magic:
        dom8()

    if cp.button_a and state == brain:
        time.sleep(1)
        g = g+1

        if g>5:
            g = 5
        print (str(g)+":"+str(garray[g-1]))

        cp.pixels[garray[g-1]] = green

    if cp.button_b and state == brain:
        time.sleep(1)
        b = b+1
        if b>5:
            b = 5

        cp.pixels[barray[b-1]] = red

    if cp.touch_A1 and state==brain:
        good = good+g
        bad = bad+b
        g=0
        b=0

    if cp.touch_A2:
        cycle(1)
        ans = 0
        if good==bad:
            ans = 1
        if good > bad:
            ans = 0
        if bad > good:
            ans = 2
        good = 0
        bad = 0
        g = 0
        b = 0
        if ans == 0:
            cp.pixels.fill(green)
            cp.play_file(random.choice(yes))
        if ans == 1:
            cp.pixels.fill(gold)
            cp.play_file(random.choice(maybe))
        if ans == 2:
            cp.pixels.fill(red)
            cp.play_file(random.choice(no))
        time.sleep(2)
        cp.pixels.fill(blank)

