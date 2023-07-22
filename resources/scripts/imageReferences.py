import os 
import sys

searchPath = './resources/images/projects'

totalFiles = os.listdir(searchPath)

print(totalFiles)
final_paths = []
files_per_folder = []
print('HELLO WORLD \n')
for file in totalFiles:
    preliminaryList = os.listdir(searchPath + '/' + str(file))
    final_paths.append(preliminaryList)

print(final_paths)








