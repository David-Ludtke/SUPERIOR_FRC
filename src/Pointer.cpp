#include <iostream>
int main() {
  int var = 10;
  int* pvar = &var
  for (int i  = 0; i < 100; i += 1) {
    *pvar += i;
  }
  std::cout<<var<<'\n';
}
