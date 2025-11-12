#include <iostream>
void setarray(int* array, int length, int num) {
  for (int i = 0; i < length; i += 1) {
    array[i]; /*sugar for *(array + i)*/ = num; //unsafe because no way to validate the arrays length or to validate that array points to valid memory
  }
}

int main() {
  int array[10];
  setarray(array, 10, 70);
  for (int i = 0; i < 10; i += 1) {
    std::cout<<array[i]<<' '; //print 70 ten times, no need for assignment because the pointer modifys the memory dirrectly without assignment
  }
}
