package com.matt;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
public class Treet{
  private String mAuthor;
  private String mDescription;
  private Date mCreationDate;
  
  public Treet(String author, String description) {
    mAuthor = author;
    mDescription = description;
  }
  
  public String toString() {
    return getAuthor();
  }
  
  
  public String getAuthor() {
    return mAuthor;
  }
  
  public String getDescription() {
    return mDescription;
  }
  
  public Date getCreationDate() {
    return mCreationDate;
  }
  
  public List<String> getWords() {
    String[] words = mDescription.toLowerCase().split("[^\\w#@']+");
    return Arrays.asList(words); 
  }
  
  public List<String> getHashTags() {
    return getWordsPrefixedWith("#");
  }
  
  public List<String> getMentions() {
    return getWordsPrefixedWith("@");
  }
  
  private List<String> getWordsPrefixedWith(String prefix) {
    List<String> results = new ArrayList<String>();
    for (String word : getWords()) {
      if (word.startsWith(prefix)) {
        results.add(word);
      }
    }
    return results;
  }
    
}