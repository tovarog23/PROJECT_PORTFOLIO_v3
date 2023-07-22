import os
import sys
import json 
import ast

general_file_path = r'C:\Users\Rogelio Medel\OneDrive\CODECADEMY\PERSONAL PROJECTS\PROJECT_PORTFOLIO_v3\resources\images\projects'

dir_list = []

for root, dirs, files in os.walk(general_file_path):
    for dir in dirs:
        folder_path = os.path.join(root, dir)
        dir_list.append(folder_path)

print(dir_list)

# RETRIEVE ALL FILES FROM EACH DIRECTORY:
path_files = []

for count, path in enumerate(dir_list):
    files_list = os.listdir(path)
    path_files.append(files_list)

# PASS THE INFORMATION TO JAVASCRIPT

print(json.dumps(path_files))

sys.stdout.flush()





