#simple calculator


def sum(a,b):
	a, b = int(a), int(b)
	return a + b

def sub(a,b):
	a, b = int(a), int(b)
	return a - b

def multipli(a,b):
	pass

def division(a,b):
	pass

print("Введите два чиcла и укажите операцию")
num_a = input("num 1: ")
num_b = input("num 2: ")
operation = input("Укажите операцию(+, - , * или /) ")
if operation == '+':
	print(sum(num_a, num_b))