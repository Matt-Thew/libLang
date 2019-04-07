import java.io.Console;
import java.util.Scanner;
public class Hello{
  
    public static void main(String[] args) {


        Console console = System.console();
        String guest = console.readLine("Please Enter your name:\n");
        System.out.printf("Hello your name is : %s\n",guest);


        System.exit(0);
        Scanner s =  new Scanner(System.in);
        String name = s.nextLine();
        System.out.printf("Hello %s,\n",name);

        String input = System.console().readLine();
        System.out.printf("Hello ,This name %s",input)  ;
  }
} 