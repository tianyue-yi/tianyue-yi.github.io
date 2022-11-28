def consecutive_numbers (filename, n):
    f = open(filename, 'w+')
    for i in range (n):
        f.write((str(i+1))+ "\n")
        print (f)
    
    f.close

def main():
    consecutive_numbers("numbers.txt", 5)
    output = bool
main()