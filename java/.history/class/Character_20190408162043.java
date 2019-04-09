/**
 * character
 */
public class Character {
    private int MAX_COUNT;

    private String characterName;
    
    public Character(String characterName){
        this.characterName = characterName;
    }

    public String getCharacterName() {
        return characterName;
    }  
    
    public boolean isEmtpy(){
        return MAX_COUNT==0;
    }
}