#simple calculator


def sum(a,b):
	a, b = int(a), int(b)
	return a + b

def sub(a,b):
	pass

def multipli(a,b):
	a, b = int(a), int(b)
	return a * b

def division(a,b):
	a, b = int(a), int(b)
	return a / b


print("Введите два чиcла и укажите операцию")
num_a = input("num 1: ")
num_b = input("num 2: ")
operation = input("Укажите операцию(+, - , * или /) ")
if operation == '+':
	print(sum(num_a, num_b))
