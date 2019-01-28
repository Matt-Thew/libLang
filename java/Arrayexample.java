import java.util.Arrays;
class Arrayexample{
     public static void main(String[] args) {
        
        String[] name = new String[3];
        name[0] = "Matt Thew";
        name[1] = "Yoda";
        System.out.println(name[0]);

        String[] lastName = {"Jedi","Wick","Hodor"};
        short[] shortArr = new short[] { 1, 2, 3, 4 }; 
        System.out.println(Arrays.toString(shortArr)); 
    }
}