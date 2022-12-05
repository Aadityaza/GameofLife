#define rule
    #count neighbours
#if cell=active
    #<2 Dies   
    #<3 Dies
#if cell = dead
    #3 alive

# main
import numpy as np
import random




vp = np.random.randint(255, size=(200,200))
print (vp)
m,n=vp.shape

# display the image
from matplotlib import pyplot as plt
plt.imshow(vp,interpolation='nearest')
plt.show()