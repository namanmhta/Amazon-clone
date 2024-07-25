#include <iostream>

using namespace std;

template <typename T>
class Stack {
private:
    T* arr;
    int top;
    int capacity;

public:
    Stack(int size = 10);    // Constructor
    ~Stack();                // Destructor

    void push(T element);
    void pop();
    T peek();
    bool isEmpty();
    bool isFull();
};

template <typename T>
Stack<T>::Stack(int size) {
    arr = new T[size];
    capacity = size;
    top = -1;
}

template <typename T>
Stack<T>::~Stack() {
    delete[] arr;
}

template <typename T>
void Stack<T>::push(T element) {
    if (isFull()) {
        cout << "Stack Overflow" << endl;
        return;
    }
    arr[++top] = element;
}

template <typename T>
void Stack<T>::pop() {
    if (isEmpty()) {
        cout << "Stack Underflow" << endl;
        return;
    }
    top--;
}

template <typename T>
T Stack<T>::peek() {
    if (isEmpty()) {
        cout << "Stack is empty" << endl;
        return T();
    }
    return arr[top];
}

template <typename T>
bool Stack<T>::isEmpty() {
    return top == -1;
}

template <typename T>
bool Stack<T>::isFull() {
    return top == capacity - 1;
}

int main() {
    int size, choice, element;
    cout << "Enter stack size: ";
    cin >> size;
    Stack<int> stack(size);

    do {
        cout << "\nStack Operations:\n";
        cout << "1. Push\n";
        cout << "2. Pop\n";
        cout << "3. Peek\n";
        cout << "4. Check if Empty\n";
        cout << "5. Check if Full\n";
        cout << "6. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter element to push: ";
                cin >> element;
                stack.push(element);
                break;
            case 2:
                stack.pop();
                break;
            case 3:
                cout << "Top element is: " << stack.peek() << endl;
                break;
            case 4:
                cout << (stack.isEmpty() ? "Stack is empty." : "Stack is not empty.") << endl;
                break;
            case 5:
                cout << (stack.isFull() ? "Stack is full." : "Stack is not full.") << endl;
                break;
            case 6:
                cout << "Exiting..." << endl;
                break;
            default:
                cout << "Invalid choice. Please try again." << endl;
        }
    } while (choice != 6);

    return 0;
}
