#Write a method that prints out every number from 1 to 100. 

# def one_hundred
#   i = 0
#   while i < 100
#     p i += 1
#   end
# end
# p one_hundred


# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

#  def every_other_number
#    (1..100).each do |i|
#       p i +=2 
#    end
# #   i = -1

# #   while i < 99
# #     p i+=2
# #   end
#  end
# every_other_number

# Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

# def method_55(nums)

#   arr_55 = []
#   nums.each do |num|
#     if num == 55
#       arr_55 << num
#     end
#   end
#   p arr_55.count
# end
# method_55([10,3, 55, 20,55, 39 ,55])


# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 

# def every_string(strings)
#   arr = []
#   strings.each do |string|
#     arr << string 
#     arr << "awesomesauce" 
#   end
#   p arr
# end
# every_string(["a","b","c"])


#  Start with the hash: item_amounts = {chair: 5, table: 2}
#  Someone just bought two chairs. Change the hash such that the chair amount is 3.
#  The final result should be: {chair: 3, table: 2}

# item_amounts = {chair: 5, table: 2}
# item_amounts [:chair] -= 2
# p item_amounts

# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

# def factorial(num)
#   product = 1
#   while num > 0
#     product *= num
#     num -= 1
#   end
#   p product
# end
# factorial(3)


# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.

# nums_1 = [1,2,3]
# nums_2 = [4,5,6,7,8]

# com_sum = []
# nums_1.each do |num1|
#   nums_2.each do |num2|
#     sum = num1 + num2
#     com_sum << sum
#   end
# end

# p com_sum

# Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

# def select_even_items(strings)
#   result = []
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       result << string
#     end
#     index = index + 1
#   end
#   result
# end
# p select_even_items(["a", "b", "c", "d", "e", "f"])


# Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

# def max(numbers)
#   current_max = numbers[0]
#   numbers.each do |number|
#     if number > current_max
#       current_max = number
#     end
#   end
#   current_max
# end
# p max([5, 4, 8, 1, 2])

# Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

# def descending(numbers)
#   result = []
#   index = numbers.length - 1
#   numbers.length.times do
#     result << numbers[index]
#     index = index - 1
#   end
#   result
# end
# p descending([1, 3, 5, 7])


# def bubble_sort(array)
#   n = array.length
#   loop do
#     swapped = false

#     (n-1).times do |i|
#       if array[i] > array[i+1]
#         array[i], array[i+1] = array[i+1], array[i]
#         swapped = true
#       end
#     end

#     break if not swapped
#   end

#   array
# end

# def mergesort(array)
#   def merge(left_sorted, right_sorted)
#     res = []
#     l = 0
#     r = 0

#     loop do
#       break if r >= right_sorted.length and l >= left_sorted.length

#       if r >= right_sorted.length or (l < left_sorted.length and left_sorted[l] < right_sorted[r])
#         res << left_sorted[l]
#         l += 1
#       else
#         res << right_sorted[r]
#         r += 1
#       end
#     end

#     return res
#   end

#   def mergesort_iter(array_sliced)
#     return array_sliced if array_sliced.length <= 1

#     mid = array_sliced.length/2 - 1
#     left_sorted = mergesort_iter(array_sliced[0..mid])
#     right_sorted = mergesort_iter(array_sliced[mid+1..-1])
#     return merge(left_sorted, right_sorted)
#   end

#   mergesort_iter(array)
# end

# def sum(nums)
#   sum = 0
#   nums.each do |num|

#     sum = sum + num,

#   end
# end

# 2) Write a function that takes in an array of strings and returns the smallest string.

# def smallest_string(strings)

#   smallest_string_length = strings[0].length
#   small_string = ""

#   strings.each do |string|
#     if string.length < smallest_string_length
#       small_string = string
#     end
#   end

#   return small_string
  
# end

# arr1 = ["to", "apple", "cat"]

# p smallest_string(arr1)

# --3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

def reverse (nums)

  reverse = []
  i = nums.length - 1
  while i > -1
    reverse << nums[i]
    i -= 1
  end
  p reverse
end
reverse([1,2,3])

numbers = [1,2,3,4,5,6,7]
reverse1 = []
i = numbers.length - 1
numbers.each do |num1|
  num1 = numbers[i]
  reverse1 << num1
  i -= 1
end

p reverse1

# def a_words(words)
   
#   final_words = []
#   words.each do |word|
#     if word[0] == "a"
#       final_words << word
#     end
#   end
#   final_words.count
# end

# arr2 = ["apple", "cat", "two" , "angry"]

# p a_words(arr2)

# def single_string (strings)
   
#   final = []
#   strings.each do |string|

#     final << string.chars
#   end

# p final
# end


# p single_string(["apple", "cat", "two" , "angry"])



test_string = "(var x = {y: [1, 2, 3]})"
stack = []
open_braces = ["(", "[", "{"]
close_braces = ["}", "]", ")"]
matching_open_braces = { ")" => "(", "]" => "[", "}" => "{" }
index = 0
while index < test_string.length
  letter = test_string[index]
  if open_braces.include?(letter)
    stack.push(letter)
  end
  if close_braces.include?(letter)
    if matching_open_braces[letter] == stack.last
      stack.pop
    else
      puts "Invalid braces"
      return
    end
  end
  index += 1
end
if stack.length > 0
  puts "Invalid braces"
else
  puts "Valid braces"
end