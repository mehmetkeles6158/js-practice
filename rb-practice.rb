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

def factorial(num)
  product = 1
  while num > 0
    product *= num
    num -= 1
  end
  p product
end

factorial(3)








