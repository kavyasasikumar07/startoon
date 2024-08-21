import numpy as np
import matplotlib.pyplot as plt

data = np.loadtxt('Data_2.txt') 

maxima = []
minima = []

for i in range(1, len(data) - 1):
    if data[i-1] < data[i] > data[i+1]:
        maxima.append(i)
    if data[i-1] > data[i] < data[i+1]:
        minima.append(i)
plt.plot(data, label='Signal')
plt.scatter(maxima, data[maxima], color='red', label='Maxima')
plt.scatter(minima, data[minima], color='blue', label='Minima')
plt.xlabel('Index')
plt.ylabel('Amplitude')
plt.title('Signal with Maxima and Minima Peaks')
plt.legend()
plt.show()

print("Maxima indices:", maxima)
print("Minima indices:", minima)
