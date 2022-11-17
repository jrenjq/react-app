# Using readlines()
myfile = open('common_passwords.txt', "r")
myline = myfile.readline()
myList = []
while myline:
    word = myline.replace('\n', '')
    myList.append(word)
    myline = myfile.readline()
myfile.close()

strList = str(myList)
  
# writing to file
file2 = open('common_passwords_list.txt', 'w')
file2.writelines(strList)
file2.close()