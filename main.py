#define rule
    #count neighbours
#if cell=active
    #<2 Dies   
    #<3 Dies
#if cell = dead
    #3 alive

# main
from PIL import Image 
import numpy as np
import random

vp = np.random.randint(255,size=(200,200,200))
print(vp)

im = Image.fromarray(vp, 'RGB')
im.show()


# vp = np.zeros((200,200),dtype='i,i,i')
# m,n=vp.shape
# for i in range(1,n):
#     for j in range(m):
#         r = random.randint(0,255)
#         g = random.randint(0,255)
#         b = random.randint(0,255)
#         vp[i,j]=(r,g,b)

# im = Image.fromarray(vp, 'RGB')
# im.show()