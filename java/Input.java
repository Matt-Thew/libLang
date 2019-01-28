import java.io.Console;
import java.util.Scanner;
public class Input{
  
    public static void main(String[] args) {
        String numberId = System.console().readLine("Enter id:");
        int telNumber = Integer.parseInt(numberId);
        System.out.println(telNumber);

        String banedWord = System.console().readLine("baned word:");

        if(banedWord.equals("dork")){
            System.out.printf("bad word");
        }

  }
}