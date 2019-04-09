/**
 * character
 */
public class Character {
    private int MAX_COUNT =0;

    private String characterName;
    
    public Character(String characterName){
        this.characterName = characterName;
    }

    public String getCharacterName() {
        return characterName;
    }  

    public void fill(){
        this.MAX_COUNT = 12;
    }
    
    public boolean isEmtpy(){
        return MAX_COUNT==0;
    }
}