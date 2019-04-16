
import sys
try:
    print("hello");
except:
    e = sys.exc_info()[0]
    print(e)