class Loop{


    public static void main(String[] args) {

        /**Mutidimension array    */

        int score[][] = {{1, 2, 4, 2, 6, 5, 4, 3, 3, 2, 5, 7, 2, 7, 8, 4, 3, 2},{2, 3, 5, 1, 1, 2, 3, 1, 1, 2, 4, 1, 3, 3, 2, 6, 3, 2}};


        System.out.println(score[0]);


        System.exit(0);


        /**Complex loop */
        String[] Movies = {"Star War","Lion king","John Wick"};

        for(int i = 0; i < Movies.length; i++){
            String Movie = Movies[i];
            System.out.println(Movies[i]);
        }



        /**Simple loop */
        String[] friends = {"John","Rambo","Jerry"};
        for (String friend : friends) {
            System.out.println(friend);
        }
    }
}