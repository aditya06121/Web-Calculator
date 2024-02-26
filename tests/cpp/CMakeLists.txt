cmake_minimum_required(VERSION 3.8)

set(This Example)

project(${This} c cxx)

set(CMAKE_C_STANDARD 99)
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

enable_testing()
add_subdirectory()