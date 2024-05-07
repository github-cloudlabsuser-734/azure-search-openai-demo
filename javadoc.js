/**
 * This class represents a calculator that can perform basic arithmetic operations.
 */
public class Calculator {
    
    /**
     * Adds two numbers.
     *
     * @param num1 The first number.
     * @param num2 The second number.
     * @return The sum of num1 and num2.
     */
    public int add(int num1, int num2) {
        return num1 + num2;
    }
    
    /**
     * Subtracts two numbers.
     *
     * @param num1 The first number.
     * @param num2 The second number.
     * @return The difference between num1 and num2.
     */
    public int subtract(int num1, int num2) {
        return num1 - num2;
    }
    
    /**
     * Multiplies two numbers.
     *
     * @param num1 The first number.
     * @param num2 The second number.
     * @return The product of num1 and num2.
     */
    public int multiply(int num1, int num2) {
        return num1 * num2;
    }
    
    /**
     * Divides two numbers.
     *
     * @param num1 The first number.
     * @param num2 The second number.
     * @return The result of dividing num1 by num2.
     * @throws ArithmeticException If num2 is zero.
     */
    public double divide(int num1, int num2) throws ArithmeticException {
        if (num2 == 0) {
            throw new ArithmeticException("Cannot divide by zero");
        }
        return (double) num1 / num2;
    }
}